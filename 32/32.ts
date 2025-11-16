function longestValidParentheses(s: string): number {
    const n = s.length;
    if (n === 0) {
        return 0;
    }

    const stack = [-1];
    const top = (arr: number[]): number => {
        const len = arr.length;
        if (len !== 0) {
            return arr[len-1];
        }
        else {
            throw new Error('Stack is empty!');
        }
    };

    let ans = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            stack.push(i);
        }
        else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            }
            else {
                ans = Math.max(ans, i - top(stack));
            }
        }
    }

    return ans;
};

const longestValidParentheses1 = longestValidParentheses;

export {};
