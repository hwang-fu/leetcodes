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



export {};
