const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

var G3=[
    [1,2,3],
    [0,4,5],
    [0,5],
    [0,5,6],
    [1],
    [1,2,3],
    [3]
]
console.assert(JSON.stringify(DFS(G3,0,1))==JSON.stringify([0,1]))
console.assert(JSON.stringify(DFS(G3,0,2))==JSON.stringify([0,1,5,2]))
console.assert(JSON.stringify(DFS(G3,0,3))==JSON.stringify([0,1,5,3]))
console.assert(JSON.stringify(DFS(G3,0,4))==JSON.stringify([0,1,4]))
console.assert(JSON.stringify(DFS(G3,0,5))==JSON.stringify([0,1,5]))
console.assert(JSON.stringify(DFS(G3,0,6))==JSON.stringify([0,1,5,3,6]))
console.assert(JSON.stringify(DFS(G3,3,6))==JSON.stringify([3,6]))
console.assert(JSON.stringify(DFS(G3,6,1))==JSON.stringify([6,3,0,1]))
console.assert(JSON.stringify(DFS(G3,5,4))==JSON.stringify([5,1,4]))

G2=[
    [1,4],
    [0,2,3],
    [1],
    [1],
    [0,5,6],
    []
]
