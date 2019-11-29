<template>
  <button
    @mousedown="pressed = true"
    @mouseup="pressed = false"
    @mouseleave="pressed = false"
    @click="click"
    :class="{
      'shadow-xl': !pressed,
      'shadow-md': pressed
    }"
    class="w-32 h-32 bg-white rounded-lg flex flex-col justify-end text-left p-3"
  >
    <p class="leading-none">
      {{ label }}
    </p>
  </button>
</template>

<script>
// import gsap from 'gsap'
export default {
  name: 'SpringButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pressed: false
    }
  },
  methods: {
    click() {}
  }
}
</script>

<style scoped></style>
