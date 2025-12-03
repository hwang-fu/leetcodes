function isValidSudoku(board: string[][]): boolean {
  // examine the rows
  for (let r = 0; r < 9; r++) {
    const set = new Set<string>();
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === '.') {
        continue;
      }
      if (set.has(cell)) {
        return false;
      }
      set.add(cell);
    }
  }

  // examine the cols
  for (let c = 0; c < 9; c++) {
    const set = new Set<string>();
    for (let r = 0; r < 9; r++) {
      const cell = board[r][c];
      if (cell === '.') {
        continue;
      }
      if (set.has(cell)) {
        return false;
      }
      set.add(cell);
    }
  }

  // examine the subgrids
  for (let k = 0; k < 9; k++) {
    const set = new Set<string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const r = (Math.floor(k / 3) * 3) + i;
        const c = ((k % 3) * 3)+ j;
        const cell = board[r][c];
        if (cell === '.') {
          continue;
        }
        if (set.has(cell)) {
          return false;
        }
        set.add(cell);
      }
    }
  }

  return true;
};

function isValidSudoku2(board: string[][]): boolean {
  const rows = Array(9).fill(null).map(() => new Set<string>);
  const cols = Array(9).fill(null).map(() => new Set<string>);
  const subgrids = Array(9).fill(null).map(() => new Set<string>);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      if (cell === '.') {
        continue;
      }

      const idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(cell) || cols[c].has(cell) || subgrids[idx].has(cell)) {
        return false;
      }

      rows[r].add(cell);
      cols[c].add(cell);
      subgrids[idx].add(cell);
    }
  }

  return true;
}

export {};
