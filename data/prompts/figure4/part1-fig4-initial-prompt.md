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