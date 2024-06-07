import { OpenMeteoJsonObject } from './open-meteo-json-object';
import { code2str } from './weather-code';

export type FetchWeatherParameters = {
  locationName: string;
  latitude: number;
  longitude: number;
};

export type FetchWeatherTextType = 'now' | 'daily';

const fetchWeather = (params: FetchWeatherParameters): Promise<OpenMeteoJsonObject> => {
  return fetch(
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${params.latitude}&longitude=${params.longitude}` +
    `&past_days=0&forecast_days=2` +
    `&timezone=${encodeURIComponent(process.env.TZ || 'UTC')}` +
    '&wind_speed_unit=ms' +
    '&current=temperature_2m,is_day,rain,snowfall,weather_code,wind_speed_10m' +
    '&hourly=temperature_2m,rain,snowfall,weather_code,wind_speed_10m,is_day' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum,snowfall_sum,wind_speed_10m_max'
  ).then(response => {
    if (response.ok)
      return response.json() as Promise<OpenMeteoJsonObject>;
    else
      return new Promise((resolve, reject) => {});
  });
};

const weatherTextDaily = (params: FetchWeatherParameters, obj: OpenMeteoJsonObject): string => {
  return `${params.locationName}: ${code2str(obj.current?.weather_code)}
あす: ${code2str(obj.daily?.weather_code[1])}`;
};

const weatherTextNow = (params: FetchWeatherParameters, obj: OpenMeteoJsonObject): string => {
  return `${params.locationName}: ${code2str(obj.current?.weather_code)}`;
};

export const fetchWeatherText =
  (params: FetchWeatherParameters, type: FetchWeatherTextType): Promise<string> => {
  return fetchWeather(params).then(obj => {
    switch(type) {
      case 'daily':
        return weatherTextDaily(params, obj);
      case 'now':
        return weatherTextNow(params, obj);
    }
  }).catch(_ => `I'm at ${params.locationName}`);
};
