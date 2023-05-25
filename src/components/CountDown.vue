<template>
    <div class="count-down flex flex-grow justify-between w-3/5  m-auto items-center" id="count">
        <!-- <div class=" bg-black h-full text-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
        </div>>-->
        <div>
            <p class="font-light hidden">jours</p>
            <p id="days"></p>
        </div>
        <div class="items-end">
            <p>:</p>
        </div>
        <div>
            <p class="font-light hidden">heures</p>
            <p id="hours"></p>
        </div>
        <div class="items-end">
            <p>:</p>
        </div>
        <div>
            <p class="font-light hidden">minutes</p>
            <p id="minutes"></p>
        </div>
        <div class="items-end">
            <p>:</p>
        </div>
        <div>
            <p class="font-light hidden">secondes</p>
            <p id="seconds"></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'countDown',
    methods:{
        countdown: function(){
            var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime()
            var x = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();
                
                // Find the distance between now and the count down date
                var distance = countDownDate - now;
                
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                // Output the result in an element with id="demo"
                /*document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";*/
                document.querySelector("#days").innerHTML = days;
                document.querySelector("#hours").innerHTML = hours;
                document.querySelector("#minutes").innerHTML = minutes;
                document.querySelector("#seconds").innerHTML = seconds;
                // If the count down is over, write some text 
                if (distance < 0) {
                clearInterval(x);
                document.querySelector("#count").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    },
    mounted() {
        this.countdown();
    }
}
</script>
<style scoped>
.count-down{
    font-size: 8rem;
    font-family: 'Raleway', sans-serif;
}
</style>