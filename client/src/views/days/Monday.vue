<template>
    <div class="main">
        <h1>Hello Monday</h1>
        <h4>Leg`s day</h4>
        <input @click="inpClick" type="button" value="Create" id="btn">
        <input @click="visible=!visible" type="button" value="Add">

        <div v-if="visible">
            <Select/>
        </div>
    </div>

</template>



<script>
/* eslint-disable */
import Select from '@/components/Select.vue'

export default {
    components:{
       Select
    },
    data(){
        return{
            visible: false,

        }
    },
    methods:{
        inpClick(){
            console.log("Hello")
        },
        inpAdd(){

        }
    }
}
</script>

<style>
    #btn {
        width: 80px;

    }
    select{
        width: 100px;
    }
</style>
