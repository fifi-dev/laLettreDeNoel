<template>
    <div>
        <div class="container">
            <div class="carousel">
                <div class="item a flex items-center justify-center">
                    <div class="h-[95%] w-[96.5%] a-image"></div>
                </div>
                <div class="item b flex items-center justify-center">
                    <div class="h-[95%] w-[96.5%] b-image"></div>
                </div>
                <div class="item c flex items-center justify-center">
                    <div class="h-[95%] w-[96.5%] c-image"></div>
                </div>
            </div>
            <div class="buttons">
                <div class="next" @click="nextSlide()"></div>
                <div class="prev" @click="prevSlide()"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselView',
    data() {
        return{
            currdeg : 0,
        }
    },
    methods: {
        prevSlide: function() {
            var carousel = document.querySelector(".carousel");
            this.currdeg = this.currdeg + 120;
            carousel.style.transform = "rotateY("+this.currdeg+"deg)";
        console.log(this.currdeg)
        },
        nextSlide: function() {
            var carousel = document.querySelector(".carousel");
            this.currdeg = this.currdeg - 120;
        console.log(this.currdeg)
            carousel.style.transform = "rotateY("+ this.currdeg+"deg)";
        }
    },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 1000px;
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%);
}

.carousel, .buttons {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.item {
  position: absolute;
  width: 287px;
  height: 200px;
  border: 1px solid white;
  /* padding: 16px; */
}

.a {
  transform: rotateY(0deg) translateZ(25vw);
}
.a-image {
  background: url('../assets/card-red.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.b {
  transform: rotateY(120deg) translateZ(25vw);
}
.b-image {
  background-image: url('../assets/card-blue.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}
.c {
  transform: rotateY(240deg) translateZ(25vw);
}
.c-image {
  background-image: url('../assets/OBJECTS.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.next, .prev {
  position: absolute;
  width: 287px;
  height: 200px;
}
.next {
    transform: rotateY(120deg) translateZ(25vw);
}
.prev {
    transform: rotateY(240deg) translateZ(25vw);
}
</style>