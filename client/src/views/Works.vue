<template>
    <div class = "works">
        <h1>Hello works page</h1>
       <table class="table">
           <tr>
               <th>Name of exercise</th>
               <th>Wheigth</th>
               <th>Qty</th>
           </tr>
           <tr v-for="work_alias in works" v-bind:key='work_alias.exercise_name'>
               <th>{{work_alias.exercise_name}}</th>
               <th>{{work_alias.weight}}</th>
               <th>{{work_alias.qty}}</th>
           </tr>
       </table>
       <button @click="getData">Get data</button>
    </div>
    
</template>

<script>
/* eslint-disable */

import axios from 'axios';
export default {
    name: "Works",
    data(){
        return{
            works:null
        }

    },
 
     methods:{ 
        getData:function(){
         axios.get('http://localhost:3001/works')
            .then(res => {
                
                    this.works = res.data
                 
                
                
                
            })
             .catch(err => console.log(err))
         } 
    } 
     
  }
  

</script>

<style>
    .table {
        margin: 0 auto;
    }
</style>


