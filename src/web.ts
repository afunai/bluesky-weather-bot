import express from 'express';
import fs from 'fs';

import { FetchWeatherParameters } from './openmeteo/fetch-weather-text';
import { post } from './post/poster';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.static(__dirname + '/../htdocs'));
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  const params: FetchWeatherParameters = {
    locationName: req.body['locationName'],
    latitude: parseFloat(req.body['latitude']),
    longitude: parseFloat(req.body['longitude']),
  };
  post(params, 'now');

  if (req.body['camp']) {
    fs.writeFile(
      './campsite.json',
      JSON.stringify(params),
      null,
      () => res.send(`Updated the campsite to ${req.body['locationName']}`)
    );
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
