<template>
  <div>
    <div class="container-label">
      <h6>Direct Message</h6>
      <button>
        <img src="../../assets/laugh.png" />
      </button>
    </div>
    <div class="container-fluid followings">
      <div
        class="row"
        v-for="(following, i) in user.followings.slice(0, 3)"
        :key="i"
      >
        <a
          class="following"
          :href="'/profile/' + following.username + '/posts'"
        >
          <div class="userImage">
            <img
              :src="
                (following.profileImage.includes('uploads\\') ||
                following.profileImage.includes('uploads/')
                  ? 'http://localhost:5000/'
                  : '') + following.profileImage
              "
              alt="user-profile"
            />
            <span>{{ following.name }}</span>
          </div>
        </a>
      </div>
      <a href="#">
        <div class="float-right">See All</div>
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState(["user"]),
    },
  };
</script>

<style scoped>
  .container-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 1.5em 0.8em 1.5em;
    border-radius: 10px 10px 0 0;
    background: var(--surface-l3);
  }
  .container-label h6 {
    margin: 0;
  }
  .container-label button {
    border: 0;
    background: transparent;
  }
  .following {
    width: 100%;
    padding: 0.75em 1em;
  }
  .following:hover {
    background: var(--surface-l2);
  }
  .userImage img {
    margin-right: 1.5em;
    border-radius: 50%;
    width: 40px;
  }
</style>
