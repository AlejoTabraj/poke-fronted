<template>
  <component :is="tag" :class="classList">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Typography',
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    type: {
      type: String,
      default: 'body'
    },
    screen: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    classList() {
      return {
        'text-2xl font-bold text-center': this.type === 'heading',
        'text-center text-gray-600 mt-4': this.type === 'paragraph',
        'text-center text-gray-600 mt-4 w-64': this.type === 'paragraph' && this.screen === 'sm'
      }
    }
  }
}
</script>
