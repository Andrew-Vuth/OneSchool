<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex align-items-center p-0 mt-1">
        <img
          src="data:image/jpeg;base64,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"
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
        console.log(comment_text);
        if (comment_text) commentFields.append("comment_text", comment_text);
        if (comment_image) commentFields.append("comment_image", comment_image);
        commentFields.append("post", this.postId);

        // @des: Add Comment
        try {
          await axios.post("/api/comment/", commentFields);
          this.$store.dispatch("getAllPosts");
        } catch (error) {
          console.error(error);
        }
        this.imageText = "";
        this.comment_image = null;
        this.comment_text = "";
        this.hasImage = false;
      },
    },
    created() {
      console.log(this.$props.postId);
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
