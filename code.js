// COSC3020 All Pairs Shortest Paths
// Noah Mulvaney
// 25 Apr 2024

function allPairsShortestPaths(graph) {
    const nNodes = graph.length;
    
    // initalize dist matrix
    let dist = [];
    let row = [];
    for (let i = 0; i < nNodes; ++i)
        row.push(Infinity);
    for (let i = 0; i < nNodes; ++i)
        dist.push(row);
    
    // set dist to self to 0
    for (let i = 0; i < nNodes; ++i)
        dist[i][i] = 0;
    
    // for each edge, set dist to weight
    for (let i = 0; i < nNodes; ++i)
        for (let j = 0; j < nNodes; ++j)
            if (graph[i][j] != 0) dist[i][j] = graph[i][j];
    
    // for each trio of nodes, compute dist
    for (let i = 0; i < nNodes; ++i)
        for (let j = 0; j < nNodes; ++j)
            for (let k = 0; k < nNodes; ++k)
                if (dist[j][k] > dist[j][i] + dist[i][k])
                    dist[j][k] = dist[j][i] + dist[i][k];
    
    return dist;
}
