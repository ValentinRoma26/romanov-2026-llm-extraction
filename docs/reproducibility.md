# Reproducibility Guide

Step-by-step instructions to reproduce the results reported in the paper.

## 1. Environment

```bash
conda env create -f environment.yml   # or: pip install -r requirements.txt
conda activate llm-dataextraction
cp .env.example .env                   # then add your API key(s)
```

## 2. Inputs

- Source documents: `data/raw/` (see that folder's README for provenance).
- Gold standard & splits: `datasets/`.

## 3. Run the pipeline

```bash
# TODO: fill in the actual entry points as the code is written, e.g.
# python -m src.extraction.run --config configs/models.yaml
# python -m src.evaluation.score
```

## 4. Outputs

- Raw model responses: `results/raw_outputs/`
- Metrics: `results/metrics/`
- Figures & tables: `results/figures/`, `results/tables/`

## Notes

- Prompts are versioned in `prompts/` (`prompts/CHANGELOG.md`).
- Model configurations are pinned in `configs/models.yaml`.
