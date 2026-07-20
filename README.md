# LLM Data Extraction (2026)

Code, data, and evaluation artifacts accompanying the paper
*"<TODO: paper title>"*. This repository lets readers reproduce the
data-extraction pipeline and the results reported in the manuscript.

> **Note:** The manuscript itself is **not** included in this repository.

---

## 👉 New here? Start with the tutorial

If you were sent here to **try the data-extraction workflow and give feedback**,
go straight to **[`tutorial/`](tutorial/README.md)**. It's a self-contained,
no-code, ~1-hour walkthrough: benchmark your favourite LLM on one paper, then
learn to make an LLM design a better extraction prompt. Everything you need
(prompts, the paper, the benchmark, and a self-scoring spreadsheet) is in that
folder.

---

## Repository structure

```
.
├── data/              # Working pipeline data (immutable -> derived)
│   ├── raw/           #   Original source documents — never edited
│   ├── interim/       #   Intermediate, partially-cleaned data
│   ├── processed/     #   Final, analysis-ready extracted data
│   └── external/      #   Third-party refs (ontologies, lookups)
├── datasets/          # Curated, citable datasets released with the paper
│   ├── corpus/        #   The document set the LLM extracts from
│   ├── gold_standard/ #   Human-annotated ground truth
│   ├── annotations/   #   Raw annotation files + guidelines
│   └── splits/        #   train / dev / test (or eval subsets)
├── prompts/           # LLM prompt templates — version-controlled
│   ├── extraction/
│   ├── system/
│   └── CHANGELOG.md   #   Track prompt revisions (reproducibility)
├── configs/           # Run configs: model, temperature, schema, params
├── src/               # Pipeline source code
│   ├── data/          #   Loading, cleaning, preprocessing
│   ├── extraction/    #   LLM calls, structured-output parsing
│   ├── evaluation/    #   Scoring vs gold standard, metrics
│   └── utils/
├── results/           # Pipeline outputs (generated, reproducible)
│   ├── raw_outputs/   #   Verbatim LLM responses — cache + audit trail
│   ├── metrics/       #   Computed scores (P/R/F1, agreement, …)
│   ├── figures/       #   Generated plots
│   └── tables/        #   Generated tables
├── notebooks/         # Exploratory + analysis notebooks (numbered)
├── docs/              # Data dictionary, reproducibility guide
└── tests/             # Unit tests for the pipeline
```

## Setup

```bash
# Option A — conda
conda env create -f environment.yml
conda activate llm-dataextraction

# Option B — pip
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

Copy `.env.example` to `.env` and add your API key(s):

```bash
cp .env.example .env
```

## Reproducing the results

See [`docs/reproducibility.md`](docs/reproducibility.md) for the full
walkthrough. In brief:

1. Place source documents in `data/raw/` (see `data/raw/README.md` for
   provenance).
2. Run extraction (entry point under `src/extraction/`).
3. Score against the gold standard (entry point under `src/evaluation/`).
4. Outputs land in `results/` (raw model responses, metrics, figures, tables).

## Data availability

- **Released datasets** (corpus, gold standard, splits) live in `datasets/`.
- **Working pipeline data** (raw → interim → processed) lives in `data/`.
- <TODO: note any access restrictions, DUAs, or an external repository
  (Zenodo/OSF/figshare) DOI if large/restricted data is hosted elsewhere.>

## Reproducibility notes (LLM-specific)

- Exact prompts are version-controlled in `prompts/` — see
  [`prompts/CHANGELOG.md`](prompts/CHANGELOG.md).
- Model name/version, temperature, and run dates are pinned in
  [`configs/models.yaml`](configs/models.yaml).
- Verbatim model responses are cached in `results/raw_outputs/` so results stay
  auditable even as APIs change or models are deprecated.

## License

See [`LICENSE`](LICENSE). <TODO: choose a license — e.g. MIT for code,
CC-BY-4.0 for data.>

## Citation

See [`CITATION.cff`](CITATION.cff).
