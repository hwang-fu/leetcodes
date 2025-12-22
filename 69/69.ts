function mySqrt(x: number): number {
  // Edge case: sqrt(0) = 0, sqrt(1) = 1
  if (x < 2) {
    return x;
  }
  let left = 1;
  let right = Math.floor(x / 2);

  // Binary search for the largest n where n² <= x
  while (left <= right) {
    // Calculate midpoint (using this form to avoid potential overflow)
    const mid = Math.floor(left + (right - left) / 2);

    // Calculate mid squared
    const squared = mid * mid;

    if (squared === x) {
      // Perfect square found!
      return mid;
    } else if (squared < x) {
      // mid might be the answer, but let's check if there's a larger one
      // Move the left boundary up to search higher values
      left = mid + 1;
    } else {
      // squared > x, so mid is too large
      // Move the right boundary down to search smaller values
      right = mid - 1;
    }
  }

  return right;
};

export {};
