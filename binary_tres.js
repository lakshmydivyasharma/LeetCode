const isBinaryTree = (array) => {
  const getChildrenNode = (node) => node.slice(1, 2);
  const childrenNodes = array.map(x => getChildrenNode(x));
  const isChildrenNodesIsUnique = (array) => array.length === new Set(array).size;

  return isChildrenNodesIsUnique(childrenNodes);
};


console.log(isBinaryTree(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(isBinaryTree(["(1,2)", "(1,3)"]));
