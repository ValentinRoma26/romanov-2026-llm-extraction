{Initial prompt}
I have generated three different versions of a system prompt designed to initiate a Deep Research run. Your goal is to synthesize these three distinct attempts into one "Master Prompt" that is superior to any single individual attempt.
The final prompt should be rich and full of information, combining the best of all 3 attempts. Do not assume or imply.
Start with attempt 1, and add components from attempt 2 and attempt 3. The final prompt will be larger than any one attempt, will have broader coverage, will maintain the necessary nuance to carry out the task.

## Task

Analyze the attached reference papers and design a comprehensive prompt that instructs an LLM to search scientific literature databases to identify primary research papers that could populate a table equivalent to:
species, temperature, troponin complex, Bound Ca2+ measure (basically how was it measured), Mg (mM), Kd (M^-1), K (uM), Ref

Use the best principles for creating deep research prompts from OpenAI

---

## Instructions

1. **Analyze the following articles:**
   - Identify the relevant parameters outline above
   - Do not include the papers provided to create this prompt in the main prompt
   - Do not count these papers as part of the minimum coverage requirement

2. **Extract the author's methodology:**
   - What inclusion criteria did the author use? (Look for explicit statements and infer from what IS included)
   - What exclusion criteria did the author use? (Look for explicit statements about what was rejected or flagged)
   - What is the publication date cutoff? (Papers must predate the reference paper)

3. **Generate a literature search prompt with these specifications:**

   **Objective section:**
   - Instruct the LLM to search scholarly databases (PubMed, Google Scholar, Semantic Scholar, Web of Science, Scopus, arxiv, etc.)
   - Specify the exact data type being sought
   - State the publication date constraint

   **Background section:**
   - Provide domain context necessary to understand inclusion/exclusion criteria
   - Explain any technical distinctions critical to the search (e.g., if certain subtypes or sites must be distinguished)

   **Inclusion criteria section:**
   - Primary experimental data only (not reviews or computational predictions)
   - Specific data types and units acceptable
   - Full range of experimental variations to include (species, conditions, techniques, etc.)

   **Exclusion criteria section:**
   - What should be excluded entirely
   - What should be flagged but included with notation

   **Minimum coverage requirement:**
   - Set threshold at: a minimum of 20 research articles
   - Include explicit instructions for what to do if fewer papers are found
   - Include explicit instruction to NOT fabricate references
   - Include explicit instruction to only focus on papers published BEFORE 2005

   **Output format section:**
   
   For each paper, require:
   
   A. **Paper Justification Block** containing:
      - Full citation
      - 2-3 sentence explanation of why the paper meets inclusion criteria
      - Brief description of data extracted
      - Any caveats or flags (or "None")
   
   B. **Data Table** with:
      - A Reference column (first column) identifying the source paper
      - For each data field from the original table: a Value column immediately followed by a Quote column
      - Headings are horizontal (one row per experimental condition)
      - Example: | Species | Species Quote | Temp (°C) | Temp Quote | ... |

   **Quote requirements section:**
   - All quotes must be verbatim from the source, in quotation marks
   - Page numbers should be included where available
   - Calculated or inferred values must be explicitly marked with method shown
   - Missing quotes must be flagged for manual verification

   **Multiple conditions handling:**
   - Each experimental condition from one paper = separate row in table
   - All rows from same paper share one justification block

   **Deliverables section:**
   - Paper justifications and data tables for all included papers
   - List of excluded papers with reasons
   - Paper count verification (numbered list of all included papers)
   - Summary statistics (total papers, total data rows, coverage assessment)
   - Confidence assessment (high/medium/low) with explanation of gaps

   **Quality checks section:**
   - Checklist the LLM must verify before finalizing

4. **Include worked examples:**
   - Provide 2-3 fictional example entries demonstrating correct format
   - Examples should show: single-condition paper, multi-condition paper, and one with a caveat/flag
   - Use obviously fictional paper names and values (e.g., "Smith et al. (1995) - J. Example Biochem.")

5. **Do NOT include:**
   - Suggested search terms or keywords
   - Specific author names to search for
   - MeSH terms or database-specific syntax

---

## Output

Provide the complete, ready-to-use prompt formatted in Markdown with clear section headers.
{/initial prompt}

