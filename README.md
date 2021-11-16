# Heritage Connector

See initial thoughts [here](./initial-thoughts.md).

## Setup for investigation
1. Create your virtualenv (Python 3)
1. `pip install -r requirements.txt`
1. Save data locally (in [exploration](./exploration/)):
    - [Knowledge Graph](https://heritageconnector.s3.eu-west-2.amazonaws.com/rdf/hc_dump_latest.nt) (1.3 GB)
    - [2D coords](https://heritageconnector.s3.eu-west-2.amazonaws.com/visualisation/visualisation_data_with_clusters.tsv) (58 MB)
1. `make sample` - top 1 million rows of Knowledge Graph
1. `jupyter-lab`

## Plan for day

### API
Tech: Python?
1. Random node from API
    - Parameter: collection (e.g. SciMu or V&A)
1. Best path ([notebook](./exploration/shortest-path.ipynb))
    - Parameter: some 'obviousness' variable e.g. proportion of high level categorisations
1. Return next-step candidates for a given node & target node
    - Parameter: some filtering to adjust difficulty
    - Ignore ones without images?
    - Should the target node be the final node, or next best-step node?
    - Different viz based on if explicit link or just similar?
1. Return distance score, based on given node and final node
    - Tristan: "Kalyan said that he will extend the API so that we can get a similarity value for any two different points"

### Front-end
Tech: React?
1. Some visualisation of space
    - Similar to their [example](https://thesciencemuseum.github.io/heritage-connector-demos/3_visualisation/index.html#)?
1. Display of distance score (similiarity?)
1. Hint mechanism?
1. Wrap-up of path on completion?

### Demo
1. Curated set of interesting pathways?

### Further ideas
1. Some way to capture a user's path and convert into a [Storiiies manifest](https://storiiies.cogapp.com/holbein/manifest.json)?
