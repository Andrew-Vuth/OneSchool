import { createStore } from "vuex";

import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: {
    followings() {
      return state.targetUser.followings;
    },
  },
  modules: {},
});

export default store;
