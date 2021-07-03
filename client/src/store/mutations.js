export const mutations = {
  isAuth(state) {
    state.isAuthenticated = true;
  },
  isNotAuth(state) {
    state.isAuthenticated = false;
  },
  isLoading(state) {
    state.loading = true;
  },
  isNotLoading(state) {
    state.loading = false;
  },
  setPostLoading(state, value) {
    state.postLoading = value;
  },
  setPosting(state, value) {
    state.posting = value;
  },
  setCommenting(state, value) {
    state.commenting = value;
  },
  setUser(state, user) {
    state.user = user;
  },
  setTargetUser(state, user) {
    state.targetUser = user;
  },
  setUsers(state, users) {
    state.users = users;
  },
  setAllPosts(state, posts) {
    state.allPosts = posts;
  },
  setUserPosts(state, posts) {
    state.userPosts = posts;
  },
  addPost(state, post) {
    state.allPosts.unshift(post);
  },
  setIsEdit(state, value) {
    state.isEdit = value;
  },
  setOpenMenu(state, value) {
    state.openMenu = value;
  },
  setOpenSearch(state, value) {
    state.openSearch = value;
  },
  setErrorMsg(state, msg) {
    state.errorMsg = msg;
  },
  setProfileLoading(state, value) {
    state.profileLoading = value;
  },
};
