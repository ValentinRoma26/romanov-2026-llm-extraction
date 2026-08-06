# Cardiac Troponin C Calcium Binding Kinetics Before 2005

## Scope and screening logic

I screened pre-2005 primary literature records surfaced through PubMed-indexed records, publisher pages, PMC-linked records, searchable PDF scans, and abstract aggregators. I kept only studies centered on **cardiac troponin C** or **cardiac troponin complexes** where the paper itself clearly dealt with calcium binding, calcium-dependent conformational transitions tied to site II or sites III/IV, or Mg/Ca exchange at cTnC-relevant sites. I treated the user’s requested columns exactly as specified: **“Kd (M^-1)” = association constant** and **“K (uM)” = dissociation constant**. When a paper reported pCa or K1/2 instead of Kd/Ka, I converted those values to μM and M^-1 from the quoted raw value. citeturn20search1turn30search0turn23view0turn17view0turn40view0

The practical bottleneck was not the existence of relevant papers, but **machine-readable access** to older full text. Several older papers were clearly on-point from the title and abstract alone, but their searchable record did not expose the exact temperature, Mg^2+, or numeric affinity values in the accessible excerpt. I therefore split the report into two tiers: **papers with extractable quantitative rows** and **additional likely-qualifying primary papers** where the record strongly supports relevance but not full row-level extraction. Search exhausted at that point without fabricating missing conditions. citeturn45search0turn46search0turn34search1turn48search1turn56search0turn51view0

## Papers with extractable affinity data

**Citation:** Johnson, J. D., Collins, J. H., Robertson, S. P., & Potter, J. D. (1980). *A fluorescent probe study of Ca2+ binding to the Ca2+-specific sites of cardiac troponin and troponin C*. *Journal of Biological Chemistry, 255*(20), 9635–9640.  
**Relevance:** This is a foundational primary study on calcium binding to cardiac troponin C and reconstituted whole cardiac troponin. The abstract directly reports association constants for Ca^2+-specific binding transitions in isolated labeled cTnC and in reconstituted cardiac troponin, which makes it usable under the prompt’s conversion rules.  
**Methodology note:** IAANS fluorescence on labeled cardiac troponin C and reconstituted whole troponin.  
**Flags/Caveats:** Accessible excerpt did **not** expose temperature or Mg^2+ concentration. The weaker ~5 × 10^2 M^-1 phase is likely a secondary fluorescence phase rather than the physiological regulatory-site affinity; I retained it because it is explicitly reported by the paper. citeturn20search1

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Johnson 1980 |  |  |  |  | Isolated cTnC | “Cardiac troponin C (C-TnC) was labeled…” | IAANS fluorescence |  |  | 4.50 × 10^5 | 2.22 | “C-TnCIA… [shows] Ca2+ binding to two lower affinity Ca2+-specific sites with KCa of approximately 4.5 × 10(5) M-1 and approximately 5 × 10(2) M-1.” |
| Johnson 1980 |  |  |  |  | Isolated cTnC | “Cardiac troponin C (C-TnC) was labeled…” | IAANS fluorescence |  |  | 5.00 × 10^2 | 2000 | “C-TnCIA… [shows] Ca2+ binding to two lower affinity Ca2+-specific sites with KCa of approximately 4.5 × 10(5) M-1 and approximately 5 × 10(2) M-1.” |
| Johnson 1980 |  |  |  |  | Whole Troponin | “This fluorescent reconstituted whole troponin…” | IAANS fluorescence |  |  | 3.00 × 10^6 | 0.333 | “This fluorescent reconstituted whole troponin undergoes a 25% decrease with Ca2+ binding to a Ca2+-specific site of KCa approximately 3 × 10(6) M-1.” |

Source note: all quoted values above come from the PubMed record’s abstract excerpt. citeturn20search1

