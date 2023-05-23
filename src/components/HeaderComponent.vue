<template>
    <div class="absolute top-0 w-full left-0 py-16 px-24 flex justify-between">
        <div class="hexagon w-1/4">
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
        </div>
        <div>
            <div>
                <div class="flex text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                    <p>We wish you a merry christmas</p>
                </div>
            </div>
            <div class="hexagon w-1/4">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    }
</script>
<style scoped>
.hexagon {
    cursor: default;
    position: relative;
    width: 30px; 
    height: 17.320508075688775px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: solid 2px #ffffff;
    border-right: solid 2px #ffffff;
    display: grid;
    transition: 0s;
}

.hexagon:before, .hexagon:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 21.213203435596423px;
    height: 21.213203435596423px;
    transform: scaleY(0.5774) rotate(-45deg);
    background-color: inherit;
    left: 2.3933982822017885px;
    box-shadow: 0 0 0px rgba(0,255,255,1);
    transition: 0s;
}

.hexagon:before {
    top: -10.606601717798211px;
    border-top: solid 2.8284271247461903px #ffffff;
    border-right: solid 2.8284271247461903px #ffffff;
}

.hexagon:after {
    bottom: -10.606601717798211px;
    border-bottom: solid 2.8284271247461903px #ffffff;
    border-left: solid 2.8284271247461903px #ffffff;
}

</style>