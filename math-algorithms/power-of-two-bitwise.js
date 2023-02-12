const isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));

// Big-O = O(1)