**Citation:** Holroyde, M. J., Robertson, S. P., Johnson, J. D., Solaro, R. J., & Potter, J. D. (1980). *The calcium and magnesium binding sites on cardiac troponin and their role in the regulation of myofibrillar adenosine triphosphatase*. *Journal of Biological Chemistry, 255*(24), 11688–11693.  
**Relevance:** This is one of the key pre-2005 direct-binding papers because the abstract explicitly reports Ca^2+ association constants for both cardiac troponin and isolated cardiac troponin C, and it also states a defined MgCl_2 condition. It is especially valuable because it separates high-affinity structural-like sites from the lower-affinity regulatory site behavior.  
**Methodology note:** Direct Ca/Mg binding characterization of cardiac troponin and isolated cardiac troponin C; the abstract does not expose the assay name in the accessible snippet.  
**Flags/Caveats:** Temperature was not visible in the accessible abstract. For the Mg-containing whole-troponin row, the abstract explicitly gives the altered affinity only for the high-affinity sites. citeturn30search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Holroyde 1980 |  |  |  |  | Whole Troponin | “Cardiac Tn binds 3 mol Ca2+/mol…” | Direct binding assay | 0 |  | 3.00 × 10^8 | 0.00333 | “Cardiac Tn binds 3 mol Ca2+/mol and contains two Ca2+-binding sites with a binding constant of 3 × 10(8) M-1…” |
| Holroyde 1980 |  |  |  |  | Whole Troponin | “Cardiac Tn binds 3 mol Ca2+/mol…” | Direct binding assay | 0 |  | 2.00 × 10^6 | 0.500 | “…and one binding site with a binding constant of 2 × 10(6) M-1.” |
| Holroyde 1980 |  |  |  |  | Whole Troponin | “The Ca2+-binding properties of the complex of TnC and TnI… were similar to those of Tn.” | Direct binding assay | 4.0 | “In the presence of 4 mM MgCl2…” | 3.00 × 10^7 | 0.0333 | “In the presence of 4 mM MgCl2, the binding constant of the sites of higher affinity is reduced to 3 × 10(7) M-1…” |
| Holroyde 1980 |  |  |  |  | Isolated cTnC | “Cardiac TnC also binds 3 mol of Ca2+/mol…” | Direct binding assay | 0 |  | 1.00 × 10^7 | 0.100 | “Cardiac TnC also binds 3 mol of Ca2+/mol and contains two sites with a binding constant of 1 × 10(7) M-1…” |
| Holroyde 1980 |  |  |  |  | Isolated cTnC | “Cardiac TnC also binds 3 mol of Ca2+/mol…” | Direct binding assay | 0 |  | 2.00 × 10^5 | 5.00 | “…and a single site with a binding constant of 2 × 10(5) M-1.” |

Source note: all quoted values above come from the PubMed abstract snippet. citeturn30search0

