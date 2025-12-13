function addBinary(a: string, b: string): string {
  let ans = '';

  let carry = 0;

  const xs = a.split('');
  const ys = b.split('');
  while (xs.length !== 0 && ys.length !== 0) {
    const x = xs.pop()!.charCodeAt(0) - '0'.charCodeAt(0);
    const y = ys.pop()!.charCodeAt(0) - '0'.charCodeAt(0);
    const sum = x + y + carry;
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }

  while (xs.length !== 0) {
    const x = xs.pop()!.charCodeAt(0) - '0'.charCodeAt(0);
    const sum = x + carry;
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }

  while (ys.length !== 0) {
    const y = ys.pop()!.charCodeAt(0) - '0'.charCodeAt(0);
    const sum = y + carry;
    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    ans = '1' + ans;
  }

  return ans;
};

function addBinary2(a: string, b: string): string {
  let ans = '';
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? Number(a[i]) : 0;
    const y = j >= 0 ? Number(b[j]) : 0;
    const sum = x + y + carry;

    ans = (sum % 2) + ans;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return ans;
}

export {};
