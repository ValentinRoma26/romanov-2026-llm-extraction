const STAGES = [
  { id: "prepare", label: "Prepare", title: "Start with the paper" },
  { id: "original", label: "Original", title: "Run the original prompt" },
  { id: "check", label: "Check", title: "Check the first answer" },
  { id: "create", label: "Create", title: "Create three candidates" },
  { id: "combine", label: "Combine", title: "Combine the candidates" },
  { id: "test", label: "Test", title: "Test the master prompt" },
  { id: "finish", label: "Finish", title: "Compare and finish" },
];

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
let navDirection = "forward";
let completedSteps = new Set();

const stageRoot = document.querySelector("#stage");
const progressList = document.querySelector("#progress-list");
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
          <span class="eyebrow">Loading the research materials</span>
          <h1>Preparing your tutorial…</h1>
          <p>The prompts are being read directly from the published source files.</p>
        </div>
      </div>
    </section>
  `;

  try {
    const promptEntries = await Promise.all(
      Object.entries(PROMPT_FILES).map(async ([key, value]) => {
        const response = await fetch(value.path);
        if (!response.ok) {
          throw new Error(`Could not load ${value.title}.`);
        }
        return [key, await response.text()];
      }),
    );
    prompts = Object.fromEntries(promptEntries);

    const benchmarkResponse = await fetch("./benchmark.json");
    if (!benchmarkResponse.ok) {
      throw new Error("Could not load the benchmark table.");
    }
    benchmark = await benchmarkResponse.json();
    bindGlobalEvents();
    render();
  } catch (error) {
    renderLoadError(error);
  }
}

function bindGlobalEvents() {
  backButton.addEventListener("click", () => {
    if (state.stage === 0) return;
    goToStage(state.stage - 1);
  });

  nextButton.addEventListener("click", () => {
    if (!canContinue(state.stage) || state.stage >= STAGES.length - 1) return;
    goToStage(state.stage + 1);
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
  navDirection = target > state.stage ? "forward" : "back";
  state.stage = target;
  state.maxStage = Math.max(state.maxStage, target);
  persist();
  render();
}

function render() {
  renderProgress();

  const renderers = [
    renderPrepare,
    renderOriginal,
    renderCheck,
    renderCreate,
    renderCombine,
    renderTest,
    renderFinish,
  ];

  stageRoot.dataset.direction = navDirection;
  stageRoot.innerHTML = renderers[state.stage]();
  bindStageEvents();
  updateFooter();
  document.title = `${STAGES[state.stage].label} · LLM Extraction Tutorial`;
}

/**
 * The rail is built once and then updated in place, so the connector fill and
 * the completion tick animate between states instead of remounting.
 */
function renderProgress() {
  if (!progressList.children.length) {
    buildProgress();
  }
  updateProgress();
}

function buildProgress() {
  progressList.innerHTML = STAGES.map(
    (stage, index) => `
      <li class="progress-step">
        <button class="progress-button" type="button" data-stage-index="${index}">
          <span class="progress-number">${index + 1}</span>
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

