
import qualified Data.Map.Strict as M
import Data.List (foldl')

lengthOfLongestSubstring :: String -> Int
lengthOfLongestSubstring s = go 0 0 M.empty (zip [0..] s)
  where
    go :: Int -> Int -> M.Map Char Int -> [(Int, Char)] -> Int
    go !start !best !lastPos [] = best
    go !start !best !lastPos ((i, c):rest) =
      let
        start' = case M.lookup c lastPos of
          Just j | j >= start -> j + 1
          _                   -> start
        currLen = i - start' + 1
        best' = max best currLen
        lastPos' = M.insert c i lastPos
      in go start' best' lastPos' rest

main :: IO ()
main = do
  print $ lengthOfLongestSubstring "abcabcbb"
  print $ lengthOfLongestSubstring "bbbbb"
  print $ lengthOfLongestSubstring "pwwkew"
  print $ lengthOfLongestSubstring ""
