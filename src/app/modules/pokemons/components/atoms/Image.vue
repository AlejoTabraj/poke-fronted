<template>
  <img :src="src" :alt="alt" class="mx-auto" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'image'
    }
  }
}
</script>
