maxArea :: [Int] -> Int
maxArea heights =
    go 0 ((length heights) - 1) 0
  where
    go :: Int -> Int -> Int -> Int
    go l r best =
      if l >= r then
        best
      else
        let
          lHeight = heights !! l
          rHeight = heights !! r
          width   = r - l
          area    = width * (min lHeight rHeight)
          best'   = max best area
        in
          if lHeight < rHeight then
            go (l + 1) r best'
          else
            go l (r - 1) best'

-- Test Cases
main :: IO ()
main = do
  -- Example 1: [1,8,6,2,5,4,8,3,7]
  -- Expected: 49 (between index 1 and 8: min(8,7) * (8-1) = 7 * 7 = 49)
  print $ maxArea [1,8,6,2,5,4,8,3,7] == 49

  -- Example 2: [1,1]
  -- Expected: 1 (min(1,1) * (1-0) = 1 * 1 = 1)
  print $ maxArea [1,1] == 1

  -- Edge case: Two elements, different heights
  print $ maxArea [1,2] == 1

  -- Edge case: All same height
  print $ maxArea [5,5,5,5] == 15

  -- Edge case: Decreasing heights
  print $ maxArea [9,8,7,6,5,4,3,2,1] == 20

  -- Edge case: Increasing heights
  print $ maxArea [1,2,3,4,5,6,7,8,9] == 20

  -- Larger test case
  print $ maxArea [1,3,2,5,25,24,5] == 24
