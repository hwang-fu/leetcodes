function nthUglyNumber(n: number): number {
  const ugly = new Array<number>(n);
  ugly[0] = 1;

  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  for (let i = 1; i < n; i++) {
    const next2 = ugly[i2] * 2;
    const next3 = ugly[i3] * 3;
    const next5 = ugly[i5] * 5;

    const next = Math.min(next2, next3, next5);
    ugly[i] = next;

    if (next === next2) i2++;
    if (next === next3) i3++;
    if (next === next5) i5++;
  }

  return ugly[n-1];
};

export {};
