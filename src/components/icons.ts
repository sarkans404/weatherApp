export function getWeatherIcon(main: string): string {
  const icons: Record<string, string> = {
    // ☀️ Clear
  "clear sky": "clearSky.svg",

  // ☁️ Clouds
  "few clouds": "fewClouds.svg",
  "scattered clouds": "scatteredClouds.svg",
  "broken clouds": "brokenClouds.svg",
  "overcast clouds": "overcastClouds.svg",

  // 🌧️ Rain
  "light rain": "lightRain.svg",
  "moderate rain": "moderateRain.svg",
  "heavy intensity rain": "heavyRain.svg",
  "very heavy rain": "veryHeavyRain.svg",
  "extreme rain": "extremeRain.svg",
  "freezing rain": "freezingRain.svg",

  // 🌦️ Drizzle
  "light intensity drizzle": "lightDrizzle.svg",
  "drizzle": "drizzle.svg",
  "heavy intensity drizzle": "heavyDrizzle.svg",
  "shower drizzle": "showerDrizzle.svg",

  // ⛈️ Thunderstorm
  "thunderstorm with light rain": "thunderstormLightRain.svg",
  "thunderstorm with rain": "thunderstormRain.svg",
  "thunderstorm with heavy rain": "thunderstormHeavyRain.svg",

  // ❄️ Snow
  "light snow": "lightSnow.svg",
  "snow": "snow.svg",
  "heavy snow": "heavySnow.svg",
  "sleet": "sleet.svg",
  "light shower sleet": "lightShowerSleet.svg",
  "rain and snow": "rainSnow.svg",
  "shower snow": "showerSnow.svg",
  "heavy shower snow": "heavyShowerSnow.svg",

  // 🌫️ Atmosphere
  "mist": "mist.svg",
  "smoke": "smoke.svg",
  "haze": "haze.svg",
  "fog": "fog.svg",
  }

  return `/src/assets/weatherIcons/${icons[main] || 'error.svg'}`
}