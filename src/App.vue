<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useWeather } from './components/useWeather'
import { getWeatherIcon } from './components/icons'
import { useTheme } from './components/useTheme'

// local state
const cityInput = ref()
const settingTab = ref(false)
const units = ref<'metric' | 'imperial' | 'standard'>('metric')
const { isDark, toggleTheme } = useTheme()

const { current, loading, error, fetchByCity, prefs, setUnits } = useWeather()


function toggleSettings(){
  settingTab.value = !settingTab.value;
}

function onSearch() {
  const city = cityInput.value.trim()
  if (!city) return
  fetchByCity(city)
}

function onUnitsChange() {
  setUnits(units.value)
}

function hPaTOinHg (hPa: number) {
  return (hPa * 0.029529983071445).toFixed(2)
}

const windUnitLabel = computed(() => {
  if (prefs.value.units === 'imperial') return 'mph'
  return 'm/s'
})

const tempUnitLabel = computed(() => {
  if (prefs.value.units === 'imperial') return '°F'
  if (prefs.value.units === 'metric') return '°C'
  if (prefs.value.units === 'standard') return 'K'
  return '°C'
})

const pressureUnitLabel = computed(() => {
  if (prefs.value.units === 'imperial') return current.value?.list[0].main.pressure + ' inHg'
  if (prefs.value.units === 'metric') return hPaTOinHg(current.value?.list[0].main.pressure ?? 0) + ' hPa'
  if (prefs.value.units === 'standard') return current.value?.list[0].main.pressure + ' Pa'
  return 'hPa'
})


const currentDate = computed(() => {
  return new Date().toLocaleString([], { weekday: 'long', hour: '2-digit', minute: '2-digit' })
})

const sunset = computed( () =>{
  if (!current.value) return '--'
  const d = new Date((current.value.city.sunset) * 1000)
  return d.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
})
const sunrise = computed( () =>{
  if (!current.value) return '--'
  const d = new Date((current.value.city.sunrise) * 1000)
  return d.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
})

const timeNow = () => {
  const d = new Date()
  return d.toLocaleString([], {hour: '2-digit', minute: '2-digit'})
}

function getDayOfWeek(n: number): string{
  const date = new Date()
  date.setDate(date.getDate() + n)

  return date.toLocaleDateString('en-US', {weekday: 'long'}) === (new Date().toLocaleString([], {weekday: 'long'}))? 'Today' : date.toLocaleDateString('en-US', {weekday: 'long'})
}

const dailyForecast = computed(() => {
  if (!current.value?.list) return []
  const daysMap = new Map<number, any>()
  current.value?.list.forEach(item => {
    const date = new Date(item.dt * 1000)
    const dayKey = date.getDate()
    if (!daysMap.has(dayKey)) {
      daysMap.set(dayKey, item)
    }
  })
  return Array.from(daysMap.values())
})

const gearColor = computed(() => {
  if(isDark.value) return 'src/assets/gear.svg'
  return 'src/assets/gearBlack.svg'
})

</script>

