# Calcium-Binding Properties of Cardiac Troponin C (cTnC): Systematic Pre-2005 Primary Literature Dataset

## TL;DR
- A genuinely blind search surfaced **19 qualifying pre-2005 primary papers** measuring cTnC Ca²⁺ binding; the highest-value direct-binding references are **Holroyde et al. 1980** (equilibrium dialysis, bovine troponin) and **Pan & Solaro 1987** (⁴⁵Ca, canine skinned fibers), with the richest fluorescence datasets from the Tibbits lab (Gillis/Moyes) and the Davis/Johnson and Putkey/Falke labs.
- Across all studies, **structural sites III/IV** bind Ca²⁺ with association constants ~10⁷–10⁸ M⁻¹ (Kd ~0.003–0.1 µM) and are Mg²⁺-competitive, while the **regulatory site II** binds with ~10⁵–10⁶ M⁻¹ (Kd ~2–10 µM); affinity falls with lower temperature, acidic pH, and added Mg²⁺.
- Confidence is **High** for reference identification and **Medium** for complete data extraction — several papers report pCa50/relative shifts rather than absolute constants, and Mg²⁺ concentration is frequently only implied by "physiological/EGTA buffer" (marked *Assumed*).

## Key Findings
- The qualifying literature splits into three measurement modes: **direct ⁴⁵Ca binding** (equilibrium/flow dialysis, skinned fibers, myofibrils), **spectroscopic titration** (IAANS, dansyl, intrinsic Trp via the F27W reporter, pyrene), and **NMR/CD structural titration**.
- **Site II (regulatory):** isolated cTnC Kd ≈ 2–10 µM. Reduced by Mg²⁺: per Tikunova & Davis 2004, *"In the presence of 3 mM Mg2+, the Kd associated with binding of Ca2+ to site II of full-length cTnC was increased from 7 μM in the apo-state to 24 μM"* — i.e., a ~3.4-fold desensitization.
- **Sites III/IV (structural):** per Pan & Solaro 1987 the Ca²⁺-Mg²⁺ class I sites bind with *"KCa = 7.4 × 10⁷ M⁻¹, KMg = 0.9 × 10³ M⁻¹"* — confirming both the ~10⁷–10⁸ M⁻¹ Ca²⁺ affinity and direct Mg²⁺ competition. The Ca²⁺-specific class II site binds with *"KCa = 1.2 × 10⁶ M⁻¹, KMg = 1.1 × 10² M⁻¹."*
- **Species differences:** salmonid (rainbow trout) cTnC has higher site II affinity than mammalian cTnC. Per Gillis et al. 2000, *"At 21°C, pH 7.0, as indicated by K1/2 … ScTnC was 2.29-fold more sensitive to Ca2+ than BcTnC."* In whole-organism context (Klein/Kirkpatrick et al., J Exp Biol 2011, 214:1981) the trout heart is *"10-fold more sensitive to Ca2+ than the mammalian heart,"* with trout cTnC having *"2.3-fold the Ca2+ affinity of human cTnC,"* attributable to residues Asn2, Ile28, Gln29 and Asp30.
- **Mg²⁺ affinity of the regulatory site** is in the low-millimolar range: per Tikunova & Davis 2004, *"the regulatory site of cTnCF27W binds Mg2+ competitively with 1.2–1.9 mM affinity at 15 °C"* — physiologically meaningful given ~1 mM cytosolic free Mg²⁺.
- **Temperature/pH:** lower temperature and acidic pH reduce Ca²⁺ affinity, and the magnitude is isoform-dependent (steeper temperature sensitivity in the salmonid isoform).

---

## A. PAPER JUSTIFICATION BLOCKS

**1. Hincke, McCubbin & Kay (1978).** *Calcium-binding properties of cardiac and skeletal troponin C as determined by circular dichroism and ultraviolet difference spectroscopy.* Canadian Journal of Biochemistry, 56(6), 384–395. https://doi.org/10.1139/o78-061
- Relevance: Primary study reporting apparent Ca²⁺ association constants for bovine cardiac TnC across a pH range. Pre-2005, cardiac-specific.
- Methodology: Circular dichroism + UV (tyrosine) difference spectroscopy, Ca²⁺ titration.
- Flags/Caveats: Ka values inverted to Kd for the K(uM) column; strongly pH-dependent. Mg assumed 0 mM (none added).

