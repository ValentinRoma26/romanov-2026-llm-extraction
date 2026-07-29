# Aggregate meta-prompt (Lab 2, step 2)

Replace the three placeholders with the candidate prompts from step 1. Run this
once in a fresh chat.

---

Combine the three candidate prompts below into one clear master extraction
prompt for a beginner.

Keep the most precise instruction when candidates disagree. Remove repetition,
examples that are unrelated to ref13, web-browsing instructions, and extra
fields. The master prompt should be concise; it does not need to be longer than
the candidates.

The master prompt must preserve this fixed contract:

- exactly six K2 rows from ref13 Table I;
- TnC, TnI·TnC, and Reconstituted Tn;
- no-added-Mg and 4 mM Mg conditions;
- exactly these seven columns:
  `Species | Temp (°C) | Troponin complex | Measurement | Mg (mM) | Ka (M^-1) | Kd (µM)`;
- `Ka` is the association constant in M⁻¹;
- `Kd` is the dissociation constant in µM;
- `Kd (µM) = 1,000,000 / Ka (M^-1)`; and
- no guessing.

Return only the finished master prompt. Do not ask questions.

## Attempt 1

<PASTE ATTEMPT 1 HERE>

## Attempt 2

<PASTE ATTEMPT 2 HERE>

## Attempt 3

<PASTE ATTEMPT 3 HERE>
