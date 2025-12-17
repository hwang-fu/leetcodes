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

function isPalindrome2(s: string): boolean {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const zero = '0'.charCodeAt(0);
  const nine = '9'.charCodeAt(0);

  const isValid = (idx : number) => {
    const c = s.toLowerCase().charCodeAt(idx);
    return (a <= c && c <= z) || (zero <= c && c <= nine);
  };

  const compare = (l : number, r : number) => {
    return s[l].toLowerCase() === s[r].toLowerCase();
  };

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l <= s.length -1 && !isValid(l)) l++;
    while (r >= 0 && !isValid(r)) r--;
    if (l >= r) break;
    if (!compare(l, r)) {
      return false;
    } else {
      l++;
      r--;
    }
  }

  return true;
};

export {};
