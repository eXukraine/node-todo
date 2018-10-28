<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Выбирите день недели</h4>
      <router-link class="rl" to="Monday">Понедельник</router-link>
      <router-link class="rl" to="Wensday">Среда</router-link>
      <router-link class="rl" to="Friday">Пятница</router-link>
  </div>
</template>

<style scoped>
 .rl{
   margin: 10px;
   color: #000;
   text-decoration: none;
 }
</style>
