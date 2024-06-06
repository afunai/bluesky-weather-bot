import { BskyAgent } from '@atproto/api';
import { CronJob } from 'cron';

import { fetchWeatherText } from './openmeteo/fetch-weather-text';

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

const main = async () => {
  agent.login({
    identifier: process.env.BLUESKY_USERNAME!,
    password: process.env.BLUESKY_PASSWORD!
  }).then(_ => {
    fetchWeatherText({
      locationName: '東京',
      latitude: 35.7068,
      longitude: 139.7245,
    }).then(text => {
      agent.post({
        text: text
      }).then(({uri, cid}) => {
        console.log(`Posted: ${uri}`);
      });
    });
  });
};

new CronJob(process.env.CRONTAB!, main).start();

console.log(`Bot started as ${process.env.BLUESKY_USERNAME}`);
