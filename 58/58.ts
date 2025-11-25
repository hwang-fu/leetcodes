function lengthOfLastWord(s: string): number {
    const n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            continue;
        }

        let j = i;
        while (s[j] !== ' ' && j >= 0) {
            j--;
        }

        return i - j;
    }
};

const lengthOfLastWord = lengthOfLastWord;

export {};
