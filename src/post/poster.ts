import { BskyAgent } from '@atproto/api';

import { FetchWeatherParameters, FetchWeatherTextType, fetchWeatherText }
  from '../openmeteo/fetch-weather-text';

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

export const post = (params: FetchWeatherParameters, type: FetchWeatherTextType) => {
  agent.login({
    identifier: process.env.BLUESKY_USERNAME!,
    password: process.env.BLUESKY_PASSWORD!
  }).then(
    _ => fetchWeatherText(params, type)
  ).then(text => {
    console.log(text);
//    return agent.post({ text: text });
//  }).then(({uri, cid}) => {
//    console.log(`Posted: ${uri}`);
  }).catch(e => console.log(e));
};
