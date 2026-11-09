/**
 * Returns the sum of all numbers in the supplied array.
 *
 * @param {number[]} amounts - The list of numbers to sum.
 * @returns {number} The total of all amounts.
 */
export function calculateTotal(amounts) {
  return amounts.reduce((total, amount) => total + amount, 0);
}
