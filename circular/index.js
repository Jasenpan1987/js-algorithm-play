// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// function circular(list) {
//   if (!list.head || !list.head.next || !list.head.next.next) return false;
//   let slow = list.head.next;
//   let fast = list.head.next.next;

//   while (slow !== fast) {
//     if (!slow || !fast) return false;
//     if (!slow.next || !fast.next || !fast.next.next) return false;
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return true;
// }

function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false
}

module.exports = circular;