**Citation:** Dong, W.-J., Wang, C.-K., Gordon, A. M., Rosenfeld, S. S., & Cheung, H. C. (1997). *A kinetic model for the binding of Ca2+ to the regulatory site of troponin from cardiac muscle*. *Journal of Biological Chemistry, 272*(31), 19229–19235.  
**Relevance:** This is one of the strongest pre-2005 papers for the present prompt because the searchable full-text PDF exposes species, temperature, Mg^2+, protein state, and equilibrium binding constants for isolated cTnC, binary cTnC–cTnI, fully reconstituted troponin, and phosphorylated complexes. It directly compares how troponin assembly and cTnI phosphorylation alter site-II Ca^2+ affinity.  
**Methodology note:** IAANS-labeled monocysteine cTnC mutants; stopped-flow fluorescence plus equilibrium titration.  
**Flags/Caveats:** The table line reads “p-(cTnC)” for the final phosphorylated complex row, but context makes clear this is the phosphorylated reconstituted troponin complex; I label it as “phosphorylated troponin” and flag the likely table typo. citeturn24search0turn21view0turn22view3turn23view0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Dong 1997 | Bovine | “left ventricles of fresh bovine hearts” | 4 | “The kinetic measurements were made at pH 7.2 and 4 °C” | Isolated cTnC mutant | “The corresponding parameters for isolated cTnC are also included in Table II” | IAANS stopped-flow / titration | 3.0 | “3 mM MgCl2” | 3.20 × 10^5 | 3.13 | “cTnC mutant … Keq 3.2 (1.2)” |
| Dong 1997 | Bovine | “left ventricles of fresh bovine hearts” | 4 | “The kinetic measurements were made at pH 7.2 and 4 °C” | cTnC–cTnI | “The binary complex cTnC-cTnI…” | IAANS stopped-flow / titration | 3.0 | “3 mM MgCl2” | 4.90 × 10^6 | 0.204 | “cTnC-cTnI … Keq 49.0 (1.5)” |
| Dong 1997 | Bovine | “left ventricles of fresh bovine hearts” | 4 | “The kinetic measurements were made at pH 7.2 and 4 °C” | Whole Troponin | “fully reconstituted cTn” | IAANS stopped-flow / titration | 3.0 | “3 mM MgCl2” | 4.73 × 10^6 | 0.211 | “cTn … Keq 47.3 (1.6)” |
| Dong 1997 | Bovine | “left ventricles of fresh bovine hearts” | 4 | “The kinetic measurements were made at pH 7.2 and 4 °C” | Phosphorylated cTnC–cTnI | “p-(cTnC-cTnI) … the binary complex … prepared with cTnI phosphorylated by PKA” | IAANS stopped-flow / titration | 3.0 | “3 mM MgCl2” | 9.20 × 10^5 | 1.09 | “p-(cTnC-cTnI) … Keq 9.2 (1.3)” |
| Dong 1997 | Bovine | “left ventricles of fresh bovine hearts” | 4 | “The kinetic measurements were made at pH 7.2 and 4 °C” | Phosphorylated Troponin | “p-(cTn) are … reconstituted troponin prepared with cTnI phosphorylated by PKA” | IAANS stopped-flow / titration | 3.0 | “3 mM MgCl2” | 8.70 × 10^5 | 1.15 | “p-(cTnC) … Keq 8.7 (1.4)” |

Source note: species, temperature, Mg^2+, complex identity, and Keq values are all taken from the searchable PDF text; μM values are calculated from the quoted Keq values. citeturn21view0turn22view3turn23view0

