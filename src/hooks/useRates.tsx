import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { Rate } from "../types";
import { ratesService } from "../services/rates";

export type UseRates = {
  rates: Rate[];
  loading: boolean;
  error: string | null;
};

function useRates(currency: string): UseRates {
  const [rates, setRates] = useLocalStorage("rates", []);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    const hasCached: boolean =
      rates?.length && rates[0].currencyFrom === currency;
    if (!currency || hasCached) {
      return;
    }

    setRates([]);
    setLoading(true);
    setError(null);

    try {
      const updateRates = async () => {
        const newRates: Rate[] = await ratesService.getRates(currency);

        if (!ignore) {
          if (newRates.length) {
            setRates(newRates);
          } else {
            setError("Oops, currency not available. Please try another one.");
          }

          setLoading(false);
        }
      };

      updateRates();
    } catch (error) {
      setError("Oops, currency not available. Please try another one.");
    }

    return () => {
      ignore = true;
    };
  }, [currency]);

  return { rates, loading, error };
}

export default useRates;
