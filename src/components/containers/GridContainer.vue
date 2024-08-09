<template>
    <div class="grid-container" :style="{ gridTemplateColumns: `repeat(${columns}, 1fr)` }">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GridContainer',
    props: {
      columns: {
        type: Number,
        default: 2, // Número padrão de colunas
      },
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    border: 2px solid #000;
    min-height: 20px;
    padding: 20px;
    gap: 10px; /* Ajuste conforme necessário */
  }
  </style>
  