import Vue from "vue";
import Vuex from "vuex";
import { UPDATE_USER_LIST, UPDATE_SELECTED_USER, CREATE_USER } from './mutationtypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
    selectedUser: null,
  },
  mutations: {
    [UPDATE_USER_LIST](state, payload){
      state.userList = payload.list;
    },
    [UPDATE_SELECTED_USER](state, payload){
      state.selectedUser = payload.user;
    },
    [CREATE_USER](state, payload){
      state.userList.push(payload.user);
    }
  },
  actions: {}
});
