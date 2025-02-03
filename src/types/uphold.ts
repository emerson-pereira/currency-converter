export type UpholdRate = {
  ask: string;
  bid: string;
  currency: string;
  pair: string;
};

export type UpholdAsset = {
  code: string;
  formatting: {
    decimal: string;
    format: string;
    grouping: string;
    precision: number;
  };
  name: string;
  status: string;
  symbol: string;
  type: string;
};