**Citation:** Gillis, T. E., Liang, B., Chung, F., & Tibbits, G. F. (2000). *Ca2+ binding to cardiac troponin C: effects of temperature and pH on mammalian and salmonid isoforms*. *American Journal of Physiology-Regulatory, Integrative and Comparative Physiology, 279*, R1707–R1715.  
**Relevance:** This is probably the cleanest pre-2005 paper for comparative condition-mapping because the full PDF reports species, temperatures, pH values, buffer composition, protein state, and pCa at half-maximal fluorescence for bovine versus trout cTnC. It directly addresses two of the prompt’s central modifiers: **temperature** and **species**.  
**Methodology note:** Recombinant F27W cTnC tryptophan fluorescence titration.  
**Flags/Caveats:** The buffer composition shown in the accessible PDF contains no Mg^2+ salt for the titration buffers used; I therefore record Mg as **0 mM (assumed from explicit buffer composition)**. K values below are converted from the reported pCa at half-maximal fluorescence. citeturn13view0turn15view0turn17view0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gillis 2000 | Bovine | “bovine cardiac troponin C (BcTnC)” | 7 | “7.0°C” | Isolated cTnC | “the recombinant cTnCs were studied in isolation from troponin I and troponin T” | Trp fluorescence | 0 (assumed) | “Buffers E–H all contained… 1.0 EGTA, 0.03 CaCl2, 112.0 KCl and 50 [mM buffer]” | 9.33 × 10^4 | 10.7 | “BcTnC 4.97 ± 0.04” |
| Gillis 2000 | Bovine | “bovine cardiac troponin C (BcTnC)” | 7 | “7.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 2.09 × 10^6 | 0.479 | “BcTnC 6.32 ± 0.08” |
| Gillis 2000 | Bovine | “bovine cardiac troponin C (BcTnC)” | 21 | “21.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 1.95 × 10^5 | 5.13 | “BcTnC 5.29 ± 0.04” |
| Gillis 2000 | Bovine | “bovine cardiac troponin C (BcTnC)” | 21 | “21.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 2.69 × 10^5 | 3.72 | “BcTnC 5.43 ± 0.03” |
| Gillis 2000 | Bovine | “bovine cardiac troponin C (BcTnC)” | 37 | “37.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 2.63 × 10^5 | 3.80 | “BcTnC 5.42 ± 0.02” |
| Gillis 2000 | Trout salmonid | “Oncorhynchus mykiss (ScTnC)” | 7 | “7.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 1.70 × 10^5 | 5.89 | “ScTnC 5.23 ± 0.03” |
| Gillis 2000 | Trout salmonid | “Oncorhynchus mykiss (ScTnC)” | 7 | “7.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 3.80 × 10^6 | 0.263 | “ScTnC 6.58 ± 0.03” |
| Gillis 2000 | Trout salmonid | “Oncorhynchus mykiss (ScTnC)” | 21 | “21.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 4.47 × 10^5 | 2.24 | “ScTnC 5.65 ± 0.04” |
| Gillis 2000 | Trout salmonid | “Oncorhynchus mykiss (ScTnC)” | 21 | “21.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 6.17 × 10^5 | 1.62 | “ScTnC 5.79 ± 0.05” |
| Gillis 2000 | Trout salmonid | “Oncorhynchus mykiss (ScTnC)” | 37 | “37.0°C” | Isolated cTnC | same as above | Trp fluorescence | 0 (assumed) | same as above | 2.57 × 10^6 | 0.389 | “ScTnC 6.41 ± 0.02” |

Source note: the pCa values come from Table 2 in the article PDF; species and protein-state wording come from the figure caption and discussion; Mg^2+ is inferred as absent from the titration buffers because the listed compositions omit Mg salts entirely. citeturn15view0turn16view1turn17view0

**Citation:** Li, M. X., Saude, E. J., Wang, X., Pearlstone, J. R., Smillie, L. B., & Sykes, B. D. (2002). *Kinetic studies of calcium and cardiac troponin I peptide binding to human cardiac troponin C using NMR spectroscopy*. *European Biophysics Journal, 31*(4), 245–256.  
**Relevance:** This paper is especially useful because it reports human cTnC values, gives an explicit temperature, and separates site II from sites III/IV using NMR. It is one of the clearest pre-2005 records exposing a direct **human cTnC** dissociation constant for the regulatory site.  
**Methodology note:** 2D {^1H,^15N} HSQC NMR spectroscopy.  
**Flags/Caveats:** The accessible abstract did not expose Mg^2+ conditions. The “sites III and IV” value appears as a combined high-affinity assignment in the abstract, so I treat that as a pooled high-affinity row rather than separate site-III and site-IV rows. citeturn39search1turn40view0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Li 2002 | Human | “human cardiac troponin C (cTnC)” | 30 | “obtain the dissociation (KD) and off-rate (koff) constants at 30 °C” | Isolated cTnC | “human cardiac troponin C (cTnC)” | 2D {^1H,^15N} HSQC NMR |  |  | 5.00 × 10^6 | 0.200 | “sites III and IV exhibit 100-fold higher Ca2+ affinity than site II [KD(III,IV)≈0.2 μM, KD(II)≈20 μM]” |
| Li 2002 | Human | “human cardiac troponin C (cTnC)” | 30 | “obtain the dissociation (KD) and off-rate (koff) constants at 30 °C” | Isolated cTnC | “human cardiac troponin C (cTnC)” | 2D {^1H,^15N} HSQC NMR |  |  | 5.00 × 10^4 | 20.0 | “sites III and IV exhibit 100-fold higher Ca2+ affinity than site II [KD(III,IV)≈0.2 μM, KD(II)≈20 μM]” |

