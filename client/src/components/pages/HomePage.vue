<template>
  <div v-if="!$store.state.loading">
    <HomepageLayout>
      <div class="posts-container">
        <PostForm />
        <div v-if="!$store.state.postLoading">
          <PostItem
            v-for="post in allPosts || []"
            :key="post._id"
            :post="post"
          />
        </div>
        <div class="loading-post" v-else>
          <img src="../../assets/loading_gif.gif" alt="loading" />
        </div>
      </div>
    </HomepageLayout>
  </div>
  <div class="loading" v-else>
    <img src="../../assets/loading_gif.gif" alt="loading" />
  </div>
</template>

<script>
  import HomepageLayout from "../layouts/HomepageLayout";
  import PostForm from "../Post/PostForm";
  import PostItem from "../Post/PostItem.vue";
  import { mapState } from "vuex";
  export default {
    name: "HomePage",
    data() {},
    components: { HomepageLayout, PostForm, PostItem },

    created() {
      this.$store.dispatch("getUser");
    },
    computed: {
      ...mapState(["allPosts"]),
    },
    watch: {
      allPosts: {
        handler() {
          this.$store.commit("setPosting", false);
        },
        deep: true,
      },
    },
  };
</script>

<style scoped>
  .posts-container {
    background: var(--surface-l1);
    height: 85vh;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
  }
  .loading-post {
    /* position: absolute;
    top: 50%;
    right: 50%; */
    /* transform: translate(-50%, -50%); */
    margin-top: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading-post img {
    width: 40px;
  }

  @media screen and (max-width: 599px) {
    .posts-container {
      margin: 0;
    }
  }
</style>