<template>
  <main class="w-full min-h-screen flex justify-center items-center">
    <div>
      <!-- <span class="absolute top-1 bg-neutral-900 p-2 text-sm rounded text-white font-medium">Loading: {{ loading }}</span> -->
      <div class="input-cont flex w-[55em] ">
          <input v-model.lazy="cityInput" @keyup.enter="onSearch" class="text-white white w-[92%] pl-4 h-16 rounded-2xl p-2 border-2 border-stone-800 shadow-md shadow-black/50 outline-none transition-colors duration-300 focus:border-stone-800 background-c" type="text" name="search" id="search" placeholder="Enter your city here...">
          <div @click="toggleSettings" class="background-c ml-2 w-[64px] h-full rounded-2xl transition-colors cursor-pointer duration-300 flex justify-center items-center shadow-md shadow-black/50">
            <img :src="gearColor" alt="Settings" class="h-16 w-full p-1.5">
          </div>
      </div>
      <div v-show="loading && !settingTab" class="background-c error w-[55em] text-white text-center mt-2 white rounded-xl p-6 py-20 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
          <h2 class="text-white font-bold text-4xl tracking-wider">Loading...</h2>
      </div>
      <div v-show="!current?.cityName && !settingTab && cityInput && !loading" class="background-c white error w-[55em] text-white text-center mt-2 rounded-xl p-6 py-20 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
          <h2 class="text-white font-bold text-4xl tracking-wider">City not found!</h2>
          <span class="text-sm font-medium tracking-wide textH">{{'('+ error + ')' }}</span>
      </div>
      <div v-show="current?.cityName && !settingTab && cityInput && !loading" class="w-[55em] white background-c text-white mt-2 rounded-3xl p-3 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <div class="background-g background-c4 p-3 py-5 rounded-2xl border border-[#454d46]">
          <div class="flex gap-2 items-center">
            <div class="w-1/4 h-full  bg-cover">
              <img :src="getWeatherIcon(current?.list[0].weather[0].description || 'error')" alt="someIMG" class="w-full h-full object-contain white">
            </div>
            <div class="my-5 relative w-full"> 
              <span class="day text-xl font-semibold tracking-wider">
                {{ currentDate }}
              </span>
              <br>
              <span class="capitalize text-xl font-medium absolute right-4 top-9">{{current?.list[0].weather[0].description}}</span>
              <span class="location text-lg tracking-wide">{{ current?.cityName }}</span>
              <br>
              <span class="font-semibold text-4xl absolute right-4 top-0">{{current?.list[0].main.temp}} {{ current?.list[0].main.temp? tempUnitLabel : " " }}</span>
            </div>
          </div>
          <div class="w-[90%]  bg-[rgba(0,0,0,0.8)] background-c5 flex justify-between p-3 rounded-2xl my-2 mx-auto text-sm">
            <div>
              Sunrise {{sunrise}}
            </div>
            <div>
              {{ timeNow() }}
            </div>
            <div>
              Sunset {{sunset}}
            </div>
          </div>
        </div>
        <div class="flex gap-2 my-1.5">
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl my-3 bg-zinc-900 background-c4">Pressure {{ pressureUnitLabel }}</div>
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl  my-3 bg-zinc-900 background-c4">Humidity {{current?.list[0].main.humidity ?? '-'}} %</div>
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl my-3 ml-auto bg-zinc-900 background-c4">Wind {{ current?.list[0].wind?.speed ?? '-' }} {{ windUnitLabel }}</div>
        </div>
        <div class="flex gap-2">
          <div v-for="(item, index) in dailyForecast" :key="index"
           class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#232825] background-c4">
              <span class="day capitalize">{{ getDayOfWeek(index) }}</span>
              <img :src="getWeatherIcon(current?.list[index].weather[0].description || 'error')" alt="someIMG" class="w-[50%] h-[50%] object-contain">
              <span>{{item.main.temp_max}} {{ tempUnitLabel }}</span>
              <span>{{item.main.temp_min}} {{ tempUnitLabel }}</span>
          </div>
        </div>
      </div>

      <div v-show="settingTab" class="w-[55em] background-c relative text-white mt-2 rounded-3xl p-8 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <h2 class="black font-bold text-3xl text-center mb-10 white">Settings</h2>
        
        <div>
            <form action="#" method="get" class="py-10">
              <div class="w-full flex gap-4 items-center justify-left mb-4">
                <label for="unit" class="white black">Units</label>
                <select v-model="units" @change="onUnitsChange(); onSearch()" name="unit" id="unit" class="white background-c2 background-c3 bg-[#131c17] ml-auto border border-stone-800 rounded-lg p-2 outline-none">
                  <option value="metric">Metric (C, m/s)</option>
                  <option value="imperial">Imperial (F, mph)</option>
                  <option value="standard">Standard (K, m/s)</option>
                </select>
              </div>
              <div @click="toggleTheme" class="absolute cursor-pointer hover:bg-stone-400  right-6 bottom-5 w-10 h-10 background-g flex justify-center items-center rounded-xl">
                {{ isDark ? '☀️' : '🌙' }}
              </div>
            </form>
        </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
  *{
    user-select: none;
    transition: color ease-in-out 0.3s;
    /* flex-wrap: wrap; */
  }
  img {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-user-drag: none;
    user-drag: none;
  }
  .dark .textH{
    color: #121413;
  }
  .dark .textH:hover{
    color: #fff;
  }
  .light .textH{
    color: #BCCCDC;
  }
  .light .textH:hover{
    color: #ffffff;
  }
  .dark main{
    background-color: #bacabd;
    border-color: #292524;

  }
  main{
    background-color: #F8FAFC;
  }
  .dark .background-c{
    background-color: rgba(0,0,0,0.9);
    border-color: #292524;
  }
  .dark .background-g{
    background-color: rgba(118, 206, 134, 0.205);
  }
  .light .background-g{
    background-color: #798999;
  }
  .light .background-c{
    background-color: #BCCCDC;
    border-color: #BCCCDC;
    color: black;
  }
  .light .background-c4{
    background-color: #a0afbe;
    border-color: rgb(143, 153, 163);
  }
  .light .background-c5{
    background-color: #bbc9d6;
    border-color: #8d98a3;
  }
  .black{
    color: black;
  }
  .dark .white{
    color: white;
  }
  .background-c2{
    background-color: #9AA6B2;
    border-color: #929da8;
    color: black;
  }
  .dark .background-c3{
    background-color: #131c17;
    border-color: #292524;
  }
  .dark .background-g{
    background-color: rgba(118, 206, 134, 0.205);
  }
  

  label{
    color: #ccc;
    font-weight: 700;
  }
</style>
