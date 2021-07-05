<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex align-items-center p-0 mt-1">
        <img
          :src="src + user.profileImage"
          alt=""
          class="user-profile img img-fluid"
        />
        <form class="comment-container w-100" @submit.prevent="onComment">
          <div class="form-group ">
            <input
              type="text"
              name="comment-text"
              id=""
              cols="30"
              rows="10"
              placeholder="Write your comments"
              v-model="comment_text"
            />
            <div class="upload-btn-container">
              <input
                type="file"
                name="post_image"
                class="uploadBtn"
                accept="image/*"
                @change="onFileSelected"
                ref=""
              />
              <img src="../../assets/image-gallery.png" alt="image" />
              <!-- <input type="button" value="Upload" class="fakeUpload" /> -->
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row ml-4 mt-1 mb-3">
      <div class="d-flex align-items-center" style="font-size: 12px">
        Attachment:
        <span class="imageText">{{ imageText }}</span>
        <button class="clearBtn" @click="clearImage" v-if="hasImage">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapState } from "vuex";
  export default {
    props: ["postId"],
    data() {
      return {
        imageText: "",
        comment_image: null,
        comment_text: "",
        hasImage: false,
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
        src_comment_image: "http://localhost:5000/",
      };
    },
    methods: {
      onFileSelected(e) {
        const file = e.target.files[0];
        this.hasImage = true;
        this.comment_image = file;
        this.imageText = file.name;
      },
      clearImage() {
        this.hasImage = false;
        this.imageText = "";
      },
      async onComment() {
        this.$store.commit("setCommenting", true);

        const commentFields = new FormData();
        const { comment_text, comment_image } = this;
        comment_text.replace(/(\r\n|\n|\r)/g, "");
        if (comment_text) commentFields.append("comment_text", comment_text);
        if (comment_image) commentFields.append("comment_image", comment_image);
        commentFields.append("post", this.postId);

        // @des: Add Comment
        try {
          await axios.post("/api/comment/", commentFields);
          this.$route.path.includes("/profile")
            ? this.$store.dispatch("getTargetUser", this.$route.params.username)
            : this.$store.dispatch("getAllPosts");
        } catch (error) {
          console.error(error);
        }
        this.imageText = "";
        this.comment_image = null;
        this.comment_text = "";
        this.hasImage = false;
      },
    },

    computed: {
      ...mapState(["user"]),
      canPost() {
        return this.comment_text !== "" || this.comment_image !== null;
      },
    },
  };
</script>

<style scoped>
  .comment-container {
    background: var(--surface-l3);
    border-radius: 10px;
    padding: 0.5em 1em;
  }
  .comment-container .form-group {
    display: flex;
    align-items: center;
  }
  .comment-container input[type="text"] {
    background: transparent;
    width: 100%;
    border: 0;
    outline: 0;
    color: #ffff;
    font-size: 12px;
    padding: 0;
    height: 30px;
  }
  .user-profile {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 3px;
    border: 2px var(--one-school-primary) solid;
    margin-right: 0.5em;
  }
  .uploadBtn {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .upload-btn-container {
    overflow: hidden;
    position: relative;
  }
  .upload-btn-container img {
    margin-right: 1em;
    width: 20px;
  }

  .clearBtn {
    background: transparent;
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    margin-left: 0.5em;
    color: #fff;
  }
  .clearBtn i {
    color: var(--one-school-primary);
  }
  .imageText {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.503);
    width: 100px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0.5em;
  }
</style>
