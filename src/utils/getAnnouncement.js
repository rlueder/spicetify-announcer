import { AWS_REGION, AWS_IDENTITY_POOL_ID, AWS_POLLY_VOICE } from "../config";

import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { Polly } from "@aws-sdk/client-polly";
import { getSynthesizeSpeechUrl } from "@aws-sdk/polly-request-presigner";

/**
 * @summary Create the Polly service client, assigning your credentials.
 * @type {Polly}
 */

const pollyClient = new Polly({
  region: AWS_REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: AWS_REGION }),
    identityPoolId: AWS_IDENTITY_POOL_ID,
  }),
});

/**
 * @async
 * @name getAnnouncement
 * @see {@link https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#API_SynthesizeSpeech_RequestParameters}
 * @param {string} sentence
 * @returns {Promise<any>}
 */

const getAnnouncement = async (sentence) => {
  try {
    return await getSynthesizeSpeechUrl({
      client: pollyClient,
      params: {
        Engine: "neural",
        OutputFormat: "mp3",
        Text: sentence,
        VoiceId: AWS_POLLY_VOICE,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default getAnnouncement;
