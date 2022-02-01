<template>
  <default-layout>
    <h1 class="mt-3">Drag file input</h1>
    <ul class="list-group">
      <li class="list-group-item py-3">
        <drag-file-input
          v-on:change="addFile"
        />

        <file-item
          v-for="(file, index) of files"
          v-bind:key="index"
          v-bind:name="file.name"
          v-bind:error="file.error"
          v-on:delete="deleteFile(index)"
        />
      </li>

      <li class="list-group-item py-3">
        <drag-file-input
          v-on:change="addFile2"
        />

        <file-item
          v-for="(file, index) of files2"
          v-bind:key="index"
          v-bind:name="file.value.name"
          v-bind:error="file.error"
          v-on:delete="deleteFile2(index)"
        />
      </li>
    </ul>
  </default-layout>
</template>

<script>
  import { ref } from 'vue'

  import DefaultLayout from '@/layouts/DefaultLayout'

  import DragFileInput from '@/UI/DragFileInput'

  import FileItem from '@/UI/FileItem'

  export default {
    components: { DefaultLayout, DragFileInput, FileItem },

    setup() {
      const files = ref([])

      const addFile = event => files.value.push(...event)
      
      const deleteFile = index => files.value.splice(index, 1)
      
      const files2 = ref([])
      const addFile2 = event => {
        const files = []

        Object.values(event).forEach(item => {
          files.push({
            value: item,
            error: false,
          })
        })

        const start = files2.value.length
        const end = files2.value.push(...files)

        for (let i = start; i < end; i++) {
          setTimeout(() => {
            files2.value[i].error = true
          }, 750)
        }
      }
      const deleteFile2 = index => files2.value.splice(index, 1)

      return {
        files, addFile, deleteFile,
        files2, addFile2, deleteFile2
      }
    }
  }
</script>