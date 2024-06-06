// based on https://open-meteo.com/en/docs
// CAUTION: this is partial definition :I

export type OpenMeteoJsonObject = {
  latitude: number; // 35.7
  longitude: number; // 139.6875
  generationtime_ms: number; // 0.03504753112792969
  utc_offset_seconds: number; // 32400
  timezone: string; // 'Asia/Tokyo'
  timezone_abbreviation: string; // 'JST'
  elevation: number; // 44
  current_units?: {
    time: 'iso8601' | 'unixtime';
    interval: 'seconds';
    temperature_2m: '°C' | '°F';
    is_day: '';
    rain: 'mm';
    snowfall: 'cm';
    weather_code: 'wmo code';
    wind_speed_10m: 'km/h' | 'mph' | 'm/s' | 'knots';
  };
  current?: {
    time: string; // '2024-06-06T16:30'
    interval: number; // 900
    temperature_2m: number; // 23.4
    is_day: 1 | 0; // 1
    rain: number; // 0
    snowfall: number; // 0
    weather_code: number; // 2
    wind_speed_10m: number; // 2.38
  };
  hourly_units?: {
    time: 'iso8601' | 'unixtime';
    weather_code: 'wmo code'
    temperature_2m: '°C' | '°F';
    wind_speed_10m: 'km/h' | 'mph' | 'm/s' | 'knots';
    rain: 'mm';
    snowfall: 'cm';
    is_day: '';
  };
  hourly?: {
    time: string[]; // [ '2024-06-05T00:00', '2024-06-05T01:00', '2024-06-05T02:00' ]
    weather_code: number[]; // [ 1, 1 ]
    temperature_2m: number[]; // [ 17, 16.8 ]
    wind_speed_10m: number[]; // [ 2.1, 2.6 ]
    rain: number[]; // [0.00, 0.00]
    snowfall: number[]; // [0.00, 0.00]
    is_day: (1 | 0)[]; // [0, 0]
  };
  daily_units?: {
    time: 'iso8601' | 'unixtime';
    weather_code: 'wmo code';
    temperature_2m_max: '°C' | '°F';
    temperature_2m_min: '°C' | '°F';
    rain_sum: 'mm';
    snowfall_sum: 'cm';
    wind_speed_10m_max: 'km/h' | 'mph' | 'm/s' | 'knots';
  };
  daily?: {
    time: string[]; // [ '2024-06-05', '2024-06-06' ]
    weather_code: number[]; // [ 2, 3 ]
    temperature_2m_max: number[]; // [ 26.6, 25.2 ]
    temperature_2m_min: number[]; // [ 16.2, 17.4 ]
    rain_sum: number[]; // [0.00,0.00]
    snowfall_sum: number[]; // [0.00,0.00]
    wind_speed_10m_max: number[]; // [ 2.08, 2.55 ]
  };
};
