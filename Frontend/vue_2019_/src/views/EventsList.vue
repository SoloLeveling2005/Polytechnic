<template>
  <section class="w-100 h-100 p-3 m-0">
    <Event/>
    <Event/>
    <Event/>
  </section>
</template>

<script>
import Event from '../components/Event'
export default {
  name: 'EventsList',
  data() {
    return {
    
    }
  },
  components: {
    Event
  },
  created() {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
