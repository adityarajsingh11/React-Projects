import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)  // change here the previous API is not working then used this API
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;




