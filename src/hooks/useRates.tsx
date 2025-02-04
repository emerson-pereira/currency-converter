import { useCallback, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Rate } from "../types";
import { RatesService } from "../services/rates";

const ratesService = new RatesService();

function useRates(currency: string): Rate[] {
  const [rates, setRates] = useLocalStorage("rates", []);

  const handleRates = useCallback(
    (rates: Rate[]) => {
      setRates(rates);
    },
    [currency],
  );

  useEffect(() => {
    if (rates.length && rates[0].currencyFrom === currency) {
      return;
    }

    const updateRates = async () => {
      const rates: Rate[] = await ratesService.getRates(currency);
      handleRates(rates.slice(0, 10));
    };

    updateRates();
  }, [currency]);

  return rates;
}

export default useRates;
