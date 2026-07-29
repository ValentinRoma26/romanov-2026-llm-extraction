# Normalizer prompt

**When to use this:** Only if your model's answer came back messy — as prose,
as bullet points, split across several tables, or with columns in a different
order. Some models will not follow the table format no matter how you ask. This
prompt fixes the *layout* without changing any of the *values*, so you can paste
the result straight into the scoring spreadsheet.

**How to use it:** Start a new message to the *same* model, in the *same* chat.
Paste the prompt below, then paste your model's messy answer underneath it where
it says `<PASTE THE MODEL'S ANSWER HERE>`.

---

You are a formatting assistant. Below is a data table that was extracted from a
scientific paper, but its layout is inconsistent. Reformat it into ONE clean
Markdown table and change NOTHING else.

Strict rules:
- Do NOT add, remove, invent, correct, or re-calculate any value. Copy every
  value exactly as written, including units, symbols, and "—" or "None".
- If a value is missing, leave the cell blank. Do not guess.
- Output ONLY the Markdown table. No sentences before or after it. No notes.
- Use exactly these columns, in this order:

| Species | Temp (°C) | Troponin complex | Bound Ca2+ measure | Mg (mM) | Kd (M^-1) | K (µM) | Ref. | Nuance |

- One row per data point. If the original had extra rows, keep them all as
  separate rows.

Here is the answer to reformat:

<PASTE THE MODEL'S ANSWER HERE>
