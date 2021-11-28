import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4ee718f3a0msh91d26e8c7f1b748p133681jsnde32fdce228a",
    },
  });

  return data;
};