{prompt 1}
Here is a comprehensive prompt designed to instruct an LLM to conduct this specific literature search and data extraction task.

***

# Research Prompt: Cardiac Troponin C Calcium Binding Kinetics (Pre-2005)

## 1. Objective
Perform a deep literature search to identify, analyze, and extract experimental data from primary research papers regarding the calcium-binding properties of **Cardiac Troponin C (cTnC)**. The goal is to populate a structured dataset comparing binding affinities across species, temperatures, and magnesium concentrations.

**Strict Constraint:** You must only select papers published **BEFORE January 1, 2005**.

## 2. Background & Context
Cardiac Troponin C (cTnC) is the calcium-sensing subunit of the troponin complex. To extract accurate data, you must understand the following biological and technical context:
*   **Binding Sites:** cTnC has regulatory sites (low affinity, Site II) and structural sites (high affinity, Sites III & IV). Papers may report data for one or both.
*   **Protein State:** Affinity changes drastically depending on whether cTnC is isolated, complexed with Troponin I (TnI), complexed in the whole Troponin (Tn) complex, or reconstituted into thin filaments.
*   **Methodology:** Common methods include Equilibrium Dialysis (direct measurement), Fluorescence Spectroscopy (using probes like IAANS or Tryptophan mutants), and Calorimetry.
*   **Units:** Older literature often reports the **Binding Constant ($K$)** in $M^{-1}$ (which is an association constant, $K_a$). The user has requested a column for "$K_d (M^{-1})$". While $K_d$ is typically molar (M), in this context, treat the column as the **Association/Binding Constant ($K_a$ or $K_{bin}$)**. The second requested column, "$K (\mu M)$", represents the Dissociation Constant ($K_d$).

## 3. Inclusion Criteria
Include a paper only if it meets **ALL** of the following:
1.  **Publication Date:** Published prior to 2005.
2.  **Type:** Primary research article (no reviews, meta-analyses, or book chapters unless they contain original experimental data).
3.  **Subject:** Cardiac Troponin C (cTnC) from any species.
4.  **Data:** Contains experimentally derived Calcium binding affinity values ($K_d$, $K_a$, $pCa_{50}$, or $K_{1/2}$).
5.  **Methodology:** Uses in vitro methods (e.g., equilibrium dialysis, fluorescence titration, stopped-flow) or valid in situ methods (fiber fluorescence).

## 4. Exclusion Criteria
1.  **Date:** Any paper published in 2005 or later.
2.  **Subject:** Papers dealing *exclusively* with Skeletal Troponin C (sTnC) without a cardiac comparison.
3.  **Data:** Papers that only measure force generation (tension) without measuring calcium binding (fluorescence or direct binding).

## 5. Minimum Coverage & Execution
*   **Target:** Identify at least **20 distinct research articles**.
*   **Fall-back:** If you cannot find 20 papers that meet the strict pre-2005 criteria, analyze as many as are available and clearly state the limitations in the Confidence Assessment.
*   **Zero Fabrication:** Do not generate fake citations or values. If a specific data point (e.g., Magnesium concentration) is not explicitly stated in the text, mark it as "NR" (Not Reported) or "Assumed [Value]" if the standard buffer composition implies it.

## 6. Output Format

For **each** identified paper, provide two distinct blocks:

### A. Paper Justification Block
*   **Citation:** Full standard citation (APA style).
*   **Relevance:** 2-3 sentences explaining why this paper fits the criteria.
*   **Methodology Note:** Brief description of how binding was measured (e.g., "Tyrosine fluorescence titration").
*   **Flags/Caveats:** Any potential issues (e.g., "Used a mutant cTnC," "Temperature not explicitly listed, assumed 25°C").

### B. Data Table
Create a table with horizontal headers. Each experimental condition (e.g., different temperature, different Mg concentration) within the paper should be a separate row.

