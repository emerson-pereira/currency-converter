import { useCallback, useEffect, useState } from "react";
import { UpholdRate } from "../types/uphold";
import upholdSDK from "@uphold/uphold-sdk-javascript";

const SDK = new upholdSDK({
  baseUrl: "http://api-sandbox.uphold.com",
  clientId: "foo",
  clientSecret: "bar",
});

function useRates(currency: string): UpholdRate[] {
  const [rates, setRates] = useState<UpholdRate[]>([]);

  const handleRates = useCallback(
    (rates: UpholdRate[]) => {
      console.log("rates", rates);
      setRates(rates);
    },
    [currency],
  );

  useEffect(() => {
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
