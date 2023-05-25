<template>
    <div class="letter-box">
        <h1>La boite aux lettres</h1>
        <div :key="letter.id" v-for="letter in letters" >
            <p >{{ letter.name }}</p>
        </div>
    </div>
</template>
<script>

import { supabase } from '../supabase.js';
export default {
    name: 'LetterBoxView',
    data() {
        return {
        letters: [],
        };
    },
    methods: {
        async getAllLetters() {
        const { data, error } = await supabase
        .from('letters')
        .select();
        if (data) {
            this.letters = data;
            console.log(data)
        } else {
            console.log(error);
        }
        },
    },
    mounted() {
        this.getAllLetters();
    },


}
</script>