import { UpholdAsset, UpholdRate } from "./types/uphold";

export const MOCK_RATES: UpholdRate[] = [
  {
    ask: "5.74216210003941753111",
    bid: "5.44623737786152323863",
    currency: "$ADS",
    pair: "USD-$ADS",
  },
  {
    ask: "3.62286925070562108138",
    bid: "3.61066063135017423851",
    currency: "1INCH",
    pair: "USD-1INCH",
  },
  {
    ask: "0.00357763134874777159",
    bid: "0.00355808594184876095",
    currency: "AAVE",
    pair: "USD-AAVE",
  },
  {
    ask: "23.77624934483653320953",
    bid: "23.62341840682239409918",
    currency: "ACH",
    pair: "USD-ACH",
  },
  {
    ask: "1.23268969698970300052",
    bid: "1.22031041281253105327",
    currency: "ADA",
    pair: "USDADA",
  },
  {
    ask: "11.25371881107512769533",
    bid: "11.16265829504801069937",
    currency: "AERGO",
    pair: "USD-AERGO",
  },
  {
    ask: "1.00468756373329750002",
    bid: "0.99415417758741302668",
    currency: "AERO",
    pair: "USD-AERO",
  },
  {
    ask: "0.83004800595425175707",
    bid: "0.8239302601369056527",
    currency: "AGLD",
    pair: "USD-AGLD",
  },
  {
    ask: "1.68137343045160586689",
    bid: "1.65746135997541496846",
    currency: "AIOZ",
    pair: "USD-AIOZ",
  },
  {
    ask: "0.43860738687038651684",
    bid: "0.43398379613825737994",
    currency: "AKT",
    pair: "USD-AKT",
  },
];

export const MOCK_ASSETS: UpholdAsset[] = [
  {
    code: "BTC",
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 8,
    },
    name: "Bitcoin",
    status: "open",
    symbol: "₿",
    type: "cryptocurrency",
  },
  {
    code: "USD",
    formatting: {
      decimal: ".",
      format: "__symbol__ __value__ __code__",
      grouping: ",",
      precision: 2,
    },
    name: "US Dollar",
    status: "open",
    symbol: "$",
    type: "fiat",
  },
  {
    code: "EUROC",
    formatting: {
      decimal: ".",
      format: "__value__ __code__",
      grouping: ",",
      precision: 6,
    },
    name: "EURC",
    status: "open",
    symbol: "EURC",
    type: "stablecoin",
  },
];
