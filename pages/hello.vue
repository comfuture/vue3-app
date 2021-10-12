<template>
  <div>
    Hello, {{ data.name }}!
    <strong>Features = {{ data.features }}</strong>
  </div>
</template>
<script setup lang="ts">
type Data = {
  name: string,
  features: string
}
const { data } = await useAsyncData<Data>('data', () => $fetch('/api/hello') as Promise<Data>, {
  pick: ['name', 'features']
})
</script>
