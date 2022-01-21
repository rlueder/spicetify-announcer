/**
 * @name assignTrackInfo
 * @summary Returns announcement with track information.
 * @param {string} sentence
 * @param {Array<Object>} playbackQueue
 * @returns {string} finalSentence
 */

const assignTrackInfo = (sentence, playbackQueue) => {
  const template = "you just listened to "; // space at the end is needed
  let finalSentence = sentence ? `${sentence} ${template}` : template;
  // loop through tracks metadata
  playbackQueue.map((el) => {
    const { album_artist_name, album_title, title } = el?.track?.metadata;
    finalSentence += `${title} by ${album_artist_name}, from their album ${album_title}. `; // space at the end is needed
  });
  return finalSentence;
};

export default assignTrackInfo;
