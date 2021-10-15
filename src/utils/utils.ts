export function convertCurrencyVN(number: number, currency: any) {
  return (
    number
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      .slice(0, -3) + currency
  );
}
