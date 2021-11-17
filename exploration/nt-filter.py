from datetime import datetime

def process_line(line, properties):
    for prop in properties:
        if prop in line:
            return line

if __name__ == '__main__':

    properties = [
        "hc:entityPERSON",
        "hc:entityORG",
        "hc:entityNORP",
        "hc:entityFAC",
        "hc:entityLOC",
        "hc:entityOBJECT",
        # "hc:entityLANGUAGE",
        # "hc:entityDATE",
        # "sdo:birthDate",
        # "sdo:deathDate",
        # "sdo:foundingDate",
        # "sdo:dissolutionDate",
        # "foaf:maker",
        # "foaf:made",
        # "sdo:mentions",
        # "owl:sameAs",
        # "skos:related",
        # "skos:relatedMatch",
        "wdt:P101", # field of work
        # "wdt:P1056",
        "wdt:P106", # occupation
        # "wdt:P127",
        # "wdt:P135",
        # "wdt:P136",
        # "wdt:P137",
        # "wdt:P1535",
        "wdt:P17", # country
        # "wdt:P176",
        # "wdt:P18",
        # "wdt:P180",
        # "wdt:P20",
        # "wdt:P21", # sex or gender
        "wdt:P27",
        "wdt:P279",
        "wdt:P287",
        "wdt:P31",
        "wdt:P3342",
        "wdt:P452",
        "wdt:P495", # country of origin
        "wdt:P607",
        "wdt:P61",
        "wdt:P710",
        "wdt:P749",
        "wdt:P793",
        "sdo:birthPlace",
        "sdo:deathPlace",
    ]

    properties = [i.split(':')[1] for i in properties]

    data = []
    for line in open('hc_dump_latest.nt'):
        line = line.rstrip('\n')
        line = process_line(line, properties)
        if line:
            data.append(line)

    print(f'n rows in filtered dataset: {len(data)}')

    if input('dump to disk? (y/n): ') == 'y':
        label = input('label for file?: ')
        fn = 'hc_dump_latest'
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        out_fn = f'{"-".join(filter(None, [fn, label, ts]))}.nt'
        with open(out_fn, 'w') as outfile:
            for line in data:
                outfile.write(f'{line}\n')
