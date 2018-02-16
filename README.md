## PropTreeCompare [![Build Status](https://travis-ci.org/unamanic/prop-tree-compare.svg?branch=master)](https://travis-ci.org/unamanic/prop-tree-compare)

PropTreeCompare compares property files of the same name in different directory trees. 

### Build

PropTreeCompare builds using gradle.  To build a combined 'Fat Jar' execute the following:

`gradle buildCombine`

### Usage

`java -jar prop-tree-server-0.9.2.jar [tag1] [path1] [tag2] [path2]...`

Then open a browser to http://localhost:8080