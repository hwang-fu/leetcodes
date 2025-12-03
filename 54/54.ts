function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];

  while (matrix.length >= 2) {
    const topRow= matrix.shift()!;
    const bottomRow = matrix.pop()!.reverse();

    const rightColumn: number[] = [];
    for (let i = 0; i < matrix.length; i++) {
      const element  = matrix[i].pop();
      if (element !== undefined) {
        rightColumn.push(element);
      }
    }

    const leftColumn: number[] = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      const element = matrix[i].shift();
      if (element !== undefined) {
        leftColumn.push(element);
      }
    }

    ans.push(...topRow);
    ans.push(...rightColumn);
    ans.push(...bottomRow);
    ans.push(...leftColumn);
  }

  if (matrix.length === 1) {
    ans.push(...matrix[0]);
  }

  return ans;
};

const spiralOrder2 = (matrix: number[][]): number[] => {
  const ans: number[] = [];

  let t = 0;                     // top
  let b = matrix.length - 1;     // bottom
  let l = 0;                     // left
  let r = matrix[0].length - 1;  // right

  while (t <= b && l <= r) {
    // top row
    for (let i = l; i <= r; i++) {
      ans.push(matrix[t][i]);
    }
    t++;

    // right column
    for (let i = t; i <= b; i++) {
      ans.push(matrix[i][r]);
    }
    r--;

    // bottom row
    if (t <= b) {
      for (let i = r; i >= l; i--) {
        ans.push(matrix[b][i]);
      }
      b--;
    }

    // left column
    if (l <= r) {
      for (let i = b; i >= t; i--) {
        ans.push(matrix[i][l]);
      }
      l++;
    }

  }

  return ans;
};

export {};
