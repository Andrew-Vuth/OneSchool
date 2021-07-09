<template>
  <div class="chat-partner">
    <img
      :src="
        (targetUser.profileImage.includes('uploads\\') ||
        targetUser.profileImage.includes('uploads/')
          ? 'http://localhost:5000/'
          : '') + targetUser.profileImage
      "
      alt="user-profile"
      class="user-image"
    />
    {{ targetUser.name }}
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    props: ["convo"],

    computed: {
      ...mapState(["user"]),
      targetUser() {
        return this.convo.members.find((member) => {
          return member._id !== this.user._id;
        });
      },
    },
  };
</script>

<style scoped>
  .chat-partner img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
</style>