Source note: the quoted temperature and KD values come from the article abstract reproduced on the publisher/Academia records; Ka values are direct inversions of the quoted KD values. citeturn39search1turn40view0

## Additional likely-qualifying primary papers with limited extraction

**Citation:** Burtnick, L. D., & Kay, C. M. (1977). *The calcium-binding properties of bovine cardiac troponin C*. *FEBS Letters, 75*(1), 105–110.  
**Relevance:** The title itself is almost a perfect match to the present prompt: bovine cTnC, calcium-binding properties, and a pre-2005 primary record. I am retaining it as a likely-qualifying paper, but I could not extract row-level affinity values from the accessible abstract-free record.  
**Methodology note:** Not exposed in the reachable record.  
**Flags/Caveats:** No abstract was available in the accessible PubMed record, so temperature, Mg^2+, and exact values would need full-text retrieval to populate the dataset properly. citeturn45search0turn45search1

**Citation:** Leavis, P. C., & Kraft, E. L. (1978). *Calcium binding to cardiac troponin C*. *Archives of Biochemistry and Biophysics, 186*(2), 411–415.  
**Relevance:** This is another title-level bullseye for the prompt and an early primary paper focused squarely on cTnC calcium binding. It is probably important historically, but the accessible record did not expose the experimental conditions or numeric constants.  
**Methodology note:** Not exposed in the reachable record.  
**Flags/Caveats:** No abstract available from the accessible record; full text required for extraction. citeturn46search0

**Citation:** Robertson, S. P., Johnson, J. D., Holroyde, M. J., Kranias, E. G., Potter, J. D., & Solaro, R. J. (1982). *The effect of troponin I phosphorylation on the Ca2+-binding properties of the Ca2+-regulatory site of bovine cardiac troponin*. *Journal of Biological Chemistry, 257*(1), 260–263.  
**Relevance:** This is a classic pre-2005 primary paper directly on the Ca^2+-binding properties of the **bovine cardiac troponin regulatory site**, with cTnI phosphorylation as the perturbation. It clearly fits the topic and is central for understanding β-adrenergic modulation of cTnC-associated binding behavior.  
**Methodology note:** The accessible record did not expose the assay description.  
**Flags/Caveats:** The reachable title record did not include the quantitative value lines, so I did not fabricate affinity rows. citeturn34search1turn36search0

**Citation:** Jaquet, K., & Heilmeyer, L. M. G. (1987). *Influence of association and of positive inotropic drugs on calcium binding to cardiac troponin C*. *Biochemical and Biophysical Research Communications, 145*(3), 1390–1396.  
**Relevance:** This paper looks highly relevant because the accessible summary states that isolated **bovine** cTnC forms Mg^2+-dependent dimers and that this dimerization correlates with decreased Ca^2+ affinity; it also tests positive inotropic drugs. That makes it both mechanistically relevant and explicitly tied to Mg^2+.  
**Methodology note:** The accessible summary does not expose the full assay protocol.  
**Flags/Caveats:** The numeric affinity values were not visible in the machine-readable excerpt, so this remains a strong identification but a weak extraction candidate without the full paper. citeturn48search1turn48search8

