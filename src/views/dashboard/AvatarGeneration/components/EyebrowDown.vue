<template>
  <g :transform="transform">
    <title>eyebrows - down</title>
    <path
      d="M27 26.5C33.1667 29 48.1 29.5 58.5 11.5"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M94 4C99.1667 9.33333 112.1 16.8 122.5 4"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
  </g>
</template>

<script setup lang="ts">
defineProps({
  transform: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#F4D150'
  }
})
</script>
