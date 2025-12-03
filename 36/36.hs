isValidSudoku :: [[Char]] -> Bool
isValidSudoku board =
  (all isValid board)
  && (all isValid (transpose board))
  && (all isValid (mapSubgrids board))

isValid :: [Char] -> Bool
isValid cs =
  let
    digits = filter (\c -> c /= '.') cs
  in
    length digits == length (distinct digits)

distinct :: Eq a => [a] -> [a]
distinct [] = []
distinct (x:xs) = x : distinct (filter (/= x) xs)

transpose :: [[Char]] -> [[Char]]
transpose [] = []
transpose ([]:_) = []
transpose board = map head board : transpose (map tail board)

mapSubgrids :: [[Char]] -> [[Char]]
mapSubgrids board = [mapSubgrid board r c | r <- [0, 3, 6], c <- [0, 3, 6]]

mapSubgrid :: [[Char]] -> Int -> Int -> [Char]
mapSubgrid board r c = concat [take 3 (drop c (board !! (r + i))) | i <- [0..2]]
