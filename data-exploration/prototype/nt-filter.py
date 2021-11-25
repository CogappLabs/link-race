from datetime import datetime

def process_line(line, properties):
    for prop in properties:
        if prop in line:
            return line

if __name__ == '__main__':

    properties = [
        # "hc:entityPERSON",
        # "hc:entityORG",
        # "hc:entityNORP",
        # "hc:entityFAC",
        # "hc:entityLOC",
        # "hc:entityOBJECT",
        # "hc:entityLANGUAGE",
        # "hc:entityDATE",
        # "sdo:birthDate",
        # "sdo:deathDate",
        # "sdo:foundingDate",
        # "sdo:dissolutionDate",
        "foaf:maker",
        "foaf:made",
        # "sdo:mentions",
        # "owl:sameAs",
        # "skos:related",
        # "skos:relatedMatch",
        "wdt:P101", # field of work
        "wdt:P1056", # product or material produced
        "wdt:P106", # occupation
        "wdt:P127", # owned by
        "wdt:P135", # movement (as in artistic or philosophical movement etc.)
        "wdt:P136", # genre
        "wdt:P137", # operator (person, profession or organisation)
        "wdt:P1535", # used by
        "wdt:P17", # country
        "wdt:P176", # manufacturer
        "wdt:P18", # image (image of relevant illustration of the subject)
        "wdt:P180", # depicted entity
        "wdt:P20", # place of death
        "wdt:P21", # sex or gender
        "wdt:P27", # country of citizenship
        "wdt:P279", # subclass of
        "wdt:P287", # designed by
        "wdt:P31", # instance of
        "wdt:P3342", # person linked to the item in any possible way
        "wdt:P452", # specific industry of company or organization
        "wdt:P495", # country of origin
        "wdt:P607", # conflict - battles, wars or other military engagements in which the person or item participated
        "wdt:P61", # discoverer or inventor
        "wdt:P710", # participant
        "wdt:P749", # parent organisation
        "wdt:P793", # significant event
        # "sdo:birthPlace",
        # "sdo:deathPlace",
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
