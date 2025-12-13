function plusOne(digits: number[]): number[] {
  const ans: number[] = [];

  let carry = 1;
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    const sum = carry + digits[i];
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry) {
    ans.push(carry);
  }

  return ans.reverse();
};

export {};
