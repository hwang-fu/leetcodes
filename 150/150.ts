function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        console.log(stack);
        switch (token) {
            case '+': {
                const r = stack.pop()!;
                const l = stack.pop()!;
                stack.push(l + r);
            } break;

            case '-': {
                const r = stack.pop()!;
                const l = stack.pop()!;
                stack.push(l - r);
            } break;

            case '*': {
                const r = stack.pop()!;
                const l = stack.pop()!;
                stack.push(l * r);
            } break;

            case '/': {
                const r = stack.pop()!;
                const l = stack.pop()!;
                stack.push(Math.trunc(l / r));
            } break;

            default: {
                stack.push(Number(token));
            } break;
        }
    }

    return stack.pop()!;
};

const evalRPN1 = evalRPN;

export {};
