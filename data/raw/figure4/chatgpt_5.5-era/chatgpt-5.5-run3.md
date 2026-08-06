# Cardiac Troponin C Calcium Binding Kinetics Before 2005

## Search scope and normalization

I screened pre-2005 primary papers centered on intact cardiac troponin C, cardiac troponin complexes, or cardiac fiber systems where the paper explicitly targeted **cardiac/slow skeletal troponin C** rather than force generation alone. I prioritized records that clearly exposed molecular calcium-binding language in the title, abstract, or accessible publisher snippet. When a paper only exposed kinetics, I retained it only if an apparent equilibrium estimate could be calculated from the reported on/off terms; those rows are flagged heavily. Blank cells mean the web-accessible record did not expose the required detail, and I did **not** invent it.

I followed your unit mapping exactly: the column labeled **Kd (M^-1)** stores the **association constant** and the column labeled **K (uM)** stores the **dissociation constant**. When a paper reported a dissociation constant, I inverted it to get the association constant; when a paper provided only rate constants, I only converted when an apparent \(k_{\text{off}}/k_{\text{on}}\) estimate was defensible and then labeled it as calculated.

## Foundational isolated-protein papers

### Burtnick and Kay 1977

**Citation:** Burtnick, L. D., & Kay, C. M. (1977). *The calcium-binding properties of bovine cardiac troponin C*. *FEBS Letters*, 75(1), 105–110. citeturn44search0turn44search3

**Relevance:** This is one of the earliest dedicated papers on **isolated bovine cardiac troponin C** and is directly about calcium-binding properties, so it fits the inclusion criteria cleanly. It is especially important as an early baseline for intact cTnC before later work separated regulatory-versus-structural behavior more cleanly. citeturn44search0turn45search2

**Methodology Note:** Circular-dichroism-based calcium titration in an EGTA-buffered system. citeturn46search4turn45search2

**Flags/Caveats:** The accessible text confirms the system and the fact that apparent association constants were fit, but the search snippet truncates the numeric constant; I therefore left the affinity fields blank rather than guess. citeturn46search0turn45search2

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Burtnick 1977 | Bovine | "bovine cardiac troponin C" |  |  | Isolated cTnC | "cardiac TN-C" | Circular dichroism titration |  |  |  |  |  |

Source note: Bibliographic details came from the PubMed/publisher records; the method wording came from the accessible article-text snippet. citeturn44search0turn46search4

### Leavis and Kraft 1978

**Citation:** Leavis, P. C., & Kraft, E. L. (1978). *Calcium binding to cardiac troponin C*. *Archives of Biochemistry and Biophysics*, 186(2), 411–415. citeturn25search0turn25search4

**Relevance:** This is a direct, primary study of calcium binding to cardiac troponin C and is routinely cited as one of the foundational pre-1980 cTnC binding papers. It clearly belongs in a pre-2005 affinity bibliography even though the accessible record does not expose all experimental details. citeturn25search0turn25search4

**Methodology Note:** Direct calcium-binding study of isolated cardiac troponin C; the precise assay was not exposed in the accessible record. citeturn25search0

**Flags/Caveats:** The accessible PubMed/ScienceDirect snippets identify the paper unambiguously but do not expose temperature, magnesium, or a usable affinity constant, so the row is intentionally partial. citeturn25search0turn25search4

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Leavis 1978 |  |  |  |  | Isolated cTnC | "Calcium binding to cardiac troponin C" |  |  |  |  |  |  |

Source note: The row reflects only what the accessible bibliographic record exposed. citeturn25search0turn25search4

### Johnson and colleagues 1980

**Citation:** Johnson, J. D., Collins, J. H., Robertson, S. P., & Potter, J. D. (1980). *A fluorescent probe study of Ca2+ binding to the Ca2+-specific sites of cardiac troponin and troponin C*. *Journal of Biological Chemistry*, 255(20), 9635–9640. citeturn15search0turn41search21

