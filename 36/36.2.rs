impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        use std::collections::HashSet;

        for row in 0..9 {
            let mut set = HashSet::new();
            for col in 0..9 {
                let cell = board[row][col];
                if cell == '.' {
                    continue;
                }
                if set.contains(&cell) {
                    return false;
                }
                set.insert(cell);
            }
        }

        for col in 0..9 {
            let mut set = HashSet::new();
            for row in 0..9 {
                let cell = board[row][col];
                if cell == '.' {
                    continue;
                }
                if set.contains(&cell) {
                    return false;
                }
                set.insert(cell);
            }
        }

        for k in 0..9 {
            let mut set = HashSet::new();
            for i in 0..3 {
                for j in 0..3 {
                    let row = (k / 3) * 3 + i;
                    let col = (k % 3) * 3 + j;
                    let cell = board[row][col];
                    if cell == '.' {
                        continue;
                    }
                    if set.contains(&cell) {
                        return false;
                    }
                    set.insert(cell);
                }
            }
        }

        true
    }
}

