<template>
    <div class="letter-write p-20 max-md:px-0">
        <h1 class=" text-4xl mb-5">Ta lettre</h1>
        <div class="letter-wrap py-12  max-md:py-10 w-fit m-auto">
            <textarea v-model="letter.content" name="letterContent" id="letterContent" cols="30" rows="12" class="w-3/5 m-auto"></textarea>
        </div>
        <div v-if="SendButton" class="envelope-wrap bg-white w-2/5 h-2/5 m-auto relative royalWedding" >
                <div class=" text-4xl absolute top-10 right-32 text-black">
                    <div class="flex items-center">
                        <p>De : </p>
                        <input class="ml-3" type="text" name="letterName" id="letterName" v-model="letter.name" >
                    </div>
                    <div class="flex mt-2 items-center">
                        <p>Pour : </p>
                        <input class="ml-3" type="text" name="letterName" id="letterName" v-model="letter.destinateur" >
                    </div>
                </div>
                <img src="../assets/card-red.svg" alt="">
        </div>
        <div class="mt-4">
            <button v-if="goNextStep" class="displayNextButton" @click="displayNext">Confirmer</button>
            <button v-if="SendButton" @click="submit()">Envoyer</button>
        </div>
    </div>
</template>
<script>

import { supabase } from '../supabase.js';
export default {
    name: 'LetterWriteView',
    data() {
    return {
        letter: {
        name: '',
        content: '',
        destinateur: ''
        },
        goNextStep: true,
        SendButton: false
    };
    },
    methods:{
        async submit() {
            const { data, error } = await supabase
                .from('letters')
                .insert(this.letter);
                if (data) {
                    console.log('Letter successfully added !');
                    this.goTo('home');
                } else {
                    console.log(error);
                }
        },
        goTo(name) {
        this.$router.push({ name: name });
        },
        displayNext: function(){
            //var envelopeWrap = document.querySelector('.envelope-wrap');
            var letterWrap = document.querySelector('.letter-wrap');

            letterWrap.style.transform="translateY(-200%)";
            letterWrap.style.transition=" all 1s ease" ;
            
            setTimeout(() => {
                letterWrap.classList.add("hidden");
            }, "500");
            this.goNextStep = false;
            this.SendButton = true;
            //envelopeWrap.classList.remove("hidden");
            //envelopeWrap.style.transform="translateY(0%)";
            //envelopeWrap.style.transition=" all 1.5s ease" ;
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.letter-wrap{
    background: url("../assets/letter.jpg");
    width: 28vw;
    background-repeat: no-repeat;  
  background-position: 0% 0%;
  background-size: 100% 100%;
    height: 70vh;
}
#letterContent{
    background-color: transparent;
    background-attachment: local;
    background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0) 10px, transparent 10px),
        linear-gradient(to left, rgba(255, 255, 255, 0) 10px, transparent 10px),
        repeating-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 30px, #b0adad 30px, #b0adad 31px, rgba(255, 255, 255, 0) 31px);
    line-height: 31px;
    padding: 8px 10px;
    color: black;
    outline: none;
    font-family: 'RoyalWedding', sans-serif;
    font-size: 3.3rem;
    caret-color: transparent !important;
    resize: none;
}


/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: transparent; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent; 
}

.envelope-wrap{
    width: 40vw;
}

@media screen and (max-width: 767px){
.letter-wrap{
    width: 75vw;
    margin: auto;

    height: 70vh;
}

#letterContent{
    font-size: 2.5rem;
}

.envelope-wrap{
    width: 80vw;
}


}

input{
    background-color: transparent;
    outline: none;
    color: black;
    border-bottom: 1px solid black ;
}

input::placeholder {
    color: b;
}

button{
    border: 1px solid white;
    padding: 10px 15px;
}

</style>