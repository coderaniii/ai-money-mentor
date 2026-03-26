export function calculateScore(data) {
  let score = 0;

  let savingsRatio = data.savings / data.income;

  if (savingsRatio > 0.3) score += 30;
  else if (savingsRatio > 0.2) score += 20;
  else score += 10;

  if (data.savings >= data.expenses * 6) score += 30;

  if (data.debt === 0) score += 20;

  if (data.investment) score += 20;

  return score;
}