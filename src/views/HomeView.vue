<template>
  <div class="home pt-32 flex justify-center flex-col items-center">

    <FallingSnowComponent></FallingSnowComponent>

    <!--  <img alt="Vue logo" src="../assets/snowyBall.png">-->
    <svg xmlns="http://www.w3.org/2000/svg" id="Calque_2" viewBox="0 0 79.5 29.7" class="h-10">
      <defs></defs>
      <g id="OBJECT">
        <polygon class="cls-1"
          points="25.99 22.68 27.5 22.68 24.85 18.73 26.21 18.73 23.22 14.26 20.23 18.73 21.59 18.73 18.94 22.68 20.45 22.68 17.44 27.17 21.98 27.17 21.98 28.77 24.46 28.77 24.46 27.17 29 27.17 25.99 22.68" />
        <polygon class="cls-1"
          points="44.02 19.38 46.36 19.38 42.27 13.28 44.37 13.28 39.75 6.39 35.13 13.28 37.23 13.28 33.15 19.38 35.48 19.38 30.84 26.31 37.84 26.31 37.84 28.77 41.66 28.77 41.66 26.31 48.67 26.31 44.02 19.38" />
        <polygon class="cls-1"
          points="59.05 22.68 60.57 22.68 57.92 18.73 59.28 18.73 56.28 14.26 53.29 18.73 54.65 18.73 52 22.68 53.52 22.68 50.5 27.17 55.05 27.17 55.05 28.77 57.52 28.77 57.52 27.17 62.06 27.17 59.05 22.68" />
        <rect class="cls-1" y="28.77" width="79.5" height=".93" />
        <polygon class="cls-1"
          points="14.19 13 14.99 14.62 16.78 14.88 15.49 16.15 15.79 17.93 14.19 17.09 12.59 17.93 12.89 16.15 11.6 14.88 13.39 14.62 14.19 13" />
        <path class="cls-1"
          d="m67.58,22.92c-.05-.24-.12-.55-.2-.9-.08-.35-.15-.77-.3-1.21-.29-.89-.58-1.99-1.12-3.18-.12-.3-.25-.61-.39-.93-.14-.32-.32-.63-.48-.95-.34-.65-.66-1.35-1.12-2.01-.44-.67-.85-1.41-1.4-2.08-.26-.35-.53-.7-.8-1.05-.26-.36-.59-.68-.9-1.03-.31-.34-.62-.69-.94-1.04-.35-.32-.7-.65-1.05-.98-.68-.69-1.5-1.26-2.28-1.9-.38-.33-.83-.58-1.25-.87-.43-.27-.85-.58-1.3-.84-.46-.25-.92-.49-1.38-.74-.23-.12-.46-.26-.7-.37l-.73-.32c-.49-.21-.98-.42-1.47-.63-.51-.17-1.02-.34-1.52-.51l-.77-.25c-.26-.08-.52-.13-.78-.2l-1.57-.37c-.53-.12-1.07-.17-1.61-.25-.54-.06-1.08-.19-1.61-.19-.53-.03-1.06-.06-1.59-.08l-.4-.02c-.07,0-.12,0-.21,0h-.2s-.8.02-.8.02c-2.12.06-4.22.33-6.19.83-1.97.5-3.82,1.19-5.5,1.98-1.68.82-3.18,1.75-4.51,2.7-1.3.98-2.45,1.95-3.37,2.9-.23.23-.46.46-.68.68-.21.23-.4.46-.59.67-.38.43-.73.82-1.02,1.21-.29.38-.56.72-.78,1.02-.09.13-.17.24-.24.36l.26.53.66.1c.08-.11.15-.23.24-.37.21-.29.45-.61.72-.97.26-.37.59-.76.95-1.18.18-.21.37-.43.56-.66.21-.22.42-.44.64-.67.88-.93,1.97-1.88,3.21-2.85,1.27-.93,2.71-1.87,4.32-2.68,1.62-.8,3.41-1.5,5.31-2.01,1.91-.52,3.94-.81,6.02-.91l.78-.03h.2s.12,0,.18,0h.4c.53.03,1.06.05,1.59.07.54,0,1.05.11,1.57.16.52.07,1.05.11,1.56.22l1.55.34c.26.06.52.1.77.18l.76.24c.5.16,1.01.32,1.51.47.49.2.97.4,1.45.6l.72.3c.24.11.46.24.69.35.46.24.92.48,1.37.71.45.25.87.54,1.3.8.42.28.87.52,1.25.83.79.61,1.6,1.17,2.28,1.84.36.32.71.64,1.06.95.32.34.64.68.95,1.01.3.34.64.65.91,1,.27.35.54.69.81,1.03.56.66.98,1.38,1.42,2.04.46.65.79,1.35,1.15,1.98.17.32.35.63.49.94.14.32.27.62.4.92.56,1.18.87,2.27,1.17,3.16.16.44.23.85.32,1.2.08.35.15.65.21.9.12.49.18.75.18.75,0,0-.06-.26-.16-.75Z" />
      </g>
    </svg>
    <TitleEffect></TitleEffect>
    <div id="repulse-circle-div"
      class="cercle border border-white h-[300px] w-[300px] rounded-[100%] flex items-center justify-center">
      <div class="letters-bg bg-white h-[95%] w-[95%] rounded-[100%] overflow-hidden flex justify-center items-center">
        <img src="../assets/lettre.png" id="1" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/bonhomme-de-neige.png" id="2" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/sapin-de-noel.png" id="3" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/pere-noel.png" id="4" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/bonhomme-en-pain-depice.png" id="5" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/cadeaux-de-noel.png" id="6" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/chants-de-noel.png" id="7" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/chocolat-chaud.png" id="8" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/cloche-de-noel.png" id="9" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/decorations-de-noel.png" id="10" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
        <img src="../assets/chaussette-de-noel.png" id="11" class="letter scale-[5]" onmousedown="return false"
          onmousemove="return false">
      </div>
    </div>

    <div class="flocons h-[34px] w-[34px] mt-8 flex justify-center relative">
      <img src="../assets/map_snow.svg" class="flocon transition duration-1000 h-[34px] absolute"
        onmousedown="return false" onmousemove="return false">
      <img src="../assets/map_snow.svg" class="flocon2 transition duration-1000 h-[34px] absolute"
        onmousedown="return false" onmousemove="return false">
    </div>

    <div class="h-[30px] border-[0.5px] border-dashed m-1"></div>

    <img src="../assets/map_snow.svg" class="opacity-[0.3] h-[25px]" onmousedown="return false"
      onmousemove="return false">

    <img src="../assets/traineau.svg" class="absolute traineau translate-x-[-310%] w-auto" onmousedown="return false"
      onmousemove="return false">

  </div>
