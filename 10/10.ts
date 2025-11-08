function isMatch(s: string, p: string): boolean {
    const dp: boolean[][] = Array.from(
        { length: s.length + 1 },
        () => new Array(p.length + 1).fill(false));

    dp[0][0] = true;
    for (let j = 1; j < p.length; j++) {
        if (p[j] === '*') {
            dp[0][j+1] = dp[0][j-1];
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p[j] === '.') {
                dp[i+1][j+1] = dp[i][j];
            }
            else if (p[j] === '*') {
                // Case 1: zero occurence.
                let isMatched = dp[i+1][j-1];

                const preceding = p[j-1];
                if (preceding === '.' || preceding === s[i]) {
                    // Case 2: 1+ occurence(s).
                    isMatched = (isMatched || dp[i][j+1]);
                }

                dp[i+1][j+1] = isMatched;
            }
            else {
                dp[i+1][j+1] = dp[i][j] && s[i] === p[j];
            }
        }
    }

    return dp[s.length][p.length];
};
export {};
