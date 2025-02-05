// Formats a given number to a currency string based on the provided currency and locale.
// E.g. 1234.56 => "$1,234.56"
export function formatCurrency(
  amount: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  const formatted: string = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "code",
  })
    .format(amount)
    .replace(currency, "")
    .trim();

  return formatted;
}

// Remove non-numeric characters from the value.
// E.g. "123abc" => "123"
export function removeNonNumerics(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

// Convert cents to currency unit.
// E.g. 1 => 0.01
export function convertCentsToCurrencyUnit(value: number | string): number {
  const parsedValue: number =
    typeof value === "string" ? parseInt(value, 10) : value;

  return parsedValue / 100;
}

// Convert given amount based on given rate.
// E.g. 100, 0.5 => 50
export function convertCurrencyByRate(
  amount: number | string,
  rate: number | string,
): number {
  const parsedAmount: number =
    typeof amount === "string" ? Number(amount) : amount;
  const parsedRate: number = typeof rate === "string" ? Number(rate) : rate;

  return parsedAmount * parsedRate;
}
