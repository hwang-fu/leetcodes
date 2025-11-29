import Data.Array (array, (!))
minDistance :: String -> String -> Int
minDistance word1 word2 = dp ! (m, n)
  where
    m = length word1
    n = length word2
    -- to create a 2D array with indices from (0, 0) to (m, n)
    dp = array ((0, 0), (m, n))
         [((i, j), calc i j) | i <- [0..m], j <- [0..n]]
    calc 0 j = j
    calc i 0 = i
    calc i j
      | word1 !! (i - 1) == word2 !! (j - 1)
        = dp ! (i - 1, j - 1)
      | otherwise
        = 1 + minimum [ dp ! (i - 1, j - 1)
                      , dp ! (i,     j - 1)
                      , dp ! (i - 1, j)
                      ]


minDistanceVanilla :: String -> String -> Int
minDistanceVanilla word1 word2 = (dp !! m) !! n
  where
    m = length word1
    n = length word2
    dp = [
           [ calc i j
           | j <- [0..n]
           ]
         | i <- [0..m]
         ]
    calc :: Int -> Int -> Int
    calc 0 j = j
    calc i 0 = i
    calc i j
      | word1 !! (i - 1) == word2 !! (j - 1)
      = (dp !! (i - 1)) !! (j - 1)
      | otherwise
      = 1 + minimum [ (dp !! (i - 1)) !! (j - 1)
                    , (dp !! (i))     !! (j - 1)
                    , (dp !! (i - 1)) !! (j)
                    ]


main :: IO ()
main = do
  print $ minDistance "" "" == 0
  print $ minDistance "cat" "bat" == 1
  print $ minDistance "horse" "ros" == 3
  print $ minDistanceVanilla "" "" == 0
  print $ minDistanceVanilla "cat" "bat" == 1
  print $ minDistanceVanilla "horse" "ros" == 3
