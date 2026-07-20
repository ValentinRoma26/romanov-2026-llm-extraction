# Ca2+ Binding Data Extraction Protocol

## Task Description

Extract calcium binding affinity data for site II of cardiac troponin C from scientific manuscripts. This task requires the extraction of both direct binding constants from in vitro studies (e.g., purified proteins) and apparent affinities from in situ functional assays (e.g., reconstituted skinned muscle fibers). All data must be organized into 9 specific columns following the exact order shown below. Organized as a table.

## Critical Data Extraction Rules

### Primary Data Source Hierarchy

When extracting data, prioritize sources in this order:

1. **Data tables with quantitative results** - Extract EVERY relevant row
2. **Figures with quantitative data** - Extract all data points shown
3. **Results section text** - Extract specific measurements described
4. **Methods section** - Only for clarifying experimental conditions
5. **Abstract/Discussion** - Lowest priority, only if primary sources unavailable

**MANDATORY**: Systematically extract EVERY row from data tables that contains relevant measurements. Each row typically represents a distinct experimental condition requiring separate extraction. Different measurement methods (e.g., fluorescence AND force) constitute SEPARATE data entries even for identical conditions.

### Multiple Measurement Rule

When the same experimental condition is assessed using different techniques (e.g., fluorescence vs force, NMR vs fluorescence, binding vs activity), these are DISTINCT data points and must be extracted as separate entries. Each method provides unique information about Ca2+ binding.

## Required Data Fields

Do not assume or imply.

### Column Specifications (in order)

1. **Species**: List the source of the regulatory components ( TnI TnI /TnT/ TnC TnC ). If components are from different species, list them clearly (e.g., Mouse TnI TnI / Human TnC TnC ).
2. **Temp (°C)**: Experimental temperature
    - Use numerical value in Celsius
    - Use "RT" for room temperature
    - Use "—" if not specified
3. **Troponin complex**: Specific troponin construct
    - NTnC = N-terminal domain of troponin C
    - TnC = Troponin C
    - Include any additional descriptors from the paper
    - Do not include mutants
4. **Bound Ca2+ measure**: Method for measuring calcium binding
    - NMRs = NMR spectroscopy
    - F27W = F27W fluorescence (standard reporter mutation for measurement - acceptable)
    - SC = Scintillation counting
    - IAANS = IAANS fluorescence labeling
    - Force = Force measurement in skinned fibers
    - Use exact abbreviation from list above
5. **Mg (mM)**: Magnesium concentration in millimolar
    - Use "None" if explicitly stated as absent or < 1 × 10^-3 mM
    - Use "—" if not reported
    - Use numerical value if specified (e.g., "3", "4")
6. **Kd (M^-1)**: Association constant in M^-1
    - Report in scientific notation (e.g., 4 × 10^5)
    - This is 1/dissociation constant
    - Calculate: Ka = 1/KD where KD is in molar
7. **K (μM)**: Dissociation constant in micromolar
    - Direct KD value converted to μM
    - If given in M, multiply by 10^6
8. **Ref.**: Reference number in parentheses (e.g., "(18)")
9. **Nuance.** Why this is a distinct data point/entry
    - Must clearly distinguish between multiple entries from same paper
    - Specify the measurement method if multiple methods used
    - Include pH, temperature variations if they differ
    - Note if this is force vs fluorescence measurement
    - Explain what biological/methodological question this addresses
    - List the year this paper was published
    - If you find and resolve a discrepancy between sources, add a note about the conflict
    - In bold, specifically mention if the measurement is a baseline (this is critical for later filtering)
- I want extra columns, side by side with original columns that quote exactly where the information came from in the article. This is to make it verifiable.

## Correct Examples

### Example 1 - Multiple Measurement Methods from Same Paper

