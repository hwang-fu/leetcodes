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
};

export {};
