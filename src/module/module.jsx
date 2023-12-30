export function formatCurrency(num){

  return Number(num.toFixed(3)).toLocaleString();
}

export function calculateDiscount(price, discount) {
  let finalPrice = price - (price * discount / 100);
  return formatCurrency(finalPrice);
}
