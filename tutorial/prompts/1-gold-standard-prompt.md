# Expert extraction prompt for ref13

You will receive the scientific paper called ref13 as a PDF. Extract exactly
six calcium-binding measurements from Table I (PDF page 3, journal page 11690).

## Target measurements

Use the low-affinity **K2** association-constant column for these complexes:

- TnC;
- TnI·TnC; and
- Reconstituted Tn.

Create two rows for each complex: the paper's no-added-Mg condition and its
4 mM Mg condition.

Exclude the high-affinity K1 values, other binding sites, figures, and the
Native Tn row.

## Output

Return exactly one Markdown table with these seven columns in this order:

| Species | Temp (°C) | Troponin complex | Measurement | Mg (mM) | Ka (M^-1) | Kd (µM) |
|---|---:|---|---|---:|---:|---:|

Use exactly one measurement per row and output no text before or after the
table.

## Canonical values

- **Species:** use `Bovine`.
- **Temp (°C):** use the binding experiment's temperature as a number without
  units.
- **Troponin complex:** use exactly `TnC`, `TnI·TnC`, or `Reconstituted Tn`.
- **Measurement:** use `SC`. The paper used equilibrium dialysis and measured
  radioactivity by scintillation counting.
- **Mg (mM):** use `None` for the paper's no-added-Mg/contaminating-Mg condition
  and `4` for 4 mM MgCl2.
- **Ka (M^-1):** copy the mean K2 association constant. Omit the `±` uncertainty
  and units from the cell. Use scientific notation such as `2.5 × 10^5`.
- **Kd (µM):** calculate the reciprocal in micromolar:
  `Kd (µM) = 1,000,000 / Ka (M^-1)`.

Do not guess. If a required value cannot be supported by the paper, use `—`.
Before answering, verify that the table has exactly six rows, the three named
complexes each occur twice, and every row has seven cells.