**Table Columns:**
1.  **Ref:** (Author Year)
2.  **Species:** (e.g., Bovine, Human)
3.  **Species Quote:** Verbatim quote confirming species.
4.  **Temp (°C):** Experimental temperature.
5.  **Temp Quote:** Verbatim quote confirming temperature.
6.  **Troponin Complex:** State of the protein (e.g., Isolated cTnC, cTnC-cTnI, Whole Troponin, Reconstituted Thin Filament).
7.  **Complex Quote:** Verbatim quote confirming protein state.
8.  **Bound Ca2+ Measure:** The specific technique used (e.g., "Equilibrium Dialysis", "IAANS Fluorescence").
9.  **Mg (mM):** Concentration of Magnesium in the buffer.
10. **Mg Quote:** Verbatim quote confirming Mg concentration.
11. **Kd (M^-1):** The Binding/Association Constant. *Note: If the paper reports $K_d$ in M, calculate the inverse for this column and note "(calc)"*.
12. **K (uM):** The Dissociation Constant in micromolar. *Note: If the paper reports Binding Constant $M^{-1}$, calculate the inverse and convert to uM for this column.*
13. **Data Quote:** Verbatim quote of the primary result value from the text or table.

## 7. Quote Requirements
*   Every "Quote" column must contain a verbatim snippet from the text.
*   Enclose quotes in distinct quotation marks: "like this".
*   If a value is calculated (e.g., converting pCa to uM), provide the formula used in the "Data Quote" column alongside the raw number from the text.

## 8. Quality Checks (LLM Instructions)
Before outputting, verify:
*   [ ] Is the paper from **before 2005**?
*   [ ] Is the protein specifically **Cardiac** TnC?
*   [ ] Are the values representing **binding**, not force?
*   [ ] Are all quotes verbatim?

---

## 9. Worked Examples (Fictional Data)

**Example Entry 1 (Single Condition)**

**1. Citation:** Doe, J., & Smith, A. (1994). Calcium binding to feline cardiac troponin C. *Journal of Fictional Biochemistry*, 45(2), 100-110.
**Relevance:** This paper performs direct equilibrium dialysis on feline cTnC to determine binding constants.
**Methodology Note:** Equilibrium dialysis using Ca-45.
**Flags/Caveats:** None.

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Doe 1994 | Feline | "purified from feline left ventricle" | 25 | "experiments were conducted at 25 °C" | Isolated cTnC | "using isolated cTnC" | Equilibrium Dialysis | 0 | "metal-free buffer" | 2.0 x 10^5 | 5.0 | "binding constant of 2.0 x 10^5 M^-1" |

**Example Entry 2 (Multiple Conditions)**

**2. Citation:** Miller, R. (1988). Magnesium competition in recombinant human cTnC. *Archives of Example Biophysics*, 12(4), 400-405.
**Relevance:** Investigates human cTnC affinity at varying Mg2+ concentrations using fluorescence.
**Methodology Note:** Tyrosine fluorescence.
**Flags/Caveats:** Used recombinant protein.

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Miller 1988 | Human | "recombinant human cardiac TnC" | 21 | "temperature maintained at 21 C" | Isolated cTnC | "titration of free cTnC" | Trp Fluorescence | 1.0 | "in the presence of 1 mM MgCl2" | 1.0 x 10^5 (calc) | 10.0 | "Kd was determined to be 10 uM" |
| Miller 1988 | Human | "recombinant human cardiac TnC" | 21 | "temperature maintained at 21 C" | Isolated cTnC | "titration of free cTnC" | Trp Fluorescence | 5.0 | "buffer supplemented with 5 mM MgCl2" | 3.3 x 10^4 (calc) | 30.0 | "Kd increased to 30 uM" |

---

## 10. Deliverables

1.  **Paper Justification Blocks and Data Tables** for all included papers.
2.  **Excluded Papers List:** A brief list of papers that looked promising but were rejected (e.g., "Jones 1999 - Rejected: measured force only").
3.  **Summary Statistics:** Total papers found, total data rows extracted.
4.  **Confidence Assessment:** Assess the completeness of the search and the quality of the data extracted.
{/prompt 1}

{prompt 2}

# Deep Research Prompt: Calcium Binding Parameters of Troponin Complexes

## 1. Objective
Perform a systematic literature search across scholarly databases (e.g., PubMed, Google Scholar, Web of Science, Scopus) to identify primary research articles containing experimental data on Calcium ($Ca^{2+}$) binding affinities to the Troponin C (TnC) subunit or the Troponin complex.

**Target Data:** You are building a dataset of binding constants ($K_d$, $K_a$, or $pCa_{50}$) under varying experimental conditions (specifically Temperature and Magnesium concentration).
**Date Constraint:** STRICTLY LIMIT results to papers published **BEFORE January 1, 2005**.

