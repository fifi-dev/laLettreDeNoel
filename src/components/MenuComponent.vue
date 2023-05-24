<template>
        <nav class="menu-component absolute z-20 w-full bg-green-800 h-screen top-0 left-0 flex items-center justify-center">
            <ul class="relative  max-sm:block">
                <li class="nav-item">Accueil</li>
                <li class="nav-item">La boite aux lettres</li>
                <li class="nav-item">Credits</li>
                <p class="absolute copyright text-center">© 2023 - All right Reserved </p>
            </ul>
        </nav>
</template>
<script>
export default {
    name: 'MenuComponent',
    }
</script>
<style>
.menu-component{
    transform: translateX(-100%);
    box-shadow: 21px 21px 55px rgba(255, 255, 255, 0.057);
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
}
.nav-item:hover{
    transform: scale(1.2);
}

@media screen and (max-width: 767px){
nav{
    font-size: 3rem;
    
}
}
</style>