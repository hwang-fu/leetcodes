(import (chezscheme))

(define (min-distance word1 word2)
  (let* (
          (m (string-length word1))
          (n (string-length word2))
          ;; 2D vector (m + 1) x (n + 1)
          (dp (make-vector (+ m 1)))
        )

    (do ((i 0 (+ i 1)))
        ((> i m))
      (vector-set! dp i (make-vector (+ n 1)))
    )

    (do ((i 1 (+ i 1)))
        ((> i m))
      (vector-set! (vector-ref dp i) 0 i)
    )

    (do ((j 1 (+ j 1)))
        ((> j n))
      (vector-set! (vector-ref dp 0) j j)
    )

    (do ((i 1 (+ i 1)))
        ((> i m))
      (do ((j 1 (+ j 1)))
          ((> j n))
        (if (char=? (string-ref word1 (- i 1)) (string-ref word2 (- j 1)))
          (vector-set! (vector-ref dp i) j (vector-ref (vector-ref dp (- i 1)) (- j 1)))
          (vector-set! (vector-ref dp i) j (+ 1 (min (vector-ref (vector-ref dp (- i 1)) (- j 1))
                                                     (vector-ref (vector-ref dp (- i 1))       j)
                                                     (vector-ref (vector-ref dp i)       (- j 1))
                                                )
                                            )
          )
        )
      )
    )

    (vector-ref (vector-ref dp m) n)
  )
)


;; Test cases
(define (run-tests)
  (display "Test 1 (empty strings): ")
  (display (= (min-distance "" "") 0))
  (newline)

  (display "Test 2 (cat -> bat): ")
  (display (= (min-distance "cat" "bat") 1))
  (newline)

  (display "Test 3 (horse -> ros): ")
  (display (= (min-distance "horse" "ros") 3))
  (newline)

  (display "Test 4 (intention -> execution): ")
  (display (= (min-distance "intention" "execution") 5))
  (newline)

  (display "Test 5 (abc -> empty): ")
  (display (= (min-distance "abc" "") 3))
  (newline)

  (display "Test 6 (same strings): ")
  (display (= (min-distance "hello" "hello") 0))
  (newline)

  (display "Test 7 (completely different): ")
  (display (= (min-distance "abc" "def") 3))
  (newline))

;; Run all tests
(run-tests)
