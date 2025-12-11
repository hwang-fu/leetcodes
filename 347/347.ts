function topKFrequent(nums: number[], k: number): number[] {
  const ans: number[] = [];

  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const arr: number[][] = [];
  for (const [k, v] of map) {
    arr.push([k ,v]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    ans.push(arr[i][0]);
  }

  return ans;
};

export {};
