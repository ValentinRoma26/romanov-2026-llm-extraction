const STAGES = [
  { id: "prepare", label: "Set up", phase: "Prep" },
  { id: "original", label: "Run", phase: "Lab 1" },
  { id: "check", label: "Check", phase: "Lab 1" },
  { id: "create", label: "Draft", phase: "Lab 2" },
  { id: "combine", label: "Merge", phase: "Lab 2" },
  { id: "test", label: "Re-run", phase: "Lab 2" },
  { id: "finish", label: "Compare", phase: "Result" },
];

const PHASES = ["Prep", "Lab 1", "Lab 2", "Result"];

const PROMPT_FILES = {
  original: {
    title: "Original extraction prompt",
    path: "./assets/prompts/1-gold-standard-prompt.md",
  },
  normalizer: {
    title: "Optional normalizer prompt",
    path: "./assets/prompts/2-normalizer-prompt.md",
  },
  initial: {
    title: "Initial meta-prompt",
    path: "./assets/prompts/3-initial-meta-prompt.md",
  },
  aggregate: {
    title: "Aggregate meta-prompt",
    path: "./assets/prompts/4-aggregate-meta-prompt.md",
  },
};

const ASSETS = {
  paper: "./assets/ref13.pdf",
  repository:
    "https://github.com/ValentinRoma26/romanov-2026-llm-extraction/tree/main/tutorial",
};

const STORAGE_KEY = "romanov-tutorial-progress-v1";

const defaultState = {
  stage: 0,
  maxStage: 0,
  model: "",
  ranOriginal: false,
  revealOriginal: false,
  originalScore: "",
  activeAttempt: 0,
  attempts: ["", "", ""],
  master: "",
  ranMaster: false,
  masterScore: "",
};

let state = loadState();
let prompts = {};
let benchmark = null;
let currentPreview = "";
let toastTimer = null;

const stageRoot = document.querySelector("#stage");
const progressList = document.querySelector("#progress-list");
const phaseRow = document.querySelector("#phase-row");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const footerHint = document.querySelector("#footer-hint");
const previewDialog = document.querySelector("#preview-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogKicker = document.querySelector("#dialog-kicker");
const dialogNote = document.querySelector("#dialog-note");
const dialogContent = document.querySelector("#dialog-content");
const dialogCopy = document.querySelector("#dialog-copy");
const closeDialog = document.querySelector("#close-dialog");
const toast = document.querySelector("#toast");

init();

async function init() {
  stageRoot.innerHTML = `
    <section class="stage-card" data-testid="loading-stage">
      <div class="stage-heading">
        <div>
          <span class="eyebrow">Prep</span>
          <h1>Reading the prompts</h1>
          <p>The four prompts load straight from the repository, unedited.</p>
        </div>
      </div>
    </section>
  `;

  try {
    const promptEntries = await Promise.all(
      Object.entries(PROMPT_FILES).map(async ([key, value]) => {
        const response = await fetch(value.path);
        if (!response.ok) {
          throw new Error(`Could not read ${value.title}.`);
        }
        return [key, await response.text()];
      }),
    );
    prompts = Object.fromEntries(promptEntries);

    const benchmarkResponse = await fetch("./benchmark.json");
    if (!benchmarkResponse.ok) {
      throw new Error("Could not read the reference table.");
    }
    benchmark = await benchmarkResponse.json();
    buildRail();
    bindGlobalEvents();
    render();
  } catch (error) {
    renderLoadError(error);
  }
}

function bindGlobalEvents() {
  backButton.addEventListener("click", () => goToStage(state.stage - 1));
  nextButton.addEventListener("click", () => {
    if (canContinue(state.stage)) goToStage(state.stage + 1);
  });

  closeDialog.addEventListener("click", () => previewDialog.close());
  previewDialog.addEventListener("click", (event) => {
    if (event.target === previewDialog) previewDialog.close();
  });
  dialogCopy.addEventListener("click", async () => {
    await copyText(currentPreview, "Prompt copied", dialogCopy);
  });
}

function goToStage(index) {
  const target = Math.max(0, Math.min(STAGES.length - 1, index));
  if (target === state.stage) return;
  state.stage = target;
  state.maxStage = Math.max(state.maxStage, target);
  persist();
  render();
}

function render() {
  const renderers = [
    renderPrepare,
    renderOriginal,
    renderCheck,
    renderCreate,
    renderCombine,
    renderTest,
    renderFinish,
  ];

  stageRoot.innerHTML = renderers[state.stage]();
  updateRail();
  bindStageEvents();
  updateFooter();
  document.title = `${STAGES[state.stage].label} · Ca²⁺/TnC extraction assay`;
}

/* Rail ------------------------------------------------------------------ */

/* Built once, then updated in place so the titration fill actually
   transitions between steps rather than remounting at its final width. */
function buildRail() {
  phaseRow.innerHTML = PHASES.map(
    (phase) =>
      `<span class="phase-label" data-phase="${escapeHTML(phase)}">${escapeHTML(phase)}</span>`,
  ).join("");

  progressList.innerHTML = STAGES.map(
    (stage, index) => `
      <li class="progress-step">
        <button class="progress-button" type="button" data-stage-index="${index}">
          <span class="progress-dot"></span>
          <span class="progress-label">${escapeHTML(stage.label)}</span>
        </button>
      </li>
    `,
  ).join("");

  progressList.querySelectorAll("[data-stage-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.stageIndex);
      if (index <= state.maxStage) goToStage(index);
    });
  });
}

