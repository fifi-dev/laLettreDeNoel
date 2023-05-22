<template>
  <div class="home pt-32">
   <p class="mb-4">Compte à rebourd jusqu'à Noel</p>
    <CountDown></CountDown>
    <TitleEffect></TitleEffect>
   <!--  <img alt="Vue logo" src="../assets/snowyBall.png">-->
  </div>
</template>

<script>
// @ is an alias to /src
import CountDown from '@/components/CountDown.vue'
import TitleEffect from '@/components/TitleEffect.vue';
//import MusicBanner from '@/components/MusicBanner.vue';

export default {
  name: 'HomeView',
  components: {
    CountDown,
    TitleEffect,
    //MusicBanner
}
}
</script>
