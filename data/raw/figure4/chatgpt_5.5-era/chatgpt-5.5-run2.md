# Cardiac Troponin C Calcium Binding Literature Before 2005

## Scope and screening decisions

I applied the user’s filter strictly: pre-2005 only, primary experimental papers, cardiac troponin C or cardiac troponin systems explicitly tied to cTnC, and quantitative calcium-binding readouts or clearly affinity-centered calcium-binding experiments. I retained older whole-troponin papers when the calcium-binding site assignments were explicitly mapped onto the TnC subunit, because several foundational pre-2005 articles reported the low- and high-affinity cardiac sites in that format rather than on isolated recombinant cTnC alone. Later structural-only, force-only, or small-molecule binding papers were excluded if they did not expose a calcium-binding affinity metric for cTnC itself. citeturn21search0turn33search0turn21search1turn23search0turn24search0

The highest-confidence corpus I could verify from accessible source text contains **14 primary papers**. Numerical extraction was strongest for classic bovine/whole-troponin studies, peptide-domain studies, trout-vs-mammal comparative work, and the later human NMR and engineered-human cTnC studies. Many older records either had no abstract or exposed only qualitative summaries in the accessible source view, so several included papers have sparse tables by necessity. **Search exhausted** under this strict verifiability threshold.

## Included papers and best-effort extraction

**Citation:** Leavis, P. C., & Kraft, E. L. (1978). *Calcium binding to cardiac troponin C*. Archives of Biochemistry and Biophysics, 186(2), 411–415.  
**Relevance:** This is one of the foundational direct studies on isolated cardiac troponin C before 1980. The accessible abstract clearly states that isolated cardiac TnC was studied directly and that the protein contains one lower-affinity and two higher-affinity Ca-binding sites, with Mg competing at the higher-affinity sites, which squarely fits the inclusion criteria.  
**Methodology Note:** Fluorescence, circular dichroism, and Ca²⁺-specific electrode measurements.  
**Flags/Caveats:** The accessible source text did not expose the numerical affinity constants, so the table is necessarily partial. citeturn21search0turn21search6

Best-effort extraction from the accessible source text follows. citeturn21search0turn21search6

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Leavis 1978 | Bovine |  |  |  | Isolated cTnC | “The binding of Ca2+ to cardiac troponin C was studied...” | Fluorescence; circular dichroism; Ca²⁺-specific electrode |  |  |  |  | “Cardiac troponin C contains three Ca2+-binding sites which fall into two classes—two sites with a higher affinity and one with a lower affinity. The higher-affinity sites also bind Mg2+ which competes with the Ca2+.” |

**Citation:** Stull, J. T., & Buss, J. E. (1978). *Calcium binding properties of beef cardiac troponin*. Journal of Biological Chemistry, 253(17), 5932–5938.  
**Relevance:** This paper directly compares calcium binding by cardiac versus skeletal troponin and reports association constants for the cardiac preparation in the presence and absence of MgCl₂. It is a primary equilibrium-binding study and provides one of the clearest early Mg-sensitive cardiac affinity datasets.  
**Methodology Note:** Equilibrium dialysis and gel filtration.  
**Flags/Caveats:** Numeric values were recovered from indexing/summary text rather than the primary abstract view; MgCl₂ concentration was not exposed in the accessible snippet and is therefore left blank. citeturn28search0turn28search1

Best-effort extraction from the accessible source text follows. citeturn28search0turn28search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Stull 1978 | Beef | “beef cardiac troponin” |  |  | Whole cardiac troponin | “Ca2+ binding properties of beef cardiac troponin” | Equilibrium dialysis | 0 | “Without MgCl2” | 4.0 × 10^7 | 0.025 | “Without MgCl2, the association constant for cardiac troponin was increased to 4 × 10^7/M with a total capacity of 2 mol of Ca2+.” |
| Stull 1978 | Beef | “beef cardiac troponin” |  |  | Whole cardiac troponin | “Ca2+ binding properties of beef cardiac troponin” | Equilibrium dialysis |  | “With MgCl2” | 3.0 × 10^6 | 0.333 | “With MgCl2 a single class of binding sites was found for both proteins with an association constant of 3 × 10^6/M.” |