## 2. Background & Domain Context
Troponin C (TnC) is the $Ca^{2+}$-sensing subunit of the troponin complex (Tn), which regulates striated muscle contraction. 
*   **Isoforms:** There are distinct cardiac (cTnC) and skeletal (sTnC) isoforms.
*   **Binding Sites:** TnC typically contains high-affinity sites (Sites III & IV, often structural, bind $Ca^{2+}$ and $Mg^{2+}$) and low-affinity regulatory sites (Sites I & II, bind $Ca^{2+}$ specifically).
*   **Complex State:** Binding affinity changes significantly depending on whether TnC is isolated, in a binary complex (with TnI), in a ternary complex (TnC-TnI-TnT), or reconstituted in fibers.
*   **Variables:** Affinity is highly sensitive to Temperature, pH, and Magnesium ($Mg^{2+}$) concentration.
*   **Data Representation:** Literature may report values as Association Constants ($K_a$ in $M^{-1}$), Dissociation Constants ($K_d$ in $M$ or $\mu M$), or negative log values ($pCa_{50}$, $- \log [Ca^{2+}]_{0.5}$).

## 3. Inclusion Criteria
Include a paper only if it meets **ALL** of the following:
1.  **Primary Research:** Must be an original experimental study (no reviews, meta-analyses, or textbooks).
2.  **Date Range:** Published prior to 2005.
3.  **Molecule:** Studies must involve Troponin C (cardiac or skeletal) either isolated, in oligomeric complexes (e.g., TnC-TnI), or reconstituted into myofibrils.
4.  **Data:** Must explicitly report quantitative $Ca^{2+}$ binding metrics (Affinity $K_a$, Dissociation $K_d$, or $pCa_{50}$/Half-saturation).
5.  **Variables:** The study must define the temperature and Magnesium ($Mg^{2+}$) concentration used during the assay.

## 4. Exclusion Criteria
1.  **Publication Date:** Any paper published in 2005 or later.
2.  **Source Papers:** Do not include *Holroyde et al. (1980)*, *Putkey et al. (1997)*, or *Gillis et al. (2000)* in the results.
3.  **Methodology:** Exclude purely computational molecular dynamics simulations without wet-lab validation.
4.  **Missing Variables:** Exclude papers that do not report the temperature at which the binding experiment was conducted.

## 5. Minimum Coverage Requirement
*   **Target:** Identify at least **20 distinct primary research articles**.
*   **Search Strategy:** If 20 papers are not immediately found, expand search to include variations of "troponin calcium binding," "TnC ligand binding," "calcium titration troponin," and "troponin fluorescence titration."
*   **Integrity:** Under no circumstances should you fabricate references or data. If fewer than 20 qualified papers are found after an exhaustive search, provide the valid papers found and clearly state that the threshold could not be met with real data.

## 6. Output Format

For every identified paper, provide the following two components:

### A. Paper Justification Block
*   **Citation:** [Full Author List, Year, Journal, Title]
*   **Relevance:** 2-3 sentences explaining why this paper fits the inclusion criteria (e.g., "This paper measures Ca2+ binding to rabbit skeletal TnC using equilibrium dialysis at 25°C.")
*   **Method Summary:** Briefly describe the technique used (e.g., Fluorescence spectroscopy, Equilibrium Dialysis, ITC).
*   **Flags/Caveats:** Note any missing data inferred from context (e.g., "Mg concentration assumed 0 based on 'Mg-free buffer' description") or "None".

### B. Data Table
Create a table row for **each distinct experimental condition** reported in the paper (e.g., if they tested 3 temperatures, produce 3 rows).

**Column Definitions:**
1.  **Ref:** (Author, Year)
2.  **Species:** The source organism of the protein.
3.  **Species Quote:** Verbatim quote verifying the species.
4.  **Temp (°C):** The temperature of the assay.
5.  **Temp Quote:** Verbatim quote verifying the temperature.
6.  **Complex:** The state of the protein (e.g., "Isolated TnC", "TnC-TnI", "Reconstituted Tn").
7.  **Bound Ca2+ Measure:** The specific method used (e.g., "Tryptophan Fluorescence", "45Ca Equilibrium Dialysis").
8.  **Mg (mM):** The concentration of Magnesium in the buffer.
9.  **Mg Quote:** Verbatim quote verifying Mg concentration.
10. **Kd (M^-1):** The **Association Constant/Affinity**. If the paper reports Dissociation ($K_d$ in M), convert to $1/K_d$. If the paper reports $pCa_{50}$, convert via $10^{pCa}$.
11. **K (uM):** The **Dissociation Constant** in micromolar. If the paper reports Affinity ($M^{-1}$), calculate inverse.
12. **Data Quote:** Verbatim quote of the raw value from the text/table (e.g., "pCa50 = 6.2").

