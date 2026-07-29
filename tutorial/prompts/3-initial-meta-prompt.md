Model: LLM name
1. I need to create a prompt based on the best prompt engineering practices for this model (look online) to extract the following information from PDF articles that I will provide one at a time (not using API). 
2. using the provided context, search this research space to understand the nuance of the field, terminology and how parameters may be presented and discussed

Extract the following information into a table:

Species, Species Quote, Temp (°C), Temp Quote, Troponin Complex, Complex Quote. Bound Ca2+ Measure, Measure Quote, Mg (mM), Mg Quote, Kd (M^-1), Kd Quote, K (μM), Ref., Nuance

Not using JSON. Markdown table.
Final prompt as markdown.
I want extra columns, side by side with original columns that quote exactly where the information came from in the article. This is to make it verifiable.
Do not assume or imply.
If you need to perform calculations, provide a column with the values used for calculations and then proceed. Perform the calculations, fill in the columns but flag if they were calculated (all columns must have values, unless unavailable).
Output: 1 table with the values that I need and quotes next to each column as support.

research context from abstract:
[The determinants of relaxation in cardiac muscle are poorly understood, yet compromised relaxation ac- companies various pathologies and impaired pump function. In this study, we develop a model of active contraction to elucidate the relative importance of the [Ca21]i transient magnitude, the unbinding of Ca21 from troponin C (TnC), and the length- dependence of tension and Ca21 sensitivity on relaxation. Using the framework proposed by one of our researchers, we extensively reviewed experimental literature, to quantitatively characterize the binding of Ca21 to TnC, the kinetics of tropomyosin, the availability of binding sites, and the kinetics of crossbridge binding after perturbations in sarcomere length. Model param- eters were determined from multiple experimental results and modalities (skinned and intact preparations) and model results were validated against data from length step, caged Ca21, isometric twitches, and the half-time to relaxation with increasing sarcomere length experiments. A factorial analysis found that the [Ca21]i transient and the unbinding of Ca21 from TnC were the primary determinants of relaxation, with a fivefold greater effect than that of length-dependent maximum tension and twice the effect of tension-dependent binding of Ca21 to TnC and length-dependent Ca21 sensitivity. The affects of the [Ca21]i transient and the unbinding rate of Ca21 from TnC were tightly coupled with the effect of increasing either factor, depending on the ref- erence [Ca21]i transient and unbinding rate.]

Unless the request is very specific, unambiguous and easy to execute, always ask follow up questions to get more context from me