**Citation:** Johnson, J. D., Collins, J. H., Robertson, S. P., & Potter, J. D. (1980). *A fluorescent probe study of Ca²⁺ binding to the Ca²⁺-specific sites of cardiac troponin and troponin C*. Journal of Biological Chemistry, 255(20), 9635–9640.  
**Relevance:** This is a direct cTnC calcium-binding paper focused specifically on the Ca²⁺-specific sites in cardiac troponin and isolated troponin C. It fits the date, subject, and methodology requirements and is one of the key early fluorescence-based affinity papers repeatedly cited by later work.  
**Methodology Note:** Fluorescent probe titration.  
**Flags/Caveats:** The accessible source text confirmed the paper and abstract context but did not expose a numerical affinity value in the retrieved snippet. citeturn8search0turn8search1

Best-effort extraction from the accessible source text follows. citeturn8search0turn8search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Johnson 1980 |  |  |  |  | Whole cardiac troponin and isolated cTnC | “Ca2+ binding to the Ca2+-specific sites of cardiac troponin and troponin C” | Fluorescent probe study |  |  |  |  |  |

**Citation:** Holroyde, M. J., Robertson, S. P., Johnson, J. D., Solaro, R. J., & Potter, J. D. (1980). *The calcium and magnesium binding sites on cardiac troponin and their role in the regulation of myofibrillar adenosine triphosphatase*. Journal of Biological Chemistry, 255(24), 11688–11693.  
**Relevance:** This is a cornerstone paper because it reports quantitative Ca-binding constants for whole cardiac troponin, the cTnC·cTnI complex, and isolated cTnC, and explicitly tests the effect of 4 mM MgCl₂. It is one of the most useful pre-2005 references for populating a cross-condition dataset.  
**Methodology Note:** Equilibrium dialysis with EGTA or EDTA controlling free Ca²⁺.  
**Flags/Caveats:** The abstract states that the cTnC·cTnI complex behaved similarly to whole troponin, but it did not expose separate numeric constants for that complex, so I did not invent separate rows. citeturn33search0

Best-effort extraction from the accessible source text follows. citeturn33search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Holroyde 1980 | Bovine | “purified troponin subunits isolated from bovine heart muscle” |  |  | Whole troponin | “The cardiac troponin (Tn) complex... has been reconstituted from purified troponin subunits isolated from bovine heart muscle.” | Equilibrium dialysis | 0 |  | 3.0 × 10^8 | 0.0033 | “Cardiac Tn binds 3 mol Ca2+/mol and contains two Ca2+-binding sites with a binding constant of 3 X 10^8 M-1...” |
| Holroyde 1980 | Bovine | “purified troponin subunits isolated from bovine heart muscle” |  |  | Whole troponin | same as above | Equilibrium dialysis | 0 |  | 2.0 × 10^6 | 0.5 | “...and one binding site with a binding constant of 2 X 10^6 M-1.” |
| Holroyde 1980 | Bovine | “purified troponin subunits isolated from bovine heart muscle” |  |  | Whole troponin | same as above | Equilibrium dialysis | 4.0 | “In the presence of 4 mM MgCl2...” | 3.0 × 10^7 | 0.033 | “In the presence of 4 mM MgCl2, the binding constant of the sites of higher affinity is reduced to 3 X 10^7 M-1...” |
| Holroyde 1980 | Bovine | “purified troponin subunits isolated from bovine heart muscle” |  |  | Isolated cTnC | “Cardiac TnC also binds 3 mol of Ca2+/mol...” | Equilibrium dialysis | 0 |  | 1.0 × 10^7 | 0.1 | “Cardiac TnC also binds 3 mol of Ca2+/mol and contains two sites with a binding constant of 1 X 10^7 M-1...” |
| Holroyde 1980 | Bovine | “purified troponin subunits isolated from bovine heart muscle” |  |  | Isolated cTnC | same as above | Equilibrium dialysis | 0 |  | 2.0 × 10^5 | 5.0 | “...and a single site with a binding constant of 2 X 10^5 M-1.” |

