data ListNode = Nil
              | ListNode
              { val  :: Int
              , next :: ListNode
              }

newListNode :: [Int] -> ListNode
newListNode []     = Nil
newListNode (x:xs) = ListNode x (newListNode xs)

toList :: ListNode -> [Int]
toList Nil               = []
toList (ListNode v next) = v : toList next

addTwoNumbers :: ListNode -> ListNode -> ListNode
addTwoNumbers l1 l2 = add l1 l2 0
  where
    add :: ListNode -> ListNode -> Int -> ListNode
    add Nil Nil 0 = Nil
    add Nil Nil c = ListNode c Nil
    add a   b   c =
      let
        x = case a of
          Nil -> 0
          ListNode vx _ -> vx

        y = case b of
          Nil -> 0
          ListNode vy _ -> vy

        total = x + y + c
        digit = total `mod` 10
        carry = total `div` 10

        nextA = case a of
          Nil -> Nil
          ListNode _ na -> na

        nextB = case b of
          Nil -> Nil
          ListNode _ nb -> nb

      in ListNode digit (add nextA nextB carry)
