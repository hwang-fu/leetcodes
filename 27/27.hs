removeElement :: Eq a => a -> [] a -> (Int, [] a)
removeElement target xs =
  let ys = filter (\x -> x /= target) xs
  in (length ys, ys)

-- > removeElement 3 [3, 2, 2, 3]
-- (2,[2,2])

-- > removeElement 2 [0,1,2,2,3,0,4,2]
-- (5,[0,1,3,0,4])
