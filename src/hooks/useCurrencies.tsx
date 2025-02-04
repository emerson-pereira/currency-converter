import { MOCK_CURRENCIES } from "../mock-data";

function useCurrencies(): string[] {
  // const [assets, setAssets] = useState<UpholdAsset[]>([]);

  // useEffect(() => {
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
  // }, []);

  return MOCK_CURRENCIES;
}

export default useCurrencies;
