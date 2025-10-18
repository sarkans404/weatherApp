import { ref } from 'vue'
import type { units, CurrentApiResponse } from '../services/weatherApi'
import { getCurrentWeatherByCity } from '../services/weatherApi'

const PREF_KEY = 'weatherapp:prefs'



export function loadPrefs(): { units: units } {
  try {
    const raw = localStorage.getItem(PREF_KEY)
    if (!raw) return { units: 'metric' }
    return JSON.parse(raw)
  } catch {
    return { units: 'metric' }
  }
}

export function savePrefs(prefs: { units: units }) {
  localStorage.setItem(PREF_KEY, JSON.stringify(prefs))
}

export function useWeather() {
  const current = ref<CurrentApiResponse | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)


  const prefs = ref(loadPrefs()) 

  async function fetchByCity(city: string) {
    loading.value = true
    error.value = null
    current.value = null
    try {
      const data = await getCurrentWeatherByCity(city, prefs.value.units)
      current.value = data
    } catch (err: any) {
      error.value = err.message || String(err)
    } finally {
      loading.value = false
    }
  }

  function setUnits(u: units) {
    prefs.value.units = u
    savePrefs(prefs.value)
  }

  return { current, loading, error, fetchByCity, prefs, setUnits }
}