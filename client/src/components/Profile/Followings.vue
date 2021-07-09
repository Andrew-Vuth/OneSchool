<template>
  <div>
    <p>Followings {{ " " }} ({{ targetUser.followings.length }})</p>

    <div class="container-fluid followings">
      <User
        class="row"
        v-for="friend in followings"
        :key="friend._id"
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
      followings() {
        return this.targetUser.followings;
      },
    },
    // watch: {
    //   targetUser: {
    //     handler() {
    //       this.$store.dispatch("getTargetUser", this.$route.params.username);
    //     },
    //     deep: true,
    //   },
    // },
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
