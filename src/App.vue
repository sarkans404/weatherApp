<script lang="ts">
export default {
  data() {
    return{
      city: 'some',
      found: false,
      settingTab: false,
      units: 'metric',
      windSpeed: 'm/s',
      temp: 'celsius',
      darkMode: false
    };
  },
  methods: {
    settingStatus(){
      this.settingTab = !this.settingTab;
    }
  }
};
</script>

<template>
  <main class="w-full h-screen flex justify-center items-center">
    <div>
      <div class="input-cont flex  w-[55em] ">
          <input v-model.lazy="city" class="text-white w-[92%] pl-4 background-c h-16 rounded-2xl p-2 border-2 border-stone-800 shadow-md shadow-black/50 outline-none transition-colors duration-300 focus:border-stone-800" type="text" name="search" id="search" placeholder="Enter your city here...">
          <div v-on:click="settingStatus();" class="background-c ml-2 w-[64px] h-full rounded-2xl transition-colors cursor-pointer duration-300 flex justify-center items-center shadow-md shadow-black/50">
            <img src="./assets/gear.svg" alt="Settings" class="h-16 w-full p-1.5">
          </div>
      </div>
      <div v-show="found && !settingTab" class="error w-[55em] text-white mt-2 rounded-xl p-6 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <h2 class="text-white font-bold text-3xl text-center">City not found!</h2>
      </div>
      <div v-show="city && !settingTab" class="w-[55em] text-white mt-2 rounded-3xl p-3 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <div class="background-g p-3 py-5 rounded-2xl border border-[#454d46]">
          <div class="flex gap-2 items-center">
            <div class="w-1/4 h-full  bg-cover">
              <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-full h-full object-contain">
            </div>
            <div class="my-5">
              <span class="day">
                Monday, 12:34 AM
              </span>
              <h1>Cloudy 10^C</h1>
              <span class="location">
                {{ city }}
              </span>
            </div>
          </div>
          <div class="w-[90%] bg-[rgba(0,0,0,0.8)] flex justify-between p-3 rounded-2xl my-2 mx-auto text-sm">
            <div>
              Sunset 5:34 AM
            </div>
            <div>
              12H 30m
            </div>
            <div>
              Sunset2 20:34 PM
            </div>
          </div>
        </div>
        <div class="flex gap-2 my-1.5">
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl my-3 bg-[#131c17]">Rain 90%</div>
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl  my-3 bg-[#131c17]">Humidity 70%</div>
          <div class="py-1.5 px-3 border border-stone-800 rounded-2xl my-3 ml-auto bg-[#131c17]">Wind 10km/h</div>
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#232825]">
            <span class="day">Today</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2  rounded-xl w-full bg-[#131c17]">
            <span class="day">Friday</span>
            <img src="./assets/wheaterIcons/error.svg" alt="someIMG" class="w-[50%] h-[50%] object-contain">
            <span>10C</span>
            <span>4C</span>
          </div>
        </div>
      </div>
      <div v-show="settingTab" class="w-[55em] text-white mt-2 rounded-3xl p-8 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <h2 class="text-white font-bold text-3xl text-center mb-18">Settings</h2>
        
        <div>
            <form action="#" method="get" class="relative">
              <div class="w-full flex gap-4 items-center justify-left mb-4">
                <label for="unit">Units</label>
                <select v-model="units" name="unit" id="unit" class="bg-[#131c17] ml-auto border border-stone-800 rounded-lg p-2 outline-none">
                  <option value="metric">Metric (C, m/s)</option>
                  <option value="imperial">Imperial (F, mph)</option>
                  <!-- <option value="standard">Standard (K, m/s)</option> -->
                </select>
              </div>
              <div class="w-full flex gap-4 items-center justify-left mb-4">
                <label for="speed">Wind speed</label>
                <select v-model="windSpeed" name="speed" id="speed" class="bg-[#131c17] ml-auto border border-stone-800 rounded-lg p-2 outline-none">
                  <option value="m/s">m/s</option>
                  <option value="km/h">km/h</option>
                  <option value="mph">mph</option>
                </select>
              </div>
              <div class="w-full flex gap-4 items-center justify-left mb-10">
                <label for="temp">Temerature</label>
                <select v-model="temp" name="temp" id="temp" class="bg-[#131c17] ml-auto border border-stone-800 rounded-lg p-2 outline-none">
                  <option value="celsius">Celsius (C)</option>
                  <option value="fahrenheit">Fahrenheit (F)</option>
                  <option value="kelvin">Kelvin (K)</option>
                  </select>
              </div>
              <div v-on:click="darkMode = !darkMode;" class="absolute cursor-pointer hover:bg-stone-400  right-0 -bottom-13 w-10 h-10 background-g flex justify-center items-center rounded-xl">
                <span v-show="!darkMode">☀️</span>
                <span v-show="darkMode">🌙</span>
              </div>
            </form>
        </div>
        </div>
    </div>
  </main>
</template>

<style scoped>
  main{
    background-color: #bacabd;
  }
  .background-c{
    background-color: rgba(0,0,0,0.9);
  }
  .background-g{
    background-color: rgba(118, 206, 134, 0.205);
  }
  label{
    color: #ccc;
    font-weight: 700;
  }

  userSelect{
    user-select: none;
  }
</style>