**Citation:** Pan, B. S. (1990). *Slowly exchanging calcium binding sites unique to cardiac troponin C*. *Journal of Molecular and Cellular Cardiology*.  
**Relevance:** The accessible abstract snippet states that the paper presents evidence for slowly exchanging Ca^2+-binding sites in troponin C of cardiac and slow-twitch skeletal muscles. That makes it directly relevant to the kinetic side of the prompt, especially for structural-site exchange behavior.  
**Methodology note:** Not fully exposed in the abstract snippet.  
**Flags/Caveats:** The accessible snippet did not expose Kd/Ka/K1/2 values, so I did not create data rows from it. citeturn56search0turn56search2

**Citation:** Dong, W. J., & Cheung, H. C. (1996). *Calcium-induced conformational change in cardiac troponin C studied by fluorescence probes attached to Cys-84*. *Biochimica et Biophysica Acta, 1295*, 139–146.  
**Relevance:** This paper clearly belongs in the cTnC binding literature because it follows Ca^2+-induced conformational transitions in **bovine** cTnC using site-specific fluorescent probes. It is especially relevant as a methodological precursor to the later Dong kinetic studies.  
**Methodology note:** Steady-state and time-resolved fluorescence of Cys-84-labeled cTnC.  
**Flags/Caveats:** The accessible abstract summary did not expose the equilibrium affinity constants themselves. citeturn38search1turn38search4turn38search19

**Citation:** Putkey, J. A., Liu, W., Lin, X., Ahmed, S., Zhang, M., Potter, J. D., & Kerrick, W. G. L. (1997). *Fluorescent probes attached to Cys 35 or Cys 84 in cardiac troponin C are differentially sensitive to Ca2+-dependent events in vitro and in situ*. *Biochemistry, 36*(4), 970–978.  
**Relevance:** The abstract explicitly says that IAANS labeling at Cys35 can decrease the affinity of site II for Ca^2+ when cTnC is bound to cTnI, so the paper clearly concerns cTnC calcium affinity in different biochemical states. It is useful as a cautionary paper on probe placement and measured affinity.  
**Methodology note:** IAANS fluorescence on recombinant cTnC cysteine variants.  
**Flags/Caveats:** The accessible excerpt established relevance but did not expose the numerical affinity values. citeturn20search11

**Citation:** Parsons, B., Szczesna, D., Zhao, J., Van Slooten, G., Kerrick, W. G. L., Putkey, J. A., & Potter, J. D. (1997). *The effect of pH on the Ca2+ affinity of the Ca2+ regulatory sites of skeletal and cardiac troponin C in skinned muscle fibres*. *Journal of Muscle Research and Cell Motility, 18*, 599–609.  
**Relevance:** This paper is directly on the effect of **pH** on the Ca^2+ affinity of cardiac regulatory sites and uses labeled recombinant cTnC exchanged into skinned fibers. It squarely fits the prompt’s emphasis on pH-sensitive cTnC affinity, although the accessible article page did not expose the exact numeric table.  
**Methodology note:** IAANS/DANZ fluorescence in skinned fibers, measured simultaneously with force.  
**Flags/Caveats:** I did not extract pCa values because the accessible abstract page was a preview only. Also, this paper borders the user’s exclusion rule because it is a skinned-fiber study; I retained it because the abstract explicitly says the fluorescence signal reports the Ca^2+ affinity of TnC regulatory sites rather than force alone. citeturn51view0

**Citation:** Hazard, A. L., Kohout, S. C., Stricker, N. L., Putkey, J. A., & Falke, J. J. (1998). *The kinetic cycle of cardiac troponin C: Calcium binding and dissociation at site II trigger slow conformational rearrangements*. *Protein Science, 7*(11), 2451–2459.  
**Relevance:** This is a direct site-II kinetic paper on cTnC and is highly relevant conceptually because it isolates how Ca^2+ binding and dissociation at the regulatory site drive subsequent conformational transitions. It belongs to any pre-2005 cTnC kinetics bibliography even when row-level equilibrium constants are not extractable from the accessible snippet.  
**Methodology note:** IAANS-labeled wild-type/C35S cTnC followed by kinetic fluorescence measurements.  
**Flags/Caveats:** The accessible abstract clearly supports inclusion on-topic, but it did not expose equilibrium Kd/Ka values for dataset rows. citeturn29search2turn18search6

