import json

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
            node_label = list(node.keys())[0]
            neighbours = node[node_label]['neighbours']
            nextBestStep = node[node_label]['nextBestStep']
            all_paths_nodes.append([node_label] + neighbours + [nextBestStep])
    all_paths_nodes = set([item for sublist in all_paths_nodes for item in sublist])
    all_paths_nodes = {i: {'caption': '', 'img': ''} for i in all_paths_nodes if i != 'END'}
    return all_paths_nodes

if __name__ == '__main__':
    paths = load_json('./20211118-173517-paths.json')
    nodes = unique_nodes(paths)

    for path in paths:
        incr = 100 / (len(path) - 1)
        for ix, step in enumerate(path):
            step['progress'] = ix * incr

    write_json(paths, 'paths')