**Citation:** Robertson, S. P., Johnson, J. D., Holroyde, M. J., Kranias, E. G., Potter, J. D., & Solaro, R. J. (1982). *The effect of troponin I phosphorylation on the Ca²⁺-binding properties of the Ca²⁺-regulatory site of bovine cardiac troponin*. Journal of Biological Chemistry, 257(1), 260–263.  
**Relevance:** This paper directly addresses how cTnI phosphorylation alters the calcium-binding properties of the cardiac regulatory site. It is clearly on bovine cardiac troponin, is pre-2005, and was later treated as the foundational biochemical evidence that PKA-mediated phosphorylation lowers cTnC regulatory-site Ca affinity.  
**Methodology Note:** Fluorescence-based binding assay is strongly suggested by indexing terms.  
**Flags/Caveats:** No abstract was exposed in the accessible source view, so I could verify the paper and topic but not extract a numeric affinity constant from the retrieved text. citeturn34search0turn35search0

Best-effort extraction from the accessible source text follows. citeturn34search0turn35search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Robertson 1982 | Bovine | “bovine cardiac troponin” |  |  | Whole cardiac troponin | “the Ca2+-regulatory site of bovine cardiac troponin” | Fluorescence |  |  |  |  |  |

**Citation:** Barskaya, N. V., & Gusev, N. B. (1982). *Biological activities of bovine cardiac-muscle troponin C C-terminal peptide (residues 84–161)*. Biochemical Journal, 207(2), 185–192.  
**Relevance:** Although framed as a peptide paper, the abstract explicitly reports Ca-binding constants for both the isolated cTnC C-terminal peptide and native bovine cardiac TnC, with and without 2 mM Mg²⁺. That makes it a valuable primary source for the structural sites III/IV and Mg competition.  
**Methodology Note:** Direct cation-binding characterization of native cTnC and the C-terminal peptide.  
**Flags/Caveats:** These values describe the C-terminal high-affinity structural sites rather than the low-affinity regulatory site II. citeturn29search2

Best-effort extraction from the accessible source text follows. citeturn29search2

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Barskaya 1982 | Bovine | “bovine cardiac-muscle troponin C” |  |  | C-terminal peptide 84–161 | “the C-terminal peptide (residues 84-161) was isolated” | Ca-binding assay | 0 |  | 2.0 × 10^8 | 0.0050 | “These sites bind Ca2+ with a binding constant of 2.0 X 10(8) M-1.” |
| Barskaya 1982 | Bovine | “bovine cardiac-muscle troponin C” |  |  | C-terminal peptide 84–161 | same as above | Ca-binding assay | 2.0 | “In the presence of 2 mM-Mg2+...” | 3.7 × 10^7 | 0.0270 | “In the presence of 2 mM-Mg2+ the binding constant for Ca2+ is decreased to 3.7 X 10(7) M-1.” |
| Barskaya 1982 | Bovine | “bovine cardiac-muscle troponin C” |  |  | Isolated cTnC | “The corresponding constants for native troponin C...” | Ca-binding assay | 0 |  | 5.9 × 10^7 | 0.0170 | “The corresponding constants for native troponin C are 5.9 X 10(7) M-1...” |
| Barskaya 1982 | Bovine | “bovine cardiac-muscle troponin C” |  |  | Isolated cTnC | same as above | Ca-binding assay | 2.0 | “...and 2.9 X 10(7) M-1 respectively.” | 2.9 × 10^7 | 0.0345 | “...and 2.9 X 10(7) M-1 respectively.” |

**Citation:** Gusev, N. B., & Barskaya, N. V. (1984). *Investigation of cation-binding properties of cardiac troponin C peptides by circular-dichroism spectroscopy*. Biochemical Journal, 220(1), 315–320.  
**Relevance:** This paper reports half-maximal Ca²⁺ values for intact bovine cardiac TnC and for isolated peptide fragments, including the central peptide that contains the regulatory site II. It is especially useful because it gives a rare pre-2005 apparent site-II Ca half-saturation value on a cardiac TnC fragment.  
**Methodology Note:** Circular dichroism spectroscopy.  
**Flags/Caveats:** The reported numbers are half-maximal spectral changes, not explicitly microscopic Kd values. I treated them as apparent K(µM) values for a best-effort harmonized table and marked them as calculated. citeturn29search3turn27search1

