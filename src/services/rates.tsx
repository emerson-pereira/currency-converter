import upholdSDK from "@uphold/uphold-sdk-javascript";
import { UpholdRate } from "../types/uphold";
import { IRatesService, Rate } from "../types";
import { MOCK_CURRENCIES } from "../mock-data";

const SDK = new upholdSDK({
  baseUrl: import.meta.env.VITE_UPHOLD_SDK_URL,
  clientId: import.meta.env.VITE_UPHOLD_SDK_CLIENT_ID,
  clientSecret: import.meta.env.VITE_UPHOLD_SDK_CLIENT_SECRET,
});

const RATES_LIMIT = 10;

function handleRates(
  rates: UpholdRate[],
  currencyFrom: string,
  limit: number,
): Rate[] {
  const ratesFiltered = rates.filter((rate: UpholdRate) => {
    const isTargetRate = rate.pair === `${currencyFrom}${rate.currency}`;

    // TODO: Remove
    // Limit to what's in mock for development purposes
    const isInMock = MOCK_CURRENCIES.includes(rate.currency);

    return isTargetRate && isInMock;
  });

  const ratesMapped = ratesFiltered.map((rate: UpholdRate) => ({
    currencyFrom,
    currencyTo: rate.currency,
    rate: rate.ask,
  }));

  return ratesMapped.slice(0, limit);
}

export class RatesService implements IRatesService {
  async getRates(
    currency: string,
    limit: number = RATES_LIMIT,
  ): Promise<Rate[]> {
    try {
      const rates: UpholdRate[] = await SDK.getTicker(currency);
      const ratesNormalized: Rate[] = handleRates(rates, currency, limit);

      return ratesNormalized;
    } catch (error) {
      console.log("Error getting rates from remote source", error);
      return [];
    }
  }
}

export const ratesService = new RatesService();
