<script setup lang="ts">
import { reactive } from "vue";

const propsData = defineProps<{ msg: string }>();

const state = reactive({ count: 0 });

const increment = (): void => {
  state.count++;
};
</script>

<template>
  <h1>{{ propsData.msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ state.count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