function updateRail() {
  const currentPhase = STAGES[state.stage].phase;

  phaseRow.querySelectorAll(".phase-label").forEach((label) => {
    label.classList.toggle("is-active", label.dataset.phase === currentPhase);
  });

  progressList.querySelectorAll(".progress-step").forEach((step, index) => {
    const isCurrent = index === state.stage;
    const isComplete = index < state.maxStage;
    const button = step.querySelector(".progress-button");

    step.classList.toggle("is-current", isCurrent);
    step.classList.toggle("is-complete", isComplete);
    button.disabled = index > state.maxStage;
    button.setAttribute(
      "aria-label",
      `${STAGES[index].phase}, ${STAGES[index].label}${isComplete ? ", done" : ""}`,
    );
    if (isCurrent) {
      button.setAttribute("aria-current", "step");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

/* Stage scaffolding ----------------------------------------------------- */

function stageHeading(title, description) {
  const stage = STAGES[state.stage];
  const kicker =
    stage.phase === "Prep" || stage.phase === "Result"
      ? stage.phase
      : `${stage.phase} · ${stage.label}`;
  return `
    <div class="stage-heading">
      <div>
        <span class="eyebrow">${escapeHTML(kicker)}</span>
        <h1>${escapeHTML(title)}</h1>
        ${description ? `<p>${escapeHTML(description)}</p>` : ""}
      </div>
      <span class="step-tally"><b>${state.stage + 1}</b>of ${STAGES.length} steps</span>
    </div>
  `;
}

/* The reference table, redacted or resolved. Cells carry their column index
   so the reveal wipes left to right, the way a readout prints. */
function assayGrid({ revealed, showReveal, showHandoff, compact }) {
  if (!benchmark) return "";
  const valueCount = benchmark.rows.length * benchmark.fields.length;

  return `
    <div class="assay ${revealed ? "is-revealed" : ""} ${compact ? "assay-compact" : ""}" id="assay-grid">
      ${
        showReveal
          ? `
            <div class="reveal-bar">
              <p>
                Compare these with the six matching K2 rows in your model's
                answer. Reveal them once it has finished.
              </p>
              <button
                id="reveal-original"
                class="button button-primary"
                type="button"
                data-testid="reveal-reference"
              >
                Reveal reference values
              </button>
            </div>
          `
          : ""
      }
      <div class="assay-frame">
        <table class="assay-table" data-testid="benchmark-table">
          <thead>
            <tr>
              ${benchmark.fields
                .map(
                  (field) =>
                    `<th class="assay-head" scope="col">${withSuperscripts(field)}</th>`,
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${benchmark.rows
              .map(
                (row) => `
                  <tr>
                    ${row
                      .map(
                        (value, column) => `
                          <td class="assay-cell" style="--col: ${column}">
                            <span>${withSuperscripts(value)}</span>
                          </td>
                        `,
                      )
                      .join("")}
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="assay-caption">
        <span>${escapeHTML(benchmark.source)}</span>
        <span>
          <b>${valueCount}</b> values · ${benchmark.rows.length} rows ×
          ${benchmark.fields.length} columns
        </span>
      </div>
      ${
        showHandoff
          ? `
            <div class="handoff" data-testid="lab2-transition">
              <span>
                <strong>Lab 1 done. In Lab 2 you write your own prompt.</strong>
                <small>Turn on web browsing or search in your model before continuing.</small>
              </span>
              <span class="tag tag-on">Browsing needed</span>
            </div>
          `
          : ""
      }
    </div>
  `;
}

/* Stages ---------------------------------------------------------------- */

function renderPrepare() {
  return `
    <section class="stage-card" data-testid="stage-prepare">
      ${stageHeading(
        "Set up the run",
        "One paper, one model, two prompts. Everything you type stays in this browser.",
      )}
      <div class="stage-body">
        <div class="prepare-grid">
          <section class="panel">
            <span class="eyebrow">The paper</span>
            <h2 class="panel-title">ref13.pdf</h2>
            <p class="panel-lede">
              Calcium and magnesium binding to bovine cardiac troponin, measured
              by scintillation counting at 4 °C. You will extract one table from
              it, twice.
            </p>
            <div class="button-row" style="margin-top: 18px">
              <a
                class="button button-primary"
                href="${ASSETS.paper}"
                download="ref13.pdf"
                data-testid="download-paper"
              >
                Download the paper
              </a>
              <a
                class="button button-secondary"
                href="${ASSETS.paper}"
                target="_blank"
                rel="noopener"
              >
                Open in a new tab
              </a>
            </div>
            <div class="note">
              Attaching the paper sends it to your model's provider. Check their
              data settings first.
            </div>
            <p class="citation">
              <b>Holroyde, M. J., Robertson, S. P., Johnson, J. D., Solaro, R. J.,
              &amp; Potter, J. D. (1980).</b>
              The calcium and magnesium binding sites on cardiac troponin and
              their role in the regulation of myofibrillar adenosine
              triphosphatase. <i>Journal of Biological Chemistry, 255</i>(24),
              11688–11693.
            </p>
          </section>

          <section class="panel panel-sunk">
            <span class="eyebrow">What you are extracting</span>
            <h2 class="panel-title">Table I, six low-affinity rows</h2>
            <p class="panel-lede">
              This is the answer, held back. Every cell counts for one point, so
              a perfect run scores 42. You reveal it in step 3.
            </p>
            <div class="field" style="margin-top: 18px">
              <label for="model-name">Which model are you testing?</label>
              <input
                id="model-name"
                data-testid="model-name"
                type="text"
                maxlength="80"
                autocomplete="off"
                placeholder="ChatGPT, Claude, Gemini…"
                value="${escapeHTML(state.model)}"
              />
            </div>
            <div style="margin-top: 16px; min-height: 0; display: flex">
              ${assayGrid({ revealed: false, showReveal: false, showHandoff: false, compact: true })}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderOriginal() {
  return `
    <section class="stage-card" data-testid="stage-original">
      ${stageHeading(
        "Run the original prompt",
        "The prompt the research team used, unchanged. Run it once.",
      )}
      <div class="stage-body">
        <div class="action-grid">
          <section class="panel">
            <span class="eyebrow">Protocol</span>
            <ol class="protocol">
              <li>
                <span>
                  <strong>Open a fresh chat</strong>
                  <small>No earlier messages, so one run cannot influence the next.</small>
                </span>
              </li>
              <li>
                <span>
                  <strong>Attach ref13.pdf</strong>
                  <small>The same paper you downloaded in step 1.</small>
                </span>
              </li>
              <li>
                <span>
                  <strong>Paste the prompt and run it</strong>
                  <small>Expect more than six rows back. That is fine.</small>
                </span>
              </li>
            </ol>
            <div class="completion-check">
              <label class="check-label">
                <input id="ran-original" type="checkbox" ${state.ranOriginal ? "checked" : ""} />
                <span>I ran the original prompt with the paper attached.</span>
              </label>
            </div>
          </section>

          <section class="prompt-panel">
            <span class="prompt-sigil">PROMPT 1 / 4</span>
            <h2 class="panel-title">Original extraction prompt</h2>
            <p class="panel-lede">
              Research material. Copy it as it is — shortening or tidying it
              changes what you are measuring.
            </p>
            <div class="button-row">
              <button
                class="button button-primary"
                type="button"
                data-copy-prompt="original"
                data-testid="copy-original"
              >
                Copy prompt
              </button>
              <button class="button button-secondary" type="button" data-preview-prompt="original">
                Read it first
              </button>
              <a class="button button-quiet" href="${ASSETS.paper}" download="ref13.pdf">
                Download the paper
              </a>
            </div>
            <div class="prompt-meta">
              <span class="tag">Fresh chat</span>
              <span class="tag">PDF attached</span>
              <span class="tag">Verbatim</span>
            </div>
            <div class="note">
              If the answer comes back messy, the normalizer prompt tidies the
              formatting without changing values.
              <span class="button-row" style="margin-top: 8px">
                <button
                  class="button button-secondary button-compact"
                  type="button"
                  data-copy-prompt="normalizer"
                >
                  Copy normalizer
                </button>
                <button
                  class="button button-quiet button-compact"
                  type="button"
                  data-preview-prompt="normalizer"
                >
                  Read it
                </button>
              </span>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderCheck() {
  return `
    <section class="stage-card" data-testid="stage-check">
      ${stageHeading(
        "Check the answer",
        "Score one point per matching cell. Scoring is optional — the comparison is the point.",
      )}
      <div class="stage-body" style="display: grid; grid-template-rows: auto minmax(0, 1fr); gap: 14px">
        <div class="reveal-bar" style="padding: 0; justify-content: flex-end">
          <label class="score-row" for="original-score">
            <span class="score-suffix">Values matched</span>
            <input
              id="original-score"
              class="score-input"
              type="number"
              min="0"
              max="42"
              inputmode="numeric"
              value="${escapeHTML(state.originalScore)}"
              aria-label="Values matched by the original prompt, out of 42"
            />
            <span class="score-suffix">/ 42</span>
          </label>
        </div>
        ${assayGrid({
          revealed: state.revealOriginal,
          showReveal: true,
          showHandoff: true,
        })}
      </div>
    </section>
  `;
}

function renderCreate() {
  const attemptNumber = state.activeAttempt + 1;
  return `
    <section class="stage-card" data-testid="stage-create">
      ${stageHeading(
        "Write three candidates",
        "Run the same meta-prompt in three separate chats, with browsing on, and keep each prompt it writes.",
      )}
      <div class="stage-body">
        <div class="attempt-layout">
          <section class="attempt-sidebar">
            <div>
              <span class="eyebrow">Three chats</span>
              <p class="panel-lede">
                Three independent runs, so one lucky answer does not decide the
                result.
              </p>
            </div>
            <div class="attempt-tabs" role="tablist" aria-label="Candidate prompts">
              ${state.attempts
                .map(
                  (value, index) => `
                    <button
                      class="attempt-tab ${index === state.activeAttempt ? "is-current" : ""} ${value.trim() ? "is-saved" : ""}"
                      type="button"
                      role="tab"
                      aria-selected="${index === state.activeAttempt}"
                      data-attempt-tab="${index}"
                    >
                      <strong>Candidate ${index + 1}</strong>
                      <span>${value.trim() ? "saved" : "empty"}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="attempt-progress">${savedCount()} / 3 saved</div>
          </section>

          <section class="attempt-editor">
            <div class="attempt-editor-header">
              <div>
                <span class="eyebrow">Candidate <span data-attempt-number>${attemptNumber}</span></span>
                <p data-attempt-copy>${escapeHTML(attemptInstruction(attemptNumber))}</p>
              </div>
              <span class="tag">${escapeHTML(state.model)}</span>
            </div>
            <div class="button-row">
              <button id="copy-initial" class="button button-primary" type="button" data-testid="copy-initial">
                Copy meta-prompt
              </button>
              <button id="preview-initial" class="button button-secondary" type="button">
                Read it first
              </button>
              <span class="tag tag-on">Browsing on</span>
            </div>
            <div class="field field-fill">
              <label for="attempt-output">Paste the prompt your model wrote</label>
              <textarea
                id="attempt-output"
                data-testid="attempt-output"
                spellcheck="false"
                placeholder="Paste candidate ${attemptNumber} here…"
              ></textarea>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderCombine() {
  return `
    <section class="stage-card" data-testid="stage-combine">
      ${stageHeading(
        "Merge the candidates",
        "The aggregate prompt is unchanged — your three candidates drop into its three placeholders.",
      )}
      <div class="stage-body">
        <div class="combine-grid">
          <section class="panel">
            <span class="eyebrow">Ready</span>
            <h2 class="panel-title">Three candidates in</h2>
            <ul class="combine-status">
              ${state.attempts
                .map(
                  (_, index) => `
                    <li><i></i> Candidate ${index + 1} saved</li>
                  `,
                )
                .join("")}
            </ul>
            <div class="combine-actions">
              <button id="copy-aggregate" class="button button-primary" type="button">
                Copy the merged prompt
              </button>
              <button id="preview-aggregate" class="button button-secondary" type="button">
                Read the merged prompt
              </button>
              <button id="preview-aggregate-source" class="button button-quiet" type="button">
                Read the template
              </button>
            </div>
            <div class="note">
              Run it in a fresh chat. What comes back is your master prompt.
            </div>
          </section>

          <section class="master-editor">
            <div>
              <span class="eyebrow">Keep the result</span>
              <h2 class="panel-title">Your master prompt</h2>
            </div>
            <p class="panel-lede" style="margin: 0">
              Paste what your model returns. You will run it against the paper in
              the next step.
            </p>
            <div class="field field-fill">
              <label for="master-output">Master prompt</label>
              <textarea
                id="master-output"
                data-testid="master-output"
                spellcheck="false"
                placeholder="Paste the master prompt here…"
              ></textarea>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderTest() {
  return `
    <section class="stage-card" data-testid="stage-test">
      ${stageHeading(
        "Run the master prompt",
        "Same paper, fresh chat, one run — so the two results can be compared.",
      )}
      <div class="stage-body">
        <div class="action-grid">
          <section class="panel">
            <span class="eyebrow">Protocol</span>
            <ol class="protocol">
              <li>
                <span>
                  <strong>Open a fresh chat</strong>
                  <small>Not one of the three you used to write candidates.</small>
                </span>
              </li>
              <li>
                <span>
                  <strong>Attach ref13.pdf</strong>
                  <small>The same paper, so only the prompt has changed.</small>
                </span>
              </li>
              <li>
                <span>
                  <strong>Paste your master prompt and run it</strong>
                  <small>Add nothing else to the message.</small>
                </span>
              </li>
            </ol>
            <div class="completion-check">
              <label class="check-label">
                <input id="ran-master" type="checkbox" ${state.ranMaster ? "checked" : ""} />
                <span>I ran the master prompt with the paper attached.</span>
              </label>
            </div>
          </section>

          <section class="prompt-panel">
            <span class="prompt-sigil">YOUR PROMPT</span>
            <h2 class="panel-title">Master prompt</h2>
            <p class="panel-lede">
              The prompt your model wrote in the last step, saved in this browser.
            </p>
            <div class="button-row">
              <button id="copy-master" class="button button-primary" type="button">
                Copy master prompt
              </button>
              <button id="preview-master" class="button button-secondary" type="button">
                Read it
              </button>
              <a class="button button-quiet" href="${ASSETS.paper}" download="ref13.pdf">
                Download the paper
              </a>
            </div>
            <div class="prompt-meta">
              <span class="tag">Fresh chat</span>
              <span class="tag">Same PDF</span>
              <span class="tag">One run</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderFinish() {
  return `
    <section class="stage-card" data-testid="stage-finish">
      ${stageHeading(
        "Compare the two runs",
        "Same paper, same reference, two prompts. Score the master run against the table.",
      )}
      <div class="stage-body">
        <div class="finish-grid">
          <section class="panel">
            <span class="eyebrow">Result</span>
            <h2 class="panel-title">Values matched</h2>
            <p class="panel-lede">
              One point per cell, out of 42. Leave them blank if you only
              eyeballed the comparison.
            </p>
            <div style="margin-top: 16px">
              <div class="score-card">
                <span>
                  <strong>Original prompt</strong>
                  <small>Lab 1</small>
                </span>
                <label class="score-row" for="final-original-score">
                  <input
                    id="final-original-score"
                    class="score-input"
                    type="number"
                    min="0"
                    max="42"
                    inputmode="numeric"
                    value="${escapeHTML(state.originalScore)}"
                    aria-label="Values matched by the original prompt, out of 42"
                  />
                  <span class="score-suffix">/ 42</span>
                </label>
              </div>
              <div class="score-card">
                <span>
                  <strong>Master prompt</strong>
                  <small>Lab 2</small>
                </span>
                <label class="score-row" for="final-master-score">
                  <input
                    id="final-master-score"
                    class="score-input"
                    type="number"
                    min="0"
                    max="42"
                    inputmode="numeric"
                    value="${escapeHTML(state.masterScore)}"
                    aria-label="Values matched by the master prompt, out of 42"
                  />
                  <span class="score-suffix">/ 42</span>
                </label>
              </div>
            </div>
            <div class="completion-check">
              <button id="restart-tutorial" class="button button-secondary button-compact" type="button">
                Clear everything and start over
              </button>
            </div>
          </section>

          ${assayGrid({ revealed: true, showReveal: false, showHandoff: false })}
        </div>
      </div>
    </section>
  `;
}

/* Events ---------------------------------------------------------------- */

function bindStageEvents() {
  document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      const key = button.dataset.copyPrompt;
      await copyText(prompts[key], `${PROMPT_FILES[key].title} copied`, button);
    });
  });

  document.querySelectorAll("[data-preview-prompt]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.previewPrompt;
      openPreview(PROMPT_FILES[key].title, prompts[key]);
    });
  });

  document.querySelector("#model-name")?.addEventListener("input", (event) => {
    state.model = event.target.value;
    persist();
    updateFooter();
  });

  document.querySelector("#ran-original")?.addEventListener("change", (event) => {
    state.ranOriginal = event.target.checked;
    persist();
    updateFooter();
  });

  document.querySelector("#reveal-original")?.addEventListener("click", revealReference);

  document.querySelector("#original-score")?.addEventListener("input", (event) => {
    state.originalScore = normalizeScore(event.target.value);
    event.target.value = state.originalScore;
    persist();
  });

  document.querySelectorAll("[data-attempt-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveAttempt(Number(button.dataset.attemptTab));
    });
  });

  const attemptOutput = document.querySelector("#attempt-output");
  if (attemptOutput) {
    attemptOutput.value = state.attempts[state.activeAttempt];
    attemptOutput.addEventListener("input", (event) => {
      state.attempts[state.activeAttempt] = event.target.value;
      persist();
      updateAttemptStatus();
      updateFooter();
    });
  }

  document.querySelector("#copy-initial")?.addEventListener("click", async (event) => {
    await copyText(filledInitialPrompt(), "Meta-prompt copied", event.currentTarget);
  });

  document.querySelector("#preview-initial")?.addEventListener("click", () => {
    openPreview(
      "Initial meta-prompt",
      prompts.initial,
      "Shown exactly as stored. The copy you take fills in only the model name.",
    );
  });

  document.querySelector("#copy-aggregate")?.addEventListener("click", async (event) => {
    await copyText(completedAggregatePrompt(), "Merged prompt copied", event.currentTarget);
  });

  document.querySelector("#preview-aggregate")?.addEventListener("click", () => {
    openPreview(
      "Merged prompt",
      completedAggregatePrompt(),
      "The template with your three candidates dropped into its placeholders.",
      "Your copy",
    );
  });

  document.querySelector("#preview-aggregate-source")?.addEventListener("click", () => {
    openPreview("Aggregate meta-prompt", prompts.aggregate);
  });

  const masterOutput = document.querySelector("#master-output");
  if (masterOutput) {
    masterOutput.value = state.master;
    masterOutput.addEventListener("input", (event) => {
      state.master = event.target.value;
      persist();
      updateFooter();
    });
  }

  document.querySelector("#copy-master")?.addEventListener("click", async (event) => {
    await copyText(state.master, "Master prompt copied", event.currentTarget);
  });

  document.querySelector("#preview-master")?.addEventListener("click", () => {
    openPreview(
      "Master prompt",
      state.master,
      "Written by your model and saved in this browser.",
      "Your prompt",
    );
  });

  document.querySelector("#ran-master")?.addEventListener("change", (event) => {
    state.ranMaster = event.target.checked;
    persist();
    updateFooter();
  });

  document.querySelector("#final-original-score")?.addEventListener("input", (event) => {
    state.originalScore = normalizeScore(event.target.value);
    event.target.value = state.originalScore;
    persist();
  });

  document.querySelector("#final-master-score")?.addEventListener("input", (event) => {
    state.masterScore = normalizeScore(event.target.value);
    event.target.value = state.masterScore;
    persist();
  });

  document.querySelector("#restart-tutorial")?.addEventListener("click", () => {
    const confirmed = window.confirm(
      "This clears your model name, all three candidates, your master prompt and both scores. Continue?",
    );
    if (!confirmed) return;
    state = structuredClone(defaultState);
    persist();
    render();
    showToast("Cleared");
  });
}

/* The reveal is the one moment worth animating, so it toggles a class on the
   live grid instead of re-rendering into its finished state. */
function revealReference() {
  const grid = document.querySelector("#assay-grid");
  state.revealOriginal = true;
  persist();
  grid?.classList.add("is-revealed");
  updateFooter();
}

function setActiveAttempt(index) {
  if (index === state.activeAttempt) return;
  state.activeAttempt = index;
  persist();

  const attemptNumber = index + 1;
  const textarea = document.querySelector("#attempt-output");
  const number = document.querySelector("[data-attempt-number]");
  const copy = document.querySelector("[data-attempt-copy]");

  if (number) number.textContent = String(attemptNumber);
  if (copy) copy.textContent = attemptInstruction(attemptNumber);
  if (textarea) {
    textarea.value = state.attempts[index];
    textarea.placeholder = `Paste candidate ${attemptNumber} here…`;
  }

  document.querySelectorAll("[data-attempt-tab]").forEach((button, tabIndex) => {
    const isCurrent = tabIndex === index;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-selected", String(isCurrent));
  });

  updateFooter();
}

function updateAttemptStatus() {
  const progress = document.querySelector(".attempt-progress");
  if (progress) progress.textContent = `${savedCount()} / 3 saved`;

  document.querySelectorAll("[data-attempt-tab]").forEach((button, index) => {
    const saved = Boolean(state.attempts[index].trim());
    button.classList.toggle("is-saved", saved);
    const status = button.querySelector("span");
    if (status) status.textContent = saved ? "saved" : "empty";
  });
}

function updateFooter() {
  backButton.disabled = state.stage === 0;
  const finalStage = state.stage === STAGES.length - 1;
  nextButton.style.visibility = finalStage ? "hidden" : "visible";

  if (!finalStage) {
    nextButton.disabled = !canContinue(state.stage);
    nextButton.innerHTML = `${escapeHTML(nextLabel())} <span aria-hidden="true">→</span>`;
  }

  footerHint.textContent = footerMessage(state.stage);
}

function nextLabel() {
  if (state.stage === 2) return "Start Lab 2";
  return `Next: ${STAGES[state.stage + 1].label}`;
}

function canContinue(stageIndex) {
  const conditions = [
    Boolean(state.model.trim()),
    state.ranOriginal,
    state.revealOriginal,
    state.attempts.every((value) => value.trim()),
    Boolean(state.master.trim()),
    state.ranMaster,
    true,
  ];
  return conditions[stageIndex];
}

function footerMessage(stageIndex) {
  if (stageIndex === 0 && !state.model.trim()) {
    return "Name the model you are testing to continue.";
  }
  if (stageIndex === 1 && !state.ranOriginal) {
    return "Tick the box once you have run the prompt.";
  }
  if (stageIndex === 2 && !state.revealOriginal) {
    return "Reveal the reference values once your model has finished.";
  }
  if (stageIndex === 2) {
    return "Turn on browsing or search before starting Lab 2.";
  }
  if (stageIndex === 3 && !state.attempts.every((value) => value.trim())) {
    return `Paste all three candidates to continue — ${savedCount()} of 3 saved.`;
  }
  if (stageIndex === 4 && !state.master.trim()) {
    return "Paste the master prompt your model wrote.";
  }
  if (stageIndex === 5 && !state.ranMaster) {
    return "Tick the box once you have run the master prompt.";
  }
  if (stageIndex === 6) {
    return "One run each is enough. Repeat only if you want to.";
  }
  return "Saved in this browser.";
}

/* Helpers --------------------------------------------------------------- */

function savedCount() {
  return state.attempts.filter((value) => value.trim()).length;
}

function attemptInstruction(attemptNumber) {
  return `With browsing or search on, open chat ${attemptNumber}, run the meta-prompt, and paste back only the prompt your model writes.`;
}

/* Renders 2.5 x 10^5 as 2.5 × 10⁵ and Kd (M^-1) as Kd (M⁻¹). Presentation
   only — the stored research values are untouched. */
function withSuperscripts(value) {
  return escapeHTML(String(value))
    .replace(/\s*x\s*10\^(-?\d+)/gi, " × 10<sup>$1</sup>")
    .replace(/\^(-?\d+)/g, "<sup>$1</sup>")
    .replace(/Ca2\+/g, "Ca<sup>2+</sup>")
    .replace(/<sup>-/g, "<sup>−");
}

function filledInitialPrompt() {
  return prompts.initial.replace("Model: LLM name", `Model: ${state.model.trim()}`);
}

function completedAggregatePrompt() {
  const placeholders = [
    "<PASTE ATTEMPT 1 HERE>",
    "<PASTE ATTEMPT 2 HERE>",
    "<PASTE ATTEMPT 3 HERE>",
  ];

  return placeholders.reduce((workingCopy, placeholder, index) => {
    if (!workingCopy.includes(placeholder)) {
      throw new Error(`The aggregate prompt is missing ${placeholder}.`);
    }
    return workingCopy.replace(placeholder, state.attempts[index].trim());
  }, prompts.aggregate);
}

function openPreview(
  title,
  text,
  note = "Shown exactly as stored in the repository.",
  kicker = "Research material",
) {
  currentPreview = text;
  dialogTitle.textContent = title;
  dialogKicker.textContent = kicker;
  dialogNote.textContent = note;
  dialogContent.textContent = text;
  previewDialog.showModal();
  dialogContent.scrollTop = 0;
}

async function copyText(text, successMessage, trigger) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
  if (trigger) {
    trigger.classList.add("is-copied");
    window.setTimeout(() => trigger.classList.remove("is-copied"), 1200);
  }
  showToast(successMessage);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function normalizeScore(value) {
  if (value === "") return "";
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return "";
  return String(Math.max(0, Math.min(42, parsed)));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...saved,
      stage: Math.max(0, Math.min(STAGES.length - 1, Number(saved.stage) || 0)),
      maxStage: Math.max(
        0,
        Math.min(STAGES.length - 1, Number(saved.maxStage) || 0),
      ),
      attempts:
        Array.isArray(saved.attempts) && saved.attempts.length === 3
          ? saved.attempts.map((value) => String(value ?? ""))
          : ["", "", ""],
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLoadError(error) {
  progressList.innerHTML = "";
  phaseRow.innerHTML = "";
  backButton.disabled = true;
  nextButton.disabled = true;
  footerHint.textContent = "";
  stageRoot.innerHTML = `
    <section class="stage-card">
      <div class="stage-heading">
        <div>
          <span class="eyebrow">Prep</span>
          <h1>The prompts did not load</h1>
          <p>${escapeHTML(error instanceof Error ? error.message : "The files could not be read.")}</p>
        </div>
      </div>
      <div class="stage-body">
        <section class="panel" style="max-width: 60ch">
          <p class="panel-lede">
            Reload the page to try again. If it keeps failing, the same prompts
            and paper are in the repository and work without this site.
          </p>
          <div class="button-row" style="margin-top: 18px">
            <button class="button button-primary" type="button" onclick="location.reload()">
              Reload the page
            </button>
            <a class="button button-secondary" href="${ASSETS.repository}">
              Open the tutorial folder
            </a>
          </div>
        </section>
      </div>
    </section>
  `;
}
