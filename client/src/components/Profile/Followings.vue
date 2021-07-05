<template>
  <div>
    <p>Followings {{ " " }} ({{ targetUser.followings.length }})</p>
    <div class="container-fluid followings">
      <User
        class="row"
        v-for="(friend, i) in targetUser.followings"
        :key="i"
        :friend="friend"
      />
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import User from "./User.vue";
  export default {
    components: {
      User,
    },
    computed: {
      ...mapState(["user", "targetUser"]),
    },
  };
</script>

<style scoped>
  .followings {
    background: var(--surface-l1);
    border-radius: 5px;
    height: 400px;
    overflow: auto;
  }
</style>