Best-effort extraction from the accessible source text follows. citeturn29search3turn27search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gusev 1984 | Bovine | “Bovine cardiac troponin C” |  |  | Isolated cTnC | “Bovine cardiac troponin C was cleaved...” | Circular dichroism | 0 |  | 3.13 × 10^7 (calc) | 0.032 (apparent) | “The half-maximal changes in the ellipticity of troponin C were observed at 32 nM-Ca2+...” |
| Gusev 1984 | Bovine | “Bovine cardiac troponin C” |  |  | C-terminal peptide 84–161 | “the C-terminal peptide are 7.1 nM for Ca2+” | Circular dichroism | 0 |  | 1.41 × 10^8 (calc) | 0.0071 (apparent) | “The corresponding values for the C-terminal peptide are 7.1 nM for Ca2+...” |
| Gusev 1984 | Bovine | “Bovine cardiac troponin C” |  |  | Central peptide 35–83 | “The central peptide (residues 35-83) containing the second cation-binding site...” | Circular dichroism | 0 |  | 1.25 × 10^4 (calc) | 80 (apparent) | “The half-maximal changes in the ellipticity occur at 80 microM-Ca2+.” |

**Citation:** Morimoto, S., & Ohtsuki, I. (1994). *Ca²⁺ binding to cardiac troponin C in the myofilament lattice and its relation to the myofibrillar ATPase activity*. European Journal of Biochemistry, 226(2), 597–602.  
**Relevance:** This paper is unusually important because it measures cTnC Ca binding in the intact cardiac myofilament lattice rather than only in isolated protein. It explicitly maps the two classes of binding sites onto sites III/IV and site II and compares ATP-present versus ATP-absent conditions.  
**Methodology Note:** Direct myofibrillar Ca-binding assay using a background-subtraction method.  
**Flags/Caveats:** The accessible abstract exposed qualitative affinity shifts and cooperativity but not numerical Kd/Ka values. citeturn21search1turn38search10

Best-effort extraction from the accessible source text follows. citeturn21search1turn38search10

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Morimoto 1994 | Porcine | “isolated porcine cardiac myofibrils” |  |  | Myofilament lattice | “The Ca(2+)-binding properties of troponin C in the intact myofilament lattice...” | Direct myofibrillar Ca-binding assay |  |  |  |  | “In the presence of ATP, positive cooperativity was observed in the Ca2+ binding of class-2 sites...” |
| Morimoto 1994 | Porcine | “isolated porcine cardiac myofibrils” |  |  | Myofilament lattice | same as above | Direct myofibrillar Ca-binding assay |  |  |  |  | “In the absence of ATP, a marked increase in the affinity of only class-2 sites was observed while the cooperativity was lost.” |

**Citation:** Moyes, C. D., Borgford, T., LeBlanc, L., & Tibbits, G. F. (1996). *Cloning and expression of salmon cardiac troponin C: titration of the low-affinity Ca²⁺-binding site using a tryptophan mutant*. Biochemistry, 35(36), 11756–11762.  
**Relevance:** This is a direct site-II titration paper using a salmonid cardiac isoform, and it gives an explicit pCa-based half-saturation value for the low-affinity site. It is one of the most useful species-comparison anchors for the later trout-versus-mammal literature.  
**Methodology Note:** Intrinsic tryptophan fluorescence titration using ScTnC-FW27.  
**Flags/Caveats:** The abstract exposed the pCa midpoint but not Mg concentration or temperature. K(µM) and Kd(M^-1) were calculated from the reported pCa midpoint. citeturn25search4turn25search1

Best-effort extraction from the accessible source text follows. citeturn25search4turn25search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Moyes 1996 | Salmonid trout | “Salmonid (Oncorhynchus mykiss) cTnC was cloned...” |  |  | Isolated recombinant cTnC | “A single tryptophan residue was introduced...” | Intrinsic tryptophan fluorescence titration |  |  | 2.14 × 10^5 (calc) | 4.68 (calc) | “The Ca(2+)-binding constant (K1/2 = 5.33 pCa units)...” |

