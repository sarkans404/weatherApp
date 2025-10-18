export type units = 'standard' | 'metric' | 'imperial';

const API_ROOT = 'https://api.openweathermap.org/data/2.5/forecast';
const API_CITY = 'http://api.openweathermap.org/geo/1.0/direct';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;

export interface CurrentCity{
  0: {name: string; lat: number; lon: number; }
}

export interface ForecastItem{
  dt: number;
  main: {temp: number; temp_min?: number; temp_max?: number; pressure: number; humidity?: number;};
  weather: Array<{id: number; main: string; description: string;}>;
  wind?: {speed: number};
  pop?: number;
  dt_txt?: string;
}

export interface CurrentApiResponse{
  list: ForecastItem[]
  city: {id: number; timezone: number; sunrise: number; sunset: number;}
  cityName: string
}
export async function getCurrentCity(city: string): Promise<CurrentCity> {
  if(!API_KEY) throw new Error('Missing API key. Set VITE_WEATHER_API_KEY in .env')
  const url = `${API_CITY}?appid=${API_KEY}&q=${city}`

  const res = await fetch(url)
  if (!res.ok) throw new Error(`Geocode API error (${res.status})`)

  const burg = await res.json();
  return burg as CurrentCity
}
export async function getCurrentWeatherByCity(city: string, units: units = 'metric'): Promise<CurrentApiResponse> { 
  const getCity = await getCurrentCity(city)
  const lat = getCity[0].lat
  const lon = getCity[0].lon 
  const cityName = getCity[0].name
  
  const url = `${API_ROOT}?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) {
    const txt = await res.text()
    throw new Error(`Weather API error (${res.status}): ${txt}`)
  }
  const data = await res.json()

  return { ...data, cityName } as CurrentApiResponse
}