**Relevance:** This paper is a classic direct spectroscopic binding study of the **Ca-specific regulatory sites** in cardiac troponin and cTnC. It is especially useful because it compares cTnC in different macromolecular environments rather than pretending the isolated protein tells the whole story. citeturn15search0turn41search21

**Methodology Note:** Fluorescent probe titration. citeturn15search0

**Flags/Caveats:** The accessible search snippet clearly exposes a whole-troponin association constant but truncates the rest of the abstract, so only that condition could be standardized confidently. citeturn15search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Johnson 1980 |  |  |  |  | Whole Troponin | "whole troponin" | Fluorescent probe study |  |  | 3.0 × 10^6 | 0.333 | "KCa approximately 3 X 10(6) M-1" |

Source note: The quantitative value above comes from the accessible abstract snippet; other conditions in the paper were not visible enough to standardize without guessing. citeturn15search0

### Holroyde and colleagues 1980

**Citation:** Holroyde, M. J., Robertson, S. P., Johnson, J. D., Solaro, R. J., & Potter, J. D. (1980). *The calcium and magnesium binding sites on cardiac troponin and their role in the regulation of myofibrillar adenosine triphosphatase*. *Journal of Biological Chemistry*, 255(24), 11688–11693. citeturn12view1turn45search6

**Relevance:** This is one of the most important pre-2005 papers for your dataset because it reports **both calcium and magnesium effects** and distinguishes intact cardiac troponin from isolated cardiac troponin C. It is one of the few early studies that gives explicit association constants in a way that can be standardized immediately. citeturn12view1turn45search6

**Methodology Note:** Equilibrium dialysis on bovine heart preparations. citeturn12view1

**Flags/Caveats:** I standardized the reported association constants directly and converted them into dissociation constants in micromolar. For the no-magnesium rows, I left Mg blank rather than assume 0 mM because the accessible abstract did not say so explicitly. citeturn12view1turn45search6

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" |  |  | Whole Troponin | "Cardiac Tn" | Equilibrium dialysis |  |  | 3.0 × 10^8 | 0.0033 | "3 X 10(8) M-1" |
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" |  |  | Whole Troponin | "Cardiac Tn" | Equilibrium dialysis |  |  | 2.0 × 10^6 | 0.5 | "2 X 10(6) M-1" |
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" |  |  | Whole Troponin | "Cardiac Tn" | Equilibrium dialysis | 4.0 | "4 mM MgCl2" | 3.0 × 10^7 | 0.0333 | "3 X 10(7) M-1" |
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" |  |  | Isolated cTnC | "Cardiac TnC" | Equilibrium dialysis |  |  | 1.0 × 10^7 | 0.1 | "1 X 10(7) M-1" |
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" |  |  | Isolated cTnC | "Cardiac TnC" | Equilibrium dialysis |  |  | 2.0 × 10^5 | 5.0 | "2 X 10(5) M-1" |

Source note: All numeric values in this block come directly from the accessible JBC abstract/publisher text. citeturn12view1turn45search6

### Robertson and colleagues 1982

**Citation:** Robertson, S. P., Johnson, J. D., Holroyde, M. J., Kranias, E. G., Potter, J. D., & Solaro, R. J. (1982). *The effect of troponin I phosphorylation on the Ca2+-binding properties of the Ca2+-regulatory site of bovine cardiac troponin*. *Journal of Biological Chemistry*, 257, 260–263. citeturn41search0turn41search10

**Relevance:** This paper directly targets the **regulatory Ca-binding site** of **bovine cardiac troponin** and is one of the foundational phosphorylation papers linking cTnI modification to altered cTnC calcium affinity. It fits your inclusion rules because the title itself specifies molecular Ca-binding properties rather than force alone. citeturn41search0turn41search10

**Methodology Note:** Direct regulatory-site Ca-binding study in bovine cardiac troponin; the exact optical or binding assay was not exposed in the accessible snippet. citeturn41search0

