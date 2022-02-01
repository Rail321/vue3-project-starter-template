<template>
  <navigation-bar></navigation-bar>

  <div class="container">
    <slot>
      
    </slot>
  </div>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar'

  export default {
    components: { NavigationBar }
  }
</script>