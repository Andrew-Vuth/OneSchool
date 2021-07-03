<template>
  <div class="posts">
    Recent Posts
    <div v-if="!$store.state.postLoading">
      <PostItem v-for="post in userPosts || []" :key="post._id" :post="post" />
    </div>
    <div class="loading-post" v-else>
      <!-- <img src="../../assets/loading_gif.gif" alt="loading" /> -->
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import PostItem from "../Post/PostItem.vue";
  export default {
    components: {
      PostItem,
    },
    computed: {
      ...mapState(["userPosts"]),
    },
    created() {
      console.log(this.userPosts);
    },
  };
</script>

<style scoped>
  .posts {
    height: 550px;
    /* overflow: hidden; */
    overflow: auto;
  }
</style>
