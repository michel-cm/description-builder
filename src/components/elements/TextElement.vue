<template>
    <component
      :is="tag"
      :style="textStyle"
      contenteditable="true"
      @input="updateContent"
      @blur="onBlur"
      :class="{ editable: isEditing }"
    >
      {{ content }}
    </component>
  </template>
  
  <script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'p', // Por padrão, será um parágrafo
      },
      content: {
        type: String,
        default: 'Custom Text',
      },
      styleOptions: {
        type: Object,
        default: () => ({
          color: 'black',
          fontSize: '16px',
        }),
      },
    },
    data() {
      return {
        isEditing: false,
        currentContent: this.content,
      };
    },
    computed: {
      textStyle() {
        return {
          color: this.styleOptions.color,
          fontSize: this.styleOptions.fontSize,
        };
      },
    },
    methods: {
      updateContent(event) {
        this.currentContent = event.target.innerText;
      },
      onBlur() {
        this.isEditing = false;
        this.$emit('update-content', this.currentContent);
      },
    },
    watch: {
      content(newContent) {
        this.currentContent = newContent;
      },
    },
  };
  </script>
  
  <style>
  .editable {
    outline: none;
    cursor: text;
  }
  </style>
  