**Quote Rules:**
*   Quotes must be exact substrings from the text.
*   If a value is calculated (e.g., converting pCa to K), the "Data Quote" must show the original pCa value provided by the authors.

## 7. Deliverables
1.  **Results Section:** The Justification Blocks and Data Tables for all identified papers.
2.  **Excluded Papers List:** A list of 3-5 papers that looked relevant but were excluded, with brief reasons (e.g., "Published 2008", "No temperature listed").
3.  **Verification List:** A simple numbered list of the valid citations found (1-20+).
4.  **Summary Statistics:** Total papers found, total data rows extracted.
5.  **Confidence Assessment:** A brief statement on the completeness of the search and any specific gaps in the pre-2005 literature for these parameters.

## 8. Quality Control Checklist
Before generating the final output, verify:
*   [ ] Are all papers published BEFORE 2005?
*   [ ] Are the specific source papers (Putkey 1997, Gillis 2000, Holroyde 1980) excluded?
*   [ ] Does every data row include verbatim quotes?
*   [ ] Have units been correctly standardized in the Kd (M^-1) and K (uM) columns?
*   [ ] Are multiple conditions from a single paper separated into distinct rows?

---

## 9. Worked Examples (Fictional Data)

### Example 1: Single Condition

**A. Paper Justification Block**
*   **Citation:** Smith, J.D. and Jones, A.R. (1994) *Biochem J.* "Calcium binding to bovine cardiac troponin."
*   **Relevance:** This study measures calcium affinity of isolated bovine cTnC using fluorescence.
*   **Method Summary:** Tyrosine fluorescence titration.
*   **Flags/Caveats:** None.

**B. Data Table**
| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Complex | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (Smith, 1994) | Bovine | "isolated from bovine heart" | 25 | "measurements at 25 °C" | Isolated cTnC | Tyr Fluorescence | 2.0 | "buffer containing 2 mM MgCl2" | 2.00E+05 | 5.0 | "Ka was 2.0 x 10^5 M-1" |

### Example 2: Multiple Conditions with Calculation

**A. Paper Justification Block**
*   **Citation:** Doe, R. et al. (1989) *J Muscle Res.* "Thermal dependence of regulatory site binding."
*   **Relevance:** Investigates rabbit skeletal TnC calcium binding at two different temperatures.
*   **Method Summary:** Equilibrium dialysis using Ca-45.
*   **Flags/Caveats:** The paper uses pK values; calculated to M-1 and uM for the table.

**B. Data Table**
| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Complex | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (Doe, 1989) | Rabbit | "rabbit skeletal muscle" | 10 | "performed at 10 deg C" | Reconstituted Tn | 45Ca Equilibrium Dialysis | 1.0 | "1mM free Mg2+" | 3.16E+05 | 3.16 | "pK = 5.5" |
| (Doe, 1989) | Rabbit | "rabbit skeletal muscle" | 30 | "performed at 30 deg C" | Reconstituted Tn | 45Ca Equilibrium Dialysis | 1.0 | "1mM free Mg2+" | 1.00E+05 | 10.0 | "pK = 5.0" |

### Example 3: Inferred Data with Flag

**A. Paper Justification Block**
*   **Citation:** Miller, K. (1999) *Biophysics.* "Magnesium competition in site II."
*   **Relevance:** Measures human cTnC affinity.
*   **Method Summary:** IAANS fluorescence labeling.
*   **Flags/Caveats:** Magnesium concentration inferred. The methods state "standard physiological buffer" which they define in the intro as 1mM free Mg.

**B. Data Table**
| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Complex | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| (Miller, 1999) | Human | "recombinant human cTnC" | 21 | "room temperature (21 C)" | TnC-TnI | IAANS Fluorescence | 1.0 | "physiological buffer" (see Intro) | 1.58E+06 | 0.63 | "Kd = 0.63 uM" |
{/prompt 2}

