import {
  OPENWEATHER_CITY,
  OPENWEATHER_TOKEN,
  OPENWEATHER_UNITS,
} from "../config";

/**
 * @async
 * @name getWeather
 * @summary Query OpenWeather for current weather at configured city.
 * @see {@link https://openweathermap.org/current}
 * @returns {Promise<Response>}
 */

const getWeather = async () => {
  try {
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${OPENWEATHER_CITY}&appid=${OPENWEATHER_TOKEN}&units=${OPENWEATHER_UNITS}`
    ).then((response) => response.json());
  } catch (err) {
    console.log(err);
  }
};

export default getWeather;
