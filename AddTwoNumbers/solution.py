# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
  def addTwoNumbers(self, l1, l2):
    sum = ListNode(0)

    currentNode = sum
    currentL1 = l1
    currentL2 = l2

    carryOne = False

    while currentL1 != None or currentL2 != None:
      currentSum = (currentL1.val if currentL1 != None else 0) + (currentL2.val if currentL2 != None else 0) + (1 if carryOne == True else 0)
      currentNode.val = currentSum

      carryOne = False
      if currentSum >= 10:
        carryOne = True
        currentNode.val = currentNode.val - 10

      currentL1 = currentL1.next if currentL1 != None else currentL1
      currentL2 = currentL2.next if currentL2 != None else currentL2

      if carryOne == True or (currentL1 != None or currentL2 != None):
        currentNode.next = ListNode(0)
        currentNode = currentNode.next

    if carryOne == True:
      currentNode.val = currentNode.val + 1

    return sum
