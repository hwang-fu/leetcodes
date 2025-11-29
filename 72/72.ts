function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  const distances: number[][]= new Array(m + 1)
    .fill(0)
    .map(_ => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    distances[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    distances[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i-1] === word2[j-1]) {
        distances[i][j] = distances[i-1][j-1];
      }
      else {
        distances[i][j] = 1 + Math.min(
          distances[i-1][j],
          distances[i][j-1],
          distances[i-1][j-1]
        );
      }
    }
  }

  return distances[m][n];
};

const minDistance1 = minDistance;

const minDistance2 = (word1: string, word2: string): number => {
  const m = word1.length;
  const n = word2.length;

  // always make word1 the shorter one to minimize space
  if (m > n) {
    return minDistance2(word2, word1);
  }

  let prev: number[] = new Array(m + 1).fill(0).map((_, i) => i);
  let curr: number[] = new Array(m + 1).fill(0);

  for (let j = 1; j <= n; j++) {
    curr[0] = j;
    for (let i = 1; i <= m; i++) {
      if (word1[i-1] === word2[j-1]) {
        curr[i] = prev[i-1];
      }
      else {
        curr[i] = 1 + Math.min(
          prev[i-1],
          curr[i-1],
          prev[i]
        );
      }
    }

    [prev, curr] = [curr, prev];
  }

  return prev[m];
}

export {};
