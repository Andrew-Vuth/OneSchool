<template>
  <div v-if="!$store.state.loading">
    <ProfileLayout>
      <div>
        Hello World
      </div>
    </ProfileLayout>
  </div>
  <div v-else>
    Loading.....
  </div>
</template>

<script>
  import ProfileLayout from "../layouts/ProfileLayout";
  export default {
    components: {
      ProfileLayout,
    },
    mounted() {
      document.title = "Profile";
    },
    created() {
      this.$store.dispatch("getUser");
      this.$store.dispatch("getTargetUser", this.$route.params.id);
    },
  };
</script>

<style></style>
