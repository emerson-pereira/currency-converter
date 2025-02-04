import { describe, expect, test } from "vitest";
import {
  convertCentsToCurrencyUnit,
  convertCurrencyByRate,
  formatCurrency,
  removeNonNumerics,
} from "./index";

describe("formatCurrency", () => {
  test("formats 1234.56 to equal '1,234.56'", () => {
    expect(formatCurrency(1234.56)).toBe("1,234.56");
  });

  test("formats 123456 to equal '123,456.00'", () => {
    expect(formatCurrency(123456)).toBe("123,456.00");
  });
});

describe("removeNonNumerics", () => {
  test("transforms '123abc' to equal '123'", () => {
    expect(removeNonNumerics("123abc")).toBe("123");
  });

  test("transforms 'abc123' to equal '123'", () => {
    expect(removeNonNumerics("abc123")).toBe("123");
  });

  test("transforms 'a1bc23' to equal '123'", () => {
    expect(removeNonNumerics("a1bc23")).toBe("123");
  });

  test("transforms 'a1b2c3' to equal '123'", () => {
    expect(removeNonNumerics("a1b2c3")).toBe("123");
  });

  test("transforms 'a1b2c3d' to equal '123'", () => {
    expect(removeNonNumerics("a1b2c3d")).toBe("123");
  });
});

describe("convertCentsToCurrencyUnit", () => {
  test("converts '1' to 0.01", () => {
    expect(convertCentsToCurrencyUnit("1")).toBe(0.01);
  });

  test("converts 10 to 0.10", () => {
    expect(convertCentsToCurrencyUnit(10)).toBe(0.1);
  });

  test("converts '123' to 1.23", () => {
    expect(convertCentsToCurrencyUnit("123")).toBe(1.23);
  });

  test("converts 1234 to 12.34", () => {
    expect(convertCentsToCurrencyUnit(1234)).toBe(12.34);
  });

  test("converts '123456' to '12.34'", () => {
    expect(convertCentsToCurrencyUnit(123456)).toBe(1234.56);
  });
});

describe("convertCurrencyByRate", () => {
  test("converts 100 (amount), 0.5 (rate) to 50", () => {
    expect(convertCurrencyByRate(100, 0.5)).toBe(50);
  });

  test("converts '1000' (amount), '1.5' (rate) to 1500", () => {
    expect(convertCurrencyByRate("1000", "1.5")).toBe(1500);
  });

  test("converts 2 (amount), 0.15 (rate) to 0.30", () => {
    expect(convertCurrencyByRate(2, 0.15)).toBe(0.3);
  });
});
