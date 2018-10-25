<template>
    <div class = "works">
        <h1>Hello works page</h1>
       <table class="table">
           <tr>
               <th>Name of exercise</th>
               <th>Wheigth</th>
               <th>Qty</th>
           </tr>
           <tr v-for="work in works" :key='work.exercise_name'>
               <th>{{work.exercise_name}}</th>
               <th>{{work.weight}}</th>
               <th>{{work.qty}}</th>
           </tr>
       </table>
    </div>
    
</template>

<script>
/* eslint-disable */

import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name: "Works",
        mounted () {
            this.$store.dispatch('loadWorks')
         },
        computed: mapState([
            'works'
        ]),





    data(){
        return{
           
        }
        

    },
 
     methods:{ 
        
    } 
     
  }
  

</script>

<style>
    .table {
        margin: 0 auto;
    }
</style>


