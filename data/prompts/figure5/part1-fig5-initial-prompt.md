
Model: llm model
1. I need to create a prompt based on the best prompt engineering practices for this model (look online) to extract the following information from PDF articles that I will provide one at a time (not using API). 
2. using the provided context, search this research space to understand the nuance of the field, terminology and how parameters may be presented and discussed

{Recommended Standard:}
Minimum Recommendation
Study Design: Use hPSC lines derived from multiple individuals; if unavailable, differentiate organoids from multiple clones of the same hPSC line. Alternatively, perform independent differentiations from available hPSC lines and ensure the use of multiple organoids from each differentiation.

Reporting: Report the number of organoids used from each differentiation batch and from each hPSC line. Specify criteria for any excluded organoids.

Software/Code: Use or develop open-source methods and report all codes, packages, and analysis software used.

Morphological and Cell Lineage:

Perform random sampling of 3–5 serial sections.

Sample from 3 to 5 organoids in each differentiation batch.

Provide quantification of cell lineage markers used.

Transcriptomics: Report the number of organoids used from each differentiation batch and hPSC line.

Functional: Report the number of neurons recorded from each organoid, the total number of organoids assessed, and the media composition before and during recordings.

Metabolic: Perform analysis of lactate in culture media (e.g., Abcam kit) and use targeted qPCR or a targeted glycolysis assay.

Ideal Recommendation
Study Design: Conduct power analysis to determine sample size, following ISSCR recommendations.

Reporting: Include the number of organoids used from each differentiation batch and hPSC line in figure legends and dedicated supplemental tables. Maintain clear criteria for any excluded organoids.

Morphological and Cell Lineage:

Perform organoid clearing to analyze 3D reconstructions.

Pre-determine sample size using trial experiments and power analysis.

Use unbiased automated or semi-automated methods.

Transcriptomics: Combine multiomic approaches (e.g., scATAC-seq, spatial genomics).

Functional: Utilize at least two complimentary methods to confirm results (e.g., MEA and patch clamp).

Metabolic:

Utilize fluorescent reporters for ratiometric analysis of redox state.

Analyze lactate in organoid tissues (ten organoids per batch if using proton nuclear magnetic resonance [NMR]).

Perform transcriptome-metabolome coupling analysis.
{/recommended standard}


Report as follows:
All methods: Multiple hPSC lines from different individuals, Multiple clones of same line, Independent differentiations, Power analysis for sample size, Organoids per batch / hPSC line reported, Exclusion criteria, Codes/packages/software reported, Morphological and cell lineage: Random sampling of 3–5 serial sections, Organoid clearing for 3D, 3–5 organoids per batch sampled, Sample size pre-determined (trial/power), Quantification of cell lineage markers, Unbiased automated/semi-automated analysis, Transcriptomics: Organoids per batch/line reported, Multi-omic approaches, Functional: Neurons per organoid + organoids assessed, ≥2 complementary methods, Media composition before/during recordings, Metabolic: Lactate in culture media, Targeted qPCR / glycolysis assay, Ratiometric redox reporters, Lactate in tissue (NMR), Transcriptome–metabolome coupling

Not using JSON. Markdown table.
Final prompt as markdown.
I want extra columns, side by side with original columns that quote exactly where the information came from in the article. This is to make it verifiable.
If you need to perform calculations, provide a column with the values used for calculations and then proceed. Perform the calculations, fill in the columns but flag if they were calculated (all columns must have values, unless unavailable).
Output: 1 table with the values that I need and quotes next to each column as support.

Report as a markdowntable following these examples:
if yes, include 1 or 2 word answers
If you enouncter Yes, take note of Yes as a response (in a new column), also include the parameter we answered yes to, for example, Quantification of cell lineage markers: HC, WB, qPCR, RNAseq


research context from abstract:
[Neurotoxic phenomena are among the most common side effects of cytotoxic agents. The development of chemotherapy-induced polyneuropathy (CIPN) is a well-recognized adverse reaction in the peripheral nervous system, while changes of cognitive functions (post-chemotherapy cognitive impairment (PCCI)) are more diffuse and have only recently drawn scienti c interest. PCCI in patients most often displays as short-term memory loss, reduced multitasking ability or de cits in language. Not least, due to a lack of preclinical human model systems, the underlying molecular mechanisms are poorly understood, and treatments are missing. We thus investigated whether induced pluripotent stem cell (iPSC)-derived brain organoids can serve as a human model system for the study of chemotherapy induced central nervous system toxicity. We robustly generated mature brain organoids from iPSC- derived neuronal precursor cells (NPC), which showed a typical composition with 1) dividing NPCs forming ventricle like structures 2) matured neurons and 3) supporting glial cells closer to the surface. Furthermore, upon stimulation the brain organoids showed functional signaling. When exposed to increasing concentrations of paclitaxel, a frequently used chemotherapy drug, we observed time dependent neurotoxicity with an EC50 of 153 nM, comparable to a published murine model system. Histological analysis after paclitaxel exposure demonstrated dose dependent apoptosis induction and reduced proliferation in the organoids with further Western blot analyses indicating the degradation of neuronal calcium sensor one protein (NCS-1) and activation of Caspase-3. We could also provide evidence that paclitaxel treatment negatively affects the pool of neuronal and astrocyte precursor cells as well as mature neurons. In summary our data suggests that human iPSC derived brain organoids are a promising preclinical model system to investigate molecular mechanisms underlying PCCI and to develop novel prevention and treatment strategies.]

Unless the request is very specific, unambiguous and easy to execute, always ask follow up questions to get more context from me

