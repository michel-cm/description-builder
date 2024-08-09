<template>
    <button @click="handleClick" class="delete-button">
      ❌ 
    </button>
  </template>
  
  <script>
  export default {
    emits: ['delete'],
    methods: {
      handleClick() {
        this.$emit('delete');
      },
    },
  };
  </script>
  
  <style scoped>
  .delete-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: red;
  }
  </style>
  