import * as process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

import { BskyAgent } from '@atproto/api';
import { CronJob } from 'cron';


const agent = new BskyAgent({
  service: 'https://bsky.social',
});

const main = async () => {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME!,
      password: process.env.BLUESKY_PASSWORD!
    });
    await agent.post({
        text: "🙂 test test"
    });
    console.log("Just posted!");
};

main();

new CronJob(process.env.CRONTAB!, main).start();
