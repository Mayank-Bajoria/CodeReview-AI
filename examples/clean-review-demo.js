export function calculateTotal(amounts) {
  return amounts.reduce((total, amount) => total + amount, 0);
}
