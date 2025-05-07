# Search in Graphs

Recall the pseudocode for Depth-First Search:

Given a graph, a start node, and a node we're looking for:
- starting at the start node, while unvisited nodes remain
    - if current vertex $v$ is the node we're looking for, return it
    - mark $v$ as visited
    - for each edge $(v,w)$
        - recursively process $w$ unless marked visited

Implement the algorithm. You can choose any of the data structures we covered
(adjacency matrix or adjacency list) for the implementation. Your function
should return the list of nodes on the path from the start to the target (not
the list of nodes that you looked at during the search). If start and target are
the same, it should return a list with only that node. If there is no path from
the start to the target, it should return an empty list. Start with the template
I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Sources

#1-https://github.com/COSC3020/graph-search-ZachRenz/blob/main/code.test.js-Used this to figure out what I should do for my test code. I used a similar format to what was used here but created all my own graphs to verify the code.

#2- Got Help from my roomate with pusdo code for writing the algorithm recursively.


## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

# Answer

To analyze the time complexity we will step through the algorithm step by step to figure out whats happening

The first thing we do is create an array filled with zeros the length of the graph and call it Visited. Here every entry refers to if a node has been visited or not so we get $O(V)$ from this. Next we create an empty list which is of a constant time operation.

Next we dive into the inner function called DFS_. Here is where the actual Deapth first search is occuring and we take in a node as a parameter. We feed it the start node.

Once inside we first mark the node we fed the inner function as visited, this is a neglegable operation. Then we do a check to see if we found the node we are looking for, also of a constant time to perform. Next we run a for loop that goes through each edge within the supplied node and performs a recursive call on it as long as it hasn't been visited. Overall this encures a time complexity of $O(|V+E|)$ in the worst case because we have to check all nodes and all edges. Upon exiting the stacks we perform one more check to see if the node was found and then append to the return list if necessary.

Overall this gives us a complexity of $$V+|V+E|=|V+E|\in \theta(|V+E|)$$

## Bonus

Implement and analyze breadth-first search.
