<template>
    <div class="flex-container">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlexContainer',
  };
  </script>
  
  <style scoped>
  .flex-container {
    display: flex;
    gap: 10px; /* Ajuste conforme necessário */
    flex-wrap: wrap;
  }
  </style>
  