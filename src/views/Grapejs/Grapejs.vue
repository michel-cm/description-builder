<template>
 <div class="panel__top">
    <div class="panel__basic-actions"></div>
</div>
<div class="editor-canvas">
    <div id="gjs">...</div>
  </div>

<div id="blocks" />
</template>

<script setup>
import { onMounted } from 'vue'
import grapesjs from 'grapesjs'

onMounted(() => {
  const editor = grapesjs.init({
    container: '#gjs',
    height: '600px',
    width: 'auto',
    fromElement: true,
    blockManager: {
      appendTo: '#blocks',
      blocks: [
        {
          id: 'section',
          label: '<b>herro 01</b>',
          attributes: { class:'gjs-block-section' },
          content: `<section>
            <h1 class="teste" title="daksdkasldsalkdlsakld" >This is a simple title</h1>
            <p> aaaaaaaaaaaaaaaaaaa </p>
            <p> bbbbbbbbbbbbbbbbbbbb </p>
            <p> ccccccccccccccccccccc </p>
            <a href="https://www.google.com/">ir para google</a>
          </section>`,
          styles: `
            .teste { color: green }
          `
        },
        {
          id: 'text',
          label: 'Text',
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: 'image',
          label: 'Image',
          select: true,
          content: { type: 'image' },
          activate: true,
        },
      ]
    },
    // Outras opções de configuração do editor
  })

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

const component = editor.addComponents(`<div>
  <h1 class="teste" title="daksdkasldsalkdlsakld" >This is a simple title</h1>
  <p> aaaaaaaaaaaaaaaaaaa </p>
  <p> bbbbbbbbbbbbbbbbbbbb </p>
  <p> ccccccccccccccccccccc </p>
</div>`)[0];

const componentHTML = component.toHTML();


})
</script>

<style>
/* Importar o CSS do GrapesJS */
@import 'grapesjs/dist/css/grapes.min.css';

/* GJS "EDITOR" */
#gjs {
  border: 3px solid rgb(0, 132, 255);
}

/* PAINEL TOPO */
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

/* BLOCOS */
.gjs-block {
  width: auto;
  height: auto;
  min-height: auto;
}
.editor-canvas {
  flex-grow: 1;
}

</style>
