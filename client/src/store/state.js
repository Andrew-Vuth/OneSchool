export const state = {
  isAuthenticated: false,
  loading: true,
  postLoading: true,
  profileLoading: true,
  posting: false,
  commenting: false,
  user: null,
  targetUser: null,
  userPosts: [],
  allPosts: [],
  users: [],
  token: localStorage.getItem("token"),
  isEdit: false,
  openMenu: false,
  openSearch: false,
  errorMsg: null,
  //test
  alerts: [
    {
      type: "UNFOLLOW",
      isShown: false,
      text: "Do you want to unfollow this user?",
    },
  ],
};
