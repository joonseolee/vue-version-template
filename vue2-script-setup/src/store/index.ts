import Vue from "vue";
import Vuex, { Module } from "vuex";
import memberStore from './member';

Vue.use(Vuex);

const store: Module<any, any> = {
  modules: {
    memberStore,
  }
}

export default new Vuex.Store(store);
