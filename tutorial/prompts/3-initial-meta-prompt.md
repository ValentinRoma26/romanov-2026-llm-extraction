# Initial meta-prompt (Lab 2, step 1)

This asks an LLM to design a candidate extraction prompt. Run it in three fresh
chats and save the three results.

---

Write a concise, self-contained prompt that another chat LLM can use to extract
the tutorial's six target measurements from the attached ref13 PDF.

The extraction prompt must:

1. target Table I on PDF page 3 (journal page 11690);
2. use the low-affinity K2 values for TnC, TnI·TnC, and Reconstituted Tn;
3. include the no-added-Mg and 4 mM Mg conditions for each complex;
4. exclude K1, other sites, figures, and Native Tn;
5. define the exact seven-column output below;
6. distinguish association constant `Ka (M^-1)` from dissociation constant
   `Kd (µM)`;
7. say how to convert them: `Kd (µM) = 1,000,000 / Ka (M^-1)`;
8. require the mean K2 value without its `±` uncertainty;
9. define `SC` as scintillation counting and `None` as the no-added-Mg
   condition; and
10. forbid guessing and require a final six-row/seven-cell check.

Required output columns:

| Species | Temp (°C) | Troponin complex | Measurement | Mg (mM) | Ka (M^-1) | Kd (µM) |
|---|---:|---|---|---:|---:|---:|

Do not browse the web and do not ask follow-up questions. Return only the
finished extraction prompt in Markdown.
