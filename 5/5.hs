import Text.Read (Lexeme(Char))
-- There is a built-in index find in the Prelude
-- [1, 2,3] !! 0 == 1
find :: [] a -> Int -> a
find (x:_) 0  = x
find (_: xs) n
  | n < 0     = error "negative index"
  | otherwise = find xs (n - 1)
find [] _     = error "index out of bound"

expandAroundCenter :: [] Char -> Int -> Int -> Int
expandAroundCenter s l r =
    go l r
  where
    n = length s
    go :: Int -> Int -> Int
    go l' r' =
      if (l' > 0) && (r' < n) && (find s l' == find s r')
      then go (l' - 1) (r' + 1)
      else r' - l' - 1

longestPalindrome :: [] Char -> [] Char
longestPalindrome "" = ""
longestPalindrome s  =
    go 0 0 0
  where
    n = length s
    go :: Int -> Int -> Int -> [] Char
    go i bestStart bestLen
      | i >= n    = take bestLen (drop bestStart s)
      | otherwise =
        let oddLength  = expandAroundCenter s i i
            evenLength = expandAroundCenter s i (i + 1)
            len        = max oddLength evenLength
            (bestStart', bestLen')
              | len > bestLen   =
                  let start = i - (len - 1) `div` 2
                  in (start, len)
              | otherwise       = (bestStart, bestLen)
        in go (i + 1) bestStart' bestLen'
