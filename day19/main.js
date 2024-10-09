class TreeNode {
    cosntructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    Insert(value) {
        const newNode = new TreeNode (value);
        if (!this.root) this.root = newNode;
        let currentNode = this.root;

        while(true) {
            if (value < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                currentNode = currentNode.left
            } else if (value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
                }
            else {
                return;
            }
        }
    }
    remove(value) {
        this.root = this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            let tempNode = this.find(node.right.value);
            node.value = tempNode.value

            const removeValues = {
                ...this.nodeToArray[node.left],
                ...this.nodeToArray[node.right]
            }
            node.left = null
            node.right = null

            removeValues.forEach ((value) => {
                this.Insert(value)
            })
            return node;
        }
        if (value < node.value) {    
            node.left = this.removeNode(node.left, value);
        }
        else {
            node.right = this.removeNode(node.right, value);
        }
    }
    find(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return null
            }
        }
    }

    nodeToArray(node) {
        if (!node) {
            return [];
        } return [
            ...this.nodeToArray(node.left),
            node.value,
            ...this.nodeToArray(node.right),
        ]
    }
    size() {
        return this.nodeSize(this.root);
    }

    nodeSize(node) {
        if (!node) {
            return 0;
        } else {
            return 1 + this.nodeSize(node.left) + this.nodeSize(node.right);
        }
    }
    print() {
        console.log(this.nodeToArray(this.root));
    }
}
class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        bubbleUp();
    }
}




function bubbleUp() {
    let index = index.heap.length - 1;
    while (index > 0) {
        let index = this.heap(index);
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element >= parent) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }
}

class BinaryHeap {
    remove(value) {
        this.heap(index) = this.heap.pop();
        this.bubbleDown(index);
    }

    extractMax () {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
    }
} 

//     bubbleDown() {
//         let index = 0;
//         const length = this.heap.length;
//         const element = this.heap[0];
//         while(true) {
//             let leftChild = 2 * index + 1;
//             let rightChild = 2 * index + 2;
//             let leftChild, rightChild;
//             let swap = null;
//         }
//     }
//