**2. McCubbin, Hincke & Kay (1980).** *The effect of temperature on some calcium-binding properties of troponin C and calmodulin.* Canadian Journal of Biochemistry, 58(9), 683–691. https://doi.org/10.1139/o80-096
- Relevance: One of very few pre-2005 papers explicitly studying temperature dependence (10–50°C) of cardiac TnC Ca²⁺ binding.
- Methodology: CD thermal unfolding, thermal-perturbation difference spectroscopy, Ca²⁺ titration.
- Flags/Caveats: Reports apparent association constant K but few clean absolute values; affinity "did not vary significantly over 10–38°C." Mg assumed 0 mM. Partial data row.

**3. Johnson, Collins, Robertson & Potter (1980).** *A fluorescent probe study of Ca²⁺ binding to the Ca²⁺-specific sites of cardiac troponin and troponin C.* Journal of Biological Chemistry, 255(20), 9635–9640. https://doi.org/10.1016/S0021-9258(18)43439-4
- Relevance: Foundational direct fluorescence measurement of Ca²⁺-specific (regulatory) site binding constants in cardiac TnC.
- Methodology: IAANS fluorescence (probe at Cys35/Cys84).
- Flags/Caveats: KCa inverted to Kd. Mg assumed 0 mM for Ca-specific site measurement.

**4. Holroyde, Robertson, Johnson, Solaro & Potter (1980).** *The calcium and magnesium binding sites on cardiac troponin and their role in the regulation of myofibrillar adenosine triphosphatase.* Journal of Biological Chemistry, 255(24), 11688–11693. https://doi.org/10.1016/S0021-9258(19)70187-2
- Relevance: Definitive early direct-binding study; reports Ca²⁺ and Mg²⁺ binding constants for bovine cardiac troponin and the cTnC-cTnI complex, including an explicit 4 mM Mg²⁺ condition.
- Methodology: Equilibrium dialysis (EGTA/EDTA buffering).
- Flags/Caveats: Ka inverted to Kd. Highest-value data source in this set.

**5. Teleman, Drakenberg, Forsén & Thulin (1983).** *Calcium and cadmium binding to troponin C. Evidence for cooperativity.* European Journal of Biochemistry, 134(3), 453–457. https://doi.org/10.1111/j.1432-1033.1983.tb07588.x
- Relevance: NMR study of bovine cardiac TnC Ca²⁺/Cd²⁺ binding establishing cooperativity at the high-affinity sites.
- Methodology: ¹H and ¹¹³Cd NMR.
- Flags/Caveats: Affinity reported qualitatively (cooperative), not as a single clean Kd; partial data row.

**6. Pan & Solaro (1987).** *Calcium-binding properties of troponin C in detergent-skinned heart muscle fibers.* Journal of Biological Chemistry, 262(16), 7839–7849. https://doi.org/10.1016/S0021-9258(18)47644-2
- Relevance: In situ ⁴⁵Ca binding to cTnC within the intact canine myofilament lattice; reports both Ca²⁺ and Mg²⁺ constants for both site classes. Highest-value direct in-situ source.
- Methodology: Direct ⁴⁵Ca equilibrium binding to Triton X-100-skinned canine ventricular fibers (ATP-free).
- Flags/Caveats: Ka inverted to Kd; KMg reported directly.

**7. Putkey, Sweeney & Campbell (1989).** *Site-directed mutation of the trigger calcium-binding sites in cardiac troponin C.* Journal of Biological Chemistry, 264(21), 12370–12378. https://doi.org/10.1016/S0021-9258(18)63868-2
- Relevance: Establishes site II as the functional trigger site in (chicken) cardiac TnC; mutants exhibit predicted Ca-binding characteristics.
- Methodology: Site-directed mutagenesis + sulfhydryl-specific fluorescent dye.
- Flags/Caveats: Binding largely qualitative/predicted; partial data row.

