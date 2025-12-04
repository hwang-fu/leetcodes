function uniquePaths(m: number, n: number): number {
  // it needs m - 1 downs and n - 1 rights

  const backtrack = (downs: number, rights: number): number => {
    if (downs === m - 1 && rights === n - 1) {
      return 1;
    }

    if (downs === m - 1) {
      return backtrack(downs, rights + 1);
    }

    if (rights === n - 1) {
      return backtrack(downs + 1, rights);
    }

    return backtrack(downs + 1, rights) + backtrack(downs, rights + 1);
  };

  return backtrack(0, 0);
};

function uniquePaths2(m: number, n: number): number {
  const memo = new Map<string, number>();

  const backtrack = (downs: number, rights: number): number => {
    if (downs === m - 1 && rights === n - 1) {
      return 1;
    }

    const key = `${downs},${rights}`;
    if (memo.has(key)) {
      return memo.get(key)!;
    }

    let paths = 0;

    if (downs === m - 1) {
      paths = backtrack(downs, rights + 1);
    }
    else if (rights === n - 1) {
      paths = backtrack(downs + 1, rights);
    }
    else {
      paths = backtrack(downs + 1, rights) + backtrack(downs, rights + 1);
    }

    memo.set(key, paths);
    return paths;
  };

  return backtrack(0, 0);
};



export {};
