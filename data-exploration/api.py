import requests

def scimu(obj_type, id):
    """
    obj_type = objects, people, documents
    id = 'cp26280'
    """

    base = 'https://collection.sciencemuseumgroup.org.uk'
    url = f'{base}/{obj_type}/{id}'
    r = requests.get(url, headers={'Accept': 'application/json'}).json()

    if obj_type == 'people':
        try:
            title = r['data']['attributes']['summary_title']
        except KeyError:
            title = '' 
    else:
        try:
            title = r['data']['attributes']['title'][0]['value']
        except KeyError:
            title = ''
    
    try:
        description = r['data']['attributes']['description'][0]['value']
    except KeyError:
        description = ''
    
    try:
        img = r['data']['attributes']['multimedia'][0]['processed']['large']['location']
    except KeyError:
        img = ''

    data = {
        'title': title,
        'description': description,
        'img': img,
    }
    return data

def vanda(id):
    r = requests.get(f'https://api.vam.ac.uk/v2/object/{id}').json()

    try:
        title = r['record']['titles'][0]['title']
    except (KeyError, IndexError):
        title = ''
    try:
        description = r['record']['briefDescription']
    except KeyError:
        description = ''
    try:
        img = r['meta']['images']['_primary_thumbnail']
    except (KeyError, TypeError):
        img = ''
    
    data = {
        'title': title,
        'description': description,
        'img': img,
    }
    return data

def wikidata(id):
    r = requests.get(f'https://www.wikidata.org/wiki/Special:EntityData/{id}.json').json()['entities'][id]

    try:
        title = r['labels']['en']['value']
    except (KeyError, IndexError):
        title = ''
    try:
        description = r['descriptions']['en']['value']
    except KeyError:
        description = ''
    try:
        img_url = r['claims']['P18'][0]['mainsnak']['datavalue']['value']
        # https://stackoverflow.com/questions/34393884/how-to-get-image-url-property-from-wikidata-item-by-api
        img = f'https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/{img_url}&width=300'
    except (KeyError, TypeError):
        img = ''
    
    data = {
        'title': title,
        'description': description,
        'img': img,
    }
    return data


if __name__ == '__main__':
    # r = scimu('objects', 'co8022291')
    # r = scimu('documents', 'aa110002873')
    # r = scimu('people', 'ap10090')
    # r = vanda('O77348')
    r = wikidata('Q849759')