```
Text from manuscript:
"Table 1: Ca2+ binding parameters for bovine cardiac TnC at 21°C
Methods: Fluorescence (F27W) and force measurements in skinned fibers
Buffer: 100 mM KCl, 10 mM imidazole, pH 7.0, no added Mg2+

Measurement Type    pCa50
Fluorescence       5.75 ± 0.03
Force              5.42 ± 0.02"

```

**Correct Extraction (2 separate entries required):**
Entry 1:

- Species: Bovine
- Temp (°C): 21
- Troponin complex: TnC
- Bound Ca2+ measure: F27W
- Mg (mM): None
- Kd (M^-1): 5.6 × 10^5
- K (μM): 1.8
- Ref.: (17)
- Nuance: Fluorescence measurement directly monitoring Ca2+ binding to site II. Published 2001.

Entry 2:

- Species: Bovine
- Temp (°C): 21
- Troponin complex: TnC
- Bound Ca2+ measure: Force
- Mg (mM): None
- Kd (M^-1): 2.6 × 10^5
- K (μM): 3.8
- Ref.: (17)
- Nuance: Force measurement in skinned fibers, functional readout of Ca2+ activation. Lower apparent affinity than fluorescence due to additional regulatory factors. Published 2001.

### Example 2 - Complete Table Extraction

```
Text from manuscript:
"Table 2: pH effects on human cardiac TnC Ca2+ binding (IAANS-labeled, 25°C, 3 mM Mg2+)
pH     KD (μM)
6.5    12.0
7.0    5.5
7.5    4.8
8.0    6.2"

```

**Correct Extraction (4 entries - one for each row):**
[All 4 pH conditions must be extracted as separate entries, not just pH 7.0]

### Example 3 - Standard Methods and Results

```
Text from manuscript:
"Methods: Ca2+ binding to bovine cardiac TnC was measured at 21°C using steady-state
fluorescence spectroscopy with the F27W mutant. Experiments were performed in buffer
without added magnesium.

Results: The dissociation constant (KD) for Ca2+ binding to site II was determined
to be 5.3 ± 0.5 μM, corresponding to an association constant (Ka) of 1.9 × 10^5 M^-1."

```

**Correct Extraction:**

- Species: Bovine
- Temp (°C): 21
- Troponin complex: TnC
- Bound Ca2+ measure: F27W
- Mg (mM): —
- Kd (M^-1): 1.9 × 10^5
- K (μM): 5.3
- Ref.: (17)
- Nuance: Direct binding measurement using F27W reporter. Published 1999.

## Common Errors to Avoid

### Error Example 1 - Missing Data from Tables

```
Text from manuscript:
"Table 1 shows binding parameters under three conditions..."
Table 1:
Condition    Fluorescence pCa50    Force pCa50
Control      5.8                   5.5
+Drug A      6.1                   5.9
+Drug B      5.7                   5.4

```

**Incorrect:** Extracting only the control condition
**Correct:** Extract all 6 measurements (3 conditions × 2 methods)

### Error Example 2 - Treating Multiple Methods as One

```
Text from manuscript:
"Both NMR and fluorescence measurements yielded KD values of 3.2 μM and 2.8 μM respectively"

```

**Incorrect:** Averaging the values or choosing one
**Correct:** Create two separate entries, one for NMR (KD = 3.2 μM) and one for fluorescence (KD = 2.8 μM)

### Error Example 3 - Constant Type Confusion

```
Text from manuscript:
"Bovine cardiac TnC was studied at 4°C using scintillation counting. The association
constant (Ka) for Ca2+ binding was 4.0 μM in buffer containing 4 mM MgCl2."

```

**Incorrect Extraction:**

- Kd (M^-1): 4.0 × 10^6 [WRONG - incorrectly converted]
- K (μM): 0.25 [WRONG - wrong calculation]

**Error:** Association constants are in M^-1, not μM. Text likely meant KD = 4.0 μM, so Ka = 2.5 × 10^5 M^-1.

### Error Example 4 - Consistency

