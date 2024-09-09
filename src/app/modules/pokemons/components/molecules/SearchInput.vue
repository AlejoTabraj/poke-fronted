<template>
  <div class="flex items-center shadow-xl rounded-md p-2 bg-white my-8">
    <span>&#128270;</span>
    <Input v-model:-model-value="ModelValue" placeholder="Search..." />
  </div>
</template>

<script lang="ts" setup>
import Input from '../atoms/Input.vue'
const ModelValue = defineModel('ModelValue')
</script>
