// Write maxDepth(root), which returns the number of nodes along the longest path from the root down to a leaf. 
// An empty tree has depth 0.
function maxDepth(root) {
    if(root === null) return 0;
    const leftside = maxDepth(root.left);
    const rightside = maxDepth(root.right);
    return 1 + Math.max(leftside, rightside);
}
// maxDepth([3,9,20,null,null,15,7])  → 3

