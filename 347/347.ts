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

function topKFrequent2(nums: number[], k: number): number[] {
  const count = new Map<number, number>();
  for (const num of nums) count.set(num, (count.get(num) ?? 0) + 1);

  const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
  for (const [num, freq] of count) buckets[freq].push(num);

  const ans: number[] = [];
  for (let i = buckets.length - 1; i >= 0 && ans.length < k; i--) {
    for (const num of buckets[i]) {
      ans.push(num);
      if (ans.length === k) {
        break;
      }
    }
  }
  return ans;
};

export {};
