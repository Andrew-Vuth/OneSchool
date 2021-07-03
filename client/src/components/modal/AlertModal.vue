<template>
  <div class="alert-modal-wrapper">
    <div class="alert-modal">
      <p>Are you sure to unfollow this user?</p>
      <div class="cta-btn">
        <button class="btn ghost-btn " @click="cancel">No, Keep it</button>
        <button class="btn danger" @click="unfollow">Yes, Unfollow</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    methods: {
      unfollow() {
        this.$store.dispatch("unfollowUser", {
          username: this.$route.params.username,
        });
        this.alerts.forEach((alert) => {
          if (alert.type === "UNFOLLOW") alert.isShown = false;
        });
      },
      cancel() {
        this.alerts.forEach((alert) => {
          if (alert.type === "UNFOLLOW") alert.isShown = false;
        });
      },
    },
    computed: {
      ...mapState(["alerts"]),
    },
  };
</script>

<style scoped>
  .alert-modal-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00000058;
  }
  .alert-modal {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 2.2em 1.8em;
    width: max-content;
    background: var(--surface-l3);
    border-radius: 10px;
    z-index: 10;
  }
  .cta-btn {
    margin-top: 2em;
    display: flex;
    justify-content: flex-end;
    gap: 0.5em;
  }
  .btn {
    font-size: 12px;
  }
</style>