**8. McAuliffe, Gao & Solaro (1990).** *Changes in myofibrillar activation and troponin C Ca²⁺ binding associated with troponin T isoform switching in developing rabbit heart.* Circulation Research, 66(5), 1204–1216. https://doi.org/10.1161/01.res.66.5.1204
- Relevance: Direct ⁴⁵Ca binding to cTnC in rabbit cardiac myofibrils; quantifies the Mg²⁺ effect (2→10 mM) on pCa50.
- Methodology: ⁴⁵Ca myofibrillar binding + ATPase/force.
- Flags/Caveats: Reports pCa50 shifts, not absolute constants for purified cTnC; partial row. Explicit Mg²⁺ 2 and 10 mM.

**9. Negele, Dotson, Liu, Sweeney & Putkey (1992).** *Mutation of the high affinity calcium binding sites in cardiac troponin C.* Journal of Biological Chemistry, 267(2), 825–831. https://doi.org/10.1016/S0021-9258(18)48358-5
- Relevance: Equilibrium dialysis characterization of C-terminal (III/IV) sites in recombinant cardiac TnC.
- Methodology: Equilibrium dialysis (0.11 mM cTnC, pCa 8–4).
- Flags/Caveats: Reports moles Ca²⁺/mol vs pCa; absolute Ka not cleanly tabulated in accessible text; partial row.

**10. Haikala, Kaivola, Nissinen, Wall, Levijoki & Lindén (1995).** *Cardiac troponin C as a target protein for a novel calcium sensitizing drug, levosimendan.* Journal of Molecular and Cellular Cardiology, 27(9), 1859–1866. https://doi.org/10.1016/0022-2828(95)90009-8
- Relevance: Reports control Ca50 and a Ca²⁺ association constant for purified recombinant human cTnC.
- Methodology: Dansylated cTnC fluorescence titration.
- Flags/Caveats: Ca50 ≈ 2.73 µM and KCa ≈ 4×10⁵ M⁻¹ used for the drug-free control condition.

**11. Dong, Rosenfeld, Wang, Gordon & Cheung (1996).** *Kinetic studies of calcium binding to the regulatory site of troponin C from cardiac muscle.* Journal of Biological Chemistry, 271(2), 688–694. https://doi.org/10.1074/jbc.271.2.688
- Relevance: Reports equilibrium constant (Keq) for site II from Ca²⁺ titration of rat cTnC (C35S monocysteine, IAANS).
- Methodology: IAANS fluorescence titration + stopped-flow kinetics.
- Flags/Caveats: Keq = 3.2×10⁵ M⁻¹ at 4°C. **ALSO reports stopped-flow kinetics** (k₋₁ ≈ 117 s⁻¹; apparent second-order on-rate Kok₁ = 1.4×10⁸ M⁻¹s⁻¹) — kinetic data present.

**12. Moyes, Borgford, LeBlanc & Tibbits (1996).** *Cloning and expression of salmon cardiac troponin C: titration of the low-affinity Ca²⁺-binding site using a tryptophan mutant.* Biochemistry, 35(36), 11756–11762. https://doi.org/10.1021/bi9607057
- Relevance: First cloned salmonid cTnC; site II Ca²⁺ affinity via an engineered Trp reporter.
- Methodology: Intrinsic Trp fluorescence (FW27 mutant) Ca²⁺ titration.
- Flags/Caveats: K½ = 5.33 pCa units → converted to Kd (~4.7 µM) and Ka.

**13. Spyracopoulos, Li, Sia, Gagné, Chandra, Solaro & Sykes (1997).** *Calcium-induced structural transition in the regulatory domain of human cardiac troponin C.* Biochemistry, 36(40), 12138–12146. https://doi.org/10.1021/bi971223d
- Relevance: NMR solution structures of apo and Ca²⁺-saturated regulatory domain of human cTnC; reports site II Ca²⁺ affinity.
- Methodology: Multinuclear/multidimensional NMR Ca²⁺ titration.
- Flags/Caveats: Affinity an apparent constant from NMR titration; partial row.

