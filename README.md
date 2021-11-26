# Heritage Connector Link Race

## Goal

Give people a purpose to explore the [Heritage Connector](https://www.sciencemuseumgroup.org.uk/project/heritage-connector/) (HC) dataset, and illustrate that it spans multiple institutions.

## Idea

We wanted a way to interactively explore the dataset via connected objects. So we decided to implement something like the [Wiki Game](https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game), where the users starts at Page A, and needs to get to Page B by clicking links within each Page.

A by-product of this is that they have to consider each object, and where each potential path from that object i.e. "is it closer to my target?"

## Implementation

In our case we were working with a Graph dataset of nodes and edges, where each node is an object from the HC dataset, coupled with the relevant APIs from the institution that each object belongs to (to get images, descriptions, etc.), topped off with a retro gaming theme.

There are two parts to this repo, both of which have their own README:

1. [Data](./data-exploration) - working with the HC Triples to generate some paths, and gather metadata on each object along those paths
1. [Frontend](./frontend) - a React App built on top of the dataset to

## Demo

You can see the app via [GitHub Pages](https://cogapplabs.github.io/link-race/).

If you want to run locally, please see the [frontend](./frontend) README.

## Links

For more infomation about this project, please see the [Cogapp blogpost TODO]()
