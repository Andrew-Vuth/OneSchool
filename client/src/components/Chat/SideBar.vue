<template>
  <div class="side-bar-container">
    <div>
      <h5>Direct Message</h5>
      <p class="text-secondary">Browse for friends to chat</p>
      <form @submit.prevent>
        <div class="form-group">
          <input type="text" v-model="text" placeholder="Search here" />
        </div>
      </form>
    </div>
    <div v-if="showConvo">
      <span
        v-if="conversations.length === 0"
        class="text-secondary"
        style="font-size: 13px"
        >No conversation:</span
      >
      <ConvoTab
        class="following"
        v-for="(convo, i) in conversations"
        :key="i"
        :convo="convo"
        @click="openConversation(convo)"
      />
    </div>
    <div class="followings-list" v-else>
      <span class="text-secondary" style="font-size: 13px"
        >People you followed:</span
      >
      <div
        class="following"
        v-for="(following, i) in user.followings"
        :key="i"
        @click="checkConversation(following)"
      >
        <img
          :src="
            (following.profileImage.includes('uploads\\') ||
            following.profileImage.includes('uploads/')
              ? 'http://localhost:5000/'
              : '') + following.profileImage
          "
          alt="user-profile"
          class="user-image"
        />
        {{ following.name }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import ConvoTab from "./ConvoTab.vue";
  export default {
    components: {
      ConvoTab,
    },
    data() {
      return {
        src:
          this.$store.state.user.profileImage.includes("uploads\\") ||
          this.$store.state.user.profileImage.includes("uploads/")
            ? "http://localhost:5000/"
            : "",
        text: "",
        showConvo: true,
      };
    },
    methods: {
      async openConversation(convo) {
        this.$router.push(`/chat/${convo._id}`);
      },

      async checkConversation(following) {
        if (this.conversations.length === 0) {
          this.$store.commit("setNewChatUser", following);
          this.$router.push(`/chat/new`);
          return;
        }
        // Find if have existing conversation
        let conversation;
        this.conversations.forEach((convo) => {
          console.log("Test convo");
          convo.members.forEach((member) => {
            console.log(member);

            if (member._id === following._id) {
              console.log("right");
              conversation = convo;
            } else {
              console.log("Not right");
              return;
            }
          });
          console.log("targetConvo: ", following._id);
        });

        console.log("Convo: ", conversation);
        if (conversation && !this.newChatUser) {
          this.$router.push(`/chat/${conversation._id}`);
        } else if (conversation && this.newChatUser) {
          this.$store.commit("setNewChatUser", null);
          this.$router.push(`/chat/${conversation._id}`);
        } else if (!conversation) {
          this.$store.commit("setNewChatUser", following);
          this.$router.push(`/chat/new`);
        }
      },
    },
    computed: {
      ...mapState(["user", "conversations", "newChatUser"]),
    },
    watch: {
      text: {
        handler() {
          this.text.length > 0
            ? (this.showConvo = false)
            : (this.showConvo = true);

          const followings = document.querySelectorAll(".following");
          followings.forEach((following) => {
            const name = following.innerText.toLowerCase().replace(/ /g, "");
            const text = this.text.toLowerCase();
            if (name.indexOf(text) !== -1) {
              following.style.display = "block";
            } else {
              following.style.display = "none";
            }
          });
        },
      },
    },
  };
</script>

<style scoped>
  .side-bar-container {
    border-radius: 5px;
    margin: 1em 0;
    padding: 2em;
    height: 85vh;
    background: var(--surface-l1);
    overflow: auto;
  }
  .following {
    cursor: pointer;
    border-radius: 10px;
    padding: 0.5em 0;
  }
  .following:hover {
    background: var(--surface-l2);
  }
  .form-group input {
    width: 100%;
    background: var(--surface-l3);
    border: 0;
    border-radius: 5px;
    color: #fff;
  }
  .user-image {
    border-radius: 50%;
    object-fit: cover;
    width: 40px;
    height: 40px;
    margin-right: 1em;
    margin-left: 3px;
  }

  @media screen and (max-width: 786px) {
    .side-bar-container {
      height: 40vh;
    }
  }
</style>
