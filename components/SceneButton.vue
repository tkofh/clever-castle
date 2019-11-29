<template>
  <button
    class="rounded-lg p-3 relative overflow-hidden shadow-md focus:outline-none"
  >
    <span
      :style="
        `background-image: linear-gradient(to left, ${colors.join(', ')})`
      "
      class="absolute inset-0 z-10"
    />
    <span class="absolute inset-0 z-20 bg-white opacity-75" />
    <div class="flex items-center relative z-30 text-black opacity-75">
      <span
        :style="`background-image: radial-gradient(${colors.join(', ')})`"
        class="inline-block w-6 h-6 rounded-full shadow mr-1"
      />
      <span class="flex flex-col leading-none text-left">
        <span class="font-semibold">{{ name }}</span>
        <span class="text-sm">{{ room }}</span>
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: 'SceneButton',
  props: {
    name: {
      type: String,
      required: true
    },
    room: {
      type: String,
      required: true
    },
    colors: {
      type: Array,
      default: () => ['white', 'black']
    }
  }
}
</script>
