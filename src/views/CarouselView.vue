<template>
    <div class=" flex justify-center flex-col items-center">
        <HeaderComponent></HeaderComponent>
        <FallingSnowComponentVue></FallingSnowComponentVue>
        <div class="container">
            <div class="carousel">
            <div class="next" @click="nextSlide()"></div>
            <div class="prev" @click="prevSlide()"></div>
                <div class="item a flex items-center justify-center close" @click="openEnvelope($event)">
                    <div class="background"></div>
                    <div class="flap"></div>
                    <div class="letter"></div>
                    <div class="h-[95%] w-[96.5%] a-image"></div>
                </div>
                <div class="item b flex items-center justify-center" @click="openEnvelope($event)">
                    <div class="background"></div>
                    <div class="flap"></div>
                    <div class="letter"></div>
                    <div class="h-[95%] w-[96.5%] b-image"></div>
                </div>
                <div class="item c flex items-center justify-center" @click="openEnvelope($event)">
                    <div class="background"></div>
                    <div class="flap"></div>
                    <div class="letter"></div>
                    <div class="h-[95%] w-[96.5%] c-image"></div>
                </div>
            </div>
        </div>
        <button class="test">Selectionner</button>
    </div>
</template>

<script>
import FallingSnowComponentVue from '../components/FallingSnowComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    name: 'CarouselView',
    components: {
        FallingSnowComponentVue,
        HeaderComponent,
    },
    data() {
        return{
            currdeg : 0,
            nextDeg: 120,
            prevDeg: 240,
        }
    },
    methods: {
        prevSlide: function() {
            var carousel = document.querySelector(".carousel");
            this.currdeg = this.currdeg + 120;
            this.prevDeg = this.prevDeg - 120;
            this.nextDeg = this.nextDeg - 120;
            document.querySelector('.prev').style.transform = "rotateY("+this.prevDeg+"deg) translateZ(25vw)";
            document.querySelector('.next').style.transform = "rotateY("+this.nextDeg+"deg) translateZ(25vw)";
            carousel.style.transform = "rotateY("+this.currdeg+"deg)";
            const cardsList = [...document.querySelectorAll(".item")];
            cardsList.forEach(element => {
                element.classList.remove("open");
                element.classList.add("close");
            });
            setTimeout(() => {
                var carouselnew = document.querySelectorAll(".item");
                const array = [];
                const cards = [...carouselnew];
                cards.forEach(element => {
                    array.push(element.children[0].getBoundingClientRect().width);
                    element.style.zIndex = "1";
                    element.classList.remove("open");
                    element.classList.add("close");
                });
                const index = array.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
                cards[index].style.zIndex = "100";
                cards[index].classList.add("open");
                cards[index].classList.remove("close");
            }, 1000);

        },
        nextSlide: function() {
            var carousel = document.querySelector(".carousel");
            this.currdeg = this.currdeg - 120;
            this.prevDeg = this.prevDeg + 120;
            this.nextDeg = this.nextDeg + 120;
            document.querySelector('.prev').style.transform = "rotateY("+this.prevDeg+"deg) translateZ(25vw)";
            document.querySelector('.next').style.transform = "rotateY("+this.nextDeg+"deg) translateZ(25vw)";
            carousel.style.transform = "rotateY("+ this.currdeg+"deg)";
            const cardsList = [...document.querySelectorAll(".item")];
            cardsList.forEach(element => {
                element.classList.remove("open");
                element.classList.add("close");
            });
            setTimeout(() => {
                var carouselnew = document.querySelectorAll(".item");
                const array = [];
                const cards = [...carouselnew];
                cards.forEach(element => {
                    array.push(element.children[0].getBoundingClientRect().width);
                    element.style.zIndex = "1";
                    element.classList.remove("open");
                    element.classList.add("close");
                });
                const index = array.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
                cards[index].style.zIndex = "100";
                cards[index].classList.add("open");
                cards[index].classList.remove("close");
            }, 1000);
        },
        openEnvelope: function(e) {
            if (e.target.parentNode.classList.contains("open")) {
                e.target.parentNode.classList.remove("open");
                e.target.parentNode.classList.add("close");
            } else {
                e.target.parentNode.classList.add("open");
                e.target.parentNode.classList.remove("close");
            }
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
  top: 40vh;
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
  cursor: pointer;
  z-index: 5;
}

.a {
  transform: rotateY(0deg) translateZ(25vw);
}
.a-image {
  background: url('../assets/card-red.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0);
  z-index: 3;
}
.b {
  transform: rotateY(120deg) translateZ(25vw);
}
.b-image {
  background-image: url('../assets/card-blue.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0);
  z-index: 3;

}
.c {
  transform: rotateY(240deg) translateZ(25vw);
}
.c-image {
  background-image: url('../assets/card-yellow.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0);
  z-index: 3;
}

.next, .prev {
  position: absolute;
  width: 287px;
  height: 200px;
  z-index: 99;
}
.next {
    transform: rotateY(120deg) translateZ(25vw);
}
.prev {
    transform: rotateY(240deg) translateZ(25vw);
}
.flap {
  border-left: 140px solid transparent;
  border-right: 136px solid transparent;
  border-bottom: 82px solid transparent;
  transform-origin: top;
  pointer-events: none;
  border-top: 98px solid #b50a26;
  position: absolute;
  top: 5px;
  z-index: 4;
}
.a .flap {
  border-top: 98px solid #b50a26;
}
.b .flap {
  border-top: 98px solid #4e5d78;
}
.c .flap {
    border-top: 98px solid #edca86;
}
.open .flap {
    transform: rotateX(180deg);
    transition: transform 0.4s ease, z-index 0.6s;
    z-index: 1;
}
.letter {
  position: absolute;
  background-image: url('../assets/writing-card-red.svg');
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  top: 5%;
  border-radius: 6px;
  box-shadow: 0 2px 26px rgba(0, 0, 0, 0.12);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.open .letter {
  transform: translateY(-60px);
  transition: transform 0.4s 0.6s ease, z-index 0.6s;
  z-index: 2;
}
.close .flap {
  transform: rotateX(0deg);
  transition: transform 0.4s 0.6s ease, z-index 1s;
  z-index: 5;
}
.close .letter {
  transform: translateY(0px);
  transition: transform 0.4s ease, z-index 1s;
  z-index: 1;
}
.background {
    width: 96.4%;
    height: 95%;
    position: absolute;
    /* top: 2%; */
}
.a .background {
    background-color: #b50a26e3;
}
.b .background {
    background-color: #4e5d78d8;
}
.c .background {
    background-color: #edcb86de;
}
.test {
    position: absolute;
    bottom: 20px;
}
</style>