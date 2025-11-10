function letterCombinations(digits: string): string[] {
    const map = new Map<string, string>([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ]);

    const ans: string[] = [];
    for (const d of digits) {
        const keys = map.get(d)!.split("");

        const n = ans.length;

        if (n === 0) {
            for (const k of keys) {
                ans.push(k);
            }
            continue;
        }

        for (let i = 0; i < n; i++) {
            const combo = ans.shift()!;
            for (const k of keys) {
                ans.push(combo + k);
            }
        }
    }
    return ans;
};

const solve1 = letterCombinations;

const solve2 = (digits: string): string[] => {
    const mapping = [
        "",     // 0
        "",     // 1
        "abc",  // 2
        "def",  // 3
        "ghi",  // 4
        "jkl",  // 5
        "mno",  // 6
        "pqrs", // 7
        "tuv",  // 8
        "wxyz", // 9
    ];

    const ans: string[] = [];

    const path: string[] = [];
    const dfs = (idx: number) => {
        if (idx === digits.length) {
            ans.push(path.join(""));
            return;
        }

        const d = digits.charCodeAt(idx) - 48; // ASCII '0' is 48
        const keys = mapping[d];

        for (const k of keys) {
            path.push(k);
            dfs(idx + 1);;
            path.pop();
        }
    };

    dfs(0);
    return ans;
};

export {};
