<template>
  <div style="position: relative; height: 100%;">
    <HomepageNav />
    <slot />
    <transition name="slide-fade">
      <ProfileEdit v-if="$store.state.isEdit" />
    </transition>
  </div>
</template>

<script>
  import HomepageNav from "../partials/HomepageNav";
  import ProfileEdit from "../partials/ProfileEdit";

  export default {
    components: {
      HomepageNav,
      ProfileEdit,
    },
  };
</script>

<style></style>
