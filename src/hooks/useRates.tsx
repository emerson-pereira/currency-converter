import { useCallback, useEffect } from "react";
import { UpholdRate } from "../types/uphold";
import upholdSDK from "@uphold/uphold-sdk-javascript";
import useLocalStorage from "./useLocalStorage";

const SDK = new upholdSDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "foo",
  clientSecret: "bar",
});

function useRates(currency: string): UpholdRate[] {
  const [rates, setRates] = useLocalStorage("rates", []);

  const handleRates = useCallback(
    (rates: UpholdRate[]) => {
      setRates(rates);
    },
    [currency],
  );

  useEffect(() => {
    if (rates.length && rates[0].currency === currency) {
      return;
    }

    SDK.getTicker(currency)
      .then((data: any) => {
        handleRates(data.slice(0, 10));
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [currency]);

  return rates;
}

export default useRates;
