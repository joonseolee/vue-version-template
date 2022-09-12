<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="message" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapGetters } from "vuex";
import { memberStore } from '@/store/member';

const message = "This is the message.";
const { getName } = mapGetters('memberStore', ['getName']);
debugger;
console.log(`test -> ${getName()}`);

// const storedName = store.getters.memberStore.getName();
// console.log(`storedName -> ${storedName}`);
// console.dir(storedName);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
