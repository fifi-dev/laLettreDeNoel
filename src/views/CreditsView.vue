<template>
    <div class="credits text-left">
        <div class="credits-text h-screen w-full p-24 overflow-y-scroll ">
            <h1 >Crédits</h1>
            <div>
                <h2>Le concept</h2>
                <p class="w-2/ max-md:w-full max-md:m-auto cursor-pointer">La lettre de noel est un site qui permet de rédiger et transmettre sa lettre directement dans la boite au lettre du  <span @click="santaAppear()" class="displaySanta underline cursor-pointer">père noel</span> ou à ses proches.</p>
            </div>
            <div>
                <h2>Les Creative Developer</h2>
                <p class="w-2/5 max-md:w-full max-md:m-auto cursor-pointer">Notre Équipe est composé de 3 étudiants de l'IIM - Institut de l'Internet et du Multimédia : </p>
                <ul class="my-2">
                    <li>- BAZANA NTOMO Fideline</li>
                    <li>- MARTINET Alexis</li>
                    <li>- SAINT MARTIN Julie</li>
                </ul>
                <p> Vous pouvez nous retrouver dans l'équipe de <a href="g-equality.com" target="_blank" class="underline">G Equality</a></p>
            </div>
            <div>
                <h2>Musique & Audio</h2>
                <p>Ce site utilise les audios suivants : </p>
                <ul class="mt-2">
                    <li>- I wish u a merry christmas</li>
                    <li>- Jingle Bells</li>
                    <li>- Ho Ho Ho</li>
                </ul>
            </div>
            <div>
                <h2>Les remerciements</h2>
                <ul>
                    <li>ZERAH Alexandre</li>
                    <li>DENKEY DANDJEIN Dona</li>
                    <li>AZOULEY Karen</li>
                    <li>L'IIM - Institut de l'Internet et du Multimédia</li>
                </ul>
            </div>
        </div>
        <div>
            <div class="santa  w-full">
                <img src="../assets/santa_gift.svg" alt="santa with gift" class="absolute right-12 w-1/5">
            </div>
            <div class=" overlay hidden absolute top-0 lef-0 h-screen w-full">
            </div>
            <div class="santa-passing absolute top-28 left-0 w-3/5">
                <iframe class="santa-passing-iframe" src="https://embed.lottiefiles.com/animation/88609"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreditsView',
    methods:{
        santaAppear: function(){
            var santaPassing = document.querySelector(".santa-passing");
            santaPassing.style.transform="translateX(-100vw)";
            santaPassing.style.transition=" all 11s ease";
            console.log(santaPassing)
            var overlay = document.querySelector(".overlay");
            overlay.classList.remove("hidden");
            setTimeout(this.disappearEffect, 5000);   
        },
        scrollToBottom: function(timedelay=100) {
        var creditsText = document.querySelector(".credits-text");
        var scrollId;
        var height = 0;
        var minScrollHeight = 1;
        scrollId = setInterval(function () {
            if (height <= creditsText.scrollHeight) {
                creditsText.scrollBy(0, minScrollHeight);
            }
            else {
                clearInterval(scrollId);
            }
            height += minScrollHeight; 
        }, timedelay);       
        },
        disappearEffect: function(){
            var overlay = document.querySelector(".overlay");
            overlay.classList.add("hidden");
        }

    },
    mounted(){
        //this.santaAppear()
        this.scrollToBottom()
    }
}
</script>

<style scoped>
.credits{
    height: 100vh;
    width: 100%;
    font-size: 1rem;
    background-color: #480202;
    background-color: #9a0e0e;
    background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #9a0e0e 4px ), repeating-linear-gradient( #87210555, #872105 );
}


.overlay{
    background: #00000076;
    transition: all 0.5s;
z-index: 6;
}
.credits h2{
    text-transform: uppercase;
    margin-top: 24px;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

h1{
    font-size: 8rem;
    text-align: left;
}

.credits p {
    text-align: justify;
}

.santa img{
    animation: translateSanta 3s ease-out;
    transform: translateY(-100%);
    user-select: none;
}

.santa-passing{
    transform: translateX(100vw);
    z-index: 7;
}
.santa-passing iframe{
    width: 90vw;
    height: 90vh;
    user-select: none;
    /* animation: translateDeer 6s ease-out;*/
}

#attribution_block{
    opacity: 0 !important;
}

span{
    position: relative;
    width:fit-content ;  
}

span::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 5;
    top: 26px;
    margin: 0 auto;
    left: 0;
    right: 0;
    border: 3px solid rgb(134, 4, 4);
    outline: 2px solid #fff;
    transition: all 0.5s;
    animation: cta 2s infinite ease-out;
}

span:hover:after{
   transform: scale(0.6);
   top: 25px;
}

@keyframes cta {
  0%{
    outline-width: 1px ;
  }
  50%{
    outline-width: 3px ;
  }
  100% {
    outline-width: 1px ;
  }
}



@keyframes translateSanta {
  0%{
    transform: translateY(-220%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes translateDeer {
  0%{
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>