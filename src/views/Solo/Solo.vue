<template>
  <div id="app">
    <div class="controls">
      <button @click="addContainer('flex')">Add Flex Container</button>
      <button @click="addContainer('grid')">Add Grid Container</button>
    </div>

    <div v-for="(container, containerIndex) in containers" :key="containerIndex" class="container-wrapper">
      <component
        :is="getContainerComponent(container.type)"
        :columns="container.columns"
      >
        <div v-for="(element, elementIndex) in container.elements" :key="elementIndex" class="element-wrapper">
          <component
            :is="element.component"
            v-bind="element.props"
            @update-content="updateElementContent(containerIndex, elementIndex, $event)"
            class="editable-element"
          ></component>
          <DeleteButton @delete="removeElement(containerIndex, elementIndex)" />
        </div>
      </component>

      <!-- Controle de colunas do Grid -->
      <div v-if="container.type === 'grid'" class="grid-controls">
        <label>Columns: {{ container.columns }}</label>
        <input
          type="range"
          v-model="container.columns"
          min="1"
          max="6"
        />
      </div>

      <DeleteButton @delete="removeContainer(containerIndex)" class="container-delete-button"/>

      <div class="controls add-elements">
        <button @click="addElement(containerIndex, 'TitleElement', { tag: 'h1', content: 'Title H1' })">
          Add H1 Title
        </button>
        <button @click="addElement(containerIndex, 'TitleElement', { tag: 'h2', content: 'Title H2' })">
          Add H2 Title
        </button>
        <button @click="addElement(containerIndex, 'TitleElement', { tag: 'h3', content: 'Title H3' })">
          Add H3 Title
        </button>
        <button @click="addElement(containerIndex, 'TextElement', { tag: 'p', content: 'Custom Text' })">
          Add Custom Text
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FlexContainer from '@/components/containers/FlexContainer.vue';
import GridContainer from '@/components/containers/GridContainer.vue';
import TitleElement from '@/components/elements/TitleElement.vue';
import TextElement from '@/components/elements/TextElement.vue';
import DeleteButton from '@/components/actions/DeleteButton.vue';

export default {
  components: {
    FlexContainer,
    GridContainer,
    TitleElement,
    TextElement,
    DeleteButton,
  },
  data() {
    return {
      containers: [],
    };
  },
  methods: {
    addContainer(type) {
      this.containers.push({
        type: type,
        columns: type === 'grid' ? 2 : 0, // Inicia com 2 colunas para grid
        elements: [],
      });
    },
    addElement(containerIndex, component, props) {
      this.containers[containerIndex].elements.push({
        component: component,
        props: props,
      });
    },
    removeElement(containerIndex, elementIndex) {
      this.containers[containerIndex].elements.splice(elementIndex, 1);
    },
    removeContainer(containerIndex) {
      this.containers.splice(containerIndex, 1);
    },
    updateElementContent(containerIndex, elementIndex, newContent) {
      this.containers[containerIndex].elements[elementIndex].props.content = newContent;
    },
    getContainerComponent(type) {
      return type === 'flex' ? 'FlexContainer' : 'GridContainer';
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 90vw;
  margin: 0 auto;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.controls {
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
}

.controls button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.controls button:hover {
  background-color: #0056b3;
}

.container-wrapper {
  margin-bottom: 20px;
  position: relative;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 6px;
  background-color: #f9f9f9;
}

.grid-controls {
  margin-top: 10px;
}

.grid-controls label {
  margin-right: 10px;
}

.grid-controls input[type="range"] {
  width: 100%;
}

.element-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.container-delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}

.add-elements button {
  margin-top: 10px;
  background-color: #28a745;
}

.add-elements button:hover {
  background-color: #218838;
}

.editable-element {
  flex: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: text;
}

.editable-element:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
.element-wrapper {
  border: 2px solid blue;
  min-height: 20px;
  padding: 10px;
}
</style>
