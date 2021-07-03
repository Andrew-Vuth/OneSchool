<template>
  <div class="post-wrapper">
    <div class="container-fluid post-container">
      <div class="row">
        <div class="col-6 user-details">
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
          <div
            :class="['post-btn', 'likeBtn', isLiked ? 'liked' : '']"
            @click="likePost"
          >
            <svg
              id="love"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              viewBox="0 0 29.772 30.405"
            >
              <path
                id="bg"
                data-name="Path 52"
                d="M29.507,0H10.93a5.6,5.6,0,0,0-5.6,5.6V17.782a5.6,5.6,0,0,0,5.6,5.6H13.6a.23.23,0,0,1,.23.23v6.01a.784.784,0,0,0,1.356.537l6.306-6.7a.23.23,0,0,1,.167-.072h7.852a5.6,5.6,0,0,0,5.6-5.6V5.6A5.6,5.6,0,0,0,29.507,0Z"
                transform="translate(-5.332)"
                fill="#ffff"
              />
              <path
                id="bg-shadow"
                data-name="Path 53"
                d="M16.18,32.91a.233.233,0,0,0-.222-.242H13.377a5.672,5.672,0,0,1-5.419-5.894V13.943a6.387,6.387,0,0,1,.2-1.59,5.6,5.6,0,0,0-2.825,4.864V29.4a5.6,5.6,0,0,0,5.6,5.6H13.6a.23.23,0,0,1,.23.23v6.01a.784.784,0,0,0,1.356.537l1-1.062v-7.8Z"
                transform="translate(-5.332 -11.619)"
                fill="#e63950"
              />
              <path
                id="bg-shadow1"
                data-name="Path 54"
                d="M145.786,105.443h0a3.639,3.639,0,0,0-5.147,0l-.8.8a.49.49,0,0,1-.693,0l-.79-.79a3.639,3.639,0,0,0-5.147,0h0a3.639,3.639,0,0,0,0,5.147l5.937,5.937a.49.49,0,0,0,.693,0l5.949-5.95A3.639,3.639,0,0,0,145.786,105.443Z"
                transform="translate(-124.61 -98.178)"
                fill="#ec5569"
              />
              <path
                id="shape"
                data-name="Path 55"
                d="M145.786,105.443h0a3.639,3.639,0,0,0-5.147,0l-.8.8a.49.49,0,0,1-.693,0l-.79-.79a3.639,3.639,0,0,0-5.147,0h0a3.639,3.639,0,0,0,0,5.147l5.937,5.937a.49.49,0,0,0,.693,0l5.949-5.95A3.639,3.639,0,0,0,145.786,105.443Z"
                transform="translate(-124.61 -98.178)"
                fill="#ec5569"
              />
              <path
                id="shape-shadow"
                data-name="Path 56"
                d="M135.111,110.819a3.639,3.639,0,0,1,0-5.147h0a3.621,3.621,0,0,1,1.621-.939,3.637,3.637,0,0,0-3.525.939h0a3.639,3.639,0,0,0,0,5.147l5.937,5.937a.49.49,0,0,0,.693,0l.605-.605Z"
                transform="translate(-124.611 -98.395)"
                fill="#ec5569"
              />
            </svg>

            Like
          </div>
          <div class="cmtBtn post-btn" @click="showComments">
            <svg
              id="comment"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="27"
              viewBox="0 0 29.967 27.57"
            >
              <path
                id="Path_57"
                data-name="Path 57"
                d="M25.848-1.332H4.121A4.124,4.124,0,0,0,0,2.788v13.3A4.125,4.125,0,0,0,4.106,20.2v6.034L12.777,20.2H25.848a4.125,4.125,0,0,0,4.12-4.12V2.788a4.124,4.124,0,0,0-4.12-4.12Zm2.364,17.417a2.367,2.367,0,0,1-2.364,2.364H12.226L5.862,22.877V18.449H4.121a2.367,2.367,0,0,1-2.364-2.364V2.788A2.367,2.367,0,0,1,4.121.424H25.848a2.367,2.367,0,0,1,2.364,2.364Zm0,0"
                transform="translate(-0.001 1.332)"
                fill="#bb86fc"
              />
              <path
                id="Path_58"
                data-name="Path 58"
                d="M171.293,131.172h13.926v1.756H171.293Zm0,0"
                transform="translate(-163.272 -124.968)"
                fill="#bb86fc"
              />
              <path
                id="Path_59"
                data-name="Path 59"
                d="M171.293,211.172h13.926v1.756H171.293Zm0,0"
                transform="translate(-163.272 -201.222)"
                fill="#bb86fc"
              />
              <path
                id="Path_60"
                data-name="Path 60"
                d="M171.293,291.172h13.926v1.756H171.293Zm0,0"
                transform="translate(-163.272 -277.476)"
                fill="#bb86fc"
              />
            </svg>
            Comment
          </div>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <p class="like">{{ postLikes }} Likes</p>
        </div>
      </div>
    </div>
    <div v-if="isShowComment">
      <CommentItem
        v-for="comment in post.comments"
        :key="comment._id"
        :comment="comment"
      />
      <CommentForm :postId="post._id" />
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  import { mapState } from "vuex";
  import axios from "axios";
  import CommentForm from "../Comment/CommentForm.vue";
  import CommentItem from "../Comment/CommentItem.vue";
  export default {
    name: "PostItem",
    components: {
      CommentForm,
      CommentItem,
    },
    props: {
      post: { type: Object },
    },
    data() {
      return {
        src:
          this.post.user.profileImage.includes("uploads\\") ||
          this.post.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
        src_post_image: "http://localhost:5000/",
        postLikes: this.post.likedBy.length,
        isLiked: false,
        isShowComment: false,
      };
    },

    computed: {
      ...mapState(["user"]),

      dayPosted() {
        const date = moment(this.post.date_created)
          .fromNow()
          .replace("a day ago", "1 day ago")
          .replace("a minute ago", "1 minute ago");
        return date;
      },
    },
    methods: {
      // @des: Like/Unlike Post
      async likePost() {
        await axios.put(`/api/post/${this.post._id}/like`);

        if (this.isLiked) {
          this.postLikes === 0 ? (this.postLikes = 0) : this.postLikes--;
          this.isLiked = !this.isLiked;
        } else {
          this.postLikes++;
          this.isLiked = !this.isLiked;
        }
      },
      showComments() {
        console.log(this.isShowComment);
        this.isShowComment = !this.isShowComment;
        console.log(this.isShowComment);
      },
    },
    created() {
      if (this.post.likedBy.includes(this.user._id)) {
        this.isLiked = true;
      }
    },
  };
</script>

<style scoped>
  p {
    margin: 0;
  }
  .post-container {
    border-radius: 10px;
    margin-top: 1em;
    background: var(--surface-l2);
  }
  .post-container .row:not(:nth-child(2)) {
    padding: 1em;
  }
  .post-container .row:nth-child(2) {
    padding: 0 1em 1.25em 1em;
  }
  .user-details {
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
    display: flex;
    align-items: center;
    gap: 0.5em;
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
  .likeBtn svg path {
    transition: fill 200ms ease-in-out;
  }
  .likeBtn.liked svg #bg {
    fill: #ec5569;
  }
  .likeBtn.liked svg #bg-shadow {
    fill: #e63950;
  }
  .likeBtn.liked svg #bg-shadow1 {
    fill: #ec5569;
  }
  .likeBtn.liked svg #shape {
    fill: #fff5f5;
  }
  .likeBtn.liked svg #shape-shadow {
    fill: #dce6eb;
  }
</style>
