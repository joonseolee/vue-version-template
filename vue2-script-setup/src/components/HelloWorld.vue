<template>
  <div class="hello">
    <h1>{{ propsData.msg }}</h1>
    <button type="button" @click="increment">count is {{ state.count }}</button>
    <div>refValue.value -> {{ refValue }}</div>
    <div>refAddress.value -> {{ refAddress }}</div>
    <div>refUser.value -> {{ refUser }}</div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/composition-api";

const propsData = defineProps({ msg: String });

const state = reactive({ count: 0, address: '선택!' });
const refValue = ref(0);
const refAddress = ref('선택하라우..');
const refUser = ref({ id: 0, name: '', age: 5 });

const increment = (): void => {
  state.count++;
  refValue.value++;
  state.address = '수원!';
  refAddress.value = '수원!!!';
  refUser.value.name = '이준서수정함..';
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
