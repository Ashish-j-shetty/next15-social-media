export const formatDateToLocal = (dateStr: Date, locale: string = "en-US") => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "INR",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-IN");

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
