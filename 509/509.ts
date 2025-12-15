function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  const memo = new Map<number, number>();
  memo.set(0, 0);
  memo.set(1, 1);

  for (let i = 2; i <= n; i++) {
    memo.set(i, memo.get(i-1)! + memo.get(i-2)!);
  }

  return memo.get(n)!;
};

export {};