**Citation:** Putkey, J. A., Liu, W., Lin, X., Ahmed, S., Zhang, M., Potter, J. D., & Kerrick, W. G. L. (1997). *Fluorescent probes attached to Cys 35 or Cys 84 in cardiac troponin C are differentially sensitive to Ca²⁺-dependent events in vitro and in situ*. Biochemistry, 36(4), 970–978.  
**Relevance:** This is a primary fluorescence study explicitly tying IAANS-reported pCa50 behavior to direct Ca²⁺-dependent cTnC events in isolated complexes and in skinned cardiac fibers. It is particularly useful for understanding how probe position and complex state alter apparent Ca sensitivity.  
**Methodology Note:** IAANS fluorescence on engineered cTnC monocysteine constructs.  
**Flags/Caveats:** The accessible abstract exposed qualitative pCa50 relationships, not exact pCa50 numbers. The in situ fiber solution exposed 1 mM Mg²⁺, but that condition may not match every in vitro experiment in the paper. citeturn31search1turn31search0

Best-effort extraction from the accessible source text follows. citeturn31search1turn31search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Putkey 1997 | Chicken | “primary structure of chicken cTnC” |  |  | Reconstituted skinned cardiac fibers / cTnC-cTnI contexts | “When incorporated in situ into skinned cardiac muscle fibers...” | IAANS fluorescence | 1.0 | “Standard solutions contained ... 1 mM Mg2+ ...” |  |  | “native cTnC with IAANS bound to both Cys 35 and Cys 84 showed a pCa50 of fluorescence which preceded that of force...” |

**Citation:** Gillis, T. E., Marshall, C. R., Xue, X.-H., Borgford, T. J., & Tibbits, G. F. (2000). *Ca²⁺ binding to cardiac troponin C: effects of temperature and pH on mammalian and salmonid isoforms*. American Journal of Physiology-Regulatory, Integrative and Comparative Physiology, 279(5), R1707–R1715.  
**Relevance:** This is one of the most directly relevant comparative papers for the requested dataset because it explicitly varies species, temperature, and pH while monitoring site-II Ca sensitivity. It is central for understanding why trout cardiac contractility remains relatively cold tolerant.  
**Methodology Note:** Fluorescence titration of site II using F27W reporters.  
**Flags/Caveats:** The abstract gives fold-changes and ΔK1/2 shifts rather than the full underlying absolute table for every condition, so several cells remain blank. citeturn18search0

Best-effort extraction from the accessible source text follows. citeturn18search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gillis 2000 | Bovine | “bovine cTnC (BcTnC)” | 21 | “At 21 degrees C, pH 7.0...” | Isolated cTnC site II reporter | “F27W mutants were used to measure changes in fluorescence with in vitro Ca(2+) titrations of site II...” | Fluorescence titration |  |  |  |  | “At 21 degrees C, pH 7.0 ... ScTnC was 2.29-fold more sensitive to Ca(2+) than BcTnC.” |
| Gillis 2000 | Rainbow trout | “rainbow trout, Oncorhynchus mykiss” | 21 | “At 21 degrees C, pH 7.0...” | Isolated cTnC site II reporter | same as above | Fluorescence titration |  |  |  |  | “At 21 degrees C, pH 7.0 ... ScTnC was 2.29-fold more sensitive to Ca(2+) than BcTnC.” |

**Citation:** Li, M. X., Saude, E. J., Wang, X., Pearlstone, J. R., Smillie, L. B., & Sykes, B. D. (2002). *Kinetic studies of calcium and cardiac troponin I peptide binding to human cardiac troponin C using NMR spectroscopy*. European Biophysics Journal, 31(4), 245–256.  
**Relevance:** This paper is one of the strongest pre-2005 human cTnC entries because it directly reports dissociation constants for site II and for sites III/IV at a stated temperature. It therefore provides a clean human benchmark for both regulatory and structural sites.  
**Methodology Note:** 2D ^1H,^15N HSQC NMR spectroscopy.  
**Flags/Caveats:** This is an NMR/kinetics paper, but the abstract explicitly exposed equilibrium Kd values, so the conversion into Ka and K(µM) is straightforward. Mg²⁺ conditions were not exposed in the accessible abstract. citeturn23search0turn23search1