{prompt 3}
# Deep Research Prompt: Calcium Binding Parameters of Cardiac Troponin Complex

**Role:** You are an expert biochemist and literature research assistant specialized in muscle physiology and protein thermodynamics.

**Objective:**
Conduct a comprehensive literature search of primary scientific databases (PubMed, Google Scholar, Web of Science, Scopus) to identify **at least 20 primary research articles published BEFORE January 1, 2005**. You must extract quantitative experimental data regarding the calcium-binding properties of **Cardiac Troponin C (cTnC)**, either in isolation or within the Troponin complex (Tn), under varying temperatures and magnesium concentrations.

**Output Goal:**
Populate a structured data table characterizing the binding affinity ($K_a$ or $K_d$) of calcium to cardiac troponin.

---

## 1. Background & Context
Cardiac Troponin C (cTnC) contains multiple calcium-binding sites. In the literature, binding affinity is often reported as:
*   **Association Constant ($K_a$):** Units are typically $M^{-1}$. (e.g., $3 \times 10^8 M^{-1}$).
*   **Dissociation Constant ($K_d$):** Units are typically $M$ or $\mu M$. (e.g., $3.3 \mu M$).
*   **$pCa_{50}$:** The negative log of the calcium concentration at half-maximal saturation.

Research in this field often utilizes techniques such as **Equilibrium Dialysis**, **Fluorescence Spectroscopy** (using intrinsic Tryptophan or extrinsic probes like IAANS/DANZ), or **Calorimetry**. The binding properties are significantly influenced by the presence of Magnesium ($Mg^{2+}$), pH, and Temperature.

---

## 2. Inclusion Criteria
To be included in the dataset, a paper must meet **all** of the following conditions:
1.  **Publication Date:** Must be published **BEFORE 2005**.
2.  **Type:** Primary experimental research article (No reviews, meta-analyses, or purely computational models).
3.  **Subject:** Focus on **Cardiac** Troponin C (cTnC) or the Cardiac Troponin Complex (cTn) from any vertebrate species.
    *   *Note:* Papers comparing cardiac vs. skeletal isoforms are acceptable if cardiac data is explicitly reported.
4.  **Data:** Must report quantitative values for Calcium binding affinity to the regulatory sites (Site II) or high-affinity sites (Sites III/IV).
    *   Acceptable reported values: $K_a$, $K_d$, $K_{1/2}$, or $pCa_{50}$.
5.  **Methodology:** Must utilize direct binding assays (e.g., equilibrium dialysis, flow dialysis) or spectroscopic reporters of binding (e.g., fluorescence).
    *   *Caveat:* Do not include papers that *only* measure ATPase activity or muscle force generation unless they explicitly calculate and assign a binding constant to the troponin molecule itself based on that data.

## 3. Exclusion Criteria
1.  **Do NOT include** the following papers (these serve as the reference set):
    *   Holroyde et al. (1980) *J. Biol. Chem.*
    *   Putkey et al. (1997) *Biochemistry*
    *   Gillis et al. (2000) *Am J Physiol*
2.  Exclude papers that only report structural data (NMR/X-ray) without thermodynamic binding constants.
3.  Exclude studies where the Magnesium (Mg) concentration is not defined or controlled.

---

## 4. Minimum Coverage & Constraints
*   **Target Count:** Find at least **20** distinct papers meeting the criteria.
*   **Date Constraint:** Strict cutoff at year 2005.
*   **Data Integrity:** **DO NOT** fabricate references or data points. If fewer than 20 papers are found after an exhaustive search, provide the ones found and state "Search exhausted."
*   **Quotes:** Every data point extracted must be supported by a verbatim quote from the text or table of the source paper.

---

## 5. Output Format Requirements

For **EACH** paper found, provide two distinct blocks:

### A. Paper Justification Block
*   **Citation:** Full standard citation.
*   **Relevance:** 2-3 sentences explaining why this paper fits the inclusion criteria (e.g., "This paper uses equilibrium dialysis to measure Ca2+ binding to bovine cTnC at two different temperatures.").
*   **Caveats/Flags:** Note any potential issues (e.g., "Mg concentration assumed to be background," or "Values converted from pCa").

