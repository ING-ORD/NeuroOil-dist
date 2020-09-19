<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <BreatGraph/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import BreatGraph from '@/components/BreatGraph.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // BreatGraph
  }
}
</script>
