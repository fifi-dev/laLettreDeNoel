<template>
  <div class="home pt-32">
   <!--<img alt="Vue logo" src="../assets/logo.png">-->
   <p class="mb-4">Compte à rebourd jusqu'à Noel</p>
    <CountDown></CountDown>
  </div>
</template>

<script>
// @ is an alias to /src
import CountDown from '@/components/CountDown.vue'

export default {
  name: 'HomeView',
  components: {
    CountDown
  }
}
</script>
