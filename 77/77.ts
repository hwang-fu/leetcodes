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

function combine2(n: number, k: number): number[][] {
  const ans: number[][] = [];

  const indices: number[] = Array.from({ length: k}, (_, i) => i + 1);

  while (true) {
    ans.push(indices.slice());

    let pos = k - 1;
    while (pos >= 0 && indices[pos] === n - k + pos + 1) {
      pos--;
    }

    if (pos < 0) break;

    indices[pos]++;

    for (let i = pos + 1; i < k; i++) {
      indices[i] = indices[i - 1] + 1;
    }
  }

  return ans;
};

export {};
