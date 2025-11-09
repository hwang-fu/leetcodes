function minWindow(s: string, t: string): string {
    const m = s.length;
    const n = t.length;
    if (m < n) {
        return "";
    }

    const map = new Map<string, number>();
    for (const c of t) {
        map.set(c, (map.get(c) ?? 0) + 1);
    }

    console.log(map);

    const seen = new Map<string, number>();

    // so the window has at least `n` chars
    let start = 0;
    let windowSize= m + 1;
    for (let i = 0; i <= m - n; i++) {
        for (let size = n; size <= m - i; size++) {

            if (size >= windowSize) {
                break;
            }

            seen.clear();

            for (let j = 0; j < size; j++) {
                const c = s[i + j];
                seen.set(c, (seen.get(c) ?? 0) + 1);
            }

            let isOk = true;
            for (const [k, v] of map) {
                if ((seen.get(k) ?? 0) >= map.get(k)) {
                    continue;
                }
                else {
                    isOk = false;
                    break;
                }
            }

            if (isOk && size < windowSize) {
                windowSize = size;
                start = i;
            }
        }
    }

    return (start + windowSize <= m) ? s.substring(start, start + windowSize) : "";
};

// Logically correct, by far too slow.
const solve1 = minWindow;

const solve2 = (s: string, t: string): string => {
    const m = s.length;
    const n = t.length;
    if (m < n) {
        return "";
    }

    const needed = new Map<string, number>();
    for (const ch of t) {
        needed.set(ch, (needed.get(ch) ?? 0) + 1);
    }
    let neededTypes = needed.size;

    let start = 0;
    let windowSize = Infinity;

    let seen = new Map<string, number>();
    let l = 0;
    for (let r = 0; r < m; r++) {
        const ch = s[r];
        if (needed.has(ch)) {
            seen.set(ch, (seen.get(ch) ?? 0) + 1);
            if ((seen.get(ch) ?? 0) === needed.get(ch)) {
                neededTypes--;
            }
        }

        while (neededTypes === 0) {
            const size = r - l + 1;
            if (size < windowSize) {
                windowSize = size;
                start = l;
            }

            const c = s[l];
            if (needed.has(c)) {
                seen.set(c, seen.get(c) - 1);
                if ((seen.get(c) ?? 0) < needed.get(c)) {
                    neededTypes++;
                }
            }
            l++;
        }
    }

    return windowSize === Infinity ? "" : s.substring(start, start + windowSize);
};

export {};
