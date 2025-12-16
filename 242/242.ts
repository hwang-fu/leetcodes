function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();

  for (const c of s) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (const c of t) {
    if (!map.get(c)) {
      return false;
    }
    map.set(c, map.get(c)! - 1);
    if (map.get(c) === 0) {
      map.delete(c);
    }
  }

  return map.size === 0;
};

function isAnagram2(s: string, t: string): boolean {
  const n = s.length;
  const m = t.length;
  if (m !== n) {
    return false;
  }

  // since `s` and `t` only consist of English lower letters, there are only 26 such letters.
  const counts = new Int32Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - a]++;
    counts[t.charCodeAt(i) - a]--;
  }

  return counts.every((c) => c === 0);
};

export {};