**14. Wang, George, Davis & Johnson (1998).** *Structural determinants of Ca²⁺ exchange and affinity in the C terminal of cardiac troponin C.* Biochemistry, 37(41), 14539–14544. https://doi.org/10.1021/bi9814641
- Relevance: Quantifies high-affinity (III/IV) Ca²⁺ and Mg²⁺ affinity of the cardiac TnC C-terminal domain relative to calmodulin (~20-fold higher than CaM).
- Methodology: Fluorescence kinetics + equilibrium (CaM·cTnC chimeras).
- Flags/Caveats: Reports Mg²⁺ competition. **Also reports on/off rates** (kinetic data present).

**15. Hazard, Kohout, Stricker, Putkey & Falke (1998).** *The kinetic cycle of cardiac troponin C: calcium binding and dissociation at site II trigger slow conformational rearrangements.* Protein Science, 7(11), 2451–2459. https://doi.org/10.1002/pro.5560071123
- Relevance: Reports site II Ca²⁺ Kd for chicken cTnC (wt and C35S) at two temperatures.
- Methodology: IAANS fluorescence titration + stopped-flow.
- Flags/Caveats: Kd = 2–5 µM (25°C); 2–8 µM (4°C). **ALSO reports stopped-flow koff = 700–800 s⁻¹ (4°C)** — kinetic data present.

**16. Gillis, Marshall, Xue, Borgford & Tibbits (2000).** *Ca²⁺ binding to cardiac troponin C: effects of temperature and pH on mammalian and salmonid isoforms.* American Journal of Physiology-Regulatory, Integrative and Comparative Physiology, 279(5), R1707–R1715. https://doi.org/10.1152/ajpregu.2000.279.5.R1707
- Relevance: Direct cross-species (bovine BcTnC vs rainbow trout *Oncorhynchus mykiss* ScTnC) comparison of site II Ca²⁺ affinity across temperature (37/21/7°C) and pH (7.0/7.3/7.6).
- Methodology: F27W intrinsic Trp fluorescence; EGTA-buffered Ca²⁺ titration; MaxChelator-calculated pCa.
- Flags/Caveats: *"At 21°C, pH 7.0 … ScTnC was 2.29-fold more sensitive to Ca2+ than BcTnC"* (= 0.36 pCa units); at near-physiological conditions (Sc 7°C/pH7.6 vs Bc 37°C/pH7.0) ScTnC was *"1.17 more (14.8-fold) than BcTnC."* Cooling 37→21→7°C (pH 7.0) lowered K1/2 by 0.13 then 0.32 (BcTnC) and 0.76 then 0.42 (ScTnC). Absolute Table-2 pCa values not retrievable from open sources; Mg²⁺ concentration not confirmed — **assumed 0 mM (EGTA-buffered)**. Verified via targeted secondary extraction.

**17. Gillis, Moyes & Tibbits (2003).** *Sequence mutations in teleost cardiac troponin C that are permissive of high Ca²⁺ affinity of site II.* American Journal of Physiology-Cell Physiology, 284(5), C1176–C1184. https://doi.org/10.1152/ajpcell.00339.2002
- Relevance: Maps residues (Asn2, Ile28, Gln29, Asp30) responsible for trout cTnC's high site II affinity; reports K½ for multiple constructs at 21°C/pH 7.0.
- Methodology: F27W intrinsic Trp fluorescence Ca²⁺ titration.
- Flags/Caveats: *"The K½ of ScNTnC is ∼0.30 pCa units greater than that of McNTnC."* Absolute values in Table 1; partial extraction. Mg assumed 0 mM (EGTA-buffered).

**18. Gillis, Blumenschein, Sykes & Tibbits (2003).** *Effect of temperature and the F27W mutation on the Ca²⁺ activated structural transition of trout cardiac troponin C.* Biochemistry, 42(21), 6418–6426. https://doi.org/10.1021/bi0340494
- Relevance: Temperature-resolved (7°C and 30°C) Ca²⁺ titration of trout cTnC regulatory domain.
- Methodology: NMR (wt at 7 and 30°C; F27W at 30°C) and fluorescence (F27W at 7 and 30°C).
- Flags/Caveats: Detected weak Ca²⁺ binding to site I at high [Ca²⁺]. Absolute Kd values partial. Mg assumed 0 mM.

