function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    else if (x < 10) {
        return true;
    }

    const original = x;
    let reversed = 0;

    while (x) {
        reversed *= 10;
        reversed += (x % 10);
        x = Math.floor(x / 10);
    }

    return reversed === original;
};

const solve = isPalindrome;

export {};
