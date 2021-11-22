# Frontend

## Description

Designs for frontend & interactions

## Data model

1. Path ([demo](../data/single-path.json))
1. Step = each element in Path
   - Own component to show available metadata (title, image, description) as a card
1. Nodes ([demo](../data/nodes.json)) - metadata for all possible nodes encountered

## MVP

1. Landing page
   - Should show column 1 = initial step & column 2 = options (AKA neighbours and nextBestStep)
1. Each Step should display a metadata from Node object
   - title
   - description
   - image
1. User interaction:
   - User can click one of the Step options in column 2
   - If correct, update column 1 to the selected object, generate new set of options
   - If false, CSS the chosen option to look wrong?
   - User tries new option until correct
   - When on last Path element, some success message

## Nice-to-have

1. Visualise user's path
   - Does this need a new data model to capture user's path?
   - On completion, show a summary of their journey.
1. General prettiness
   - Arrows to link Steps
1. Initial page has a list of start/end points for user to choose
   - Requires more data work
