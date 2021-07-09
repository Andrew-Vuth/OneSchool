<template>
  <div>
    <p>Followers {{ " " }} ({{ targetUser.followers.length }})</p>
    <div class="container-fluid followers">
      <User
        class="row"
        v-for="(friend, i) in targetUser.followers"
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
    created() {
      this.$store.dispatch("getTargetUser", this.$route.params.username);
    },
    computed: {
      ...mapState(["user", "targetUser"]),
    },
  };
</script>

<style scoped>
  .followers {
    background: var(--surface-l1);
    border-radius: 5px;
    height: 400px;
    overflow: auto;
  }
</style>