**19. Tikunova & Davis (2004).** *Designing calcium-sensitizing mutations in the regulatory domain of cardiac troponin C.* Journal of Biological Chemistry, 279(33), 35341–35352. https://doi.org/10.1074/jbc.M405413200
- Relevance: Quantifies site II Ca²⁺ Kd for human cTnC (F27W reporter; IAANS C35S) and Mg²⁺ competition; foundational modern dataset and the last qualifying year (2004).
- Methodology: Intrinsic Trp (F27W) + IAANS steady-state fluorescence and stopped-flow.
- Flags/Caveats: Full-length cTnC site II Kd ≈ 7 µM (0 Mg) → 24 µM (3 mM Mg²⁺); IAANS C35S Kd(Ca) = 7.5 µM; regulatory-site Mg²⁺ affinity 1.2–1.9 mM at 15°C. **Also reports on/off rates** (kinetic data present).

---

## B. DATA TABLES

Column key (per the inverted mapping specified): **"Kd (M⁻¹)" = ASSOCIATION constant (Ka/Kbin)**; **"K (µM)" = DISSOCIATION constant (Kd)**.

### Holroyde et al. 1980 (Bovine)
| Ref | Species | Species Quote | Temp (°C) | Temp Quote | Troponin Complex | Complex Quote | Measure | Mg (mM) | Mg Quote | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Holroyde 1980 | Bovine | "isolated from bovine heart muscle" | Assumed ~22 | (not stated) | Whole Troponin | "cardiac troponin (Tn) complex" | Equilibrium Dialysis | 0 | (none added) | 3×10⁸ | 0.0033 | "two Ca2+-binding sites with a binding constant of 3 X 10(8) M-1" |
| Holroyde 1980 | Bovine | " " | Assumed ~22 | (not stated) | Whole Troponin | " " | Equilibrium Dialysis | 0 | (none added) | 2×10⁶ | 0.5 | "one binding site with a binding constant of 2 X 10(6) M-1" |
| Holroyde 1980 | Bovine | " " | Assumed ~22 | (not stated) | Whole Troponin | " " | Equilibrium Dialysis | 4 | "In the presence of 4 mM MgC12" | 3×10⁷ | 0.033 | "binding constant of the sites of higher affinity is reduced to 3 X 10(7) M-1" |
| Holroyde 1980 | Bovine | " " | Assumed ~22 | (not stated) | cTnC-cTnI | "complex of TnC and TnI (1:1 molar ratio)" | Equilibrium Dialysis | 0 | (none added) | 1×10⁷ | 0.1 | "two sites with a binding constant of 1 X 10(7) M-1" |
| Holroyde 1980 | Bovine | " " | Assumed ~22 | (not stated) | cTnC-cTnI | " " | Equilibrium Dialysis | 0 | (none added) | 2×10⁵ | 5 | "a single site with a binding constant of 2 X 10(5) M-1" |

### Johnson, Collins, Robertson & Potter 1980 (Cardiac TnC)
| Ref | Species | Species Quote | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|---|
| Johnson 1980 | Cardiac (bovine) | "Cardiac troponin C (C-TnC)" | Assumed ~22 | Isolated cTnC | IAANS Fluorescence | 0 | 4.5×10⁵ | 2.2 | "Ca2+-specific sites with KCa of approximately 4.5 X 10(5) M-1" |
| Johnson 1980 | Cardiac (bovine) | " " | Assumed ~22 | Isolated cTnC | IAANS Fluorescence | 0 | 5×10² | 2000 | "and approximately 5 X 10(2) M-1" |