function updateProgress() {
  const nextCompleted = new Set();

  progressList.querySelectorAll(".progress-step").forEach((step, index) => {
    const isCurrent = index === state.stage;
    const isComplete = index < state.maxStage;
    const button = step.querySelector(".progress-button");
    const number = step.querySelector(".progress-number");

    if (isComplete) nextCompleted.add(index);

    step.classList.toggle("is-current", isCurrent);
    step.classList.toggle("is-complete", isComplete);

    // Pop the tick only on the render where the step first turns complete.
    if (isComplete && !completedSteps.has(index)) {
      step.classList.remove("just-completed");
      void step.offsetWidth;
      step.classList.add("just-completed");
    }

    number.textContent = isComplete ? "✓" : String(index + 1);
    button.disabled = index > state.maxStage;
    button.setAttribute(
      "aria-label",
      `${STAGES[index].label}${isComplete ? ", completed" : ""}`,
    );
    if (isCurrent) {
      button.setAttribute("aria-current", "step");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  completedSteps = nextCompleted;
}

function stageHeading(kicker, title, description) {
  return `
    <div class="stage-heading">
      <div>
        <span class="eyebrow">${escapeHTML(kicker)}</span>
        <h1>${escapeHTML(title)}</h1>
        ${description ? `<p>${escapeHTML(description)}</p>` : ""}
      </div>
      <span class="stage-count">Step ${state.stage + 1} of ${STAGES.length}</span>
    </div>
  `;
}

function renderPrepare() {
  return `
    <section class="stage-card" data-testid="stage-prepare">
      ${stageHeading(
        "A no-code scientific extraction exercise",
        "Start with one paper",
        "You will run each extraction prompt once. Additional runs are entirely optional.",
      )}
      <div class="stage-body">
        <div class="prepare-grid">
          <section class="download-card">
            <div>
              <span class="eyebrow">Your source document</span>
              <h2>ref13.pdf</h2>
              <p>
                Use this same scientific paper throughout the tutorial. Download it
                now so it is ready to attach to your LLM.
              </p>
            </div>
            <div>
              <div class="button-row">
                <a
                  class="button button-primary"
                  href="${ASSETS.paper}"
                  download="ref13.pdf"
                  data-testid="download-paper"
                >
                  Download paper
                </a>
                <a
                  class="button button-secondary"
                  href="${ASSETS.paper}"
                  target="_blank"
                  rel="noopener"
                >
                  Preview PDF
                </a>
              </div>
              <div class="info-strip">
                Uploading the paper later sends it to your chosen LLM provider.
                Check that provider’s privacy settings first.
              </div>
            </div>
          </section>

          <section class="panel panel-tinted">
            <span class="eyebrow">Before we begin</span>
            <h2>Which LLM are you using?</h2>
            <p>
              A short name is enough—for example, ChatGPT, Claude, or Gemini.
              The site uses it only to fill a designated prompt placeholder.
            </p>
            <div class="field" style="margin-top: 20px">
              <label for="model-name">LLM name</label>
              <input
                id="model-name"
                data-testid="model-name"
                type="text"
                maxlength="80"
                autocomplete="off"
                placeholder="e.g. ChatGPT"
                value="${escapeHTML(state.model)}"
              />
            </div>
            <ul class="action-list">
              <li>
                <span class="list-number">1</span>
                <span><strong>Download</strong><small>Keep the PDF nearby.</small></span>
              </li>
              <li>
                <span class="list-number">2</span>
                <span><strong>Copy</strong><small>Use the prompts verbatim.</small></span>
              </li>
              <li>
                <span class="list-number">3</span>
                <span><strong>Compare</strong><small>Eyeball the reference values.</small></span>
              </li>
            </ul>
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
        "Lab 1 · Baseline extraction",
        "Run the original prompt",
        "",
      )}
      <div class="stage-body">
        <div class="action-grid">
          <section class="panel">
            <span class="eyebrow">Do these in order</span>
            <h3>One prompt. One run.</h3>
            <ul class="action-list">
              <li>
                <span class="list-number">1</span>
                <span>
                  <strong>Open a fresh chat</strong>
                  <small>No earlier conversation should be present.</small>
                </span>
              </li>
              <li>
                <span class="list-number">2</span>
                <span>
                  <strong>Attach ref13.pdf</strong>
                  <small>Use the paper from the previous step.</small>
                </span>
              </li>
              <li>
                <span class="list-number">3</span>
                <span>
                  <strong>Paste and run</strong>
                  <small>The answer may contain more than six rows.</small>
                </span>
              </li>
            </ul>
            <div class="completion-check">
              <label class="check-label">
                <input
                  id="ran-original"
                  type="checkbox"
                  ${state.ranOriginal ? "checked" : ""}
                />
                <span>I have run the original prompt with the PDF.</span>
              </label>
            </div>
          </section>

          <section class="prompt-card">
            <span class="prompt-icon" aria-hidden="true">&gt;_</span>
            <h2>Original extraction prompt</h2>
            <p>
              This is the research prompt exactly as supplied. Copy it directly,
              or preview the full source first.
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
              <button
                class="button button-secondary"
                type="button"
                data-preview-prompt="original"
              >
                Preview prompt
              </button>
              <a class="button button-quiet" href="${ASSETS.paper}" download="ref13.pdf">
                Download PDF
              </a>
            </div>
            <div class="prompt-meta">
              <span class="tag">Verbatim research material</span>
              <span class="tag">Fresh chat</span>
              <span class="tag">PDF attached</span>
            </div>
            <div class="info-strip">
              Messy answer? You can
              <button
                class="button button-quiet button-compact"
                type="button"
                data-copy-prompt="normalizer"
              >
                copy the optional normalizer
              </button>
              or
              <button
                class="button button-quiet button-compact"
                type="button"
                data-preview-prompt="normalizer"
              >
                preview it
              </button>.
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
        "Lab 1 · Reference check",
        "Check the first answer",
        "Reveal the six benchmark rows only after your LLM has finished.",
      )}
      <div class="stage-body">
        <div class="reference-layout ${state.revealOriginal ? "is-revealed" : ""}">
          <div class="reference-toolbar">
            <div>
              <h2>Reference values</h2>
              <p>
                Six low-affinity K2 rows · 42 values in total · research labels preserved
              </p>
            </div>
            <div class="button-row">
              <label class="score-row" for="original-score">
                <span class="score-suffix">Optional score</span>
                <input
                  id="original-score"
                  class="score-input"
                  type="number"
                  min="0"
                  max="42"
                  inputmode="numeric"
                  value="${escapeHTML(state.originalScore)}"
                  aria-label="Original prompt score out of 42"
                />
                <span class="score-suffix">/ 42</span>
              </label>
            </div>
          </div>
          <div class="reference-surface">
            ${
              state.revealOriginal
                ? benchmarkTable()
                : `
                  <div class="reveal-card">
                    <span class="eyebrow">Avoid seeing the answer early</span>
                    <h3>Has your LLM finished?</h3>
                    <p>
                      Reveal the values, then compare them with the six matching K2
                      rows in your model’s answer.
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
            }
          </div>
          ${
            state.revealOriginal
              ? `
                <div class="lab-transition" data-testid="lab2-transition">
                  <span class="transition-badge">Lab 1 complete</span>
                  <span class="transition-copy">
                    <strong>Next, you will design a master prompt in Lab 2.</strong>
                    <small>Before continuing, turn on web browsing or search in your LLM.</small>
                  </span>
                  <span class="transition-next" aria-hidden="true">Lab 2 →</span>
                </div>
              `
              : ""
          }
        </div>
      </div>
    </section>
  `;
}

function renderCreate() {
  const attemptNumber = state.activeAttempt + 1;
  const completeCount = state.attempts.filter((value) => value.trim()).length;
  return `
    <section class="stage-card" data-testid="stage-create">
      ${stageHeading(
        "Lab 2 · Prompt design",
        "Create three candidate prompts",
        "Turn on web browsing or search in your LLM, then run the same meta-prompt in three fresh chats.",
      )}
      <div class="stage-body">
        <div class="attempt-layout">
          <section class="attempt-sidebar">
            <div>
              <span class="eyebrow">Three independent chats</span>
              <h2>Candidate prompts</h2>
              <p>
                Your pasted prompts stay in this browser. They are needed only to
                build the aggregate prompt in the next step.
              </p>
            </div>
            <div class="attempt-tabs" role="tablist" aria-label="Candidate prompt attempts">
              ${state.attempts
                .map(
                  (value, index) => `
                    <button
                      class="attempt-tab ${index === state.activeAttempt ? "is-current" : ""} ${value.trim() ? "is-complete" : ""}"
                      type="button"
                      role="tab"
                      aria-selected="${index === state.activeAttempt}"
                      data-attempt-tab="${index}"
                    >
                      <strong>Attempt ${index + 1}</strong>
                      <span>${value.trim() ? "Saved ✓" : "Waiting"}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="attempt-progress">${completeCount} of 3 attempts saved</div>
          </section>

          <section class="attempt-editor">
            <div class="attempt-editor-header">
              <div>
                <h3 data-attempt-title>Attempt ${attemptNumber}</h3>
                <p data-attempt-copy>
                  ${escapeHTML(attemptInstruction(attemptNumber))}
                </p>
              </div>
              <span class="tag">${escapeHTML(state.model)}</span>
            </div>
            <div class="button-row">
              <button
                id="copy-initial"
                class="button button-primary"
                type="button"
                data-testid="copy-initial"
              >
                Copy meta-prompt
              </button>
              <button
                id="preview-initial"
                class="button button-secondary"
                type="button"
              >
                Preview source
              </button>
              <span class="tag tag-browsing">Browsing/search on</span>
              <span class="tag">Only “LLM name” is filled</span>
            </div>
            <div class="field">
              <label for="attempt-output">Paste the candidate prompt returned by your LLM</label>
              <textarea
                id="attempt-output"
                data-testid="attempt-output"
                spellcheck="false"
                placeholder="Paste candidate prompt ${attemptNumber} here…"
              ></textarea>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function attemptInstruction(attemptNumber) {
  return `With browsing or search turned on, open fresh chat ${attemptNumber}, run the prompt, and paste back only the prompt your LLM returns.`;
}

function renderCombine() {
  return `
    <section class="stage-card" data-testid="stage-combine">
      ${stageHeading(
        "Lab 2 · Synthesis",
        "Combine the three candidates",
        "The site fills only the three designated attempt placeholders in the unchanged aggregate prompt.",
      )}
      <div class="stage-body">
        <div class="combine-grid">
          <section class="panel panel-warm">
            <span class="eyebrow">Ready to combine</span>
            <h2>Three attempts ready</h2>
            <p>
              Open a fresh chat, paste the completed prompt, and run it.
            </p>
            <ul class="combine-status">
              ${state.attempts
                .map(
                  (_, index) => `
                    <li>
                      <span>Attempt ${index + 1} ✓</span>
                    </li>
                  `,
                )
                .join("")}
            </ul>
            <div class="combine-actions">
              <button id="copy-aggregate" class="button button-primary" type="button">
                Copy completed prompt
              </button>
              <button id="preview-aggregate" class="button button-secondary" type="button">
                Preview completed
              </button>
              <button id="preview-aggregate-source" class="button button-quiet" type="button">
                View source
              </button>
            </div>
          </section>

          <section class="master-editor">
            <h2>Save the master prompt</h2>
            <p>
              Paste the master prompt returned by the LLM. It stays in your browser
              and becomes the prompt you copy in the next step.
            </p>
            <div class="field">
              <label for="master-output">Master prompt returned by your LLM</label>
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
        "Lab 2 · Master extraction",
        "Test the master prompt",
        "Open one final fresh chat, attach the same PDF, paste your master prompt, and run it once.",
      )}
      <div class="stage-body">
        <div class="action-grid">
          <section class="panel">
            <span class="eyebrow">Do these in order</span>
            <h3>Use the same paper</h3>
            <ul class="action-list">
              <li>
                <span class="list-number">1</span>
                <span>
                  <strong>Open a fresh chat</strong>
                  <small>Do not reuse a candidate-design chat.</small>
                </span>
              </li>
              <li>
                <span class="list-number">2</span>
                <span>
                  <strong>Attach ref13.pdf</strong>
                  <small>This keeps the comparison consistent.</small>
                </span>
              </li>
              <li>
                <span class="list-number">3</span>
                <span>
                  <strong>Paste and run</strong>
                  <small>Use the master prompt you just created.</small>
                </span>
              </li>
            </ul>
            <div class="completion-check">
              <label class="check-label">
                <input
                  id="ran-master"
                  type="checkbox"
                  ${state.ranMaster ? "checked" : ""}
                />
                <span>I have run the master prompt with the PDF.</span>
              </label>
            </div>
          </section>

          <section class="prompt-card">
            <span class="prompt-icon" aria-hidden="true">&gt;_</span>
            <h2>Your master prompt</h2>
            <p>
              This is the master prompt you pasted on the previous screen. Copy it
              into the fresh chat without adding other instructions.
            </p>
            <div class="button-row">
              <button id="copy-master" class="button button-primary" type="button">
                Copy master prompt
              </button>
              <button id="preview-master" class="button button-secondary" type="button">
                Preview prompt
              </button>
              <a class="button button-quiet" href="${ASSETS.paper}" download="ref13.pdf">
                Download PDF
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
        "Tutorial complete",
        "Compare and finish",
        "Eyeball the same six rows in the master-prompt answer. Repeating either run is optional.",
      )}
      <div class="stage-body">
        <div class="finish-grid">
          <section class="panel panel-tinted finish-panel">
            <span class="eyebrow">Your two results</span>
            <h2>Your results</h2>
            <p>
              Scores are optional. Use the reference table alongside for a
              quick comparison.
            </p>
            <div class="score-card">
              <span>
                <strong>Original extraction prompt</strong>
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
                  aria-label="Original prompt score out of 42"
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
                  aria-label="Master prompt score out of 42"
                />
                <span class="score-suffix">/ 42</span>
              </label>
            </div>
            <div class="finish-actions button-row">
              <button
                id="restart-tutorial"
                class="button button-primary button-compact"
                type="button"
              >
                Start again
              </button>
            </div>
          </section>

          <section class="reference-surface">
            ${benchmarkTable()}
          </section>
        </div>
      </div>
    </section>
  `;
}

function benchmarkTable() {
  if (!benchmark) return "";
  return `
    <div class="table-wrap">
      <table class="benchmark-table" data-testid="benchmark-table">
        <thead>
          <tr>
            ${benchmark.fields.map((field) => `<th scope="col">${escapeHTML(field)}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${benchmark.rows
            .map(
              (row) => `
                <tr>
                  ${row.map((value) => `<td>${escapeHTML(String(value))}</td>`).join("")}
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

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

  const modelInput = document.querySelector("#model-name");
  modelInput?.addEventListener("input", (event) => {
    state.model = event.target.value;
    persist();
    updateFooter();
  });

  const ranOriginal = document.querySelector("#ran-original");
  ranOriginal?.addEventListener("change", (event) => {
    state.ranOriginal = event.target.checked;
    persist();
    updateFooter();
  });

  document.querySelector("#reveal-original")?.addEventListener("click", () => {
    state.revealOriginal = true;
    persist();
    render();
  });

  const originalScore = document.querySelector("#original-score");
  originalScore?.addEventListener("input", (event) => {
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
      "Displayed verbatim from the repository. The copied version fills only the designated “LLM name” placeholder.",
    );
  });

  document.querySelector("#copy-aggregate")?.addEventListener("click", async (event) => {
    await copyText(
      completedAggregatePrompt(),
      "Completed aggregate prompt copied",
      event.currentTarget,
    );
  });

  document.querySelector("#preview-aggregate")?.addEventListener("click", () => {
    openPreview(
      "Completed aggregate prompt",
      completedAggregatePrompt(),
      "The original template with only the three designated attempt placeholders filled.",
      "Working copy",
    );
  });

  document
    .querySelector("#preview-aggregate-source")
    ?.addEventListener("click", () => {
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
      "Your master prompt",
      state.master,
      "This is the prompt returned by your LLM and saved in this browser.",
      "Generated prompt",
    );
  });

  const ranMaster = document.querySelector("#ran-master");
  ranMaster?.addEventListener("change", (event) => {
    state.ranMaster = event.target.checked;
    persist();
    updateFooter();
  });

  const finalOriginalScore = document.querySelector("#final-original-score");
  finalOriginalScore?.addEventListener("input", (event) => {
    state.originalScore = normalizeScore(event.target.value);
    event.target.value = state.originalScore;
    persist();
  });

  const finalMasterScore = document.querySelector("#final-master-score");
  finalMasterScore?.addEventListener("input", (event) => {
    state.masterScore = normalizeScore(event.target.value);
    event.target.value = state.masterScore;
    persist();
  });

  document.querySelector("#restart-tutorial")?.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Start again and clear the prompts saved in this browser?",
    );
    if (!confirmed) return;
    state = structuredClone(defaultState);
    persist();
    render();
    showToast("Tutorial reset");
  });
}

