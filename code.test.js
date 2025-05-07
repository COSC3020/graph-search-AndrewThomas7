const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
//Directed Graph
var G=[
    [1,2,3],
    [0,4,5],
    [0,5],
    [0,5,6],
    [1],
    [1,2,3],
    [3]
]
console.assert(JSON.stringify(DFS(G,0,1))==JSON.stringify([0,1]))
console.assert(JSON.stringify(DFS(G,0,2))==JSON.stringify([0,1,5,2]))
console.assert(JSON.stringify(DFS(G,0,3))==JSON.stringify([0,1,5,3]))
console.assert(JSON.stringify(DFS(G,0,4))==JSON.stringify([0,1,4]))
console.assert(JSON.stringify(DFS(G,0,5))==JSON.stringify([0,1,5]))
console.assert(JSON.stringify(DFS(G,0,6))==JSON.stringify([0,1,5,3,6]))
console.assert(JSON.stringify(DFS(G,3,6))==JSON.stringify([3,6]))
console.assert(JSON.stringify(DFS(G,6,1))==JSON.stringify([6,3,0,1]))
console.assert(JSON.stringify(DFS(G,5,4))==JSON.stringify([5,1,4]))
//Undirected Graph
G2=[
    [1,4],
    [2,3],
    [],
    [],
    [5,6],
    [],
    []
]
console.assert(JSON.stringify(DFS(G2,0,6))==JSON.stringify([0,4,6]))
console.assert(JSON.stringify(DFS(G2,0,5))==JSON.stringify([0,4,5]))
console.assert(JSON.stringify(DFS(G2,1,5))==JSON.stringify([]))
console.assert(JSON.stringify(DFS(G2,6,0))==JSON.stringify([]))
console.assert(JSON.stringify(DFS(G2,1,3))==JSON.stringify([0,1,3]))
//Graph with cycles and directed connections
G3=[
    [0],
    [1],
    [2],
    [3,4],
    [4,5,6,7],
    [6,7],
    [0,7],
    []
]
console.assert(JSON.stringify(DFS(G3,0,0))==JSON.stringify([0]))
console.assert(JSON.stringify(DFS(G3,3,4))==JSON.stringify([3,4]))
console.assert(JSON.stringify(DFS(G3,5,0))==JSON.stringify([5,6,0]))
console.assert(JSON.stringify(DFS(G3,5,7))==JSON.stringify([5,6,7]))
console.assert(JSON.stringify(DFS(G3,4,0))==JSON.stringify([4,5,6,0]))