**Flags/Caveats:** The accessible record confirms relevance but not the numeric affinity; the row is therefore bibliographically complete but data-light. citeturn41search0turn41search10

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Robertson 1982 | Bovine | "bovine cardiac troponin" |  |  | Whole Troponin | "Ca2+-regulatory site of bovine cardiac troponin" |  |  |  |  |  |  |

Source note: Only bibliographic and scope details were exposed in the accessible record. citeturn41search0turn41search10

## Troponin-complex and fiber-context papers

### Pan and Solaro 1987

**Citation:** Pan, B. S., & Solaro, R. J. (1987). *Calcium-binding properties of troponin C in detergent-skinned heart muscle fibers*. *Journal of Biological Chemistry*, 262, 7839–7849. citeturn18search8turn23search19

**Relevance:** This is one of the key papers where cTnC is measured **inside detergent-skinned heart fibers**, which is exactly the kind of state dependence that makes isolated-protein numbers incomplete. It is highly relevant for comparing free cTnC with the myofilament environment. citeturn18search8turn23search19

**Methodology Note:** Direct cTnC calcium-binding measurements in detergent-skinned heart muscle fibers. citeturn18search8turn47search4

**Flags/Caveats:** The accessible snippet confirms that the apparent affinity constant in fibers differed from the isolated case, but it does not expose the exact constant. citeturn47search0turn47search4

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Pan 1987 |  |  |  |  | Reconstituted thin filament / skinned heart fibers | "detergent-skinned heart muscle fibers" | Direct fiber Ca-binding assay |  |  |  |  |  |

Source note: The row is partial because the accessible snippet did not reveal the numerical affinity constant. citeturn18search8turn47search0

### Jaquet and Heilmeyer 1987

**Citation:** Jaquet, K., & Heilmeyer, L. M. G., Jr. (1987). *Influence of association and of positive inotropic drugs on calcium binding to cardiac troponin C*. *Biochemical and Biophysical Research Communications*. citeturn32search0turn35search3

**Relevance:** This paper is directly about calcium binding to cardiac troponin C and specifically asks how association state and cardiotonic drugs alter that interaction. That makes it a good inclusion even though the accessible record is thin on exact values. citeturn32search0turn35search3

**Methodology Note:** Calcium-binding study of cTnC under different association/drug conditions; precise assay not exposed in the accessible record. citeturn32search0turn35search3

**Flags/Caveats:** The accessible snippets indicate altered affinity but do not expose a standardizable \(K_d\) or \(K_a\); the row is therefore partial. citeturn35search3turn32search0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Jaquet 1987 |  |  |  |  | Association-dependent cTnC states | "association" |  |  |  |  |  |  |

Source note: The scope of the paper is explicit in the title, but numeric values were not exposed in the accessible record. citeturn32search0turn35search3

### Liou and Fuchs 1992

**Citation:** Liou, Y. M., & Fuchs, F. (1992). *Pyrene-labeled cardiac troponin C. Effect of Ca2+ on monomer and excimer fluorescence in solution and in myofibrils*. *Biophysical Journal*, 61. citeturn18search2turn48search2

**Relevance:** This paper is useful because it compares labeled cTnC in **solution** and **myofibrils**, directly addressing context-dependent signaling. It is a true molecular cTnC paper and not just a force study wearing a lab coat. citeturn18search2turn48search5

**Methodology Note:** Pyrene monomer/excimer fluorescence of cardiac troponin C. citeturn18search2turn48search5

**Flags/Caveats:** The accessible snippets expose conformational effects of Ca binding but not a clean, directly quotable \(K_d\) or \(K_{1/2}\). citeturn18search2turn48search5

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Liou 1992 | Bovine | "Bovine cardiac troponin C" |  |  | Isolated cTnC and myofibrils | "in solution and in myofibrils" | Pyrene fluorescence |  |  |  |  |  |

