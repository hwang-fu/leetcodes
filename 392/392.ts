function isSubsequence(s: string, t: string): boolean {
  const xs = s.split('');
  const ys = t.split('');
  for (const y of ys) {
    if (xs.length && xs[0] === y) xs.shift();
  }
  return xs.length === 0;
};

function isSubsequence2(s: string, t: string): boolean {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return i === s.length;
};

export {};
