import json
import requests
import api

def load_json(path):
    with open(path) as json_file:
        x = json.load(json_file)
    return x

def write_json(obj, name):
    with open(f'{name}.json', 'w') as paths_file:
        json.dump(obj, paths_file, indent=2)

def unique_nodes(paths_json):
    all_paths_nodes = []
    for path in paths_json:
        for node in path:
            node_label = node['url']
            neighbours = node['neighbours']
            nextBestStep = node['nextBestStep']
            all_paths_nodes.append([node_label] + neighbours + [nextBestStep])
    all_paths_nodes = set([item for sublist in all_paths_nodes for item in sublist])
    # all_paths_nodes = {i: {'caption': '', 'img': ''} for i in all_paths_nodes if i != 'END'}
    return list(all_paths_nodes)

def get_labels(entities):
    # get_labels(['http://collections.vam.ac.uk/item/O1254669'])
    url = "https://d0rgkq.deta.dev/labels"
    payload = json.dumps({
      "uris": entities
    })
    headers = {
      'Content-Type': 'application/json'
    }

    return requests.post(url, headers=headers, data=payload).json()


def similarity(a, b):
    # similarity(
    #     "http://collections.vam.ac.uk/item/O1389838",
    #     "https://collection.sciencemuseumgroup.org.uk/objects/co102121"
    # )
    url = 'https://d0rgkq.deta.dev/distance'
    data = {
        'entity_a': a,
        'entity_b': b,
    }
    return requests.post(url, json=data).json()



if __name__ == '__main__':
    from sys import argv
    paths = load_json(argv[1])
    nodes = unique_nodes(paths)

    for path in paths:
        incr = 100 / (len(path) - 1)
        for ix, step in enumerate(path):
            step['progress'] = ix * incr

    write_json(paths, 'paths')

    node_lookup = {}
    for node in nodes:
        if 'sciencemuseumgroup.org.uk/objects' in node:
            id = node.rsplit('/')[-1]
            node_meta = api.scimu('objects', id)
        elif 'sciencemuseumgroup.org.uk/documents' in node:
            id = node.rsplit('/')[-1]
            node_meta = api.scimu('documents', id)
        elif 'sciencemuseumgroup.org.uk/people' in node:
            id = node.rsplit('/')[-1]
            node_meta = api.scimu('people', id)
        elif 'collections.vam.ac.uk' in node:
            id = node.rsplit('/')[-1]
            node_meta = api.vanda(id)
        else:
            node_meta = {
                'title': '',
                'img': '',
                'description': ''
            }
        node_lookup[node] = node_meta

    write_json(node_lookup, 'nodes')
