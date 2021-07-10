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
  setChatLoading(state, value) {
    state.chatLoading = value;
  },
  setConversationLoading(state, value) {
    state.conversationLoading = value;
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
  setSelectedUser(state, user) {
    state.selectedUser = user;
  },
  setNewChatUser(state, user) {
    state.newChatUser = user;
  },
  setUsers(state, users) {
    state.users = users;
  },
  unfollowUser(state, username) {
    state.targetUser = {
      ...state.targetUser,
      followings: state.targetUser.followings.filter((following) => {
        return following.username !== username;
      }),
    };

    state.selectedUser = {
      ...state.selectedUser,
      followers: state.selectedUser.followers.filter((follower) => {
        return follower.username !== state.targetUser.username;
      }),
    };
  },
  removeFollower(state, username) {
    state.targetUser = {
      ...state.targetUser,
      followers: state.targetUser.followers.filter((following) => {
        return following.username !== username;
      }),
    };

    state.selectedUser = {
      ...state.selectedUser,
      followings: state.selectedUser.followings.filter((follower) => {
        return follower.username !== state.targetUser.username;
      }),
    };
  },
  setTargetUserFollowings(state, followings) {
    state.targetUser = { ...state.targetUser, followings };
  },
  setTargetUserFollowers(state, followers) {
    state.targetUser = { ...state.targetUser, followers };
  },
  // setUserFollowings(state, followings) {
  //   state.user = { ...state.user, followings };
  // },
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
  setCurrentChatUser(state, value) {
    state.currentChatUser = value;
  },
  setConversations(state, value) {
    state.conversations = value;
  },
  addConversation(state, value) {
    state.conversations.push(value);
  },
  setCurrentMessages(state, value) {
    state.currentMessages = value;
  },
  addMessage(state, value) {
    state.currentMessages.push(value);
  },
};