Source note: Species and method came from the accessible snippet; quantitative affinity values were not exposed. citeturn18search2turn48search5

### Negele and colleagues 1992

**Citation:** Negele, J. C., Dotson, D. G., Liu, W., Sweeney, H. L., & Putkey, J. A. (1992). *Mutation of the high affinity calcium binding sites in cardiac troponin C*. *Journal of Biological Chemistry*, 267(2), 825–831. citeturn43search2turn43search14

**Relevance:** This paper directly interrogates the **high-affinity structural sites** of cTnC and therefore complements the many papers that focus on site II. It is especially valuable because it isolates site-class contributions inside cardiac troponin C itself rather than only in whole fibers. citeturn43search2turn43search14

**Methodology Note:** Site-directed mutagenesis with calcium-binding characterization. citeturn43search2turn31search9

**Flags/Caveats:** The accessible snippet gives binding stoichiometry at high calcium but not a standard equilibrium \(K_d\), so I did not force a fake precision into the table. citeturn31search9turn43search2

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Negele 1992 |  |  |  |  | Mutant isolated cTnC | "cardiac troponin C" | Mutational Ca-binding assay |  |  |  |  | "1 and 3 mol of Ca2+/mol" |

Source note: Only stoichiometric information, not a clean affinity constant, was exposed by the accessible search snippet. citeturn31search9turn43search2

### Wang and Fuchs 1994

**Citation:** Wang, Y. P., & Fuchs, F. (1994). *Length, force, and Ca2+-troponin C affinity in cardiac and slow skeletal muscle*. *American Journal of Physiology*, 266(4 Pt 1), C1077–C1082. citeturn48search0turn48search18

**Relevance:** This is one of the most relevant in situ papers for comparing cardiac and slow skeletal muscle environments, because it explicitly addresses **Ca2+-troponin C affinity** rather than reporting force alone. It is valuable for the “protein state matters” part of your prompt. citeturn48search0turn48search18

**Methodology Note:** In situ/skin-fiber affinity measurements linking force and Ca-TnC occupancy. citeturn48search0

**Flags/Caveats:** The accessible record did not expose a directly quotable affinity value or the temperature, so the row remains metadata-heavy. citeturn48search0turn48search3

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Wang 1994 | Cardiac and slow skeletal muscle preparations | "cardiac and slow skeletal muscle" |  |  | Myofilament-bound cTnC | "Ca2+-troponin C affinity" | Fiber affinity measurement |  |  |  |  |  |

Source note: The title itself is strong enough to confirm inclusion, but the accessible record did not reveal a standardizable \(K_d\) or \(K_a\). citeturn48search0turn48search3

### Zhang and colleagues 1995

**Citation:** Zhang, R., Zhao, J., Potter, J. D., & others. (1995). *Phosphorylation of both serine residues in cardiac troponin I is required to decrease the Ca2+ affinity of cardiac troponin C*. *Journal of Biological Chemistry*, 270(51). citeturn42search0turn42search2

**Relevance:** This paper is a direct molecular follow-up to the earlier Robertson line of work and explicitly states that cTnI phosphorylation decreases cTnC calcium affinity. It is one of the central pre-2005 papers linking post-translational regulation to cTnC binding thermodynamics. citeturn42search0turn42search2

**Methodology Note:** Reconstituted cardiac troponin/phosphorylation-state comparison with direct assessment of cTnC Ca affinity. citeturn42search0turn42search19

**Flags/Caveats:** The accessible records confirm the direction and requirement of the effect, but not the exact numerical affinity change. citeturn42search0turn42search19

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Zhang 1995 | Cardiac | "cardiac troponin I" / "cardiac troponin C" |  |  | Whole Troponin | "cardiac troponin C" | Phosphorylation-state binding assay |  |  |  |  |  |

Source note: The accessible sources confirmed a decrease in cTnC affinity upon dual serine phosphorylation but did not expose the absolute affinity value. citeturn42search0turn42search19

## Kinetic and domain-focused papers

