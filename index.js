function calculateTax(amount) {
  return amount * 0.10;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * discountPercentage / 100);
}

module.exports = {
  convertToUpperCase,
  calculateTax,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};