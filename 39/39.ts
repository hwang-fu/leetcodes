

function combinationSum(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const ans: number[][] = [];

  const n = candidates.length;

  const callback = (prev: number[], start: number) => {
    if (start === n) {
      return;
    }

    const candidate = candidates[start];
    const sum = prev.reduce((acc, c) => acc + c, 0) + candidate;

    if (sum > target) {
      return;
    }
    else if (sum < target) {
      for (let i = start; i < n; i++) {
        callback([...prev, candidate], i);
      }
    }
    else {
      ans.push([...prev, candidate]);
      return;
    }
  };

  for (let i = 0; i < n; i++) {
    callback([], i);
  }

  return ans;
};

const combinationSum1 = combinationSum;

const combinationSum2 = (candidates: number[], target: number): number[][] => {
  candidates.sort((a, b) => a - b);

  const ans: number[][] = [];
  const current: number[] = [];

  const backtrack = (start: number, remaining: number) => {
    if (remaining === 0) {
      ans.push(current.slice());
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];
      if (candidate > remaining) {
          break;
      }
      current.push(candidate);
      backtrack(i, remaining - candidate);
      current.pop();
    }
  }

  backtrack(0, target);
  return ans;
};

export {};
