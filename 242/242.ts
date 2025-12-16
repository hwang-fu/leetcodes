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

export {};
