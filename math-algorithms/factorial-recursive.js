// n! = n * (n-1)!
const recursiveFactorial = (n) => {
  if (n <= 1) return n;
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Big-O = O(n)
