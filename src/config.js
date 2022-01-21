/**
 * Spicetify Announcer
 */

/**
 * @summary how often to announce the time.
 * @type {Array<number>}
 */

export const ANNOUNCE_TIME_MINUTES = [0, 15, 30, 45];

/**
 * @summary how many tracks to play before announcing them.
 * @type {number}
 */

export const ANNOUNCE_TRACKS = 3;

/**
 * @summary whether to announce weather forecasts.
 * @type {boolean}
 */

export const ANNOUNCE_WEATHER = true;

/**
 * @summary how often to announce the weather forecast.
 * @type {Array<number>}
 */

export const ANNOUNCE_WEATHER_HOURS = [0, 6, 12, 18];

/**
 * AWS
 * @see {@link https://docs.aws.amazon.com/polly/latest/dg/what-is.html}
 */

/**
 * @type {string}
 */

export const AWS_IDENTITY_POOL_ID = "AWS_IDENTITY_POOL_ID";

/**
 * @type {string}
 */

export const AWS_POLLY_VOICE = "Matthew";

/**
 * @type {string}
 */

export const AWS_REGION = "AWS_REGION";

/**
 * OpenWeather
 * @see {@link https://openweathermap.org/current}
 */

/**
 * @type {string}
 */

export const OPENWEATHER_CITY = "OPENWEATHER_CITY";

/**
 * @type {string}
 */

export const OPENWEATHER_TOKEN = "OPENWEATHER_TOKEN";

/**
 * @type {string}
 */

export const OPENWEATHER_UNITS = "imperial"; // imperial or metric