### B. Data Table
Create a markdown table with the following columns. Each experimental condition (e.g., a different temperature or different Mg concentration) constitutes a **separate row**.

| Reference | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ measure | Measure Quote | Mg (mM) | Mg Quote | Kd (M^-1) [Assoc. Constant] | Kd (M^-1) Quote | K (uM) [Dissoc. Constant] | K (uM) Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| *Author (Year)* | *Value* | *"Quote"* | *Value* | *"Quote"* | *Value* | *"Quote"* | *Value* | *"Quote"* | *Value* | *"Quote"* | *Value* | *"Quote"* | *Value* | *"Quote"* |

**Critical Column Instructions:**
*   **Kd (M^-1):** This column represents the **Association Constant ($K_a$)**. If the paper reports $K_a$ (e.g., $10^7 M^{-1}$), enter it here. If the paper reports $K_d$ or $pCa$, leave this `N/A` or calculate the inverse *only if* you explicitly note the calculation in the Justification Block.
*   **K (uM):** This column represents the **Dissociation Constant ($K_d$)**. If the paper reports $K_d$ in $M$ or $\mu M$, enter it here (convert $M$ to $\mu M$). If the paper reports $K_a$ only, calculate the inverse ($1/K_a$) for this column.
*   **Quotes:** Must be exact substrings from the PDF/Text. Include page/table numbers if possible.

---

## 6. Worked Examples (Fictional Data)

**Entry 1**

**Citation:** Doe, J. and Ray, A. (1995). *Thermodynamics of Porcine Cardiac Troponin.* J. Example Biochem. 22:101-105.
**Relevance:** Investigates Ca2+ binding to porcine cTnC using fluorescence. Meets criteria for primary data pre-2005.
**Caveats:** None.

| Reference | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ measure | Measure Quote | Mg (mM) | Mg Quote | Kd (M^-1) | Kd (M^-1) Quote | K (uM) | K (uM) Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Doe et al. (1995) | Porcine | "isolated from porcine left ventricle" | 25 | "maintained at 25 °C" | Isolated cTnC | "purified cTnC" | Dansyl Fluorescence | "fluorescence of dansyl-labeled cTnC" | 2.0 | "buffer contained 2 mM MgCl2" | 2.0 x 10^5 | "association constant Ka = 2.0 x 10^5 M^-1" | 5.0 | "calculated Kd of 5 uM" |

**Entry 2**

**Citation:** Smith, B. (1988). *Magnesium competition in cardiac regulatory proteins.* Arch. Fictional. Phys. 12:44-50.
**Relevance:** Uses equilibrium dialysis to determine binding sites.
**Caveats:** Reports pCa50, converted to K (uM) for the table.

| Reference | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ measure | Measure Quote | Mg (mM) | Mg Quote | Kd (M^-1) | Kd (M^-1) Quote | K (uM) | K (uM) Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Smith (1988) | Bovine | "Bovine heart preparation" | 4 | "carried out at 4°C" | Native Tn | "whole native troponin complex" | Equilibrium Dialysis | "45Ca equilibrium dialysis" | 0 | "absence of Mg2+" | N/A | N/A | 3.16 | "pCa50 was determined to be 5.5" |
| Smith (1988) | Bovine | "Bovine heart preparation" | 4 | "carried out at 4°C" | Native Tn | "whole native troponin complex" | Equilibrium Dialysis | "45Ca equilibrium dialysis" | 3.0 | "added 3 mM MgCl2" | N/A | N/A | 15.8 | "pCa50 shifted to 4.8" |

---

## 7. Deliverables & Quality Checks

**Before finalizing the output, verify:**
1.  [ ] Are there at least 20 unique papers?
2.  [ ] Are all papers published before 2005?
3.  [ ] Are the excluded papers (Holroyde, Putkey, Gillis) absent from the list?
4.  [ ] Does every data row have a corresponding verbatim quote?
5.  [ ] Is the distinction between $K_a$ (M^-1) and $K_d$ (uM) maintained correctly?

**Final Output Structure:**
1.  **Paper Justifications and Data Tables** (Iterate through all found papers).
2.  **List of Excluded Papers** (Papers found but rejected based on criteria, with reasons).
3.  **Summary Statistics** (Total papers, total data points).
4.  **Confidence Assessment** (Comment on the density of data found for specific species or conditions).
{/prompt 3}