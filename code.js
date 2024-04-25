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
        dist.push(row.slice()); // must slice to avoid JS reference nightmare
    
    // set dist to self to 0
    for (let i = 0; i < nNodes; ++i)
        dist[i][i] = 0;
    
    // for each edge, set dist to weight
    for (let i = 0; i < nNodes; ++i)
        for (let j = 0; j < nNodes; ++j)
            if (graph[i][j] != 0) dist[i][j] = graph[i][j];
    
    // for each trio of nodes, compute dist
    for (let k = 0; k < nNodes; ++k)
        for (let i = 0; i < nNodes; ++i)
            for (let j = 0; j < nNodes; ++j)
                if (dist[i][j] > dist[i][k] + dist[k][j])
                    dist[i][j] = dist[i][k] + dist[k][j];

    return dist;
}
