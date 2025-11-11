function isValid(s: string): boolean {
    const stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        }
        else if (ch === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        }
        else if (ch === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        }
        else if (ch === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        }
    }

    return stack.length === 0;
};

const isValid1= isValid;

export {};
