<script lang="ts">
export default {
  data() {
    return{
      city: ''
    };
  },
  methods: {
  }
};
</script>

<template>
  <main class="w-full h-screen flex justify-center items-center">
    <div>
      <div class="input-cont w-[55em] h-16 rounded-xl p-2 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
          <input v-model.lazy="city" class="text-white w-full h-full outline-none transition-colors duration-300 focus:border-stone-800 border-2 border-transparent rounded-md" type="text" name="search" id="search" placeholder="Enter your city here...">
      </div>
      <div v-show="city" class="w-[55em] text-white mt-2 rounded-xl p-2 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        <div class="bg-gray-700 p-3 rounded-md">
          <div class="flex gap-2 items-center">
            <div class="w-1/4 h-full  bg-cover">
              <img src="" alt="someIMG">
            </div>
            <div class="">
              <span class="day">
                Monday, 12:34 AM
              </span>
              <h1>Cloudy 10^C</h1>
              <span class="location">
                {{ city }}
              </span>
            </div>
          </div>
          <div class="w-[90%] bg-[rgba(0,0,0,0.8)] flex justify-between p-3 rounded-md my-2 mx-auto text-sm">
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
        <div class="flex gap-2">
          <div class="py-1 px-3 border rounded-2xl my-2">Rain 90%</div>
          <div class="py-1 px-3 border rounded-2xl my-2">Humidity 70%</div>
          <div class="py-1 px-3 border rounded-2xl my-2 ml-auto">Wind 10km/h</div>
        </div>
        <div class="flex gap-2">
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Today</span>
            <img src="" alt="someIMG" class="">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
          <div class="flex flex-col items-center gap-2 p-2 border rounded-xl w-full">
            <span class="day">Friday</span>
            <img src="" alt="someIMG">
            <span>10C</span>
            <span>4C</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
