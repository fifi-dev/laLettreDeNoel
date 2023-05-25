<template>
    <div class="letter-box">
        <FallingSnowComponent></FallingSnowComponent>
        <h1 class=" pt-20 pb-4 text-7xl">La boite aux lettres</h1>
        <p>La boîte aux lettres sera disponible la semaine de Noëll</p>
        <CountDown class="py-24"></CountDown>
        <P class="mb-7">Ils ont envoyé une lettre</P>
        <div :key="letter.id" v-for="letter in letters" class="grid w-2/5 gap-3 grid-cols-2 m-auto" >
            <p class="mr-2">{{ letter.name }}</p>
            <p >{{ letter.created_at }}</p>
        </div>
    </div>
</template>
<script>

import CountDown from '@/components/CountDown.vue';
import { supabase } from '../supabase.js';
import FallingSnowComponent from '@/components/FallingSnowComponent.vue';

export default {
    name: "LetterBoxView",
    data() {
        return {
            letters: [],
            
        };
    },
    methods: {
        async getAllLetters() {
            const { data, error } = await supabase
                .from("letters")
                .select();
            if (data) {
                this.letters = data;
                console.log(data);
            }
            else {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getAllLetters();
    },
    components: { CountDown,FallingSnowComponent }
}
</script>