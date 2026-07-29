# Tutorial: benchmark an LLM on scientific data extraction

This no-code tutorial shows how to use a large language model (LLM) to extract
structured data from one scientific paper and check the answer against a known
benchmark.

You will:

1. run the research project's original extraction prompt (**Lab 1**);
2. score the answer in a spreadsheet; and
3. use the project's original meta-prompts to generate and test a master prompt
   (**Lab 2**).

No prompt-writing or biology experience is required.

> **Research integrity:** the four files in `prompts/` are research materials
> used in the associated article. Use them verbatim. Do not shorten, correct,
> modernise, or otherwise edit them. The guidance below explains how to use and
> score their output without changing the prompts themselves.

## Choose a path

- **Quick path — about 20–30 minutes:** do one extraction run in each lab. This
  is best for learning the workflow.
- **Full comparison — about 90–120 minutes:** do five independent extraction
  runs in each lab. This lets you measure accuracy and consistency.

The full comparison uses at least 14 model calls: five in Lab 1, three
prompt-design attempts, one aggregation call, and five in Lab 2.

## What you need

- a chat LLM that accepts PDF attachments;
- Excel or LibreOffice; and
- the files in this `tutorial` folder.

The workbook is designed for on-screen use. Google Sheets may import it, but is
not part of this tutorial's compatibility check.

> **Privacy note:** uploading a PDF sends it to the LLM provider. Use only
> documents you are allowed to share and check the provider's data settings.

## Four terms used here

- **LLM:** the chat model you are testing.
- **Prompt:** the instructions you give the model.
- **Meta-prompt:** a prompt that asks the model to write another prompt.
- **Fresh chat:** a new conversation with no earlier messages. Fresh chats keep
  one run from influencing the next.

## Files

| File | Purpose |
|---|---|
| `paper/ref13.pdf` | The paper used in both labs. |
| `paper/README.md` | Citation and DOI for the paper. |
| `prompts/1-gold-standard-prompt.md` | Original research extraction prompt for Lab 1. |
| `prompts/2-normalizer-prompt.md` | Original formatting prompt for messy output. |
| `prompts/3-initial-meta-prompt.md` | Original prompt-design meta-prompt for Lab 2. |
| `prompts/4-aggregate-meta-prompt.md` | Original aggregation meta-prompt for Lab 2. |
| `benchmark/ref13-ground-truth.xlsx` | The six scored benchmark rows. |
| `scoring/ref13-scoring-template.xlsx` | Workbook that scores five runs. |
| `feedback/FEEDBACK-TEMPLATE.md` | Short feedback form. |

On GitHub, open a prompt file and click **Raw** before copying it. This avoids
copying page controls or formatting.

## Understand the scored fields

The research prompt asks for additional reference, nuance, and quotation
columns. The tutorial workbook scores only these first seven data fields:

| Prompt/workbook label | What it means in this research schema |
|---|---|
| Species | Animal source. |
| Temp (°C) | Experimental temperature. |
| Troponin complex | Protein or protein complex tested. |
| Bound Ca2+ measure | How calcium binding was measured. |
| Mg (mM) | Magnesium condition. |
| Kd (M^-1) | Association constant in M⁻¹. |
| K (µM) | Reciprocal dissociation constant in µM. |

### Important notation note

The research schema uses `Kd (M^-1)` for the association constant and `K (µM)`
for the dissociation constant. These labels are preserved because the prompts
are study materials used in the article.

In conventional biochemical notation, an association constant in M⁻¹ is
usually called `Ka`, while a dissociation constant in µM is usually called
`Kd`. Do not rename the columns when running or scoring this tutorial.

The two values are reciprocals:

`K (µM) = 1,000,000 ÷ Kd (M⁻¹)`

For example, the research schema records `2.5 × 10^5 M⁻¹` and its reciprocal
`4 µM`.

## Where the six benchmark rows come from

The benchmark uses the low-affinity **K2** measurements in **Table I on PDF
page 3** (journal page 11690) for:

- TnC;
- TnI·TnC; and
- Reconstituted Tn.

Each complex has two benchmark rows: the paper's no-added-Mg condition and
4 mM Mg. The paper and model may contain additional measurements, but those are
not part of this six-row tutorial benchmark.

## Before you start

