<template>
  <div>
    <div class="friend">
      <a :href="'/profile/' + friend.username + '/posts'" class="user-details">
        <div class="userImage">
          <img
            :src="
              (friend.profileImage.includes('uploads\\') ||
              friend.profileImage.includes('uploads/')
                ? 'http://localhost:5000/'
                : '') + friend.profileImage
            "
            alt="user-profile"
          />
        </div>
        <div class="userInfo">
          <p>{{ friend.name }}</p>
          <p>@{{ friend.username }}</p>
        </div>
      </a>

      <div class="btn-container" v-if="ownProfile">
        <div class="btn" v-if="$route.path.includes('/followings')">
          Unfollow
        </div>
        <div class="btn" v-if="$route.path.includes('/followers')">Remove</div>
        <div class="btn msg-btn">Message</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    props: ["friend"],
    computed: {
      ...mapState(["user"]),
      ownProfile() {
        return this.user.username == this.$route.params.username;
      },
    },
  };
</script>

<style scoped>
  .friend {
    width: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .friend p {
    margin: 0;
  }
  .user-details {
    gap: 1em;
    display: flex;
  }
  .btn-container {
    display: flex;
  }
  .btn-container .btn {
    font-size: 12px;
  }
  .msg-btn {
    background: var(--one-school-alt);
  }
  .userImage img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  .userInfo p:nth-child(2) {
    opacity: 0.5;
    font-size: 12px;
  }
</style>
