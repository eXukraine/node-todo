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
               <th>{{work_alias.name}}</th>
               <th>{{work_alias.surname}}</th>
               <!-- <th>{{work_alias.qty}}</th> -->
           </tr>
       </table>
    </div>
    
</template>

<script>
/* eslint-disable */

import axios from 'axios';
export default {
    name: "Works",
    data(){
        return{
            works:[
                {name: 'Alexei',
                surname: 'Yamlovoi'}
            ]
        }
    },
    // mounted(){
    //     axios.get('http://localhost:3001/works/all')
    //         .then(res => {
    //             this.works = res.data
    //         })
    //         .catch(err => res.send(err))
    // }
  }

</script>

<style>
    .table {
        margin: 0 auto;
    }
</style>


