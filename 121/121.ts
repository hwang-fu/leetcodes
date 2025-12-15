function maxProfit(prices: number[]): number {
  let best = 0;
  let lowest = Infinity;
  let highest = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];

    if (price < lowest && i < prices.length - 1) {
      lowest = price;
      highest = prices[i + 1];
      best = Math.max(best, highest - lowest);
      continue;
    }

    if (price > highest) {
      highest = price;
      best = Math.max(best, highest - lowest);
    }
  }

  return best;
};

function maxProfit2(prices: number[]): number {
  let best = 0;
  let lowest = Infinity;

  for (const price of prices) {
    lowest = Math.min(lowest, price);
    best = Math.max(best, price - lowest);
  }

  return best;
};

export {};
