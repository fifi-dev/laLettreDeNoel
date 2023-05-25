<template>
    <div class="absolute z-20 top-0 w-full left-0 py-16 px-24 max-sm:px-10 flex justify-between items-center">
        <div @click="displayMenu = !displayMenu; menuToggle()" class="hexagon w-1/4 z-30 menu-button">
            <svg v-if="displayMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <MenuComponent></MenuComponent>
        <SettingsComponent></SettingsComponent>
        <div class="flex">
            <div>
                <div class="flex text-xs items-center">
                    <audio autoplay controls class=" bgMusic absolute -top-60">
                        <source src="../assets/audio/merryChristmas.mp3" type="audio/mp3">
                    </audio>
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                    <p>We wish you a merry christmas</p>-->
                </div>
            </div>
            <div @click="displaySettings = !displaySettings; settingsToggle()" class="settings-buton hexagon z-30 w-1/4 ml-4">
                <svg v-if="displaySettings" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import MenuComponent from './MenuComponent.vue';
import SettingsComponent from './SettingsComponent.vue';
import gsap from 'gsap'
export default {
    name: "HeaderComponent",
    data() {
        return {
            displayMenu: true,
            displaySettings: true,
        }
    },
    components: {
        MenuComponent,
        SettingsComponent
    },
    methods: {
        menuToggle: function(){
            var menu = document.querySelector('.menu-component');
            var settingsButton = document.querySelector(".settings-buton");
            const items = document.querySelectorAll('.nav-item');
            if(this.displayMenu === false){
                    menu.style.transform="translateX(0%)";
                    menu.style.transition=" all 1.3s ease" 
                    settingsButton.style.zIndex = "10"
                    
                    const tl10 = gsap.timeline();
                   
            
                    tl10
                    .to(items[0], {opacity: 1, scale:1.5, duration:0.1, delay:0.5})
                    .to(items[0], {opacity: 1, scale:1, duration:0.1})
                    .to(items[1], {opacity: 1, scale:1.5, duration:0.1})
                    .to(items[1], {opacity: 1, scale:1, duration:0.1})
                    .to(items[2], {opacity: 1, scale:1.5, duration:0.1})
                    .to(items[2], {opacity: 1, scale:1, duration:0.1})
                    .to(document.querySelector('.guirlandes'), {y:'0%', duration:0.5})
                    .to(document.querySelector('.guirlandes'), {y:'-5%', duration:0.3})
                    .to(document.querySelector('.pere-noel'), {y:'0%', duration:0.5})
                    .to(document.querySelector('.pere-noel'), {y:'5%', duration:0.3})
            }else {
                console.log("le menu est affiché")
                menu.style.transform="translateX(-100%)";
                menu.style.transition=" all 1.2s ease" ;
                menu.style.animatation="slidein 1s ease-out";
                settingsButton.style.zIndex = "30"
                const tl12 = gsap.timeline();
                const tl13 = gsap.timeline();
                   
            
                    tl12
                    .to(items[2], {opacity: 0, duration:0.1})
                    .to(items[1], {opacity: 0, duration:0.1})
                    .to(items[0], {opacity: 0, duration:0.1})
                    tl13
                    .to(document.querySelector('.guirlandes'), {y:'0%', duration:0.3})
                    .to(document.querySelector('.guirlandes'), {y:'-100%', duration:0.5})
                    .to(document.querySelector('.pere-noel'), {y:'0%', duration:0.3})
                    .to(document.querySelector('.pere-noel'), {y:'100%', duration:0.5})
            }
        },
        settingsToggle: function(){
            var menuButton = document.querySelector(".menu-button");
            var settings = document.querySelector('.settings-component');
            if(this.displaySettings === false){
                    settings.style.transform="translateX(0%)";
                    settings.style.transition=" all 1.3s ease" 
                    menuButton.style.zIndex = "10"
            }else {
                settings.style.transform="translateX(100%)";
                settings.style.transition=" all 1.2s ease" ;
                settings.style.animatation="slidein 1s ease-out";
                menuButton.style.zIndex = "30"

            }
        },

    },
    mounted(){
        console.log("The menu is not displayed" + this.displayMenu)
    }
}
</script>
<style scoped>
.hexagon {
    cursor: pointer;
    position: relative;
    width: 30px; 
    height: 17.320508075688775px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: solid 1px #ffffff;
    border-right: solid 1px #ffffff;
    display: grid;
    transition: all 0.3s;
}

.hexagon:hover{
    background-color: white;
    color: green;
    transform: scale(1.1);
}

.hexagon:before, .hexagon:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 21.213203435596423px;
    height: 21.213203435596423px;
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 3.3933982822017885px;
    box-shadow: 0 0 0px rgba(0,255,255,1);
    transition: 0s;
}

.hexagon:before {
    top: -10.606601717798211px;
    border-top: solid 1.4142135623730951px #ffffff;
    border-right: solid 1.4142135623730951px #ffffff;
}

.hexagon:after {
    bottom: -10.606601717798211px;
    border-bottom: solid 1.4142135623730951px #ffffff;
    border-left: solid 1.4142135623730951px #ffffff;
}


</style>