</template>

<script>
// @ is an alias to /src
import FallingSnowComponent from '@/components/FallingSnowComponent.vue';
import TitleEffect from '@/components/TitleEffect.vue';
//import MusicBanner from '@/components/MusicBanner.vue';
import gsap from 'gsap'

export default {
  name: 'HomeView',
  components: {
    FallingSnowComponent,
    TitleEffect
  },

  methods: {
    letterTranslate() {


    }
  },

  mounted() {
    const tl = gsap.timeline();
    tl.to('.letter', { filter: "blur(10px)" })
      .to('.letter', { filter: "blur(0px)", duration: 1 })
      .to('.letter', { x: 350, y: 10, duration: 1 })
      .to('.letter', { x: -200, y: 400, duration: 1 })
      .to('.letter', { x: -400, y: 100, duration: 1 })
      .to('.letter', { x: -0, y: -300, duration: 1 })
      .to('.letter', { scale: 1, x: 0, y: 0, duration: 1.5, })

    const letters = document.querySelectorAll('.letter');

    const currentNumber = Math.floor(Math.random() * (11 - 1) + 1);
    const firstImage = document.querySelector('.letter[id="' + currentNumber + '"]')

    letters.forEach(element => {
      element.style.display = "none";
      firstImage.style.display = "block";

      // console.log("num "+currentNumber);
      // console.log("fisrt "+firstImage);
      element.addEventListener("click", () => {

        let nextNumber = Math.floor(Math.random() * (11 - 1) + 1);
        console.log(currentNumber)

        do {
          nextNumber = Math.floor(Math.random() * (11 - 1) + 1);
        } while (nextNumber == element.getAttribute('id'));


        const elNext = document.querySelector('.letter[id="' + nextNumber + '"]');

        console.log(nextNumber)

        const tl3 = gsap.timeline();
        tl3.to(element, { y: -500, duration: 0.5 })
          .to(element, { y: -500, display: 'none', duration: 0 })
          .to(elNext, { y: 500, display: 'block', duration: 0 })
          .to(elNext, { y: 0, duration: 0.5 })
          .to(elNext, { rotate: 20, duration: 0.2 })
          .to(elNext, { rotate: -15, duration: 0.2 })
          .to(elNext, { rotate: 10, duration: 0.2 })
          .to(elNext, { rotate: 0, duration: 0.2 })
      })
    });

    setTimeout(() => {
        document.querySelector('.letters-bg').addEventListener("mouseover", () => {
          document.querySelector('.letters-bg').classList.remove('mouseout');
          document.querySelector('.letters-bg').classList.add('hover');
        })
        document.querySelector('.letters-bg').addEventListener("mouseout", () => {
          document.querySelector('.letters-bg').classList.remove('hover');
          document.querySelector('.letters-bg').classList.add('mouseout');

        })

    }, "100");

   

    dragElement(document.querySelector(".flocons"));

    function dragElement(elmnt) {

      let pos2 = 0, pos4 = 0;
      elmnt.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos2 = pos4 - e.clientY;
        pos4 = e.clientY;

        // set the element's new position:
        if (elmnt.offsetTop - pos2 - 636 >= 0 && elmnt.offsetTop - pos2 - 636 <= 70) {
          elmnt.style.top = (elmnt.offsetTop - pos2 - 636) + "px";
          elmnt.style.cursor = "grabbing";
        }

        if (elmnt.offsetTop - pos2 - 636 >= 65) {

          const tl2 = gsap.timeline();
          tl2.to('.flocon', { scale: 70, rotation: '360deg', duration: 0.5 }).to('.flocon', { rotation: '500deg', y: 1000, x: -50000, duration: 0.3 }).to('.flocon', { scale: 90, rotation: '360deg', x: 1600, y: -1500, duration: 0.5 });
        }

      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        elmnt.style.cursor = "grab"
      }
    }
  }
}


