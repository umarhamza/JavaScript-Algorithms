# JavaScript-Algorithms

## Big-O Guide

Calculation not dependent on input size - O(1)

1. single - O(1) [constant]
2. loop - O(n) [linear]
3. nested loops - O(n^2)
4. input size is reduced by half - O(logn)

## Space complexity

O(1) - Constant
O(n) - Linear
O(logn) - Logrithmic

## Big-O Chart

![Big-O Chart](./assets/big-o-chart.png)

- [Click here to see the chart](https://github.com/umarhamza/JavaScript-Algorithms/blob/main/assets/big-o-chart.png)

## Objects - Big-O

An object is a collection of key value pairs and always have a constant time complexity (except for searching).

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search  - O(n)
  - Object.keys()
  - Object.values()
  - Object.entries()

## Array - Big-O

An array is an ordered collection of values. Here are the time complexity for an array.

- Insert / remove at the end - O(1)
- Insert / remove at the beginning - O(n)
- Access - O(1)
- Search - O(n)

### JS array methods

- Push / pop - O(1)
- Shift / unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)

## Tutorial

- [Watch JavaScript Algorithms Playlist](https://www.youtube.com/watch?v=coqQwbDezUA&list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa&index=2)

## Algorithm design techniques

### Here's a list of algorithms

#### Brute force

Simple and exhaustive technique that evalutes every possible outcome to find the best solution. Eg: Linear search.

#### Greedy

Choose the best option at the time, without any consideration for the further. Eg. Dijkstra's algorithm, Prim's algorithm and Kruskal's algorithm.

#### Divide and Conquer

Divide the problem into smaller sub-problems. Each sub-problem is then solved and the partial solution is recombined to determine the overall solution. Eg: Binary Search, Quick Sort, Merge Sort and Tower of Hanoi.

#### Dynamic Promming

Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub-problems. Store the result and reuse it for the same sub-problems. This is called memoisation and is an optimisation technique that improves the time complexity of your algorithm. Eg: Fibonacci numbers and climbing staircase.

#### Backtracking

Generate all possible solutions. Check if solution satisfies all the given constraints and only then you proceed with generating subsequent solutions. If the constrains are not satisfied, backtrack and go on a different path to find the solution. Eg: N-Queens problem.

## Fibonacci sequence

The Fibinacci sequence is a sequence in which each number is the sum of the two proceeding ones.

### Problem (Fibonacci)

Given a number `n`, find the first `n` elements of the Fibonacci sequence.

### Solution (Fibonacci)

To calculate the Fibonacci sequence, you need the following formula: F[n] = F[n - 1] + F[n - 2].

#### Sudo code (Fibonacci)

fib = [0, 1]
loop if `i < n`
fib[i] = fib[i - 1] + fib[i - 2]

#### Approach

- The first two numbers in the sequence are 0 and 1.
- So we can add those values immediately in an array.
- Then create a loop from `index` 2 up to `n` number.
- Now we add a new element into the array at `index` 2 which is the sum of the last two numbers in the array.
- In this case `fib[i - 1]` is 1 in the fib array.
- And `fib[i - 2]` is 0 in the fib array.

#### Code (Fibonacci)

``` typescript
const fibonacci = (n: number): number[] => {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
};

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Big-O = O(n)
```

## Factorial

The Factorial of a non-negative number `n` denoted n!, is the product of all positive numbers less than or equal to `n`.

- The Factorial of **zero** is 1.
- The Factorial of **four** is 4 x 3 x 2 x 1 = **24**
- The Factorial of **five** is 5 x 4 x 3 x 2 x 1 = **120**

### Problem (Factorial)

Given an integer `n`, find the  that number.

### Solution (Factorial)

- If `n` is zero or one, return 1.
- Loop up from 2 to or equal to `n`
- Multiply each number by the previous value

#### Code (Factorial)

``` typescript
const factorial = (n: number): number => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
};

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Big-O = O(n)
```

## Prime Number

A prime number is a natural number greater than 1 that in not a product of two smaller natural numbers.

- Five is a prime number because it can only be expressed as 1 x 5 = 5 and 5 x 1 = 5.
- However Four is not a prime number because it can be represented as as 1 x 4 or 2 x 2 or 4 x 1.

### Problem (Prime Number)

Given a natural number `n`, determine if the number is prime of not.

### Solution (Prime Number)

- Return false if `n` is less than two. Any numbers less than 2 is not a prime number (1, 0, -1 etc).
- If `n` is greater than one, we need to check if it is divisible by any smaller number.
  - If `n` is five, check if five is divisible by four, three, or two
  - Create a for loop that will check from two up to four.
- If the number is divisible by all it's smaller numbers, return false.
- If not, return true outside th loop.

### Sudo code (Prime Number)

`n` < 2 return false
loop `index` of 2 up to `n - 1`
    if `n` % `index` is equal to 0 return false
return true

### Code (Prime Number)

```typescript
const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Big-O = O(n)
```

### Prime Number Square Root

Instead of looping though all the numbers smaller than `n`, we can simply loop till the square root of the number smaller than `n`.

Therefore the Big-O will be: **O(sqrt(n))**

```typescript
const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Big-O = O(sqrt(n))
```

## Next Steps

### Solve more problems

- Finding the GCD using Euclidian algorithm.
- Finding permutations and combinations of a list of numbers.
- Finding the longest common substring in a given string.
- Knapsack problem.

### Watch the JavaScript Data Structures course
