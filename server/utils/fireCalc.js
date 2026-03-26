export function firePlan(data) {
  const annualExpenses = data.expenses * 12;
  const target = annualExpenses * 25;

  const months = data.years * 12;
  const sip = target / months;

  return { target, sip };
}