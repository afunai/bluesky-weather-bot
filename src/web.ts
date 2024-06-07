import express from 'express';
import fs from 'fs';

import { FetchWeatherParameters } from './openmeteo/fetch-weather-text';

const app = express();
const port = process.env.PORT || 5001;

app.use(express.static(__dirname + '/../htdocs'));
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  if (req.body['camp']) {
    const params: FetchWeatherParameters = {
      locationName: req.body['locationName'],
      latitude: parseFloat(req.body['latitude']),
      longitude: parseFloat(req.body['longitude']),
    };
    fs.writeFile(
      './campsite.json',
      JSON.stringify(params),
      null,
      () => res.send(`Updated the campsite to ${req.body['locationName']}`)
    );
  }
  else {
    res.send(`Posted from ${req.body['locationName']}`);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
