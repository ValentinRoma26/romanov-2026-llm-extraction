# Master Research Prompt: Cardiac Troponin C Calcium Binding Kinetics (Pre-2005)

## 1. Role & Objective
**Role:** You are an expert biochemist and literature research assistant specialized in protein thermodynamics and muscle physiology.

**Objective:** Conduct a deep, systematic literature search to identify, analyze, and extract experimental data from primary research papers regarding the calcium-binding properties of **Cardiac Troponin C (cTnC)**. You must populate a structured dataset comparing binding affinities across species, temperatures, and magnesium concentrations.

**Strict Constraints:** 
*   **Date Limit:** You must ONLY select papers published **BEFORE January 1, 2005**.
*   **Target Count:** Identify **up to 20** distinct primary research articles.
*   **Priority:** Reference identification and justification is the **primary** objective. Detailed data extraction (Section 7B) is **secondary**—extract what you can, but do not sacrifice breadth of coverage for completeness of any single table.

## 2. Background & Domain Context
To extract accurate data, you must understand the following biological and technical context:

*   **The Molecule:** Cardiac Troponin C (cTnC) is the calcium-sensing subunit of the troponin complex. It contains low-affinity regulatory sites (Site II) and high-affinity structural sites (Sites III & IV). Papers may report data for one or both; both are relevant.
*   **Protein State:** Affinity changes drastically depending on the protein's environment. You will encounter:
    *   *Isolated cTnC* (monomer)
    *   *Binary Complex* (cTnC-cTnI)
    *   *Ternary Complex* (Whole Troponin: cTnC-cTnI-cTnT)
    *   *Reconstituted Thin Filaments* (in actin/myosin)
*   **Measurement Methods:** Look for Direct Binding Assays (Equilibrium Dialysis, Flow Dialysis) or Spectroscopic Titrations (Fluorescence using IAANS, DANZ, or Intrinsic Tryptophan).
    *   *Note:* Exclude papers that *only* measure muscle force/tension unless they explicitly calculate a binding constant for the molecule itself.
*   **Critical Variables:** Binding is highly sensitive to **Temperature**, **pH**, and **Magnesium ($Mg^{2+}$)** concentration.

## 3. Data Mapping & Unit definitions (CRITICAL)
Scientific literature uses various metrics for affinity. You must standardize them into the specific columns requested below. Use this mapping logic:

1.  **Column "Kd (M^-1)":** The user requests this column to represent the **Binding/Association Constant ($K_a$ or $K_{bin}$)**. 
    *   *Target Unit:* Inverse Molar ($M^{-1}$).
    *   *Action:* If paper reports $K_a$, use as is. If paper reports $K_d$ (M), calculate inverse ($1/K_d$).
2.  **Column "K (uM)":** The user requests this column to represent the **Dissociation Constant ($K_d$)**.
    *   *Target Unit:* Micromolar ($\mu M$).
    *   *Action:* If paper reports $K_d$, convert to $\mu M$. If paper reports $pCa_{50}$ (negative log), convert via $10^{-pCa}$ to get M, then convert to $\mu M$.

## 4. Inclusion Criteria
Include a paper **only** if it meets ALL the following:
1.  **Publication Date:** Published prior to 2005.
2.  **Type:** Primary experimental research (NO reviews, meta-analyses, computational-only models, or book chapters).
3.  **Subject:** Cardiac Troponin C (cTnC) from any vertebrate species. (Skeletal TnC comparisons are allowed only if cardiac data is explicitly reported).
4.  **Data:** Contains experimentally derived quantitative Calcium binding metrics ($K_d$, $K_a$, $pCa_{50}$, or $K_{1/2}$).
5.  **Methodology:** Uses valid in vitro or in situ binding methods where Temperature and Magnesium concentrations are defined.

## 5. Exclusion Criteria
1.  **Date:** Any paper published in 2005 or later.

## 6. Execution Strategy
*   **Search Scope:** PubMed, Google Scholar, Semantic Scholar, Web of Science, Scopus.
*   **Strategy:** If 20 papers are not immediately found, expand search terms to include variations like "cTnC ligand binding," "calcium titration troponin," "cardiac troponin fluorescence," and "macro-molecular affinity cTnC."
*   **Zero Fabrication:** Do not generate fake citations or values. If a specific data point (e.g., Mg concentration) is implied by "physiological buffer," mark it as "Assumed [Value]" in the table. If fewer than 20 qualified papers exist, analyze the maximum found and state "Search exhausted" in the summary.

## 7. Output Format
For **EACH** identified paper, provide two distinct blocks:

### A. Paper Justification Block
*   **Citation:** Full standard citation (APA).
*   **Relevance:** 2-3 sentences explaining why this paper fits the criteria.
*   **Methodology Note:** Brief description of the technique (e.g., "Tyrosine fluorescence titration").
*   **Flags/Caveats:** Any data conversions or assumptions (e.g., "Values converted from pCa50", "Mg assumed 0mM").

