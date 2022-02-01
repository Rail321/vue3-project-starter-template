<template>
  <default-layout>
    <h1>Components</h1>

    <ul class="list-group">
      <router-link class="list-group-item list-group-item-action active" to="/components/file-input">File Input</router-link>
      <router-link class="list-group-item list-group-item-action disabled" to="/components">...</router-link>
    </ul>
  </default-layout>
</template>

<script>
  import DefaultLayout from '@/layouts/DefaultLayout'

  import FileInputPage from './pages/FileInputPage'

  export default {
    components: {
      DefaultLayout,
      FileInputPage
    }
  }
</script>