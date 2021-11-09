# Heritage Connector

See initial thoughts [here](./thoughts.md).

## Setup
1. Create your virtualenv (Python 3)
1. `pip install -r requirements.txt`
1. Save data locally:
    - [Knowledge Graph](https://heritageconnector.s3.eu-west-2.amazonaws.com/rdf/hc_dump_latest.nt) (1.3 GB)
    - [2D coords](https://heritageconnector.s3.eu-west-2.amazonaws.com/visualisation/visualisation_data_with_clusters.tsv) (58 MB)
1. `make sample` - top 1 million rows of Knowledge Graph
1. `jupyter-lab`
