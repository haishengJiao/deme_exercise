<template>
  <g :transform="transform">
    <title>eyebrows - eyelashesup</title>
    <path
      d="M99 13.2143C104.667 10.5476 118 8.11427 126 19.7143"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M23.5791 38.521C25.6497 32.6104 33.2612 21.3959 47.1418 23.8224"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M26.0742 32.4578L19.9258 27.0312"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M122.961 14.157L129.109 8.73047"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M32.5233 26.8142L28.4766 19.6816"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M115.512 10.5135L119.559 3.38086"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M40.5994 23.2005L38.3984 15.3008"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    ></path>
    <path
      d="M106.436 9.89973L108.637 2"
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
