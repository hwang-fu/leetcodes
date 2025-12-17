function isPalindrome(s: string): boolean {
  let theString = "";
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const zero = '0'.charCodeAt(0);
  const nine = '9'.charCodeAt(0);
  for (const c of s) {
    const lowerC = c.toLowerCase();
    const asciiC = lowerC.charCodeAt(0);
    if ((a <= asciiC && asciiC <= z) || (zero <= asciiC && asciiC <= nine)) {
      theString += lowerC;
    }
  }

  const n = theString.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (theString[i] !== theString[n - 1 - i]) {
      return false;
    }
  }
  return true;
};

export {};
