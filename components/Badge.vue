<template>
  <span
    :class="colorClass"
    class="inline-block px-2 py-1 uppercase text-sm tracking-wide font-semibold leading-none rounded shadow"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorClass() {
      switch (this.color) {
        case 'gray':
          return this.inverse
            ? 'text-gray-700 bg-gray-100'
            : 'text-gray-100 : bg-gray-700'
        case 'blue':
          return this.inverse
            ? 'text-teal-600 bg-teal-100'
            : 'text-teal-100 : bg-teal-600'
        case 'purple':
          return this.inverse
            ? 'text-indigo-600 bg-indigo-100'
            : 'text-indigo-100 : bg-indigo-600'
        default:
          return this.inverse
            ? 'text-gray-700 bg-gray-100'
            : 'text-gray-100 : bg-gray-700'
      }
    }
  }
}
</script>
