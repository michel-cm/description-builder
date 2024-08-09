<template>
  <div class="main">
    <NuxtLink to="solo">Solo Example</NuxtLink>
    <NuxtLink to="grapejs">Grape Example</NuxtLink>
    <NuxtLink to="zero">Zero Example</NuxtLink>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main {
  height: 100vh;

  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 32px;
}
</style>