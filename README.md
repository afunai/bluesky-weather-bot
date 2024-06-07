# BlueSky Weather Bot

Post the city name and the weather of your location on [BlueSky](https://bsky.app/) using [OpenMeteo](https://open-meteo.com/) and [Nominatim](https://nominatim.org/).
Designed to be deployed on [Heroku](https://www.heroku.com/), it works both as a bot (posting periodically) and as a web app (posting in real-time).

## Install

Refer to <https://devcenter.heroku.com/articles/git> . After deployment, you need to set the following Config vars:

1. BLUESKY_USERNAME (e.g., YOURNAME.bsky.social)
2. BLUESKY_PASSWORD (your app password)
3. TZ (e.g., "Asia/Tokyo" or "UTC")
4. CRONTAB (e.g., "55 23 * * *")
5. ADMIN_PW (to protect the admin page)

## How to use

Open your app in the browser (user: admin / pw: ADMIN_PW), check the "Make this my campsite" box, and click the "Update" button.
The bot will then post the weather of your location according to the CRONTAB schedule (every night at 23:55, as per the example).
If you submit without checking the box, you will post a summary of the current weather without updating the camp location.
