<script lang="ts">
export default {
  data() {
    return{
      msg: 'Hello Vue 3 + TypeScript + Vite + TailwindCSS',
      className: 'text-stone-500 font-mono text-lg ml-10 m-4',
      clicks: 0
    };
  },
  methods: {
    counter() {
      this.clicks++;
    }
  }
};
</script>

<template>
  <h1 class="text-3xl text-stone-600 m-10 font-bold mb-0">Initial test</h1>
  <p class="text-stone-500 font-semibold text-xl m-10 mt-0">Some description...</p>
  <p v-bind:class="className">{{ msg != null ? msg : '' }}</p>
  <button v-on:click="counter()" class="p-4 bg-gray-500 rounded-md m-10 cursor-pointer text-white">Clicked {{  clicks }}</button>
</template>

<style scoped>
</style>