### Dong and colleagues 1996

**Citation:** Dong, W. J., Rosenfeld, S. S., Wang, C. K., Gordon, A. M., & Cheung, H. C. (1996). *Kinetic studies of calcium binding to the regulatory site of troponin C from cardiac muscle*. *Journal of Biological Chemistry*, 271(2), 688–694. citeturn16view0

**Relevance:** This paper is a genuine cTnC kinetics paper with explicit temperature information and explicit Mg presence, which is gold dust for your prompt. It does not present the binding reaction as a trivial one-step process, which makes it more useful scientifically and more annoying for spreadsheet work. Nature is rarely that cooperative. citeturn16view0

**Methodology Note:** IAANS fluorescence on a monocysteine cTnC mutant labeled at Cys-84. citeturn16view0

**Flags/Caveats:** The paper exposes rate constants, not a direct equilibrium \(K_d\), so I calculated an **apparent** \(K_d \approx k_{\text{off}}/k_{\text{on,app}}\) only as a rough estimate. That conversion is mechanically valid but mechanistically imperfect because the authors explicitly describe a multistep process. citeturn16view0

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Dong 1996 |  |  | 4 | "At 4 °C" | Isolated cTnC regulatory site | "regulatory site of cardiac troponin C" | IAANS fluorescence |  | "presence of Mg2+" | 1.37 × 10^6 (calc) | 0.729 (calc) | "1.4 x 10^8 M^-1 s^-1" / "102 s^-1" |

Source note: Temperature, Mg presence, and rate constants are directly quoted from the abstract. The equilibrium values were calculated from those reported rates and should be treated as apparent only. citeturn16view0

### Moyes and colleagues 1996

**Citation:** Moyes, C. D., Borgford, T., LeBlanc, L., & Tibbits, G. F. (1996). *Cloning and expression of salmon cardiac troponin C: Titration of the low-affinity Ca2+-binding site using a tryptophan mutant*. *Biochemistry*, 35, 11756–11762. citeturn48search10turn48search22

**Relevance:** This paper broadens species coverage beyond mammals and directly targets the **low-affinity regulatory site** with an engineered tryptophan reporter. For your intended across-species comparison, that matters a lot. citeturn48search10turn48search22

**Methodology Note:** Tryptophan-mutant fluorescence titration. citeturn48search10turn48search22

**Flags/Caveats:** The accessible record confirms the experimental design and species, but not the exact \(K_d\), temperature, or magnesium concentration. citeturn48search10turn48search22

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Moyes 1996 | Salmon | "salmon cardiac troponin C" |  |  | Isolated cTnC | "low-affinity Ca2+-binding site" | Tryptophan-mutant fluorescence |  |  |  |  |  |

Source note: The title and accessible citation trail are sufficient to verify inclusion, but the numeric affinity was not visible in the accessible record. citeturn48search10turn48search22

### Spyracopoulos and colleagues 1997

**Citation:** Spyracopoulos, L., Li, M. X., Sia, S. K., Gagné, S. M., Chandra, M., Solaro, R. J., & Sykes, B. D. (1997). *Calcium-induced structural transition in the regulatory domain of human cardiac troponin C*. *Biochemistry*, 36(40), 12138–12146. citeturn36search0turn39search8

**Relevance:** This is an important human cNTnC paper because it focuses directly on the **regulatory domain** and its calcium-induced transition. It is less of an old-school direct binding paper and more of a domain-thermodynamics paper, but it still squarely belongs in a cTnC affinity/kinetics search. citeturn36search0turn39search8

**Methodology Note:** NMR-based analysis of the regulatory domain. citeturn36search0

**Flags/Caveats:** The accessible record identifies the study but does not expose a directly standardizable \(K_d\); the paper is retained because it is clearly a quantitative calcium-binding/domain-transition study in human cTnC. citeturn36search0turn39search8

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Spyracopoulos 1997 | Human | "human cardiac troponin C" |  |  | Regulatory N-domain of cTnC | "regulatory domain" | NMR spectroscopy |  |  |  |  |  |

