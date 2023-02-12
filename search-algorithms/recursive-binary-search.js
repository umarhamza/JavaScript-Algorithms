const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

function search(arr, target, leftIndex, rightIndex) {
  // Base case 1
  if (leftIndex > rightIndex) {
    return -1;
  }

  // Base case 2
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  // Recursive search
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// binary search only works with sorted arrays
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)
