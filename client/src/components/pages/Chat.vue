<template>
  <div v-if="!$store.state.chatLoading">
    <TemplateLayout>
      <div class="container-fluid chat-wrapper">
        <div class="row">
          <div class="col-md-3">
            <SideBar />
          </div>
          <div class="col-md-8 convo p-0">
            <h4
              class="text-secondary alert-text"
              v-if="!$route.params.conversationId && !newChatUser"
            >
              Please open a conversation to chat
            </h4>
            <router-view />
          </div>
        </div>
      </div>
    </TemplateLayout>
  </div>

  <div class="loading" v-else>
    <img src="../../assets/loading_gif.gif" alt="loading" />
  </div>
</template>

<script>
  import TemplateLayout from "../layouts/Template.vue";
  import SideBar from "../Chat/SideBar.vue";
  import { mapState } from "vuex";
  export default {
    components: {
      TemplateLayout,
      SideBar,
    },
    data() {
      return {};
    },
    created() {
      this.$store.dispatch("getConversations");

      document.title = "Chat";
    },
    computed: {
      ...mapState(["newChatUser"]),
    },
    watch: {},
  };
</script>

<style scoped>
  .chat-wrapper {
    padding: 0 4em;
  }
  .convo {
    background: var(--surface-l1);
    border-radius: 5px;
    margin: 1em 0;
    height: 85vh;
    position: relative;
  }
  .alert-text {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
  @media screen and (max-width: 786px) {
    .chat-wrapper {
      padding: 15px;
    }
  }
</style>
