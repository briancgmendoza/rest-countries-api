import Axios from "axios";

export const getData = async () => {
  const URL = "https://restcountries.com/v3.1/all";

  try {
    let res = await Axios(URL);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const getSelectedCountryData = async (selectedCountryName: any) => {
  const selectedCountryURL = `https://restcountries.com/v3.1/name/${selectedCountryName}`;
  try {
    let res = await Axios(selectedCountryURL);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
