function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const ans: string[][] = Array.from({ length: numRows }, () => []);

    let direction = 1;
    let idx = 0;

    for (const c of s) {
        ans[idx].push(c);

        idx += direction;

        if (idx === 0) {
            direction = 1;      // bounce down
        }
        else if (idx === numRows-1) {
            direction = -1;     // bounce up
        }
    }

    return ans.flat().join("");
};

const solve1 = convert;

export {};
