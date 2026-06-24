# `data/` — working pipeline data

Internal, working data for the extraction pipeline. This is distinct from
`datasets/`, which holds the curated, citable data released with the paper.

| Folder       | Contents                                                        |
|--------------|-----------------------------------------------------------------|
| `raw/`       | Original source documents. **Immutable** — never edit in place. |
| `interim/`   | Intermediate, partially-processed data.                         |
| `processed/` | Final, analysis-ready extracted data.                           |
| `external/`  | Third-party reference data (ontologies, lookup tables, etc.).   |

Treat `raw/` as read-only: every downstream artifact should be reproducible
from it via the code in `src/`.
