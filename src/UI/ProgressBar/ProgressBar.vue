<template>
  <div class="progress-container">
    <div class="progress-container__indicator"
      v-bind:style="{ width: value + '%' }"
    ></div>
  </div>
</template>

<script>
  import './main.scss'

  export default {
    props: [ 'value' ]
  }
</script>