twoSumBruteForce :: [Int] -> Int -> Maybe (Int, Int)
twoSumBruteForce nums target =
    case [ (i, j) | (i, x) <- indexed, (j, y) <- indexed, i < j, x + y == target ] of
        (pair:_) -> Just pair
        []       -> Nothing
    where
        indexed :: [(Int, Int)]
        indexed = zip [0..] nums
