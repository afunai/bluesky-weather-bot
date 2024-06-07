import { OpenMeteoJsonObject } from './open-meteo-json-object';
import { code2str, code2emoji } from './weather-code';

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
  const d = obj.daily;
  const days = d.time.map((t, i) =>
    `${t}: ${code2emoji(d.weather_code[i])}` +
    ` ${d.temperature_2m_max[i]}/${d.temperature_2m_min[i]}${obj.daily_units.temperature_2m_max}`
  );

  return `${params.locationName}
${days.join('\n')}
`
};

const weatherTextNow = (params: FetchWeatherParameters, obj: OpenMeteoJsonObject): string => {
  const c = obj.current;
  return `${params.locationName}: ${code2emoji(c.weather_code)}` +
    (c.rain ? ` ${c.rain}${obj.current_units.rain}` : '') +
    (c.snowfall ? ` ${c.snowfall}${obj.current_units.snowfall}` : '') +
    ` ${c.temperature_2m}${obj.current_units.temperature_2m}`;
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
