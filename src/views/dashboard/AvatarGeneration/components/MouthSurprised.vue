<template>
  <g :transform="transform">
    <title>mouth - surprised</title>
    <path
      d="M36.047 54.8914C46.884 52.9301 53.2329 40.9546 51.0248 28.7536C48.8167 16.5526 38.6734 7.56185 27.8364 9.52311C16.9993 11.4844 10.6504 23.4598 12.8585 35.6608C15.0666 47.8619 25.2099 56.8526 36.047 54.8914Z"
      fill="black"
      stroke="black"
      stroke-width="3.59115"
    ></path>
    <mask
      id="mouthSurprised"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="14"
      y="11"
      width="36"
      height="43"
    >
      <ellipse
        cx="31.9417"
        cy="32.2072"
        rx="17.5976"
        ry="21.257"
        transform="rotate(-10.2582 31.9417 32.2072)"
        fill="#171921"
      ></ellipse>
    </mask>
    <g mask="url(#mouthSurprised)">
      <ellipse
        cx="35.202"
        cy="50.2187"
        rx="20.2046"
        ry="18.3047"
        transform="rotate(-10.2582 35.202 50.2187)"
        fill="#FC909F"
      ></ellipse>
    </g>
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
