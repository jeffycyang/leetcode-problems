/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
  const sumList = new ListNode(0)

  let currentNode = sumList
  let currentL1 = l1
  let currentL2 = l2

  let carryOne = false

  while (currentL1 || currentL2) {
    const currentSum = (currentL1 ? currentL1.val : 0) + (currentL2 ? currentL2.val : 0) + (carryOne ? 1 : 0)
    currentNode.val = currentSum

    carryOne = false
    if (currentSum >= 10) {
      carryOne = true
      currentNode.val -= 10
    }

    currentL1 = currentL1 ? currentL1.next : currentL1
    currentL2 = currentL2 ? currentL2.next : currentL2

    if (carryOne || (currentL1 || currentL2)) {
      currentNode.next = new ListNode(0)
      currentNode = currentNode.next
    }
  }

  if (carryOne) currentNode.val += 1

  return sumList
}

// can be improved
