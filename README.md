## PropTreeCompare

PropTreeCompare compares property files of the same name in different directory trees. 

### Build

PropTreeCompare builds using gradle.  To build a combined 'Fat Jar' execute the following:

`gradle buildCombine`

### Usage

`java -jar prop-tree-server-0.0.1-SNAPSHOT.jar [tag1] [path1] [tag2] [path2]...`

Then open a browser to http://localhost:8080