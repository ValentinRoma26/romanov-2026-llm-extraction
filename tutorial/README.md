# Tutorial: test an LLM on scientific data extraction

This no-code tutorial shows how to use a large language model (LLM) to extract
structured data from one scientific paper and check the answer against a known
benchmark.

You will:

1. run a short, expert-written extraction prompt (**Lab 1**);
2. score the answer in a spreadsheet; and
3. ask an LLM to design a new prompt, then compare it with the expert prompt
   (**Lab 2**).

No prompt-writing or biology experience is required.

## Choose a path

- **Quick path — about 20–30 minutes:** do one run in each lab. This is best for
  learning the workflow.
- **Full comparison — about 90–120 minutes:** do five independent runs in each
  lab. This lets you measure both accuracy and consistency.

The full comparison uses 14 model calls: five in Lab 1, three prompt-design
attempts, one aggregation call, and five in Lab 2.

## What you need

- a chat LLM that accepts PDF attachments;
- Excel or LibreOffice; and
- the files in this `tutorial` folder.

The workbook is designed for on-screen use. Google Sheets may import it, but is
not part of this tutorial's compatibility check.

> **Privacy note:** uploading a PDF sends it to the LLM provider. Use only
> documents you are allowed to share and check the provider's data settings.

## Four terms used in this tutorial

- **LLM:** the chat model you are testing.
- **Prompt:** the instructions you give the model.
- **Meta-prompt:** a prompt that asks the model to write another prompt.
- **Fresh chat:** a new conversation with no messages from an earlier run. Fresh
  chats keep one run from influencing the next.

## Files

| File | Purpose |
|---|---|
| `paper/ref13.pdf` | The paper used in both labs. |
| `paper/README.md` | Citation and DOI for the paper. |
| `prompts/1-gold-standard-prompt.md` | Expert extraction prompt for Lab 1. |
| `prompts/2-normalizer-prompt.md` | Optional formatting-only prompt. |
| `prompts/3-initial-meta-prompt.md` | Generates one candidate prompt for Lab 2. |
| `prompts/4-aggregate-meta-prompt.md` | Combines three candidates into one master prompt. |
| `benchmark/ref13-ground-truth.xlsx` | The six correct rows. |
| `scoring/ref13-scoring-template.xlsx` | Workbook that scores five runs. |
| `feedback/FEEDBACK-TEMPLATE.md` | Short feedback form. |

On GitHub, open a prompt file and click **Raw** before copying it. This avoids
copying page controls or formatting.

## The task in plain language

Troponin is a muscle protein complex. The paper measures how strongly calcium
binds to it under several conditions. One measurement becomes one table row.

The seven scored fields are:

| Field | What it means in this tutorial |
|---|---|
| Species | Animal source; use `Bovine`. |
| Temp (°C) | Experimental temperature; use a number without units. |
| Troponin complex | Use the paper's labels: `TnC`, `TnI·TnC`, or `Reconstituted Tn`. |
| Measurement | How binding was measured; use `SC` for scintillation counting. |
| Mg (mM) | Use `None` for the paper's no-added-Mg condition or `4` for 4 mM MgCl₂. |
| Ka (M^-1) | Association constant. Larger means stronger binding. |
| Kd (µM) | Dissociation constant. Smaller means stronger binding. |

`Ka` and `Kd` are reciprocals. When `Ka` is in M⁻¹:

`Kd (µM) = 1,000,000 ÷ Ka (M⁻¹)`

For example, `Ka = 2.5 × 10^5 M⁻¹` gives `Kd = 4 µM`.

### Where the values are

The six target rows are in **Table I on PDF page 3** (journal page 11690).
Use the low-affinity **K2** column for:

- TnC;
- TnI·TnC; and
- Reconstituted Tn.

Each complex has two rows: the no-added-Mg condition and 4 mM Mg. Ignore the
high-affinity K1 values and the single Native Tn row.

## Before you start

1. Open `scoring/ref13-scoring-template.xlsx`.
2. Read the **① Start Here** tab.
3. Record the model name, version, and date in your notes.
4. If your LLM exposes a temperature or randomness setting, keep it unchanged
   for every run and record it.

The workbook colours mean:

