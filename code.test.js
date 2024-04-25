const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let graph = [[]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[]]));

graph = [[0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[0]]));

graph = [[0, 1], [2, 0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[0, 1], [2, 0]]));

graph = [[0, 1, 4], [2, 0, 1], [3, 4, 0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[0, 1, 2], [2, 0, 1], [3, 4, 0]]));

graph = [[0, 1, 4, 2], [2, 0, 1, 3], [3, 4, 0, 1], [2, 3, 1, 0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[0, 1, 2, 2], [2, 0, 1, 2], [3, 4, 0, 1], [2, 3, 1, 0]]));

graph = [[0, 1, 0, 2], [2, 0, 0, 3], [3, 0, 0, 1], [0, 3, 1, 0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify([[0, 1, 3, 2], [2, 0, 4, 3], [3, 4, 0, 1], [4, 3, 1, 0]]));

assert("Lars is a great teacher!");
