# Heritage Connector

## Goal
Give people a purpose to explore the collection.

As a user, landing [here](https://thesciencemuseum.github.io/heritage-connector-demos/3_visualisation/index.html#) is cool, but the map itself means little. I tend to use the dimensions mapped to colour to navigate the network.

## Idea
Something like wikirace (https://en.wikipedia.org/wiki/Wikipedia:Wiki_Game).

User has to 'race' from point A to point B in the shortest number of steps (or time).

A by-product of this is that they have to consider each object, and where each potential path from that object i.e. is it closer to my target?

are the collection's objects too esoteric to make this fun for the average user?

## Logic
1. random beginning & end node
1. determine best path OR determine which paths go through nodes that are 'obvious' for the average user
    * investigation needed to determine what metric this is
    * should this just be the Connections or Neighbours API similiarity field?
    * user picks difficulty scale, based on 'obviousness'
1. active node shown as a network plot with n(3?) options (random from top y 'best next steps')
1. maybe some sort of 'distance remaining' display

## Visuals
network plot (3D?) tracing path already travelled (some data to determine plot location?)

competitive element i.e. race / sharable url &timer

on completion, maybe something with storiiies to do a summary of all nodes they 'travelled' through

### TODO
Look at ipynb & recreate (colab?)
    can we force SciMu -> V&A
Does Neighbours API (does this take two objects?) return a similarity score
Read  other's  idea / add my idea to google doc as team idea.