<template>
    <div class="letter-write p-20 max-md:px-0">
        <h1 class=" text-4xl mb-10">Rediges ta lettre</h1>
        <div class="letter-wrap py-20 max-md:py-10">
            <textarea name="letter" id="letter" cols="30" rows="12" class="w-3/5 m-auto"></textarea>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LetterWriteView',

}
</script>

<style scoped>
.letter-wrap{
    background: url("../assets/letter.jpg");
    width: 30vw;
    background-repeat: no-repeat;  
  background-position: 0% 0%;
  background-size: 100% 100%;
    height: 80vh;
}
#letter{
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

@media screen and (max-width: 767px){
.letter-wrap{
    width: 75vw;
    margin: auto;

    height: 70vh;
}

#letter{
    font-size: 2.5rem;
}

}

</style>