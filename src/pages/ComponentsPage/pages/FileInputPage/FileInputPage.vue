<template>
  <default-layout>
    <h1 class="mt-3">File input</h1>
    
    <div class="border-start border-5 ps-2 mt-n5">
      <h2 class="mt-5">Ordinary using: </h2>

      <ul class="list-group">
        <li class="list-group-item py-3">
          <file-input></file-input>
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:value="'https://cdn66.printdirect.ru/cache/product/4d/69/6477741/tov/all/500z500_front_35_0_0_0_5dc00a691bd1f3a5770c44b3b3d8.jpg?rnd=1441302727'"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:loading="true"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:error="true"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:value="fileOne"
            v-on:change="changeOne"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:value="fileTwo"
            v-on:change="changeTwo"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-model:value="fileThree"
          />
        </li>
        
        <li class="list-group-item py-3">
          <file-input
            v-bind:loading="true"
          >
            <template v-slot:loading>
              <p class="mb-0">Загрузка!!!</p>
            </template>
          </file-input>
        </li>
      
        <li class="list-group-item py-3">
          <file-input
            v-model:value="fileFour"
            v-bind:loading="loading"
          />
        </li>
      </ul>
    </div>

    <div class="border-start border-5 ps-2 mb-5">
      <h2 class="mt-5">Multiple using: </h2>

      <ul class="list-group">
        <li class="list-group-item py-3">
          <ul class="d-flex p-0" style="list-style: none;">
            <li class="p-2"
              v-for="(image, index) of images"
              v-bind:key="index"
            >
              <file-input
                v-bind:value="image"
                v-on:clear="removeImage(index)"
              ></file-input>
            </li>

            <li class="p-2">
              <file-input
                v-on:change="addImage"
              ></file-input>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </default-layout>
</template>

<script>
  import { ref } from 'vue'

  import DefaultLayout from '@/layouts/DefaultLayout'

  import FileInput from '@/UI/FileInput'
  import ProgressBar from '@/UI/ProgressBar'

  import UseProgess from '@/modules/UseProgess'

  export default {
    components: { DefaultLayout, FileInput, ProgressBar },

    setup() {
      const fileOne = ref('https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png')
      const changeOne = value => fileOne.value = value

      const fileTwo = ref(null)
      const changeTwo = value => fileTwo.value = value

      const fileThree = ref(null)

      const fileFour = ref(null)

      const images = ref([
        'https://static.tildacdn.com/tild3165-3964-4936-b837-346665326130/unnamed.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
      ])

      const removeImage = index => images.value.splice(index, 1)

      const addImage = image => images.value.push(image)

      return {
        fileOne, changeOne,
        fileTwo, changeTwo,
        fileThree,
        fileFour, ...UseProgess(fileFour),

        images, removeImage, addImage
      }
    }
  }
</script>