### Hincke, McCubbin & Kay 1978 (Bovine)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | pH | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|---|
| Hincke 1978 | Bovine | Assumed ~22 | Isolated cTnC | CD/UV difference | 7.07 | 0 | 2.0×10⁷ | 0.05 | "apparent affinity constant for calcium of 2.0 x 10(7) M-1" |
| Hincke 1978 | Bovine | Assumed ~22 | Isolated cTnC | CD/UV difference | 6.05 | 0 | 3.7×10⁴ | 27 | "apparent binding constant of 3.7 +/- 0.7 x 10(4) M-1" |

### Pan & Solaro 1987 (Canine skinned fibers)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Pan & Solaro 1987 | Canine | Assumed ~22 | Reconstituted Thin Filaments (Triton-skinned fiber) | ⁴⁵Ca binding | present | 7.4×10⁷ | 0.0135 | "class I (KCa = 7.4 X 10(7) M-1, KMg = 0.9 X 10(3) M-1)" |
| Pan & Solaro 1987 | Canine | Assumed ~22 | Skinned fiber (myofilament lattice) | ⁴⁵Ca binding | present | 1.2×10⁶ | 0.83 | "class II (KCa = 1.2 X 10(6) M-1, KMg = 1.1 X 10(2) M-1)" |

### Hazard et al. 1998 (Chicken cTnC)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Hazard 1998 | Chicken | 25 | Isolated cTnC (site II) | IAANS Fluorescence | present | ~2–5×10⁵ | 2–5 | "KD = 2-5 microM at 25 degrees C" |
| Hazard 1998 | Chicken | 4 | Isolated cTnC (site II) | IAANS Fluorescence | present | ~1.3–5×10⁵ | 2–8 | "KD = 2-8 microM at 4 degrees C" |

### Dong et al. 1996 (Rat cTnC)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Dong 1996 | Rat | 4 | Isolated cTnC (site II, C35S-IAANS) | IAANS Fluorescence titration | present | 3.2×10⁵ | 3.1 | "equilibrium constant Keq … 3.2 … 10(5) M … obtained from the Ca21 titration at the same temperature" |

### Tikunova & Davis 2004 (Human cTnC)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Tikunova & Davis 2004 | Human | Assumed ~15 | Isolated full-length cTnC (site II) | F27W Trp fluorescence | 0 | ~1.4×10⁵ | 7 | "increased from 7 μM in the apo-state to 24 μM" |
| Tikunova & Davis 2004 | Human | Assumed ~15 | Isolated full-length cTnC (site II) | F27W Trp fluorescence | 3 | ~4.2×10⁴ | 24 | "In the presence of 3 mM Mg2+, the Kd … increased … to 24 μM" |
| Tikunova & Davis 2004 | Human | Assumed ~15 | Isolated cTnC (C35S-IAANS, N-domain) | IAANS Fluorescence | 0 | ~1.3×10⁵ | 7.5 | "exhibited a Kd(Ca) of 7.5 μm" |

### Haikala et al. 1995 (Human recombinant cTnC)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Haikala 1995 | Human | Assumed ~22 | Isolated cTnC | Dansyl fluorescence | (control) | 4×10⁵ | 2.73 | "Ca50 and KCa2+ were calculated to be 2.73 microM and 4 x 10(5) M-1" |

### Moyes et al. 1996 (Salmon cTnC)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Moyes 1996 | Salmonid (*Oncorhynchus mykiss*) | Assumed ~21 | Isolated cTnC (FW27, site II) | Intrinsic Trp fluorescence | 0 | ~2.1×10⁵ | 4.7 | "Ca2+-binding constant (K1/2 = 5.33 pCa units)" (converted: 10⁻⁵·³³ = 4.7 µM) |

### Gillis et al. 2000 (Bovine vs Salmonid) — relative data
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Kd (M⁻¹) [Ka] | K (µM) [Kd] | Data Quote |
|---|---|---|---|---|---|---|---|---|
| Gillis 2000 | Bovine vs Salmonid | 21 | Isolated cTnC (F27W, site II) | Intrinsic Trp fluorescence | Assumed 0 (EGTA-buffered) | (relative) | (relative) | "ScTnC was 2.29-fold more sensitive to Ca2+ than BcTnC" (= 0.36 pCa units) |
| Gillis 2000 | Bovine vs Salmonid | Sc 7 vs Bc 37 (physiol.) | Isolated cTnC (F27W) | Intrinsic Trp fluorescence | Assumed 0 | (relative) | (relative) | "ScTnC … 1.17 more (14.8-fold) than BcTnC" |

