<template>
  <div class="home pt-32">
   <p class="mb-4">Compte à rebourd jusqu'à Noel</p>
   <HeaderComponent></HeaderComponent>

   <!--  <img alt="Vue logo" src="../assets/snowyBall.png">-->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
//import MusicBanner from '@/components/MusicBanner.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
}
}
</script>
