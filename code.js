function DFS(graph, startnode, endnode) {
    var Visited = new Array(graph.length).fill(0)
    var ReturnList=[]
    function DFS_(node) {
        Visited[node] = 1;
        if(Visited[endnode]==1){
            ReturnList.push(node)
            return 
        }
        for (const i of graph[node]) {
            if (Visited[i] == 0 && Visited[endnode] == 0) {
                DFS_(i)
                if(Visited[endnode]==1){
                    ReturnList.push(node)
                    return
                }
            }

        }
    }
    DFS_(startnode)
    return ReturnList.reverse()
}
