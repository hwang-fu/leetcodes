function isIsomorphic(s: string, t: string): boolean {
  const n = s.length;
  const m = t.length;
  if (n !== m) {
    return false;
  }

  const s2t = new Map<string, string>();
  const t2s = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    if (s2t.has(s[i])) {
      if (s2t.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (t2s.has(t[i])) {
        return false;
      }
      s2t.set(s[i], t[i]);
      t2s.set(t[i], s[i]);
    }
  }

  return true;
};

export {};
