import { useCallback, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { Rate } from "../types";
import { RatesService } from "../services/rates";

const ratesService = new RatesService();

function useRates(currency: string): Rate[] | null {
  const [rates, setRates] = useLocalStorage("rates", []);

  const handleRates = useCallback(
    (rates: Rate[] | null) => {
      setRates(rates);
    },
    [currency],
  );

  useEffect(() => {
    if (rates === null) {
      return;
    }

    if (rates.length && rates[0].currencyFrom === currency) {
      return;
    }

    const updateRates = async () => {
      const rates: Rate[] | null = await ratesService.getRates(currency);
      handleRates(rates);
    };

    updateRates();
  }, [currency]);

  return rates;
}

export default useRates;