### B. Data Table (Best-Effort)
If sufficient information is available, create a table with horizontal headers. **Each experimental condition** (e.g., different temperature, different Mg concentration) within the paper should be a **separate row**. If data extraction is incomplete or ambiguous for a given paper, provide whatever columns you can populate and note gaps—do not skip the paper entirely.

**Table Columns:**
1.  **Ref:** (Author Year)
2.  **Species:** (e.g., Bovine, Human)
3.  **Species Quote:** Quote confirming species.
4.  **Temp (°C):** Experimental temperature.
5.  **Temp Quote:** Quote confirming temperature.
6.  **Troponin Complex:** State of the protein (e.g., Isolated cTnC, cTnC-cTnI, Whole Troponin).
7.  **Complex Quote:** Quote confirming protein state.
8.  **Bound Ca2+ Measure:** The specific technique used (e.g., "Equilibrium Dialysis", "IAANS Fluorescence").
9.  **Mg (mM):** Concentration of Magnesium in the buffer.
10. **Mg Quote:** Quote confirming Mg concentration.
11. **Kd (M^-1):** The **Association Constant**. (See Section 3 for mapping).
12. **K (uM):** The **Dissociation Constant**. (See Section 3 for mapping).
13. **Data Quote:** Quote of the *primary result value* from the text or table.

**Quote Requirements:**
*   If a value is calculated (e.g., converting pCa to uM), provide the **raw number** from the text in the "Data Quote" column.
*.  If a quote is not available or possible to get one, leave it blank 

## 8. Quality Control Checklist (LLM Instructions)
Before outputting, verify:
*   [ ] Is the paper from **before 2005**?
*   [ ] Is the protein specifically **Cardiac** TnC?
*   [ ] Are the values representing **binding**, not force generation?

---

## 9. Worked Examples (Fictional Data)

**Example 1: Single Condition**

**Citation:** Doe, J., & Smith, A. (1994). Calcium binding to feline cardiac troponin C. *Journal of Fictional Biochemistry*, 45(2), 100-110.
**Relevance:** This paper performs direct equilibrium dialysis on feline cTnC.
**Methodology Note:** Equilibrium dialysis using Ca-45.
**Flags/Caveats:** None.

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Doe 1994 | Feline | "purified from feline left ventricle" | 25 | "conducted at 25 °C" | Isolated cTnC | "using isolated cTnC" | Equilibrium Dialysis | 0 | "metal-free buffer" | 2.0 x 10^5 | 5.0 | "binding constant of 2.0 x 10^5 M^-1" |

**Example 2: Multiple Conditions with Calculation**

**Citation:** Miller, R. (1988). Magnesium competition in recombinant human cTnC. *Archives of Example Biophysics*, 12(4), 400-405.
**Relevance:** Investigates human cTnC affinity at varying Mg2+ concentrations using fluorescence.
**Methodology Note:** Tyrosine fluorescence.
**Flags/Caveats:** Used recombinant protein; Kd calculated from reported dissociation constant.

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Miller 1988 | Human | "recombinant human cardiac TnC" | 21 | "maintained at 21 C" | Isolated cTnC | "titration of free cTnC" | Trp Fluorescence | 1.0 | "presence of 1 mM MgCl2" | 1.0 x 10^5 (calc) | 10.0 | "Kd was determined to be 10 uM" |
| Miller 1988 | Human | "recombinant human cardiac TnC" | 21 | "maintained at 21 C" | Isolated cTnC | "titration of free cTnC" | Trp Fluorescence | 5.0 | "supplemented with 5 mM MgCl2" | 3.3 x 10^4 (calc) | 30.0 | "Kd increased to 30 uM" |

**Example 3: pCa Conversion**

**Citation:** Johnson, L. (1999). Thermal dependence of regulatory site binding. *J Muscle Res.* 10:55-60.
**Relevance:** Measures rabbit cTnC calcium binding.
**Methodology Note:** IAANS fluorescence.
**Flags/Caveats:** Data reported as pCa50; converted to K (uM) and Kd (M^-1).

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Johnson 1999 | Rabbit | "rabbit cardiac muscle" | 15 | "performed at 15 deg C" | Reconstituted Tn | "reconstituted into thin filaments" | IAANS Fluorescence | 1.0 | "1mM free Mg2+" | 3.16 x 10^5 (calc) | 3.16 | "pCa50 = 5.5" |

---

## 10. Deliverables

1.  **Paper Justification Blocks:** For all included papers (PRIMARY deliverable).
2.  **Data Tables:** For as many papers as possible (SECONDARY—partial tables are acceptable).
3.  **Excluded Papers List:** A brief list of papers that looked promising but were rejected (e.g., "Jones 1999 - Rejected: measured force only").
4.  **Summary Statistics:** Total papers found, total data rows extracted, and coverage assessment.
5.  **Confidence Assessment:** An assessment of search completeness (High/Medium/Low) and explanation of any data gaps.

