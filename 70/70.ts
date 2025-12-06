function climbStairs(n: number): number {
  const map = new Map<number, number>();

  const backtrack = (rest: number): number => {
    if (rest === 0) {
      return 0;
    }

    if (rest === 1) {
      return 1;
    }

    if (rest === 2) {
      return 2;
    }

    if (map.has(rest)) {
      return map.get(rest)!;
    }

    const climbs = backtrack(rest - 1) + backtrack(rest - 2);
    map.set(rest, climbs);
    return climbs;
  };

  return backtrack(n);
};

export {};
