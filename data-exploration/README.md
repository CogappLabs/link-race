# Heritage Connector Link Race - Data

## What this does

1. With the Heritage Connector Knowledge Graph dataset find a path (if possible) from Object A to Object B
1. For each step along the found path:
   - Create an array of options for the user to choose from: [n random neighbours and the next step along the found path]
1. Once done, generate a unique list of all possible objects the user will see
   - For each object, hit the relevant API to get a title, description, and image (if available)

## Setup

1. Create your virtualenv (Python 3)
1. `cd` to this folder
1. `pip install -r requirements.txt`
1. Save data locally here (in [data-exploration](./)):
   - [Knowledge Graph](https://heritageconnector.s3.eu-west-2.amazonaws.com/rdf/hc_dump_latest.nt) (1.3 GB)
   - [2D coords](https://heritageconnector.s3.eu-west-2.amazonaws.com/visualisation/visualisation_data_with_clusters.tsv) (58 MB, optional)
1. `python3 nt-filter.py`
   - this will ask you if you want to dump the output to disk
1. Use the [path output notebook](./path-output.ipynb) to load the generated dataset, explore the paths, and when you're happy, to dump the path JSON to disk
1. `python3 node-proc.py your-paths.json` to generate the data structures for the frontend, see [examples](../frontend/src/data)
