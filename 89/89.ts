function grayCode(n: number): number[] {
  const ans: number[] = [];
  const visited = new Set<number>();

  const backtrack = (start: number): boolean => {
    if (ans.length === 1 << n) {
      return true;
    }

    for (let i = 0; i < n; i++) {
      const next = start ^ (1 << i);
      if (!visited.has(next)) {
        visited.add(next);
        ans.push(next);
        if (backtrack(next)) {
          return true;
        }
        visited.delete(next);
        ans.pop();
      }
    }

    return false;
  };

  // start from zero.
  ans.push(0);
  visited.add(0);
  backtrack(0);

  return ans;
};

function grayCode2(n: number): number[] {
  const ans: number[] = [];
  for (let i = 0; i < (1 << n); i++) {
    ans.push(i ^ (i >> 1));
  }
  return ans;
};

export {};
