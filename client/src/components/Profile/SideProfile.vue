<template>
  <div class="container-fluid sideProfile-wrapper">
    <div class="row text-md-center">
      <div class="col-4 col-md-12" style="position: relativ;">
        <img
          :src="src + user.profileImage"
          alt="profile"
          class="img-fluid profileImage"
        />
        <button v-if="ownProfile" class="btn ghost-btn cta-btn">
          Edit Profile
        </button>
        <button v-else class="btn one-school-btn cta-btn">
          <i class="fa fa-plus" style="margin-right: 0.2em"></i>
          Follow
        </button>
      </div>
      <div class="col-8 col-md-12 name">
        <h4>{{ user.name }}</h4>
        <p>@{{ user.username }}</p>
      </div>
    </div>
    <div class="row info">
      <div class="col-12">
        <p>
          Bio :
        </p>
        <p>
          {{ user.bio }}
        </p>
      </div>
    </div>
    <div class="row info">
      <div class="col-12">
        <p>
          Major :
        </p>
        <p>
          {{ user.major }}
        </p>
      </div>
    </div>
    <div class="row info">
      <div class="col-12">
        <p>
          Interests :
        </p>
        <p>
          {{ user.interests }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    data() {
      return {
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
      };
    },
    computed: {
      ...mapState(["user"]),
      ownProfile() {
        return this.user._id == this.$route.params.id;
      },
    },
  };
</script>

<style scoped>
  .sideProfile-wrapper {
    padding: 1.5em;
    background: var(--surface-l1);
    border-radius: 10px;
  }
  .sideProfile-wrapper p {
    margin: 0;
    font-size: 14px;
  }
  .profileImage {
    border-radius: 50%;
    object-fit: cover;
    width: 16vw;
    height: 16vw;
    min-width: 80px;
    min-height: 80px;
  }
  .cta-btn {
    position: absolute;
    font-size: 12px;
    bottom: 10px;
    right: 5%;
  }
  .cta-btn:hover {
    background: #6e6e6e;
  }
  .one-school-btn.cta-btn:hover {
    background: var(--one-school-secondary);
  }
  .name {
    margin-top: 1em;
    margin-bottom: 1.5em;
  }
  .name h4 {
    font-weight: 600;
    margin: 0;
  }
  .name p {
    opacity: 0.5;
  }
  .info .col-12 p:first-child {
    font-weight: 600;
    margin-bottom: 0.1em;
  }
  .info {
    padding: 0 1em;
    margin-bottom: 1em;
  }
  .info p {
    word-break: keep-all;
  }
</style>
