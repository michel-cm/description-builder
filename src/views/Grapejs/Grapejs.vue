<template>
  <div class="panel__top">
    <div class="panel__basic-actions"></div>
  </div>
  <div id="gjs">
    <h1>Hello World Component!</h1>
  </div>
  <div id="blocks"></div>
</template>

<script setup>
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css';  

onMounted(() => {
  const editor = grapesjs.init({
  // Indicate where to init the editor. You can also pass an HTMLElement
  container: '#gjs',
  // Get the content for the canvas directly from the element
  // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  fromElement: true,
  // Size of the editor
  height: '400px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },

  /* BLOCOS */
  blockManager: {
    appendTo: '#blocks',
    blocks: [
      {
        id: 'section', // id is mandatory
        label: '<b>Section</b>', // You can use HTML/SVG inside labels
        attributes: { class:'gjs-block-section' },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      }, {
        id: 'text',
        label: 'Text',
        content: '<div data-gjs-type="text">Insert your text here</div>',
      }, {
        id: 'image',
        label: 'Image',
        // Select the component once it's dropped
        select: true,
        // You can pass components as a JSON instead of a simple HTML string,
        // in this case we also use a defined component type `image`
        content: { type: 'image' },
        // This triggers `active` event on dropped components and the `image`
        // reacts by opening the AssetManager
        activate: true,
      }
    ]
  },
  });

  /* ADICIONANDO UM BLOCO DINAMICAMENTE */
  editor.BlockManager.add('my-block-dinamico', {
    label: '<b>Bloco Dinamico</b>', // You can use HTML/SVG inside labels
    attributes: { class:'gjs-block-section' },
    content: `<section>
      <h1>Um bloco dinamico</h1>
      <h2>This is just a Lorem text: Lorem ipsum dolor sit amet</h2>
    </section>`,
})

  /* ADICIONANDO COMPONENTE */
  editor.BlockManager.add('my-block-id', {
  label: '<b>My component</b>', // Adicione o rótulo aqui
  content: {
    tagName: 'div',
    draggable: true,
    attributes: { 'some-attribute': 'some-value' },
    style: {
      'background-color': '#f0f0f0',
      'padding': '20px',
      'border': '1px solid #ddd',
      'color': 'red',
      'font-size': '32px'
    },
    components: [
      {
        tagName: 'span',
        content: '<b>Some static content</b>',
      }, {
        tagName: 'div',
        // use `content` for static strings, `components` string will be parsed
        // and transformed in Components
        components: '<span>HTML at some point</span>',
      }
    ]
  }
  })

  /* PAINEL TOPO */
  editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
  });
  editor.Panels.addPanel({
  id: 'basic-actions',
  el: '.panel__basic-actions',
  buttons: [
    {
      id: 'visibility',
      active: true, // active by default
      className: 'btn-toggle-borders',
      label: '<u>B</u>',
      command: 'sw-visibility', // Built-in command
    }, {
      id: 'export',
      className: 'btn-open-export',
      label: 'Exp',
      command: 'export-template',
      context: 'export-template', // For grouping context of buttons from the same panel
    }, {
      id: 'show-json',
      className: 'btn-show-json',
      label: 'JSON',
      context: 'show-json',
      command(editor) {
        editor.Modal.setTitle('Components JSON')
          .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
          .open();
      },
    }
  ],
});


})

</script>

<style>
/* PAINEL TOP */
.panel__top {
  padding: 0;
  width: 100%;
  display: flex;
  position: initial;
  justify-content: center;
  justify-content: space-between;
}
.panel__basic-actions {
  position: initial;
}

/* EDITOR*/
#gjs {
border: 3px solid #444;
}
/* CANVAS EDITOR */
.gjs-cv-canvas {
top: 0;
width: 100%;
height: 100%;
}

/* BLOCOS */
.gjs-block {
width: auto;
height: auto;
min-height: auto;
}
</style>
