<template>
  <div>
    <div style="position: relative; height: 100%;">
      <HomepageNav />
      <slot />
    </div>
    <transition name="slide-fade">
      <ProfileEdit v-if="$store.state.isEdit" />
    </transition>
    <transition name="slide-fade">
      <AlertModal v-if="$store.state.alerts[0].isShown" />
    </transition>
    <transition name="slide-fade-right">
      <SmallModal v-if="$store.state.posting" msg="Posting..." />
    </transition>
    <transition name="slide-fade-right">
      <SmallModal v-if="$store.state.commenting" msg="Commenting..." />
    </transition>
  </div>
</template>

<script>
  import HomepageNav from "../partials/HomepageNav";
  import ProfileEdit from "../partials/ProfileEdit";
  import SmallModal from "../modal/SmallModal";
  import AlertModal from "../modal/AlertModal";

  export default {
    components: {
      HomepageNav,
      ProfileEdit,
      SmallModal,
      AlertModal,
    },
    created() {},
  };
</script>

<style></style>
