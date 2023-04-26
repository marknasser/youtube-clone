import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const vvv = "bb26479a75msh6d4b55a7e90198bp123e13jsn32cea2c97836";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": vvv,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (e) {
    console.log("error", e.message);
  }
};