</script>

<style>
.cls-1 {
  fill: #eff0f0;
}

.flocon {
  transition: transform 1s;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  z-index: 10;
}

.flocon2 {
  animation: flocon 2s ease infinite;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.flocons:hover {
  transform: rotate(360deg) scale(1.3);
  transition: 1s;
  cursor: grab;
}

.letter {
  /* animation: blur 4s ease-out infinite 7s; */
  width: 80%;
  height: 80%;
  position: relative;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.letters-bg.hover {
  animation: scale 2s ease-in-out infinite;
}
/* 
.letter.mouseout {
  animation: mouseout 0.8s ease-in-out forwards;
} */

/* .cercle {
  animation: rotate 10s infinite linear;
  
} */

.traineau {
  animation: translate 20s linear 1s infinite;
  -webkit-filter: drop-shadow(-30px 30px 5px #000000);
  -webkit-transition: 1s -webkit-filter linear;
  -moz-transition: 1s -moz-filter linear;
  -moz-transition: 1s filter linear;
  -ms-transition: 1s -ms-filter linear;
  -o-transition: 1s -o-filter linear;
  transition: 1s filter linear;
}

.traineau:hover {
  animation-play-state: paused;
  -webkit-filter: hue-rotate(160deg) drop-shadow(-30px 30px 5px #000000);
  -webkit-transition: 1s -webkit-filter linear;
  -moz-transition: 1s -moz-filter linear;
  -moz-transition: 1s filter linear;
  -ms-transition: 1s -ms-filter linear;
  -o-transition: 1s -o-filter linear;
  transition: 1s filter linear;
}

/* .traineau2 {
  animation: translate2 10s reverse linear 13s forwards;
} */
@keyframes translate {
  0% {
    transform: translate(-320%, -100%) scaleX(1);
  }

  17% {
    transform: translate(-100%, 100%) scaleX(1);
  }

  34% {
    transform: translate(100%, -100%) scaleX(1);
  }

  50% {
    transform: translate(310%, 100%) scaleX(1);
  }

  51% {
    transform: translate(310%, 100%) scaleX(-1);
  }

  68% {
    transform: translate(100%, -100%) scaleX(-1);
  }

  85% {
    transform: translate(-100%, 100%) scaleX(-1);
  }

  100% {
    transform: translate(-320%, -100%) scaleX(-1);
  }

  /* 100% {
    transform: translate(300%);
  } */
}


@keyframes flocon {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  80% {
    transform: scale(1.7);
    opacity: 0;
  }

  /* 99% {
    transform: scale(1);
    opacity: 1;
  } */
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }
}

  @keyframes mouseout {
    0%{
    transform: rotate(0deg);

    }
  45% {
    transform: rotate(20deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0deg);

  }
}</style>
