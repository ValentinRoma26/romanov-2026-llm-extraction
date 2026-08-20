# LLM Scientific Data Extraction — Research Materials

Prompts, raw model outputs, curated datasets, and tutorial materials accompanying:

**[Self-prompting and cross-model consensus enable reproducible data extraction from scientific literature with large language models](https://arxiv.org/abs/2608.19025)**  
Valentin Romanov, Monique Bax, and Steven Niederer

[Read the paper](https://arxiv.org/abs/2608.19025) ·
[Open the guided tutorial](https://valentinroma26.github.io/romanov-2026-llm-extraction/) ·
[Browse the tutorial files](tutorial/)

## Start here

- **Want to try the workflow yourself?**  
  Follow the [guided tutorial](https://valentinroma26.github.io/romanov-2026-llm-extraction/) or read the [tutorial instructions](tutorial/README.md).

- **Looking for the prompts used in the paper?**  
  Go to [`data/prompts/`](data/prompts/).

- **Looking for original model outputs?**  
  Go to [`data/raw/`](data/raw/).

- **Looking for aligned and scored datasets?**  
  Go to [`data/curated/`](data/curated/).

## Repository structure

```text
.
├── data/
│   ├── prompts/       Prompts and meta-prompts used in each figure
│   ├── raw/           Original model outputs and expert assessments
│   └── curated/       Aligned, verified, and scored datasets
│
└── tutorial/
    ├── README.md      Step-by-step instructions
    ├── benchmark/     Ground-truth data for the tutorial
    ├── feedback/      Feedback template
    ├── paper/         Scientific paper used in the tutorial
    ├── prompts/       Tutorial copies of the research prompts
    └── scoring/       Excel scoring workbook
```

## Materials by figure

| Figure | Experiment | Prompts | Raw data | Curated data |
|---|---|---|---|---|
| **Figure 2** | Expert-written prompt and fixed article set | [Prompts](data/prompts/figure2/) | [Raw](data/raw/figure2/) | [Curated](data/curated/figure2/) |
| **Figure 3** | LLM-authored and aggregated prompts | [Prompts](data/prompts/figure3/) | [Raw](data/raw/figure3/) | [Curated](data/curated/figure3/) |
| **Figure 4** | Deep Research literature discovery and extraction | [Prompts](data/prompts/figure4/) | [Raw](data/raw/figure4/) | [Curated](data/curated/figure4/) |
| **Figure 5** | Brain-organoid reporting assessment | [Prompts](data/prompts/figure5/) | [Raw](data/raw/figure5/) | [Curated](data/curated/figure5/) |

## What the folders contain

### `data/prompts`

The prompts and meta-prompts used for each experiment. Preserve them unchanged when reproducing the original benchmark conditions.

### `data/raw`

The model outputs collected before final alignment and scoring. These include Excel workbooks for Figures 2, 3, and 5, and Markdown Deep Research reports for Figure 4.

### `data/curated`

The aligned and scored workbooks used for the paper’s analysis. Start here if you want to inspect the final datasets without reviewing every raw model response.

### `tutorial`

A self-contained, no-code exercise based on the Figure 2 and Figure 3 workflows. It includes one scientific paper, the original prompts, a small ground-truth benchmark, and an Excel scoring workbook.

## Important note

The experiments were performed using consumer-facing browser interfaces rather than API-based model calls. Model behaviour may change with product, interface, and model updates. Record the model name, access mode, settings, and date when repeating an experiment.

## Citation

```bibtex
@article{romanov2026selfprompting,
  title   = {Self-prompting and cross-model consensus enable reproducible
             data extraction from scientific literature with large language models},
  author  = {Romanov, Valentin and Bax, Monique and Niederer, Steven},
  journal = {arXiv preprint arXiv:2608.19025},
  year    = {2026},
  doi     = {10.48550/arXiv.2608.19025},
  url     = {https://arxiv.org/abs/2608.19025}
}
```
