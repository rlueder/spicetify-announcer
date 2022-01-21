import getWeather from "./getWeather";

import {
  ANNOUNCE_WEATHER,
  ANNOUNCE_WEATHER_HOURS,
  OPENWEATHER_UNITS
} from "../config";

/**
 * @async
 * @name assignWeather
 * @summary Returns the weather forecast based on config.
 * @param {string} sentence
 * @returns {string}
 */

const assignWeather = async (sentence) => {
  const now = new Date();

  const getScale = () =>
    OPENWEATHER_UNITS === "imperial" ? "Fahrenheit" : "Celsius";

  if (ANNOUNCE_WEATHER_HOURS.includes(now.getHours()) && ANNOUNCE_WEATHER) {
    return await getWeather().then((data) => {
      const {
        main: { temp_max, temp_min },
        name,
        weather,
      } = data;
      const description = weather[0].description;
      const forecast = `the weather forecast for ${name} is ${description}; with temperatures between ${Math.round(
        temp_min
      )} and ${Math.round(temp_max)} degrees ${getScale()}.`;
      return `${sentence} ${forecast}`;
    });
  }
  return sentence;
};

export default assignWeather;