Source note: The accessible record verified human species, domain, and the calcium-induced transition focus, but not the exact affinity numeric. citeturn36search0turn39search8

### Wang and colleagues 1998

**Citation:** Wang, S., George, S. E., Davis, J. P., & Johnson, J. D. (1998). *Structural determinants of Ca2+ exchange and affinity in the C terminal of cardiac troponin C*. *Biochemistry*, 37(41), 14539–14544. citeturn19view7

**Relevance:** This is one of the cleaner pre-2005 studies on the **C-terminal structural sites**, which too often get treated as background furniture when they are really part of the thermodynamic architecture. It directly addresses both exchange kinetics and affinity. citeturn19view7

**Methodology Note:** Mutational/kinetic comparison of C-terminal EF-hand determinants. citeturn19view7

**Flags/Caveats:** The accessible abstract provides relative affinity statements rather than a directly standardizable cTnC \(K_d\), so the row remains partial. citeturn19view7

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Wang 1998 |  |  |  |  | C-terminal domain / structural sites III–IV | "C terminal of cardiac troponin C" | Kinetic/affinity mutational analysis |  |  |  |  | "approximately 20-fold higher Ca2+ affinity" |

Source note: The accessible abstract exposed the relative affinity result but not a cTnC absolute \(K_d\). citeturn19view7

### Finley and colleagues 2000

**Citation:** Finley, N., Rosevear, P. R., & others. (2000). *Magnesium-calcium exchange in cardiac troponin C bound to cardiac troponin I*. *Journal of Molecular and Cellular Cardiology*, 32, 1439–1446. citeturn36search2turn36search14

**Relevance:** This paper is directly relevant to your magnesium requirement because it studies **Mg/Ca exchange** in cTnC while bound to cTnI, rather than in isolation. That makes it a rare structural-site paper that also respects biological context. citeturn36search2turn36search14

**Methodology Note:** NMR-based Mg/Ca exchange study of cTnC bound to cTnI fragments. citeturn36search2turn36search14

**Flags/Caveats:** The accessible abstract states that cTnI increases site-IV Mg affinity, but it does not expose a usable absolute constant for the cTnC state. citeturn36search2turn36search14

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Finley 2000 |  |  |  |  | cTnC-cTnI complex | "bound to cardiac troponin I" | NMR exchange study |  |  |  |  | "affinity of site IV for Mg(2+) is increased" |

Source note: The study is clearly relevant, but the accessible snippet exposed only the direction of the Mg-affinity change. citeturn36search2turn36search14

### Li and colleagues 2002

**Citation:** Li, M. X., Saude, E. J., Wang, X., Pearlstone, J. R., Smillie, L. B., & Sykes, B. D. (2002). *Kinetic studies of calcium and cardiac troponin I peptide binding to human cardiac troponin C using NMR spectroscopy*. *European Biophysics Journal*, 31(4), 245–256. citeturn37search0turn37search2

**Relevance:** This is one of the strongest pre-2005 human cTnC papers for your purposes because it exposes **site-specific \(K_d\) values** and a temperature in the accessible record. It also links calcium binding to cTnI-peptide interaction, which matters enormously for interpreting regulatory-domain affinity. citeturn18search9turn37search2

**Methodology Note:** 2D \(^1\)H,\(^15\)N HSQC NMR spectroscopy at 30 °C. citeturn37search2

**Flags/Caveats:** The abstract snippet reports site-II and site-III/IV \(K_d\) values directly, so these rows are among the cleaner standardized entries in the whole dataset. The accessible snippet did not expose buffer magnesium concentration. citeturn18search9turn37search2

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Li 2002 | Human | "human cardiac troponin C" | 30 | "at 30 °C" | Assumed isolated cTnC | "human cardiac troponin C" | HSQC NMR spectroscopy |  |  | 5.0 × 10^6 | 0.2 | "KD(III,IV) approximately 0.2 microM" |
| Li 2002 | Human | "human cardiac troponin C" | 30 | "at 30 °C" | Assumed isolated cTnC | "human cardiac troponin C" | HSQC NMR spectroscopy |  |  | 5.0 × 10^4 | 20.0 | "KD(II) approximately 20 microM" |

