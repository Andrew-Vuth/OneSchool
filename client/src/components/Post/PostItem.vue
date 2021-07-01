<template>
  <div class="container-fluid post-wrapper">
    <div class="row">
      <div class="col-6 user">
        <img
          :src="src + post.user.profileImage"
          alt="user-profile"
          class="user-profile"
        />
        <div class="user-info">
          <p>{{ post.user.name }}</p>
          <p>@{{ post.user.username }}</p>
        </div>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <p class="dayPosted">
          {{ dayPosted }}
        </p>
      </div>
    </div>
    <div class="row d-flex flex-column">
      <div class="post-text">
        <p>
          {{ post.post_text }}
        </p>
      </div>
      <div v-if="post.post_image" class="post-image d-block">
        <img :src="src + post.post_image" alt="post_image" loading="lazy" />
      </div>
    </div>
    <div class="row">
      <div class="col-6 btn-container">
        <div class="likeBtn post-btn" @click="like">
          <i :class="[postLike ? 'fas liked' : 'far', 'fa-heart']"></i> Like
        </div>
        <div class="cmtBtn post-btn">
          <i class="far fa-comment-alt"></i> Comment
        </div>
      </div>
      <div class="col-6 d-flex justify-content-end">
        <p class="like">{{ post.likedBy.length }} Likes</p>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    name: "PostItem",
    props: {
      post: { type: Object },
    },
    data() {
      return {
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
        src_post_image: "http://localhost:5000/",
        postLike: false,
      };
    },

    computed: {
      dayPosted() {
        const date = moment(this.post.date_created)
          .fromNow()
          .replace("a day ago", "1 day ago")
          .replace("a minute ago", "1 minute ago");
        return date;
      },
    },
    methods: {
      like() {
        this.postLike = !this.postLike;
      },
    },
  };
</script>

<style scoped>
  p {
    margin: 0;
  }
  .post-wrapper {
    border-radius: 5px;
    margin-top: 1em;
    background: var(--surface-l2);
  }
  .post-wrapper .row:not(:nth-child(2)) {
    padding: 1em;
  }
  .post-wrapper .row:nth-child(2) {
    padding: 0 1em 1.25em 1em;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .user-info p:nth-child(2),
  .dayPosted {
    opacity: 0.5;
    font-size: 13px;
  }
  .dayPosted {
    font-size: 12px;
  }

  .user-profile {
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .post-text {
    word-break: break-word;
  }

  .post-image {
    margin-top: 1em;
  }
  .post-image img {
    width: 450px;
    max-width: 100%;
  }
  .like {
    font-size: 12px;
    opacity: 0.5;
  }
  .btn-container {
    display: flex;
    padding: 0;
  }
  .post-btn {
    cursor: pointer;
    font-size: 13px;
  }
  .post-btn i {
    margin-right: 0.2em;
    font-size: 16px;
  }
  .post-btn {
    margin-right: 0.8em;
  }
  .likeBtn {
    transition: 0.2s ease-in-out;
  }
  .likeBtn i.liked {
    color: #d83a56;
  }
</style>
