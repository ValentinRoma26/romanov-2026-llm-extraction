# `datasets/` — released, citable data

Curated data released alongside the paper. Distinct from `data/`, which is the
internal working pipeline.

| Folder           | Contents                                                       |
|------------------|----------------------------------------------------------------|
| `corpus/`        | The document set the LLM extracts from.                        |
| `gold_standard/` | Human-annotated ground truth used for evaluation.              |
| `annotations/`   | Raw annotation files + annotation guidelines (see its README). |
| `splits/`        | Train / dev / test (or evaluation) subset definitions.         |

If any dataset is too large or restricted to host here, deposit it in an
external repository (Zenodo/OSF/figshare) and record the DOI and access terms
in this file.
