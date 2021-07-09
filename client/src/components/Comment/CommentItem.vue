<template>
  <div class="comment-wrapper">
    <div class="container-fluid comment-container">
      <div class="row d-flex flex-nowrap">
        <div class="image">
          <img
            alt="user-profile"
            class="user-profile"
            :src="src + comment.user.profileImage"
          />
        </div>
        <div class="col-11 user-details">
          <div class="details">
            <div class="user-info">
              <p>{{ comment.user.name }}</p>
              <p>@{{ comment.user.username }}</p>
            </div>
            <div class="col-6 d-flex justify-content-end">
              <p class="dayPosted">{{ dayCommented }}</p>
            </div>
          </div>

          <div class="comment-text">
            <p>
              {{ comment.comment_text }}
            </p>
          </div>
          <div v-if="comment.comment_image" class="comment-image d-block">
            <img
              :src="src_comment_image + comment.comment_image"
              alt="comment_image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import moment from "moment";
  export default {
    props: ["comment"],
    data() {
      return {
        src:
          this.comment.user.profileImage.includes("uploads\\") ||
          this.comment.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
        src_comment_image: "http://localhost:5000/",
      };
    },
    computed: {
      ...mapState(["user"]),
      dayCommented() {
        const date = moment(this.comment.date_created)
          .fromNow()
          .replace("a day ago", "1 day ago")
          .replace("a minute ago", "1 minute ago");
        return date;
      },
    },
  };
</script>

<style scoped>
  p {
    margin: 0;
  }

  .comment-container {
    width: auto;
    margin-left: 3em;
    border-radius: 10px;
    margin-top: 0.5em;
    margin-right: 0;
    padding: 1em;
    background: var(--surface-l2);
  }
  .row {
    padding: 0;
    margin: 0;
  }

  .user-profile {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    /* padding: 3px;
    border: 2px var(--one-school-primary) solid; */
    margin-right: 0.5em;
  }
  .user-info p:nth-child(2),
  .dayPosted {
    opacity: 0.5;
  }

  .user-details {
    padding: 0;
  }
  .details {
    display: flex;
    justify-content: space-between;
  }
  .details p,
  .comment-text p {
    font-size: 12px;
  }
  .user-info p:nth-child(2) {
    font-size: 11px;
  }
  .dayPosted {
    font-size: 10px;
  }
  .comment-text {
    margin-top: 1em;
    word-break: break-word;
  }
  .comment-image img {
    width: 350px;
    max-width: 100%;
  }
</style>
