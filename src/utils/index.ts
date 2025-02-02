// Formats a given number to a currency string based on the provided currency and locale.
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
export function removeNonNumerics(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

// Convert cents to to currency unit.
// E.g. 1 => 0.01
// E.g. 1000 => 10
// E.g. 1234 => 12.34
export function convertCentsToCurrencyUnit(value: number | string): number {
  let parsedValue: number =
    typeof value === "string" ? parseInt(value, 10) : value;

  return parsedValue / 100;
}
