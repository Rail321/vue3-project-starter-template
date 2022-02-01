<template>
  <div class="drag-file-input"
    ref="area"
    v-on:click="clickInput"
  >
    <img class="drag-file-input__logo" src="./icons/icon.svg" alt="Icon">

    <div class="drag-file-input__body">
      <p class="drag-file-input__heading m-0 mb-1">Click or drag file to this area to upload</p>
      <p class="drag-file-input__text m-0">Support for a single or bulk upload. Maximum file size 2MB.</p>
    </div>
    
    <div class="d-none">
      <input type="file"
        ref="input"
        v-on:change.stop="setFiles"
      >
    </div>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'

  import './main.scss'

  export default {
    setup(props, { emit }) {
      const area = ref(null)
      
      const input = ref(null)

      onMounted(() => {
        area.value.ondragover = area.value.ondragenter = event => event.preventDefault()

        area.value.ondrop = function(event) {
          input.files = event.dataTransfer.files

          emit('change', event.dataTransfer.files)

          event.preventDefault()
        };
      })

      const clickInput = () => input.value.click()

      const setFiles = event => emit('change', event.target.files)

      return { area, input, clickInput, setFiles }
    }
  }
</script>
