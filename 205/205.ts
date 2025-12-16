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

function isIsomorphic2(s: string, t: string): boolean {
  const n = s.length;
  const m = t.length;
  if (n !== m) {
    return false;
  }

  const s2t = new Map<string, string>();
  const t2s = new Map<string, string>();

  for (let i = 0; i < n; i++) {
    const s_i = s[i];
    const t_i = t[i];

    if (s2t.has(s_i) && s2t.get(s_i) !== t_i) return false;
    if (t2s.has(t_i) && t2s.get(t_i) !== s_i) return false;

    s2t.set(s_i, t_i);
    t2s.set(t_i, s_i);
  }

  return true;
};

export {};
