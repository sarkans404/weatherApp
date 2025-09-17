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
      <div v-show="city" class="w-[55em] h-10 text-white mt-4 rounded-xl p-2 bg-[rgba(0,0,0,0.9)] border-2 border-stone-800 shadow-md shadow-black/50">
        City: {{  city }}
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>
