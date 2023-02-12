const isPrimeSqrt = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

console.log(isPrimeSqrt(1));
console.log(isPrimeSqrt(5));
console.log(isPrimeSqrt(4));

// Big-O = O(sqrt(n))
