import { useEffect, useState } from "react";
import { UpholdAsset } from "../types/uphold";
import { MOCK_ASSETS } from "../mock-data";

function useCurrencies(): UpholdAsset[] {
  const [assets, setAssets] = useState<UpholdAsset[]>([]);

  useEffect(() => {
    // fetch(
    //   "https://api.uphold.com/v0/assets",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Range: "items=0-10",
    //     },
    //   },
    // )
    //   .then((response) => response.json())
    //   .then((assets) => {
    //     setAssets(assets);
    //   });
    setAssets(MOCK_ASSETS);
  }, []);

  return assets;
}

export default useCurrencies;
