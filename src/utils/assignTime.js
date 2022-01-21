import { format } from "date-fns";

import { ANNOUNCE_TIME_MINUTES } from "../config";

/**
 * @name assignTime
 * @summary Returns a time announcement based on config.
 * @returns {string}
 */

const assignTime = () => {
  const now = new Date();
  if (ANNOUNCE_TIME_MINUTES.includes(now.getMinutes())) {
    const date = format(new Date(Date.now()), "p 'on' MMMM do");
    return `it's ${date} and`;
  }
  return "";
};

export default assignTime;
