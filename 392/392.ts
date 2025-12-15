function isSubsequence(s: string, t: string): boolean {
  const xs = s.split('');
  const ys = t.split('');
  for (const y of ys) {
    if (xs.length && xs[0] === y) xs.shift();
  }
  return xs.length === 0;
};

export {};
