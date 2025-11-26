evalRPN :: [String] -> Int
evalRPN [] = 0
evalRPN tokens =
    eval tokens []
  where
    eval :: [String] -> [Int] -> Int
    eval [] [n]         = n
    eval [] _           = error "malformed reverse Polish notation!"
    eval (tk:tks) stack =
      case tk of
        "+" -> let (r:l:rest) = stack in eval tks ((l + r) : rest)
        "-" -> let (r:l:rest) = stack in eval tks ((l - r) : rest)
        "*" -> let (r:l:rest) = stack in eval tks ((l * r) : rest)
        "/" -> let (r:l:rest) = stack in eval tks ((l `quot` r) : rest) -- truncates toward 0
        _   -> eval tks (read tk : stack) -- read t :: Int converts "123" or "-5" into an Int.


evaluateReversePolishNotation :: [String] -> Int
evaluateReversePolishNotation =
    head . foldl step []
  where
    step :: [Int] -> String -> [Int]
    step stack token =
      case token of
        "+" -> binOp (+)  stack
        "-" -> binOp (-)  stack
        "*" -> binOp (*)  stack
        "/" -> binOp quot stack
        _   -> (read token) : stack

    binOp :: (Int -> Int -> Int) -> [Int] -> [Int]
    binOp op (r:l:rest) = (l `op` r) : rest
    binOp _ _           = error "malformed reverse Polish notation!"
