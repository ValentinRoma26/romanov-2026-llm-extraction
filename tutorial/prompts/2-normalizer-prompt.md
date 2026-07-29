# Normalizer prompt

Use this only when an extraction answer is not one clean table. Paste this
prompt into the same chat, followed by the messy answer at the placeholder.

---

Reformat the extraction answer below into one Markdown table.

Rules:

- Preserve every data value exactly. Do not add, remove, correct, calculate, or
  guess values.
- Keep every original data row.
- If a value is missing, leave its cell blank.
- Use exactly these seven columns in this order:

| Species | Temp (°C) | Troponin complex | Measurement | Mg (mM) | Ka (M^-1) | Kd (µM) |
|---|---:|---|---|---:|---:|---:|

Output only the table.

Extraction answer:

<PASTE THE MODEL'S ANSWER HERE>
