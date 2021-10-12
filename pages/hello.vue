<template>
  <div>
    Hello, {{ data.name }}!
    <strong>Features = {{ data.features }}</strong>
  </div>
</template>
<script setup lang="ts">
import { Data } from '../server/api/types'

const { data } = await useAsyncData('data', () => $fetch('/api/hello') as Promise<Data>, {
  pick: ['name', 'features']
})
</script>