/**
 * Switching attempts swaps the editor contents in place and cross-fades them,
 * which keeps the surrounding stage still instead of replaying its entrance.
 */
function setActiveAttempt(index) {
  if (index === state.activeAttempt) return;
  state.activeAttempt = index;
  persist();

  const attemptNumber = index + 1;
  const editor = document.querySelector(".attempt-editor");
  const textarea = document.querySelector("#attempt-output");
  const title = document.querySelector("[data-attempt-title]");
  const copy = document.querySelector("[data-attempt-copy]");

  if (title) title.textContent = `Attempt ${attemptNumber}`;
  if (copy) copy.textContent = attemptInstruction(attemptNumber);
  if (textarea) {
    textarea.value = state.attempts[index];
    textarea.placeholder = `Paste candidate prompt ${attemptNumber} here…`;
  }

  document.querySelectorAll("[data-attempt-tab]").forEach((button, tabIndex) => {
    const isCurrent = tabIndex === index;
    button.classList.toggle("is-current", isCurrent);
    button.setAttribute("aria-selected", String(isCurrent));
  });

  if (editor) {
    editor.classList.remove("is-swapping");
    void editor.offsetWidth;
    editor.classList.add("is-swapping");
  }

  updateFooter();
}

function updateAttemptStatus() {
  const completeCount = state.attempts.filter((value) => value.trim()).length;
  const progress = document.querySelector(".attempt-progress");
  if (progress) progress.textContent = `${completeCount} of 3 attempts saved`;

  document.querySelectorAll("[data-attempt-tab]").forEach((button, index) => {
    const complete = Boolean(state.attempts[index].trim());
    button.classList.toggle("is-complete", complete);
    const status = button.querySelector("span");
    if (status) status.textContent = complete ? "Saved ✓" : "Waiting";
  });
}

