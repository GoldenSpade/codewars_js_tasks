const nums = [10, 14, 2, 23, 19];

function largestPairSum(numbers) {
  const sorted = [...numbers].sort((a, b) => b - a);

  return sorted[0] + sorted[1];
}

console.log(largestPairSum(nums));
