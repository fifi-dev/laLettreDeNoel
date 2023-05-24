<template>
    <div class="settings-component w-full h-screen top-0 left-0 absolute bg-slate-800 z-20 flex justify-center items-center">
        <div>
            <h2> Paramètres</h2>
            <div class="my-12">
                <p >Musique</p>
                <div class="my-4">
                    <select name="musiqueChoice" id="musiqueChoice">
                        <option value="merryChristmas">Merry Christmas</option>
                        <option value="jingleBells">Jingle Bells</option>
                    </select>
                </div>
                <div class="flex justify-center items-center">
                    <div @click="toggleAudio()" class="mr-4">
                        <svg v-if="bgSoundPlaying" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </div>
                    <div>
                        <input type="range" value="50" name="" id="" min="0" max="100">
                    </div>
                </div>
            </div>
            <div>
                Couleur
                <div class="grid grid-cols-4 gap-12 mt-4 w-3/5 m-auto">
                    <div class=" color-choice bg-black dark-bg color-active"></div>
                    <div class="color-choice bg-white"></div>
                    <div class="color-choice bg-red-700"></div>
                    <div class="color-choice bg-green-800"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SettingsComponent',
    data() {
        return {
            bgSoundPlaying: true,
        }
    },
    methods:{
        toggleAudio: function(){
            var bgMusic = document.querySelector(".bgMusic");
            if(this.bgSoundPlaying === true){
                bgMusic.pause();
                this.bgSoundPlaying = false;
                console.log("la musique a été stopé" + this.bgSoundPlaying)
            }else{
                bgMusic.play();
                this.bgSoundPlaying = true;
                console.log("la musique a été relancé" + this.bgSoundPlaying)
            }
        }
    },
    mounted(){
        
    }
    }
</script>

<style scoped>

.settings-component{
    transform: translateX(100%);
}
h2{
font-size: 5rem;
}

select{
    /*color: black;*/
    padding: 5px 10px;
    background: transparent;
    outline: none;
}

.color-choice{
    content: "";
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.color-active{
    border: 5px solid #20293A;
    outline: 1px solid white;
}
@media screen and (max-width: 767px){
h2{
    font-size: 3rem
}

}
</style>
