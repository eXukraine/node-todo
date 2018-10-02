<template>
    <div class = "works">
        <h1>Hello works page</h1>
       <table class="table">
           <tr>
               <th>Name of exercise</th>
               <th>Wheigth</th>
               <th>Qty</th>
           </tr>
           <tr v-for="work_alias in works">
               <th>{{work_alias.exercise_name}}</th>
               <th>{{work_alias.weight}}</th>
               <th>{{work_alias.qty}}</th>
           </tr>
       </table>
    </div>
    
</template>

<script>
/* eslint-disable */

import axios from 'axios';
import helloWorld from '@/components/HelloWorld.vue';
export default {
    name: "Works",
    data(){
        return{
            works:[]
        }
    },
    mounted(){
        axios.get('http://localhost:3001/works/all')
            .then(res => {

                this.works = res.data
            })
    }
  }

</script>

<style>
    .table {
        margin: 0 auto;
    }
</style>


