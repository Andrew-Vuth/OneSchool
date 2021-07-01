<template>
  <div>
    <div style="position: relative; height: 100%;">
      <HomepageNav />
      <slot />
    </div>
    <transition name="slide-fade">
      <ProfileEdit v-if="$store.state.isEdit" />
    </transition>
    <transition name="slide-fade-right">
      <SmallModal v-if="$store.state.posting" />
    </transition>
  </div>
</template>

<script>
  import HomepageNav from "../partials/HomepageNav";
  import ProfileEdit from "../partials/ProfileEdit";
  import SmallModal from "../modal/SmallModal";

  export default {
    components: {
      HomepageNav,
      ProfileEdit,
      SmallModal,
    },
    created() {},
  };
</script>

<style></style>
