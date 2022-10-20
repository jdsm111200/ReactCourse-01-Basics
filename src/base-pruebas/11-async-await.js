import axios from "axios";

export const getImagen = async () => {
  try {
    const apiKey = "eSChpsDMCHMqFHRljHI7sgui7HhrA3JX";
    const resp = await axios.get(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = resp.data;
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return "No existe";
  }
};
