<template>
  <div>
    <b-form-select v-model="selected" :options="exercises" class="mb-3" />
    <form action="/programs" method="post">
      <div>Selected: <strong>{{ selected }}</strong></div>
              <table>
              <tr>
                  <th>Name exercise</th>
              </tr>
              <tr  v-for="progra in program" :key="progra._id">
                  <th> {{program.value}} </th>
              </tr>
          </table>
      <button @click="addArray">Save</button>
    </form>
    </div>
</template>

<script>

/* eslint-disable */

import axios from "axios";
import { mapState } from 'vuex';

export default {

  name: "Exercise",
        mounted () {
            this.$store.dispatch('loadExercises'),
            this.$store.dispatch('createProgram')
         },
        computed: mapState([
            'exercises',
            'program'
        ]),


  data () {
    return {
      selected: null,
      // programs: []
      // options: [
      //   { value: null, text: 'Please select an option' },
      //   { value: 'a' },
      //   { value: 'b', text: 'Selected Option' },
      //   { value: {'C': '3PO'}, text: 'This is an option with object value' },
      //   { value: 'd', text: 'This one is disabled', disabled: true }
      // ]
    }
  },
  methods:{
    addArray(){
      this.program.push(this.selected)
      console.log(this.program)
    }
  }
}
</script>