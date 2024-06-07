/*
  WMO Weather interpretation codes

  0	Clear sky
  1, 2, 3	Mainly clear, partly cloudy, and overcast
  45, 48	Fog and depositing rime fog
  51, 53, 55	Drizzle: Light, moderate, and dense intensity
  56, 57	Freezing Drizzle: Light and dense intensity
  61, 63, 65	Rain: Slight, moderate and heavy intensity
  66, 67	Freezing Rain: Light and heavy intensity
  71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
  77	Snow grains
  80, 81, 82	Rain showers: Slight, moderate, and violent
  85, 86	Snow showers slight and heavy
  95 *	Thunderstorm: Slight or moderate
  96, 99 *	Thunderstorm with slight and heavy hail
*/

export const code2str = (weather_code: number = 99): string => {
  switch (weather_code) {
    case 0:
      return '快晴'; // Clear sky
    case 1:
      return '晴';
    case 2:
      return '薄曇';
    case 3:
      return '曇'; // Mainly clear, partly cloudy, and overcast
    case 45:
    case 48:
      return '霧'; // Fog and depositing rime fog
    case 51:
    case 53:
    case 55:
      return '霧雨'; //	Drizzle: Light, moderate, and dense intensity
    case 56:
    case 57:
      return '氷霧雨'; //	Freezing Drizzle: Light and dense intensity
    case 61:
      return '小雨';
    case 63:
      return '雨';
    case 65:
      return '大雨'; //	Rain: Slight, moderate and heavy intensity
    case 66:
    case 67:
      return '氷雨'; //	Freezing Rain: Light and heavy intensity
    case 71:
    case 73:
      return '雪';
    case 75:
      return '大雪'; //	Snow fall: Slight, moderate, and heavy intensity
    case 77:
      return '霧雪'; //	Snow grains
    case 80:
    case 81:
    case 82:
      return '時々雨'; //	Rain showers: Slight, moderate, and violent
    case 85:
    case 86:
      return '時々雪'; //	Snow showers slight and heavy
    case 95:
      return '雷'; // *	Thunderstorm: Slight or moderate
    case 96:
    case 99:
      return '雷雹'; // *	Thunderstorm with slight and heavy hail
    default:
      return '不明';
  }
};

export const code2emoji = (weather_code: number = 99): string => {
  switch (weather_code) {
    case 0:
      return '☀';
    case 1:
      return '🌤';
    case 2:
      return '🌥';
    case 3:
      return '☁';
    case 45:
    case 48:
      return '🌫';
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
      return '🌂';
    case 63:
      return '☂';
    case 65:
      return '☔';
    case 66:
    case 67:
      return '🌨';
    case 71:
    case 73:
    case 75:
    case 77:
      return '☃';
    case 80:
    case 81:
    case 82:
      return '🌦';
    case 85:
    case 86:
      return '🌨';
    case 95:
    case 96:
    case 99:
      return '🌩';
    default:
      return '　';
  }
};