1. Open `scoring/ref13-scoring-template.xlsx`.
2. Read the **① Start Here** tab.
3. Record the model name, version, date, and whether it can browse the web.
4. If the model exposes a temperature or randomness setting, keep it unchanged
   for every run and record it.

The workbook colours mean:

- **grey:** benchmark; do not edit;
- **blue:** paste the model's seven scored values;
- **green:** automatic field-by-field check; and
- **yellow:** optional manual row score if the automatic check misses an
  equivalent value.

## Lab 1 — Test the original extraction prompt

### 1. Get Run 1

1. Open a fresh chat.
2. Copy all of `prompts/1-gold-standard-prompt.md` without changing it.
3. Paste the prompt and attach `paper/ref13.pdf` in the same message.
4. Send the message.

The prompt may produce more than six rows and includes fields that the workbook
does not score. That is expected.

### 2. Tidy the layout only if needed

Skip this step if the answer is already a usable table.

If the answer is prose, bullets, or several tables, paste the unchanged
`prompts/2-normalizer-prompt.md` into the same chat, followed by the model's
answer. The normalizer changes layout, not correctness.

### 3. Score the run

1. Open the **Run 1** tab.
2. Find the six rows that correspond to the benchmark's K2 measurements.
3. Match each model row to the grey row with the same complex and Mg condition.
4. Paste only the seven scored fields into the blue cells. Do not paste `Ref.`,
   `Nuance`, calculation, or quote columns into the scorer.
5. Read the green checks and the **Auto /7** row score.
6. Use the yellow **Your /7** cell only when a value clearly means the same
   thing but the automatic check gives 0. Enter a whole number from 0 to 7.

The checker accepts common presentation differences, including attached units,
`×` versus `x`, `2.5e5`, Unicode superscripts, `TnC-TnI` versus `TnI·TnC`, and
`Tn` versus `Reconstituted Tn`.

If the model returns additional high-affinity or otherwise out-of-scope rows,
do not score them. Record their number in the yellow box if useful.

### 4. Finish the chosen path

- **Quick path:** continue to Lab 2 after Run 1.
- **Full comparison:** repeat the extraction in four fresh chats and fill
  **Run 2** through **Run 5**.

The **Scoreboard** shows `Incomplete` until all 42 blue cells for a run are
filled. A completed run can legitimately score 0/42. Consistency appears only
after all five runs are complete.

## Lab 2 — Use the original meta-prompts

Lab 2 uses the two research meta-prompts exactly as provided.

### 1. Generate three candidate prompts

Run the unchanged `prompts/3-initial-meta-prompt.md` in three fresh chats. Save
the results as Attempt 1, Attempt 2, and Attempt 3.

This meta-prompt asks the model to look online. If the model cannot browse, do
not rewrite the prompt; record that limitation with your results.

For the quick path, one candidate is enough. Use it directly as the master
prompt and skip aggregation.

### 2. Create one master prompt

Open a fresh chat. Paste the unchanged
`prompts/4-aggregate-meta-prompt.md`, then replace only its three attempt
placeholders with the generated prompts.

### 3. Test the master prompt

1. Make a copy of the scoring workbook called
   `ref13-scoring-MASTER.xlsx`.
2. Open a fresh chat.
3. Paste the master prompt and attach the same `paper/ref13.pdf`.
4. From the answer, paste only the same seven scored data fields into the
   workbook.
5. For the full comparison, repeat this in five fresh chats.

### 4. Compare

| Result | Original extraction prompt | Master prompt |
|---|---:|---:|
| Average accuracy | ___ % | ___ % |
| Consistency (five-run path only) | ___ % | ___ % |

One paper cannot establish that a prompt is generally better. Treat the result
as a small comparison within the research design.

## Troubleshooting

- **The model cannot read PDFs:** use another PDF-capable chat model. Copying
  all text from this two-column paper is error-prone.
- **The answer has more than six rows:** score only the benchmark's six K2 rows.
- **The answer has many quote columns:** keep them in the model output, but
  paste only the seven scored fields into the workbook.
- **A formula shows an error:** confirm you have the current workbook and reopen
  it in Excel or LibreOffice so formulas recalculate.
- **A correct-looking value scores 0:** use the yellow manual score and record
  the mismatch in the feedback form. A retained `±` uncertainty may require a
  manual override.

## When you finish

Fill in `feedback/FEEDBACK-TEMPLATE.md`. Include the model version, browsing
ability, chosen path, time taken, scores, and the first unclear step.
