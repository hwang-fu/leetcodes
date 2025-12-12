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

const evalRPN2 = (tokens: string[]): number => {
    const stack: number[] = [];

    const ops: Record<string, (a: number, b: number) => number> = {
        '+': (l, r) => l + r,
        '-': (l, r) => l - r,
        '*': (l, r) => l * r,
        '/': (l, r) => Math.trunc(l / r),
    };

    for (const token of tokens) {
        const op = ops[token];

        if (op) {
            const r = stack.pop()!;
            const l = stack.pop()!;
            stack.push(op(l, r));
        }
        else {
            stack.push(Number(token));
        }
    }

    return stack.pop()!;
};

export {};