```jsx
The data summarized in Table 2 were acquired using skinned mouse cardiac fiber bundles. The Tn exchange procedure was carried out by incubating the fibers in reconstitution solution for 120 min at room temperature. Ca 2 + 2+ -force relations were then determined by titrating free Ca 2 + Ca 2+ . The EC 50 EC 50  for fibers reconstituted with cTnI-cTnC at pH 7.0 was 1.34 μ M 1.34μM. The specific temperature of the subsequent force titration was not noted.
```

**Bad version (violates rules)**

Species: Mouse cTnI / Human cTnC

Temp (°C): RT

Troponin complex: cTnI / cTnC

Bound Ca2+ measure: Force

Mg (mM): 1 (Free)

Kd (M^-1): 7.46×1057.46×105

K (μM): 1.34

INCORRECT: Temperature was incorrectly assumed based on the reconstitution conditions.

**Good Version (Adheres to the Strict Rule)**

Species: Mouse cTnI / Human cTnC

Temp (°C): —

Troponin complex: cTnI / cTnC

Bound Ca2+ measure: Force

Mg (mM): 1 (Free)

Kd (M^-1): 7.46×1057.46×105

K (μM): 1.34

Ref.: (This Paper)

CORRECT: The temperature for the final force measurement was not specified, thus marked "—". 

## Critical Relationships

**Constant Conversions:**

- Ka (association) = 1/KD (dissociation)
- If KD in M: Ka = 1/KD (M^-1)
- If KD in μM: Ka = 10^6/KD (M^-1)
- To convert M to μM: multiply by 10^6

**Watch for Terminology:**

- KD, Kd, KD = dissociation constant
- Ka, KA, ka = association constant
- "Binding affinity" often means KD
- "Binding constant" could be either - check units

## Special Cases

**Magnesium Reporting:**

- "No added Mg" → use "—"
- "Mg-free buffer" → use "None"
- "<1 mM Mg" → use "None"
- Specific concentration → use value

**Temperature Reporting:**

- "Room temperature" → "RT"
- "Ambient temperature" → "RT"
- Specific value → use number
- Not mentioned → "—"

**Interpreting Half-Maximal Binding Values:**

- For the purpose of this data extraction task, the experimentally determined concentration for half-maximal binding (or half-saturation) is to be treated as the dissociation constant (K or KD). This value is often reported as a pCa, which requires conversion.

**Example Scenario - Handling pCa for Half-Maximal Binding**

```
Text from manuscript:
"Analysis of the Ca2+ titration curve for human cardiac TnC at 25°C revealed that the pCa
for half-maximal saturation of the regulatory site was 6.2."

```

**Correct Interpretation:**

- Treat the pCa at half-maximal binding as the basis for calculating K and Kd.
- **Step 1:** Convert pCa to Molar concentration: `K (M) = 10^(-pCa) = 10^(-6.2) = 6.31 × 10⁻⁷ M`
- **Step 2:** Convert Molar to micromolar: `K (μM) = 6.31 × 10⁻⁷ * 10⁶ = 0.63 μM`
- **Step 3:** Calculate the association constant: `Kd (M⁻¹) = 1 / K (M) = 1 / (6.31 × 10⁻⁷) = 1.58 × 10⁶ M⁻¹`

## Data Reconciliation Rules

When extracting data, if you encounter conflicting information within the document, you must prioritize sources in the following order of precedence:

1. Final Summary Tables: Trust the conditions listed in the captions or footnotes of tables that summarize the key quantitative findings.
2. Results Section Text: Use values mentioned directly in the Results section text that describes the final calculated data point.
3. Figure/Table Legends: Use conditions described in the specific legend for the figure or table showing the raw data.
4. General Methods Section: Use the general methods as the lowest priority, as these may describe a range of conditions not specific to every single experiment.

important: add extra column next to each measurement (species) (species-quote) for all measurements, that quotes exactly where the information came from in the article. Direct quote, not a brief. This is to make it verifiable.