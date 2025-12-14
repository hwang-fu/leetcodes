impl Solution {
    pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
        let mut rows    = [[false; 9]; 9];
        let mut columns = [[false; 9]; 9];
        let mut boxes   = [[false; 9]; 9];

        for i in 0..9 {
            for j in 0..9 {
                if let Some(d) = board[i][j].to_digit(10) {
                    let d = (d - 1) as usize;
                    let box_id = (i / 3) * 3 + j / 3;
                    if rows[i][d] || columns[j][d] || boxes[box_id][d] {
                        return false;
                    }

                    rows[i][d] = true;
                    columns[j][d] = true;
                    boxes[box_id][d] = true;
                }
            }
        }

        true
    }
}
