/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
//one varible to hold the head of the new list
//one variable to hold the current node of the new list
//while loop to check if list1 and list2 are not null
//if list1 is null, set the current node to list2
//if list2 is null, set the current node to list1
//if list1.val < list2.val, set the current node to list1
//if list2.val < list1.val, set the current node to list2
//if list1.val === list2.val, set the current node to list1
//set the current node to the next node
//return the head of the new list
// var newList = new ListNode(0);
// var current = newList;
// while (list1 !== null && list2 !== null)
// let counter = 0
  
let newList = new ListNode();
let current = newList;
for (let i = 0; i < list1.length; i++){
  if (list1[i] < list2[i]){
    current.val = list1[i];
    current.next = list2[i];
    current = newList.next;
  } else {
    current.val = list2[i];
    current.next = list1[i];
    current = newList.next;
  }
  return newList;
}
};
console.log(mergeTwoLists([1,2,4], [1,3,4]))
// while (list1 !== null && list2 !== null){
//   if (list1.val < list2.val) {
//     current = list1.next;
//   }
//   return current;