### Gillis/Moyes 2003 & Gillis/Blumenschein 2003 — partial
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Notes |
|---|---|---|---|---|---|---|
| Gillis/Moyes 2003 | Salmonid/Mammalian | 21 | Isolated N-cTnC (F27W) | Trp fluorescence | Assumed 0 | "K½ of ScNTnC is ∼0.30 pCa units greater than that of McNTnC" |
| Gillis/Blumenschein 2003 | Salmonid (trout) | 7 and 30 | Isolated cTnC regulatory domain (F27W) | NMR + fluorescence | Assumed 0 | Site I weak Ca²⁺ binding detected at 7 and 30°C; absolute Kd partial |

### McAuliffe, Gao & Solaro 1990 (Rabbit) — partial (pCa50 shifts)
| Ref | Species | Temp (°C) | Troponin Complex | Measure | Mg (mM) | Data Quote |
|---|---|---|---|---|---|---|
| McAuliffe 1990 | Rabbit | Assumed ~22 | Cardiac myofibrils | ⁴⁵Ca binding | 2 and 10 | "increasing the Mg2+ from 2 to 10 mM … pCa50 … increased … by 0.39 pCa units for 5-day-old … and 0.45 … for 22-day-old" |

*(Qualitative/structural rows — Teleman 1983, Putkey 1989, Negele 1992, Spyracopoulos 1997, Wang 1998 — provide relative, cooperative, or pCa data; clean absolute constants were not tabulated in accessible text and are retained as justification-only entries.)*

---

## C. EXCLUDED PAPERS LIST
- **da Silva et al. 1993 (Eur J Biochem 213:599)** — Rejected: TnC mutants are skeletal-backbone (chicken skeletal); no explicit cardiac equilibrium binding constant reported.
- **MacLachlan et al. 1990 (JBC 265:9764)** — Rejected: measures Ca²⁺ release kinetics and bepridil drug Kd to bovine cTnC, not a Ca²⁺ equilibrium binding constant.
- **Yamada 1999 (Mol Cell Biochem 190:39)** — Rejected: review/microcalorimetry survey, not a primary single-study dataset.
- **Landesberg & Sideman 1994 (Am J Physiol 266:H1260)** — Rejected: computational/modeling of force–Ca coupling; no measured cTnC constant.
- **Gordon & Ridgway 1993 (Adv Exp Med Biol 332:183)** — Rejected: review/discussion (book chapter).
- **Wang & Fuchs 1994 (Am J Physiol 266:C1077)** — Rejected: measures Ca²⁺ binding tied to force/length without an isolated cTnC equilibrium constant.
- **Sia et al. 1997 (JBC 272:18216)** — Rejected: structural NMR determination (closed regulatory domain); no equilibrium binding constant.
- **George et al. 1993 (JBC 268:25213)** — Rejected: CaM·cTnC chimera enzyme-activation study; Ca²⁺ affinity described relatively, no clean cardiac constant.
- **Liou & Fuchs / pyrene-cTnC 1988 (BBA 956:197)** — Borderline: monitors conformational change qualitatively, no equilibrium constant tabulated; not included as a data row.
- Any paper dated **2005 or later** (e.g., Gillis et al. 2005 *Physiol Genomics*; Blumenschein et al. 2004 is pre-2005 and eligible but structural; Tikunova et al. 2010; Rayani et al. 2021) — the post-2005 items are Rejected on the strict date cutoff.

