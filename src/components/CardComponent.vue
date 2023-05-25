<template>
    <div class="item a flex items-center justify-center close" @click="openEnvelope($event)" data-color="red">
        <div class="background"></div>
        <div class="flap"></div>
        <div class="letter"></div>
        <div class="h-[95%] w-[96.5%] a-image"></div>
    </div>
    
</template>

<script>
export default ({
    name: "CardComponent",
    methods: {
      
        openEnvelope: function(e) {
            if (e.target.parentNode.classList.contains("open")) {
                e.target.parentNode.classList.remove("open");
                e.target.parentNode.classList.add("close");
            } else {
                e.target.parentNode.classList.add("open");
                e.target.parentNode.classList.remove("close");
            }
        },
    }
})
</script>

<style scoped>


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

.open .flap {
    transform: rotateX(180deg);
    transition: transform 0.4s ease, z-index 0.6s;
    z-index: 1;
}
.letter {
  position: absolute;
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
.a .letter {
  background-image: url('../assets/writing-card-red.svg');
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
</style>