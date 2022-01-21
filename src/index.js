import { ANNOUNCE_TRACKS } from "./config";

import {
  assignTime,
  assignTrackInfo,
  assignWeather,
  getAnnouncement,
} from "./utils";

/**
 * @name player
 * @summary Spicetify player instance.
 * @see {@link https://spicetify.app/docs/getting-started/installation}
 * @type {Object}
 */

const player = Spicetify.Player;

/**
 * @name playbackQueue
 * @summary An array of recently played tracks.
 * @type {Array<Object>}
 */

let playbackQueue = [];

// add event listener for track changes
player.addEventListener("songchange", () => {
  if (playbackQueue.length === ANNOUNCE_TRACKS) {
    // pause playback
    player.pause();

    // time announcement
    let sentence = assignTime();

    assignWeather(sentence)
      .then((forecast) => {
        // create sentence from track information
        sentence = assignTrackInfo(forecast, playbackQueue);
      })
      .then(() => {
        // fetch audio from AWS Polly
        getAnnouncement(sentence).then((audioUrl) => {
          // create Audio Object and play audio
          const audio = new Audio(audioUrl);
          // start playback of audio snippet
          audio.play().catch((err) => console.log(err));
          // wait for audio playback to end before playing next track
          audio.addEventListener(
            "ended",
            () => {
              // reset playback queue
              playbackQueue = [];
              // resume playback
              player.play();
            },
            false
          );
        });
      });
  } else {
    // add track to queue
    playbackQueue.push(player.data);
  }
});
