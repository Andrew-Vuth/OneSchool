import axios from "axios";
import router from "../router/router";
import setAuthToken from "../utils/setAuthToken";
export const actions = {
  // @des: Load User
  async getUser({ commit }) {
    // If there's a token, then set the token to header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth/", {});
      commit("setUser", res.data.user);
      commit("isAuth");
    } catch (error) {
      console.error(error.response);
    }

    this.dispatch("getAllPosts");
    commit("isNotLoading");
  },
  // @des: Load Target User
  async getTargetUser({ commit }, username) {
    try {
      const res = await axios.get(`/api/auth/${username}`);
      commit("setTargetUser", res.data.user);
    } catch (error) {
      console.error(error.response);
    }

    this.dispatch("getUserPosts", this.state.targetUser._id);
    commit("setProfileLoading", false);
  },
  // @des: Load Searched User
  async getSearchedUsers({ commit }, query) {
    // If there's a token, then set the token to header
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`/api/users`, { query }, config);
      console.log(res.data.users);
      if (res.data.users.length === 0) {
        commit("setUsers", []);
        console.log("user is 0: " + res.data.users);
        commit("setErrorMsg", "search any user");
      } else {
        commit("setErrorMsg", null);
        commit("setUsers", res.data.users);
      }
    } catch (error) {
      // console.error(error.response);
      commit("setErrorMsg", error.response.data.msg);
    }
  },
  // @desc: Testing if user can access to data
  async canAccess() {
    try {
      if (!localStorage.token) {
        return false;
      }
      const res = await axios.get("/api/auth/");
      if (res) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error.response);
    }
  },

  // @des: Login User
  async login({ commit }, formData) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth/", formData, config);

      // Setting Token onto Local Storage
      localStorage.setItem("token", res.data.token);
      commit("isAuth");
      commit("isNotLoading");

      // Calling getUser to load user after login
      this.dispatch("getUser");
      router.push("/homepage");
    } catch (error) {
      console.error(error.response.data);
    }
  },

  // @des: Register User
  async register({ commit }, formData) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/register/", formData, config);

      // Setting Token onto Local Storage
      localStorage.setItem("token", res.data.token);
      commit("isAuth");
      commit("isNotLoading");

      // Calling getUser to load user after registering
      this.dispatch("getUser");
      router.push("/homepage");
    } catch (error) {
      console.error(error.response.data);
    }
  },
  logout({ commit }) {
    localStorage.removeItem("token");
    commit("isNotAuth");
    commit("setUser", null);
    commit("seter", null);
    commit("setOpenMenu", false);
    commit("setIsEdit", false);
    commit("setAllPosts", []);
    commit("setUserPosts", []);
    router.push("/");
  },
  // @des: Edit Profile
  async editProfile({ commit }, formData) {
    try {
      const res = await axios.put(
        `/api/profile/${this.state.user._id}`,
        formData
      );
      commit("setUser", res.data.user);
    } catch (error) {
      console.error(error.response.data);
    }
  },

  // @des: Follow User
  async followUser({ commit }, username) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/friends/following", username, config);
      commit("setUser", res.data.currentUser);
    } catch (error) {
      console.error(error.response.data);
    }
  },
  // @des: Unfollow User
  async unfollowUser({ commit }, username) {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put("/api/friends/unfollow", username, config);
      commit("setUser", res.data.currentUser);
    } catch (error) {
      console.error(error.response.data);
    }
  },

  // @des: Get All Posts
  async getAllPosts({ commit }) {
    try {
      const res = await axios.get("/api/post");
      commit("setAllPosts", res.data.posts);
      commit("setPostLoading", false);
    } catch (error) {
      console.error(error.response.data);
    }
  },
  // @des: Get All Posts
  async getUserPosts({ commit }, userId) {
    try {
      const res = await axios.get(`/api/post/${userId}`);
      commit("setUserPosts", res.data.posts);
      console.log(this.state.userPosts);
    } catch (error) {
      console.error(error.response.data);
    }
    commit("setPostLoading", false);
  },
  // // @des: Get Comments
  // async getComments({commit}, postId){
  //   try {
  //     const res = await
  //   } catch (error) {

  //   }
  // }
};
