function generateParenthesis(n: number): string[] {
    const ans: string[] = [];
    const dfs = (s: string, open: number, close: number) => {
        if (open === n && close === n) {
            ans.push(s);
            return;
        }

        if (open < n) {
            dfs(s + "(", open + 1, close);
        }

        if (close < open) {
            dfs(s + ")", open, close + 1);
        }
    };

    dfs("", 0, 0);
    return ans;
};

const generateParenthesis1 = generateParenthesis;

console.log(generateParenthesis(3));

export {};