**Citation:** Gillis, T. E., Blumenschein, T. M. A., Sykes, B. D., & Tibbits, G. F. (2003). *Effect of temperature and the F27W mutation on the Ca2+ activated structural transition of trout cardiac troponin C*. *Biochemistry, 42*(21), 6418–6426.  
**Relevance:** This is a direct follow-on to the 2000 trout/bovine comparison and remains highly relevant because it examines how temperature alters the Ca^2+-activated structural transition of trout cTnC. It likely contains extractable affinity data, but the accessible record I had did not expose the numeric values.  
**Methodology note:** cTnC structural-transition measurements with the F27W reporter mutation.  
**Flags/Caveats:** No machine-readable numeric values were visible in the accessible excerpt, so I did not force them into the table. citeturn57search0turn57search1turn57search2

## Excluded near-hits

I excluded several papers that looked promising at first glance but failed the prompt’s inclusion rules, or could not be verified tightly enough without guessing.

- **Liao, Wang, & Cheung (1994), “Coupling of calcium to the interaction of troponin I with troponin C from cardiac muscle.”** Rejected because the quantitative constants exposed in the abstract are for **cTnI–cTnC complex formation**, not for Ca^2+ binding to cTnC itself. citeturn33search0turn33search3
- **Finley, Dvoretsky, & Rosevear (2000), “Magnesium–Calcium Exchange in Cardiac Troponin C Bound to Cardiac Troponin I.”** Rejected from the core dataset because the accessible record strongly supports relevance to Mg/Ca exchange at cTnC sites, but it did not expose a Kd/Ka/K1/2 value that I could responsibly enter. citeturn42search0turn42search3turn42search12
- **Harada, Arana, & Potter (2001), “Magnesium–calcium exchange with the high affinity Ca2+–Mg2+ binding sites of cardiac troponin.”** Rejected from the core dataset because the accessible record had no abstract and no visible equilibrium constants. citeturn44search0turn44search2
- **Hofmann & Fuchs (1987), “Evidence for a force-dependent component of calcium binding to cardiac troponin C.”** Rejected under the user’s force/tension exclusion, because the accessible records emphasize force-dependent behavior in skinned cardiac bundles rather than a clean standalone molecular binding dataset. citeturn53search0turn53search4
- **Hofmann & Fuchs (1987), “Effect of length and crossbridge attachment on Ca2+ binding to cardiac troponin C.”** Rejected for the same reason: highly relevant biology, but too close to the force/length-mechanics literature the prompt asked me not to center unless a direct molecular constant is available. citeturn54search0

## Coverage assessment and confidence

**Total primary papers identified as relevant or likely relevant:** 15.  
**Total papers with extractable affinity rows from accessible text/PDF:** 5.  
**Total data rows extracted:** 25.  
**Coverage assessment:** strongest for the classic lineage of **isolated cTnC**, **whole troponin**, **binary cTnC–cTnI**, **temperature effects**, and **human-vs-bovine/trout comparisons**; weaker for several 1970s–1990s papers where only title-level or abstract-level access was available. citeturn20search1turn30search0turn23view0turn17view0turn40view0

**Confidence assessment:** **Medium.** I am confident that the major pre-2005 cTnC calcium-binding papers were surfaced, and I am especially confident in the extracted-row subset because those rows come from searchable abstracts or machine-readable full-text PDFs. Confidence drops for the older title-only papers, not because they are likely irrelevant, but because the accessible records did not expose the precise conditions needed to populate the requested dataset without bluffing. In plain English: the biology is solid, the extracted numbers are solid, and the missing rows are mostly an access problem rather than a search problem. citeturn45search0turn46search0turn34search1turn48search1turn51view0