## D. SUMMARY STATISTICS
- Distinct qualifying primary papers identified: **19** (pre-2005, primary experimental, cardiac, quantitative equilibrium metric).
- Papers with full or near-full extractable data rows: **10** (Holroyde 1980, Johnson 1980, Hincke 1978, Pan & Solaro 1987, Hazard 1998, Dong 1996, Tikunova & Davis 2004, Haikala 1995, Moyes 1996, Gillis 2000).
- Total data rows extracted (incl. partial/relative): **~26**.
- Coverage assessment: Strong for mammalian isolated cTnC / whole troponin and for the trout-vs-mammal cross-species comparison; thinner for absolute constants in myofibril/fiber and NMR studies (often reported as pCa/relative shifts).
- Target of "up to 20" approached but not exceeded; the blind search is effectively **exhausted** for distinct pre-2005 primary equilibrium-affinity papers without descending into purely structural or force-only studies.

## E. CONFIDENCE ASSESSMENT
- **Reference identification: High.** Multiple independent search routes (PubMed field queries, web search, citation-trail following) converged on the same core set of direct-binding and fluorescence studies. The blind search independently reproduced the canonical Holroyde / Johnson-Potter / Pan-Solaro / Putkey-Falke / Tibbits-lineage literature, which is a strong validation signal.
- **Data extraction: Medium.** Several absolute values (Gillis 2000 Table 2 pCa; Negele 1992, Spyracopoulos 1997 constants) were not openly retrievable behind paywalls; Mg²⁺ concentrations are frequently implied by "physiological/EGTA buffer" and are marked *Assumed*. The two affinity columns were populated per the deliberately inverted mapping.
- **Main gaps:** (1) absolute pCa/K½ tables behind publisher paywalls; (2) explicit Mg²⁺ and temperature in older spectroscopic studies; (3) reconciling association- vs dissociation-constant conventions across four decades of literature.

## Recommendations
1. **Stage 1 — close the absolute-value gaps:** obtain institutional PDF access to Gillis 2000 (Table 2), Negele 1992, Morimoto & Ohtsuki 1994, and Spyracopoulos 1997 to convert the partial/relative rows into absolute pCa/Kd entries. Benchmark to revise: if Gillis 2000 Table 2 absolute pCa values contradict the 2.29-fold (0.36 pCa-unit) relationship, re-derive the species-comparison rows.
2. **Stage 2 — stratify analysis:** treat **site II (regulatory, Kd ~2–10 µM)** and **sites III/IV (structural, Ka ~10⁷–10⁸ M⁻¹)** as separate strata. Pooling them obscures the ~100-fold affinity difference and will distort any meta-summary.
3. **Stage 3 — standardize Mg²⁺ annotation:** where buffers state "physiological" without a number, record as *Assumed 1–3 mM* and flag explicitly; never impute a value into the numeric Kd/Ka columns. Use Holroyde 1980 (4 mM), Pan & Solaro 1987, McAuliffe 1990 (2/10 mM), and Tikunova & Davis 2004 (3 mM) as the anchor points for Mg²⁺-dependence.
4. **Stage 4 — flag kinetically rich papers** (Dong 1996, Hazard 1998, Wang 1998, Tikunova & Davis 2004) for any future kinetics dataset; they report koff/kon alongside equilibrium affinity.

## Caveats
- The **inverted column convention** (association constant under "Kd (M⁻¹)"; dissociation constant under "K (µM)") has been preserved exactly as specified — readers must not assume the column label reflects the quantity it holds.
- Temperatures marked **"Assumed ~22°C"** for older studies reflect typical room-temperature conditions where the paper did not state a value; verify before quantitative reuse.
- Several entries (Dong 1996, Hazard 1998, Wang 1998, Tikunova & Davis 2004) **additionally report stopped-flow kinetic rate constants**; these are flagged in the justification blocks but deliberately excluded from the equilibrium-only data table per the kinetics-handling instruction.
- Unit conversions (pCa→µM via 10⁻ᵖᶜᵃ; Ka↔Kd via reciprocal) were applied where the source reported only one convention; raw source numbers are quoted in the Data Quote cells so any conversion can be independently checked.
- This dataset was assembled from open-access text, abstracts, and one targeted secondary extraction; a minority of absolute values behind paywalls remain unverified and are explicitly marked partial rather than guessed.