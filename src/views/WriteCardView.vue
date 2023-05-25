<template>
    <div>
        <FallingSnowComponentVue></FallingSnowComponentVue>
        <!-- <div class="letter">
            <img class="red hidden" src="../assets/writing-card-red.svg" alt="">
            <img class="blue hidden" src="../assets/writing-card-blue.svg" alt="">
            <img class="yellow hidden" src="../assets/writing-card-yellow.svg" alt="">
        </div> -->
        <CardComponentVue></CardComponentVue>
    </div>
</template>
<script>
import FallingSnowComponentVue from '../components/FallingSnowComponent.vue';
import CardComponentVue from '../components/CardComponent.vue';
export default {
    name: 'WriteCardView',
    data() {
        return {
            color: "red",
        }
    },
    components: {
        FallingSnowComponentVue,
        CardComponentVue,
    },
    mounted() {
        // document.querySelector('.'+this.$route.params.id).classList.remove('hidden');
    },
}
</script>
<style scoped>
.letter {
  position: absolute;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>