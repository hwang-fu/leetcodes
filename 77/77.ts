function combine(n: number, k: number): number[][] {
  const ans: number[][] = [];

  const backtrack = (start: number, current: number[]) => {
    if (current.length === k) {
      ans.push(current.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(1, []);

  return ans;
};

export {};
