export type SelectItem = { title: string };

export type Rate = {
  currencyFrom: string;
  currencyTo: string;
  rate: string;
};

export interface IRatesService {
  getRates(currency: string): Promise<Rate[]>;
}