function updateFooter() {
  backButton.disabled = state.stage === 0;
  const finalStage = state.stage === STAGES.length - 1;
  nextButton.style.visibility = finalStage ? "hidden" : "visible";

  if (!finalStage) {
    nextButton.disabled = !canContinue(state.stage);
    const nextLabel =
      state.stage === 2 && state.revealOriginal
        ? "Begin Lab 2"
        : `Next: ${STAGES[state.stage + 1].label}`;
    nextButton.innerHTML = `${escapeHTML(nextLabel)} <span aria-hidden="true">→</span>`;
  }

  footerHint.textContent = footerMessage(state.stage);
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
    return "Enter the name of your LLM to continue.";
  }
  if (stageIndex === 1 && !state.ranOriginal) {
    return "Confirm that you ran the prompt to continue.";
  }
  if (stageIndex === 2 && !state.revealOriginal) {
    return "Reveal the reference values after the LLM finishes.";
  }
  if (stageIndex === 2 && state.revealOriginal) {
    return "Lab 1 complete. Next begins Lab 2.";
  }
  if (stageIndex === 3 && !state.attempts.every((value) => value.trim())) {
    const saved = state.attempts.filter((value) => value.trim()).length;
    return `Paste all three returned prompts to continue · ${saved}/3 saved.`;
  }
  if (stageIndex === 4 && !state.master.trim()) {
    return "Paste the master prompt returned by your LLM to continue.";
  }
  if (stageIndex === 5 && !state.ranMaster) {
    return "Confirm that you ran the master prompt to continue.";
  }
  if (stageIndex === 6) {
    return "One run is enough. Additional runs are optional.";
  }
  return "Your progress is saved in this browser.";
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
  note = "Displayed verbatim from the repository.",
  kicker = "Source prompt",
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
  flashCopied(trigger);
  showToast(successMessage);
}

function flashCopied(trigger) {
  if (!trigger) return;
  trigger.classList.add("is-copied");
  window.setTimeout(() => trigger.classList.remove("is-copied"), 1400);
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
      stage: Math.max(
        0,
        Math.min(STAGES.length - 1, Number(saved.stage) || 0),
      ),
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
  backButton.disabled = true;
  nextButton.disabled = true;
  footerHint.textContent = "The original GitHub materials are still available.";
  stageRoot.innerHTML = `
    <section class="stage-card">
      ${stageHeading(
        "Unable to load the tutorial",
        "The research files could not be read",
        error instanceof Error ? error.message : "Please reload the page and try again.",
      )}
      <div class="stage-body">
        <section class="panel panel-warm">
          <h2>Use the source folder</h2>
          <p>
            The prompts and paper remain available directly in the GitHub repository.
          </p>
          <div class="button-row" style="margin-top: 18px">
            <a
              class="button button-primary"
              href="https://github.com/ValentinRoma26/romanov-2026-llm-extraction/tree/main/tutorial"
            >
              Open GitHub tutorial
            </a>
            <button class="button button-secondary" type="button" onclick="location.reload()">
              Reload
            </button>
          </div>
        </section>
      </div>
    </section>
  `;
}
