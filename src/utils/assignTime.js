import tinytime from "tinytime";

import { ANNOUNCE_TIME_MINUTES } from "../config";

/**
 * @name assignTime
 * @summary Returns a time announcement based on config.
 * @returns {string}
 */

const assignTime = () => {
  const now = new Date();
  if (ANNOUNCE_TIME_MINUTES.includes(now.getMinutes())) {
    const template = tinytime("It's {h}:{mm}{a} on {MMMM} {Do} and");
    return template.render(new Date());
  }
  return "";
};

export default assignTime;