- **grey:** benchmark; do not edit;
- **blue:** paste the model's seven values;
- **green:** automatic field-by-field check; and
- **yellow:** optional manual row score if the automatic check misses an
  equivalent value.

## Lab 1 — Test the expert prompt

### 1. Get Run 1

1. Open a fresh chat.
2. Copy all of `prompts/1-gold-standard-prompt.md`.
3. Paste the prompt and attach `paper/ref13.pdf` in the same message.
4. Send the message.

The answer should be one table with six rows and seven columns. The first row
should look like this:

| Species | Temp (°C) | Troponin complex | Measurement | Mg (mM) | Ka (M^-1) | Kd (µM) |
|---|---:|---|---|---:|---:|---:|
| Bovine | 4 | TnC | SC | None | 2.5 × 10^5 | 4 |

This example shows the format; use the model's answer when scoring the run.

### 2. Tidy the layout only if needed

Skip this step if the answer is already a clean table.

If it is prose, bullets, or several tables, paste
`prompts/2-normalizer-prompt.md` into the same chat, followed by the model's
answer. The normalizer changes the layout only; it does not correct the data.

### 3. Score the run

1. Open the **Run 1** tab.
2. Match each model row to the grey benchmark row with the same complex and Mg
   condition.
3. Paste the seven model values into the blue cells on that row.
4. Read the green checks and the **Auto /7** row score.
5. Use the yellow **Your /7** cell only when a model value clearly means the
   same thing but the automatic check gives 0. Enter a whole number from 0 to 7.

The automatic check accepts common formatting differences such as `4` versus
`4 °C`, `×` versus `x`, and values with their units attached.

If the model returns extra high-affinity K1 rows, do not score them. You can
record the number of extra rows in the yellow box below the table.

### 4. Finish the chosen path

- **Quick path:** continue to Lab 2 after Run 1.
- **Full comparison:** repeat the extraction in four fresh chats and fill
  **Run 2** through **Run 5**.

The **Scoreboard** shows `Incomplete` until all 42 blue cells for a run are
filled. A completed run can legitimately score 0/42. Consistency appears only
after all five runs are complete.

## Lab 2 — Ask the LLM to design a prompt

Lab 2 tests an LLM-designed prompt on exactly the same paper, target rows,
seven-field schema, and scoring rules as Lab 1. It does not require web access.

### 1. Generate three candidate prompts

Run `prompts/3-initial-meta-prompt.md` in three fresh chats. Save the three
prompts as Attempt 1, Attempt 2, and Attempt 3.

For the quick path, one candidate is enough: use it directly as the master
prompt and skip the aggregation step.

### 2. Create one master prompt

Open a fresh chat. Paste `prompts/4-aggregate-meta-prompt.md`, then replace its
three placeholders with your attempts. The result should be one concise master
prompt.

### 3. Test the master prompt

1. Make a copy of the scoring workbook and name it
   `ref13-scoring-MASTER.xlsx`.
2. Open a fresh chat.
3. Paste the master prompt and attach the same `paper/ref13.pdf`.
4. Score the answer exactly as in Lab 1.
5. For the full comparison, repeat this in five fresh chats.

### 4. Compare

| Result | Expert prompt | Master prompt |
|---|---:|---:|
| Average accuracy | ___ % | ___ % |
| Consistency (five-run path only) | ___ % | ___ % |

One paper cannot prove that a prompt is generally better. Treat the result as a
small, controlled comparison and note what you would test next.

## Troubleshooting

- **The model cannot read PDFs:** use another PDF-capable chat model. Copying
  all text from this two-column paper is error-prone and is not recommended for
  a first attempt.
- **The answer has more than six rows:** score only Table I's six K2 rows for
  TnC, TnI·TnC, and Reconstituted Tn.
- **A formula shows an error:** confirm you are using the current scoring
  workbook and reopen it in Excel or LibreOffice so formulas recalculate.
- **A correct-looking value scores 0:** check whether the model used the K1
  column, retained a `±` uncertainty instead of the mean, or used a different
  complex. If it is only a harmless format difference, use the yellow override.

## When you finish

Fill in `feedback/FEEDBACK-TEMPLATE.md`. Include the model version, chosen path,
time taken, scores, and the first step that felt unclear.