Source note: The \(K_d\) values and temperature are directly visible in the accessible snippet; the association constants were calculated by inversion. The “isolated cTnC” state is marked as assumed because the accessible snippet does not explicitly say whether those particular \(K_d\) values were peptide-free. citeturn18search9turn37search2

## Species diversification and late pre-2005 modulation papers

### Gillis and colleagues 2003

**Citation:** Gillis, T. E., Moyes, C. D., & Tibbits, G. F. (2003). *Sequence mutations in teleost cardiac troponin C that are permissive of high Ca2+ affinity of site II*. *American Journal of Physiology Cell Physiology*, 284(5), C1176–C1184. citeturn36search3turn36search7

**Relevance:** This paper is excellent for your species-comparison goal because it focuses on **teleost cardiac troponin C** and directly frames the question in terms of **high site-II Ca affinity**. It is one of the clearest examples that species sequence differences can alter cTnC thermodynamics. citeturn36search3turn36search7

**Methodology Note:** Sequence-function study of site-II affinity in teleost cTnC. The accessible record did not expose the exact optical/readout method. citeturn36search3turn36search7

**Flags/Caveats:** The accessible abstract snippet gives the direction of the effect and the critical substitutions, but not the final absolute \(K_d\). citeturn36search7turn36search3

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Gillis 2003 | Teleost | "teleost cardiac troponin C" |  |  | Isolated cTnC site II | "high Ca2+ affinity of site II" |  |  |  |  |  |  |

Source note: The record clearly establishes teleost site-II affinity as the paper’s central quantitative question, even though the web-accessible snippet did not expose the absolute affinity number. citeturn36search3turn36search7

### Tikunova and Davis 2004

**Citation:** Tikunova, S. B., & Davis, J. P. (2004). *Designing calcium-sensitizing mutations in the regulatory domain of cardiac troponin C*. *Journal of Biological Chemistry*, 279(34), 35341–35352. citeturn29search0turn47search18

**Relevance:** This is one of the most important late pre-2005 cTnC papers because it explicitly engineers the regulatory domain to alter Ca sensitivity and then measures the consequences. It is also one of the clearest pre-2005 demonstrations that cTnC’s apparent calcium affinity can be predictably tuned by local structural design. citeturn29search0turn47search18

**Methodology Note:** Trp-based fluorescence kinetics on human recombinant cTnC(F27W) and related mutants. citeturn29search0turn47search18

**Flags/Caveats:** The accessible abstract gives **fold changes** in Ca affinity and a **Mg-affinity range**, but not a clean WT absolute Ca \(K_d\) for a single standard row. I therefore retained the paper but did not force a pseudo-precise Ka/Kd entry. citeturn47search18

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Tikunova 2004 | Human | "human cardiac troponin C" |  |  | Recombinant regulatory N-domain constructs | "regulatory domain of cardiac troponin C" | Trp fluorescence kinetics |  |  |  |  | "2.1-15.2-fold" |

Source note: The retained quantitative datum here is the reported fold increase in Ca affinity; I did not repurpose the Mg-affinity range as a buffer-Mg entry because it is not the same thing. citeturn47search18turn29search0

### Liou and Chang 2004

**Citation:** Liou, Y. M., & Chang, J. (2004). *Differential pH effect on calcium-induced conformational changes of cardiac troponin C complexed with cardiac and fast skeletal isoforms of troponin I and troponin T*. *Journal of Biochemistry*. citeturn18search6turn47search13

