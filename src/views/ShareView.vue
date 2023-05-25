<template>
    <div class="share-view pt-10">
        <FallingSnowComponent></FallingSnowComponent>
        <h1 class=" text-4xl mb-5">lettre envoyee</h1>
    <div class="mt-8">
        <div @click="toggleClass()" class="present">
        <div class="name">
            Site réalisé par : <br>
            BAZANA NTOMO Fideline <br/> 
            MARTINET Alexis <br/> 
            SAINT MARTIN Julie
        </div>
        
        <div class="rotate-container">
            <div class="bottom"></div>
            <div class="front"></div>
            <div class="left"></div>
            <div class="back"></div>
            <div class="right"></div>
            
            <div class="lid">
                <div class="lid-top"></div>
                <div class="lid-front"></div>
                <div class="lid-left"></div>
                <div class="lid-back"></div>
                <div class="lid-right"></div>
            </div>
        </div>
    </div>

    </div>
    </div>
</template>

<script>
import FallingSnowComponent from '@/components/FallingSnowComponent.vue';

export default {
    name: "ShareView",
    methods: {
        toggleClass: function () {
            const present = document.querySelector(".present");
            present.classList.toggle("open");
        }
    },
    components: { FallingSnowComponent },
    mounted() {
        const target = window.document.getElementsByTagName('h1')[0]

        const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
        const colorLetter = letter => `<span style="color: hsla(${Math.random() * (150 - 0) + 0}, 100%, 80%, 1);">${letter}</span>`;
        // const colorLetter = letter => `<span style="color: hsla(360, 100%, 80%, 1);">${letter}</span>`;
        const flickerAndColorText = text => 
        text
            .split('')
            .map(flickerLetter)
            .map(colorLetter)
            .join('');
        const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


        neonGlory(target);
        target.onclick = ({ target }) =>  neonGlory(target);
            }
}

</script>

<style scoped>

h1{
    font-family: 'ChristmasLightsOutdoor', sans-serif;
    font-size: 10vw;
}
.present {
    height: 240px;
    left: 0;
    margin: 0 auto;
    perspective: 600px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 240px;
}
.name {
    font-size: 1em;
    font-weight: 100;
    position: absolute;
    top: 50%;
    font-family: Montserrat;
    line-height: 2;
    width: 400px;
    text-align: center;
    left: -30%;
}
.name b {
    display: inline-block;
    width: 60px;
}
.instruction {
    bottom: -100px;
    left: 0;
    opacity: 1;
    position: absolute;
    text-align: center;
    transition: opacity 0.5s;
    width: 100%;
}
.rotate-container {
    animation: present-rotate 30s infinite linear;
    height: 100%;
    transform: rotateY(170deg);
    transform-style: preserve-3d;
}
@keyframes present-rotate {
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
}
.bottom, .front, .left, .back, .right {
    background-color: #e4a493;
    border: 1px solid rgba(0, 0, 0, .2);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.bottom {
    transform: translateY(50%) rotateX(90deg);
}
.front, .left, .back, .right {
    transition: transform 0.5s;
    transform-origin: bottom;
    transform-style: preserve-3d;
}
.front:after, .left:after, .back:after, .right:after, .lid-top:after, .lid-front:after, .lid-left:after, .lid-back:after, .lid-right:after {
    background-color: #b76159;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    content: '';
    height: 100%;
    left: calc(50% - 10px);
    position: absolute;
    transform: translateZ(0.1px);
    width: 20px;
}
.lid-top:before {
    background-color: #e4a493;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    content: '';
    height: 20px;
    left: 0;
    position: absolute;
    top: calc(50% - 10px);
    transform: translateZ(0.1px);
    width: 100%;
}
.left {
    transform: translateX(-50%) rotateY(-90deg);
}
.back {
    transform: translateZ(-120px) rotateY(180deg) rotateX(0);
}
.right {
    transform: translateX(50%) rotateY(90deg);
}
.front {
    transform: translateZ(120px);
}
.lid {
    animation: lid-animation 3.5s 1s infinite;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    transition: transform 0.5s;
}
@keyframes lid-animation {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0);
    }
    5% {
        transform: translate3d(0, -10px, -5px) rotateX(5deg);
    }
    10% {
        transform: translate3d(0, -10px, 5px) rotateX(-5deg);
    }
    15% {
        transform: translate3d(0, -10px, -5px) rotateX(5deg);
    }
    20% {
        transform: translate3d(0, -10px, 5px) rotateX(-5deg);
    }
    25% {
        transform: translate3d(0, -10px, -5px) rotateX(5deg);
    }
    30% {
        transform: translate3d(0, 0, 0) rotateX(0);
    }
}
.lid-top, .lid-left, .lid-back, .lid-right, .lid-front {
    background-color: #e4a493;
    border: 1px solid rgba(0, 0, 0, .2);
    left: -5px;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 250px;
}
.lid-top {
    height: 250px;
    top: -5px;
    transform: translateY(-50%) rotateX(90deg);
    transform-style: preserve-3d;
}
.lid-left, .lid-back, .lid-right, .lid-front {
    height: 40px;
    top: -5px;
    transform-style: preserve-3d;
}
.lid-left {
    transform: translateX(-50%) rotateY(-90deg);
}
.lid-back {
    transform: translateZ(-125px) rotateY(180deg);
}
.lid-right {
    transform: translateX(50%) rotateY(90deg);
}
.lid-front {
    transform: translateZ(125px);
}
.present:hover .lid {
    animation: none;
    transform: translate3d(0, -40px, -10px) rotateX(10deg);
}
.present.open .name {
    transform: translate3d(0, -50%, 10px) rotateY(1080deg) rotateX(10deg);
}
.present.open .instruction {
    opacity: 0;
}
.present.open .left {
    transform: translateX(-50%) rotateY(-90deg) rotateX(-90deg);
}
.present.open .back {
    transform: translateZ(-120px) rotateY(180deg) rotateX(-90deg);
}
.present.open .right {
    transform: translateX(50%) rotateY(90deg) rotateX(-90deg);
}
.present.open .front {
    transform: translateZ(120px) rotateX(-90deg);
}
.present.open .lid {
    animation: none;
    transform: translate3d(0, -120px, -120px) rotateX(50deg);
}

</style>