impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        use std::collections::HashSet;

        let mut rows: Vec<HashSet<char>> = (0..9).map(|_| HashSet::new()).collect();
        let mut cols: Vec<HashSet<char>> = (0..9).map(|_| HashSet::new()).collect();
        let mut subgrids: Vec<HashSet<char>> = (0..9).map(|_| HashSet::new()).collect();

        for r in 0..9 {
            for c in 0..9 {
                let cell = board[r][c];
                if cell == '.' {
                    continue;
                }
                let idx = (r / 3) * 3 + c / 3;
                if rows[r].contains(&cell) || cols[c].contains(&cell) || subgrids[idx].contains(&cell) {
                    return false;
                }

                rows[r].insert(cell);
                cols[c].insert(cell);
                subgrids[idx].insert(cell);
            }
        }

        true
    }
}