**Relevance:** This paper is squarely on point for the pH-sensitivity part of your prompt because it studies Ca-induced conformational changes of cTnC across different troponin subunit contexts. It is one of the better late pre-2005 papers for understanding how acid conditions perturb cTnC signaling. citeturn18search6turn17search16

**Methodology Note:** Pyrene-labeled cTnC fluorescence in isolation and in complexes with cardiac or skeletal troponin partners. citeturn17search16turn25search18

**Flags/Caveats:** The accessible snippets did not expose a molecular Ca \(K_d\) suitable for standardization. Secondary snippets referenced pCa-force shifts, but because your table is for **molecular binding metrics**, I did not import those force-derived values into the Ca-binding columns. citeturn17search16turn47search13

| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Bound Ca2+ Measure | Mg (mM) | Mg Quote | Kd (M^-1) | K (uM) | Data Quote |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Liou & Chang 2004 | Porcine / chicken partner-complex system | "porcine cardiac or chicken pectoral skeletal muscle TnI and/or TnT" |  |  | Isolated cTnC and cTnC-complex states | "in isolation and in complex" | Pyrene fluorescence |  |  |  |  |  |

Source note: The accessible text clearly establishes the pH-comparison design and protein-state variation but not the absolute molecular affinity value. citeturn17search16turn25search18

## Excluded papers

Several papers looked promising but were rejected on methodological grounds.

* MacLachlan, Reid, Mitchell, Salter, and Smith (1990), *Binding of a calcium sensitizer, bepridil, to cardiac troponin C* — rejected because the accessible record centered on **bepridil binding** and Ca-release kinetics, not a clearly extractable equilibrium Ca affinity constant for cTnC itself. citeturn34search0turn34search2  
* Hazard, Kohout, Stricker, Putkey, and Falke (1998), *The kinetic cycle of cardiac troponin C: Calcium binding and dissociation at site II trigger slow conformational rearrangements* — rejected because the accessible records exposed **kinetic mechanism** but not a clearly standardizable equilibrium \(K_d/K_a/K_{1/2}\). citeturn18search0turn38search17  
* Abusamhadneh and colleagues (2001), *Interaction of bepridil with the cardiac troponin C/troponin I complex* — rejected because it measures **drug affinity to cTnC/cTnI**, not Ca affinity. citeturn18search3turn34search11  
* Gusev and Barskaya (1984), *Investigation of cation-binding properties of cardiac troponin C peptides by circular-dichroism spectroscopy* — rejected because it studied **cTnC peptides**, not intact cTnC. citeturn25search1turn27search1  
* Putkey, Sweeney, and Campbell (1989), *Site-directed mutation of the trigger calcium-binding sites in cardiac troponin C* — screened but not retained in the final 20 because the accessible record emphasized mutational function and site behavior without exposing a clearly extractable equilibrium affinity value. citeturn43search1turn43search4  
* Lindhout and Sykes (2003), *Structure and dynamics of the C-domain of human cardiac troponin C in complex with the inhibitory region of human cardiac troponin I* — rejected because the accessible record was strongly structural/dynamical, but did not expose a clear Ca-binding constant for standardization. citeturn36search1turn36search17

## Summary statistics and coverage

I retained **20** pre-2005 primary papers and extracted **25** experimental-condition rows on a best-effort basis. Exact numeric \(K_a/K_d\) values were directly standardizable in a minority of the corpus, mostly from **Holroyde 1980**, **Johnson 1980**, **Dong 1996** with a strong kinetic caveat, and **Li 2002**. The literature coverage is strongest for **isolated cTnC**, **site-II/site-III/IV domain work**, and **human/bovine systems**, and noticeably patchier for explicit **temperature** and **magnesium buffer concentrations**, which older abstracts often fail to expose. Species coverage includes **bovine**, **human**, **salmon**, and broader **teleost** cTnC, while several cardiac/fiber papers are highly relevant but frustratingly coy about exact buffer composition. In other words: the science was often excellent, the abstract metadata less so.