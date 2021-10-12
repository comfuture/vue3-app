<template>
  <div>
    <Head>
      <Title>Hello, {{ namae }}</Title>
    </Head>
    <div>Hello, {{ namae }}</div>
    <button @click="setName('new world')">setName('new world')</button>
    <button @click="setName('another world')">setName('another world')</button>
  </div>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'

const namae: Ref<string> = useState<string>('name', () => 'world')
const setName = (value: string) => namae.value = value
</script>
