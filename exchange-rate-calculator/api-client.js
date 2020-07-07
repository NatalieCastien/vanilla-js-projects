const getExchangeRates = async (currency) => {
  const url = `https://api.exchangerate-api.com/v4/latest/${currency}`;
  try {
    const result = await fetch(url, { method: "GET" });
    const jsondata = await result.json();
    return jsondata;
  } catch (error) {
    console.log(error);
  }
};
