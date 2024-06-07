import { CronJob } from 'cron';
import fs from 'fs';

import { FetchWeatherParameters } from './openmeteo/fetch-weather-text';
import { post } from './post/poster';

const main = async () => {
  fs.readFile('campsite.json', 'utf8', function (err, data) {
    const params: FetchWeatherParameters = err ? {
      locationName: 'Tokyo',
      latitude: 35.6895,
      longitude: 139.6917,
    } : JSON.parse(data);
    post(params, 'daily');
  });
};

new CronJob(process.env.CRONTAB!, main).start();

console.log(`Bot started as ${process.env.BLUESKY_USERNAME}: "${process.env.CRONTAB}"`);