Best-effort extraction from the accessible source text follows. citeturn23search0turn23search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Li 2002 | Human | “human cardiac troponin C (cTnC)” | 30 | “...at 30 °C.” | Isolated human cTnC, sites III/IV | “sites III and IV exhibit 100-fold higher Ca2+ affinity than site II” | 2D HSQC NMR |  |  | 5.0 × 10^6 (calc) | 0.2 | “K_D(III,IV)≈0.2 μM” |
| Li 2002 | Human | “human cardiac troponin C (cTnC)” | 30 | “...at 30 °C.” | Isolated human cTnC, site II | same as above | 2D HSQC NMR |  |  | 5.0 × 10^4 (calc) | 20 | “K_D(II)≈20 μM” |

**Citation:** Gillis, T. E., Moyes, C. D., & Tibbits, G. F. (2003). *Sequence mutations in teleost cardiac troponin C that are permissive of high Ca²⁺ affinity of site II*. American Journal of Physiology-Cell Physiology, 284(5), C1176–C1184.  
**Relevance:** This follow-up paper is directly about why trout cTnC site II binds Ca more tightly than mammalian cTnC. It is one of the better species-comparison mutation papers and is relevant to any dataset trying to separate sequence, species, and temperature effects.  
**Methodology Note:** Intrinsic fluorescent reporter F27W monitoring site-II binding.  
**Flags/Caveats:** The accessible abstract exposed relative affinity changes rather than absolute Kd/Ka values for each construct. citeturn37search0turn25search2

Best-effort extraction from the accessible source text follows. citeturn37search0turn25search2

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gillis 2003 | Trout vs mammalian | “trout cTnC (ScTnC) having twice the Ca(2+) affinity of mammalian cTnC (McTnC) over a broad range of temperatures” |  | “over a broad range of temperatures” | Isolated cTnC site II reporters | “monitoring an intrinsic fluorescent reporter that monitors Ca(2+) binding to site II (F27W)” | Intrinsic fluorescence |  |  |  |  | “ScTnC having twice the Ca(2+) affinity of mammalian cTnC (McTnC) over a broad range of temperatures.” |

**Citation:** Tikunova, S. B., & Davis, J. P. (2004). *Designing calcium-sensitizing mutations in the regulatory domain of cardiac troponin C*. Journal of Biological Chemistry, 279(34), 35341–35352.  
**Relevance:** This is the most useful late pre-2005 engineered-human cTnC paper for direct site-II affinity under explicitly defined buffer, temperature, and Mg conditions. Even if one is interested mainly in wild-type controls, the paper gives a clean baseline for the F27W reporter plus Mg competition context.  
**Methodology Note:** Steady-state tryptophan fluorescence titration plus stopped-flow kinetics.  
**Flags/Caveats:** The accessible text exposed the baseline WT-like F27W no-Mg value and the full measurement conditions, but not the complete numeric table for every Mg-containing condition. citeturn24search0turn24search1

Best-effort extraction from the accessible source text follows. citeturn24search0turn24search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Tikunova 2004 | Human | “human cardiac troponin C” | 15 | “All of the steady state fluorescence measurements were performed ... at 15 °C.” | Isolated cTnC^F27W regulatory domain reporter | “to follow calcium binding ... with the regulatory N-terminal domain ... making a fluorescent cardiac troponin C^F27W” | Trp fluorescence | 0 | “in the absence ... of 3 mM MgCl2” | 1.43 × 10^5 (calc) | 7.0 | “In the absence of Mg2+ ... cTnC^F27W exhibited a half-maximal Ca2+-dependent increase in its Trp fluorescence at 7 ± 1 μM.” |

## Excluded promising papers

The following papers looked relevant during screening but were rejected from the final included set because they were structural-only, kinetic-only without an equilibrium affinity metric visible in the accessible record, or primarily about drugs/force rather than cTnC Ca-binding constants:

- Dong, W., Rosenfeld, S. S., Wang, C. K., Gordon, A. M., & Cheung, H. C. (1996). *Kinetic studies of calcium binding to the regulatory site of troponin C from cardiac muscle* — **Rejected for final dataset:** excellent kinetics paper, but the accessible record exposed rate constants rather than a usable equilibrium Kd/Ka/pCa50/K1/2 for the requested affinity table. citeturn32search0turn32search1
- Hazard, A. L., Kohout, S. C., Stricker, N. L., Putkey, J. A., & Falke, J. J. (1998). *The kinetic cycle of cardiac troponin C: calcium binding and dissociation at site II trigger slow conformational rearrangements* — **Rejected for final dataset:** strongly relevant to kinetics, but the accessible record did not expose an equilibrium affinity metric for direct table harmonization. citeturn38search14
- Dong, W. J., & Cheung, H. C. (1996). *Calcium-induced conformational change in cardiac troponin C studied by fluorescence probes attached to Cys-84* — **Rejected:** conformational spectroscopy without an exposed affinity constant in the accessible record. citeturn31search2turn31search3
- Pollesello, P., et al. (1994). *Binding of a new Ca²⁺ sensitizer, levosimendan, to recombinant human cardiac troponin C* — **Rejected:** primarily drug binding, not a primary calcium-affinity paper in the accessible snippet. citeturn37search1
- Haikala, H., et al. (1995). *Cardiac troponin C as a target protein for a novel calcium sensitizing drug, levosimendan* — **Rejected:** calcium-dependent drug-retention/conformation study, but not a usable cTnC calcium-binding affinity dataset in the accessible record. citeturn36search6
- Li, M. X., Spyracopoulos, L., & Sykes, B. D. (1999). *Binding of cardiac troponin-I147-163 induces a structural opening in human cardiac troponin-C* — **Rejected:** primary peptide-binding paper, not a direct calcium-affinity paper. citeturn19search0turn19search1

## Coverage assessment

The retained literature clusters into four useful buckets. The earliest foundation papers established that cardiac systems have **two high-affinity structural Ca/Mg sites and one lower-affinity regulatory Ca site** and that Mg depresses the high-affinity interaction strongly in whole troponin and, to a lesser extent, in isolated cTnC. The domain/peptide papers then separated the structural C-terminal sites from the regulatory site II. The 1990s and early 2000s added in situ and comparative physiology work, especially myofilament-lattice measurements and trout-versus-mammal temperature studies. Finally, the late pre-2005 human papers supplied explicit site-II and III/IV Kd estimates under defined temperatures using NMR and fluorescence reporters. citeturn33search0turn29search2turn29search3turn21search1turn18search0turn23search0turn24search0

The dataset is strongest for **bovine/beef**, **human**, and **salmonid/trout** systems; for **isolated cTnC**, **whole troponin**, and **myofilament-lattice** states; and for **Mg competition at the structural sites**. It is much weaker for fully quantified combinations of **temperature + Mg + species + exact complex state** in the same paper, especially before the 2000s. That is not a bug in the search so much as a feature of the literature: many older papers fixed one of those variables, reported only relative shifts, or did not expose the numerical table in the accessible record. citeturn28search0turn33search0turn21search1turn18search0turn25search2turn23search0

**Summary statistics:**  
Included primary papers: **14**  
Excluded promising papers: **6**  
Best-effort extracted data rows: **27**  
Coverage assessment: **good for foundational affinity architecture and species comparisons, moderate for human site-resolved affinities, weak for fully harmonized temperature/Mg matrices across all complexes**.

## Open questions and limitations

The biggest limitation is accessibility, not topic scarcity. Several clearly relevant pre-2005 papers were discoverable, but their accessible source views exposed only titles, indexing, or qualitative abstracts, not the underlying numeric tables. That is why some rows above are sparse. A second limitation is nomenclature drift: older papers often report **whole troponin** or **troponin fragments** rather than today’s cleaner “isolated site II” framing, so some apparent K values are macroscopic or apparent half-saturation values rather than microscopic site-specific dissociation constants. I flagged those cases explicitly rather than laundering them into fake precision.