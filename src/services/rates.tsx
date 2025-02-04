import upholdSDK from "@uphold/uphold-sdk-javascript";
import { UpholdRate } from "../types/uphold";
import { IRatesService, Rate } from "../types";

const SDK = new upholdSDK({
  baseUrl: import.meta.env.VITE_UPHOLD_SDK_URL,
  clientId: import.meta.env.VITE_UPHOLD_SDK_CLIENT_ID,
  clientSecret: import.meta.env.VITE_UPHOLD_SDK_CLIENT_SECRET,
});

export class RatesService implements IRatesService {
  async getRates(currency: string): Promise<Rate[]> {
    try {
      const rates = await SDK.getTicker(currency);
      return rates.map((rate: UpholdRate) => ({
        currencyFrom: rate.currency,
        currencyTo: rate.pair.replace(`-${rate.currency}`, ""),
        rate: rate.ask,
      }));
    } catch (error) {
      console.log("Error getting rates from remote source", error);
      return [];
    }
  }
}
