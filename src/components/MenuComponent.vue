<template>
        <nav class="menu-component absolute z-20 w-full bg-green-800 h-screen top-0 left-0 flex items-center justify-center">
            <iframe src="https://embed.lottiefiles.com/animation/87898" class="guirlandes w-[40%] -top-24 absolute right-0 h-[100%] translate-y-[-100%]"></iframe>
            <ul class="relative  max-sm:block">
                <li class="nav-item opacity-0 flex justify-center items-center">
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] mr-[-50px] opacity-0"></iframe>
                    <a href="/">Accueil</a>
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] ml-[-50px] opacity-0"></iframe>
                </li>
                <li class="nav-item opacity-0 flex justify-center items-center">
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] mr-[-50px] opacity-0"></iframe>
                   <a href="/boite-aux-lettres"> La boite aux lettres</a>
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] ml-[-50px] opacity-0"></iframe>
                </li>
                <li class="nav-item opacity-0 flex justify-center items-center">
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] mr-[-50px] opacity-0"></iframe>
                    <a href="/credits">Crédits</a>
                    <iframe src="https://embed.lottiefiles.com/animation/94248" class="w-[180px] h-[86px] mt-[-50px] ml-[-50px] opacity-0"></iframe>
                </li>
                <p class="absolute copyright text-center">
                    © 2023 - All right Reserved 
                </p>
            </ul>

            <iframe src="https://embed.lottiefiles.com/animation/90212" class="pere-noel h-[30%] absolute bottom-0 left-10 translate-y-[100%]"></iframe>
            <iframe src="https://embed.lottiefiles.com/animation/90360" class="h-[38%] absolute bottom-0 right-0"></iframe>
        </nav>
</template>
<script>
    import gsap from 'gsap';
export default {
    name: 'MenuComponent',
    methods:{
        goToHome(){
            this.goTo("home");
        },
        goTo(name) {
            this.$router.push({ name: name });
        },
    },
    mounted(){
        // const tl = gsap.timeline();

        // const items = document.querySelectorAll('.nav-item');

        // tl.to(items[0], {opacity: 1})
        // .to(items[1], {opacity: 1})
        // .to(items[2], {opacity: 1})
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                console.log(item)
                const iframes = item.querySelectorAll('iframe');
                console.log(iframes);
                // iframes[0].classList.add('opacity');
                // // iframes[1].style.opacity = '1';
                const tl = gsap.timeline();
                const tl2 = gsap.timeline();

                tl
                .to(iframes[0], {opacity:1, duration:0.2})
                tl2
                .to(iframes[1], {opacity:1, duration:0.2})
            })
            item.addEventListener('mouseout', () => {
                const iframes = item.querySelectorAll('iframe');
                console.log(iframes);
                // iframes[0].classList.add('opacity');
                iframes[1].style.opacity = '1';
                const tl3 = gsap.timeline();
                const tl4 = gsap.timeline();
                tl3
                .to(iframes[0], {opacity:0, duration:0.2})
                tl4
                .to(iframes[1], {opacity:0, duration:0.2})
            })
        })
    }
    }

</script>
<style>
.menu-component{
    transform: translateX(-100%);
}

nav{
    font-size: 5rem;
    /*transform: translateX(-98.5%);*/
}

.copyright{
    font-size: 1rem;
    width: 100%;
    bottom: -30%;
}

.nav-item{
    transition: all 0.3s ease-out;
    cursor: pointer;
}

.nav-item a{
    color: white;
    font-weight: normal;
}
.nav-item:hover{
    transform: scale(1.2);
}

.nav-item:hover .nav-item>iframe{
    opacity: 1
}

@media screen and (max-width: 767px){
nav{
    font-size: 3rem;
    
}
}

</style>