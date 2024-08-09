<template>
  <component
    :is="tag"
    :style="titleStyle"
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
      default: 'h1',
    },
    content: {
      type: String,
      default: 'Title',
    },
    styleOptions: {
      type: Object,
      default: () => ({
        color: 'black',
        fontSize: '20px',
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
    titleStyle() {
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
