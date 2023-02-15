// ! FOR TESTING PURPOSES

/* CALL STACK
a = [-5, 2, 10, 4, 6]
i = 0


lin(i = 4)
lin(i = 3)
lin(i = 2)
lin(i = 1)
lin(i = 0)
*/

function lin(a, t, i = 0) {
  if (a[i] === t) return i;
  if (i >= a.length) return -1;
  return lin(a, t, i + 1);
}
console.log(lin([-5, 2, 10, 4, 6], 4));
