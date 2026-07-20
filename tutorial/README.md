# Tutorial: benchmark an LLM on scientific data extraction

Welcome! This tutorial teaches you to do — and check — the core task from our
project: **using a large language model (LLM) to pull structured data out of a
scientific paper, and measuring how accurate it is.**

You will work with **one paper** (called **ref13**) the whole way through. By the
end you will have:

1. Seen what a "gold-standard" extraction prompt looks like.
2. Run it yourself and measured your model against our benchmark (**Lab 1**).
3. Learned to make an LLM *design a better prompt for you*, and checked whether
   that beats the gold standard (**Lab 2**).

You do **not** need to write any code. You need a chat LLM (ChatGPT, Claude,
Gemini, whatever you like) and a spreadsheet program (Excel, Google Sheets, or
LibreOffice).

Set aside about **45–60 minutes**.

---

## What's in this folder

| Folder / file | What it is |
|---|---|
| `prompts/1-gold-standard-prompt.md` | The expert, hand-written extraction prompt. |
| `prompts/2-normalizer-prompt.md` | A tidy-up prompt for when a model's answer is messy. |
| `prompts/3-initial-meta-prompt.md` | Lab 2: a prompt that asks an LLM to *design a prompt*. |
| `prompts/4-aggregate-meta-prompt.md` | Lab 2: merges 3 designed prompts into one master prompt. |
| `paper/ref13.pdf` | The paper you extract from. (`paper/README.md` says what it is.) |
| `benchmark/ref13-ground-truth.xlsx` | The correct answer: 6 rows. |
| `scoring/ref13-scoring-template.xlsx` | Where you paste your results and get a score. |
| `feedback/FEEDBACK-TEMPLATE.md` | Please fill this in and send it back. |

> **Copying a prompt file:** open it on GitHub, click the **Raw** button, then
> select-all and copy. That gives you the clean text with no formatting junk.

---

## The task in plain words

The paper reports how strongly **calcium (Ca²⁺)** sticks to a muscle protein
called **troponin**, under different conditions. Each distinct measurement
becomes one row, with these columns:

`Species · Temp (°C) · Troponin complex · Bound Ca2+ measure · Mg (mM) · Kd (M^-1) · K (µM)`

You don't need to understand the biology. Your job is to check whether the LLM
copies the numbers and conditions out of the paper correctly.

---

## Lab 1 — Validate the gold standard

**Goal:** run the expert prompt on ref13 and see how close your model gets to our
benchmark. You will do this **5 times** so you can also see how *consistent* the
model is.

### Step 1 — Open the scoring sheet
Open `scoring/ref13-scoring-template.xlsx` and read the **① Start Here** tab. It
explains the colours: **grey = the benchmark (don't touch)**, **blue = paste your
answer here**, **green = automatic check**, **yellow = optional, your judgement.**

### Step 2 — Get an answer from your model (Run 1)
1. Open a **new chat** in your LLM.
2. Copy **all** of `prompts/1-gold-standard-prompt.md` and paste it in.
3. Attach or upload `paper/ref13.pdf` in the same message. (If your tool can't
   take a PDF, paste the paper's text.)
4. Send it. The model returns a table of rows.

### Step 3 — (only if the answer is messy) Normalise it
If the answer is a clean table, skip this. If it came back as paragraphs, bullet
points, or a weird layout, open `prompts/2-normalizer-prompt.md`, paste it into
the **same chat**, paste the messy answer under it, and send. You'll get a clean
table back. (Some models just won't follow the format first time — this is normal
and is exactly why this step exists.)

### Step 4 — Score it
Go to the **Run 1** tab of the scoring sheet. For each of the 6 grey benchmark
rows, find the matching row in your model's answer (same species, complex,
method, Mg) and paste its 7 values into the blue columns on that line.

- The green columns light up **1** (match) or **0** (miss) automatically, and the
  **Auto /7** column adds them up.
- The auto-check is deliberately strict about text. If it says 0 but the two
  values clearly mean the same thing (e.g. `4` vs `4 °C`), type the corrected row
  score into the yellow **Your /7** column. Otherwise leave yellow blank.

> **Your model will probably output more than 6 rows.** Papers like this also
> report *high-affinity* calcium/magnesium sites, which are **not** part of the 6
> benchmark rows. Only score the 6 that match. If you're curious, note how many
> extra rows appeared in the yellow box under the run — over-reporting is itself
> an interesting result.

### Step 5 — Repeat for Runs 2–5
Do Steps 2–4 four more times, each in a **fresh chat**, filling the **Run 2 …
Run 5** tabs. Same prompt, same paper — you're testing whether the model gives
the same answer every time.

### Step 6 — Read your result
Open the **Scoreboard** tab. You now have:
- **Accuracy** for each run and your **average** — how correct the model is.
- **Consistency %** — how often all 5 runs agreed. A model can be accurate but
  inconsistent, or consistent but wrong. Both matter.

**That's Lab 1.** You've reproduced our task and benchmarked your model.

---

## Lab 2 — Make the LLM design a better prompt

**Goal:** instead of using our expert prompt, get an LLM to *write its own*
extraction prompt — then combine several attempts into one "master" prompt and
check whether it beats the gold standard from Lab 1.

### Step 1 — Generate 3 prompts
Open `prompts/3-initial-meta-prompt.md`. This asks the model to *design an
extraction prompt*. Run it **three separate times in three fresh chats**. Save
each prompt the model gives you: call them **Attempt 1, 2, 3**.

### Step 2 — Merge them into a master prompt
Open `prompts/4-aggregate-meta-prompt.md`, paste your three attempts where it
asks, and run it once. The model returns **one master prompt**.

### Step 3 — Benchmark the master prompt
Now repeat **Lab 1** exactly — but use your **master prompt** instead of the
gold-standard prompt. Make a copy of the scoring sheet (rename it
`ref13-scoring-MASTER.xlsx`) and fill it in the same way, 5 runs.

### Step 4 — Compare
Put the two numbers side by side:

| | Gold-standard prompt (Lab 1) | Your master prompt (Lab 2) |
|---|---|---|
| Average accuracy | ___ % | ___ % |
| Consistency | ___ % | ___ % |

Did the LLM-designed master prompt match, beat, or fall short of the expert
prompt? There's no "right" answer — **the comparison is the point.** It shows you
how far good prompt-engineering can get, and where human expertise still wins.

---

## When you're done

Please fill in `feedback/FEEDBACK-TEMPLATE.md` and send it back — your numbers,
how long it took, and anything that confused you. That feedback is the whole
reason for this tutorial. Thank you!
