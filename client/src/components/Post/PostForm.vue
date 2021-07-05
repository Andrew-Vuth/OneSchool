<template>
  <div class="postForm-wrapper">
    <form @submit.prevent="onPost">
      <div class="form-group">
        <textarea
          name="post-text"
          cols="30"
          rows="10"
          class="from-control"
          placeholder="Share your thoughts, needs, inspiration here...."
          v-model="post_text"
          @keyup.enter="onPost"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-4 d-flex align-items-center">
            Attachment:
            <span class="imageText">{{ imageText }}</span>
            <button class="clearBtn" @click="clearImage" v-if="hasImage">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          <div class="col-sm-8 d-flex justify-content-end">
            <div class="cta-btn">
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
                <input type="button" value="Upload" class="fakeUpload" />
              </div>
              <input
                class="btn post-btn"
                type="submit"
                value="Post"
                :disabled="!canPost"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        imageText: "",
        post_image: null,
        post_text: "",
        hasImage: false,
      };
    },
    methods: {
      onFileSelected(e) {
        const file = e.target.files[0];
        this.hasImage = true;
        this.post_image = file;
        this.imageText = file.name;
      },
      clearImage() {
        this.hasImage = false;
        this.imageText = "";
      },
      async onPost() {
        this.$store.commit("setPosting", true);

        const postFields = new FormData();
        const { post_text, post_image } = this;

        if (post_text) postFields.append("post_text", post_text);
        if (post_image) postFields.append("post_image", post_image);

        // @des: Add Post
        try {
          await axios.post("/api/post/", postFields);
          this.$store.dispatch("getAllPosts");
        } catch (error) {
          console.error(error);
        }
        this.imageText = "";
        this.post_image = null;
        this.post_text = "";
        this.hasImage = false;
      },
    },
    computed: {
      canPost() {
        return this.post_text !== "" || this.post_image !== null;
      },
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
  .postForm-wrapper {
    background: var(--surface-l2);
    border-radius: 10px;
    padding: 1em 1.5em 0.5em 1.5em;
  }
  .form-group {
    margin-bottom: 0.5em;
  }
  .postForm-wrapper textarea {
    background: transparent;
    border: 0;
    outline: 0;
    color: #ffff;
    font-size: 14px;
    border-bottom: 1px solid;
    padding: 0;
    height: 70px;
  }
  .postForm-wrapper .form-group:nth-child(2) {
    font-size: 13px;
  }
  .post-btn {
    color: #fff;
    font-size: 14px;
    padding: 0.5em 1.2em;
    background: var(--surface-l3);
  }
  .post-btn:hover {
    background: #627d988d;
  }
  .post-btn:disabled {
    cursor: auto;
    pointer-events: none;
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
  .cta-btn {
    display: flex;
    align-items: center;
  }
  .form-group .fakeUpload {
    background: transparent;
  }
  .imageText {
    color: rgba(255, 255, 255, 0.503);
    width: 100px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0.5em;
  }
</style>
