<template>
  <div
    v-if="newChatUser"
    class="container-fluid convo-wrapper d-flex flex-column justify-content-between"
  >
    <div class="row convo-header p-1">
      <div class="col-12">
        <div class="d-flex align-items-center p-1">
          <img
            class="user-image"
            :src="
              (newChatUser.profileImage.includes('uploads\\') ||
              newChatUser.profileImage.includes('uploads/')
                ? 'http://localhost:5000/'
                : '') + newChatUser.profileImage
            "
            alt="user-profile"
          />
          <p class="m-0">{{ newChatUser.name }}</p>
        </div>
      </div>
    </div>
    <div class="row convo-body">
      <div class="col-12 convo-messages">
        <!-- <div
          class="text"
          v-for="message in currentMessages"
          :key="message.text"
        >
          <p>
            {{ message.text }}
          </p>
        </div> -->
      </div>
    </div>
    <div class="row chat-input">
      <div class="col-12">
        <form @submit.prevent="onSubmitNewChat">
          <div class="form-group  ">
            <input
              type="text"
              placeholder="Write something here"
              class="form-control chat-typing"
              v-model="chatText"
            />
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    v-else-if="!newChatUser && !$store.state.conversationLoading"
    class="container-fluid convo-wrapper d-flex flex-column"
  >
    <div class="row convo-header p-1">
      <div class="col-12">
        <div class="d-flex align-items-center p-1">
          <img
            class="user-image"
            :src="
              (currentChatUser.profileImage.includes('uploads\\') ||
              currentChatUser.profileImage.includes('uploads/')
                ? 'http://localhost:5000/'
                : '') + currentChatUser.profileImage
            "
            alt="user-profile"
          />
          <p class="m-0">{{ currentChatUser.name }}</p>
        </div>
      </div>
    </div>
    <div class="row convo-body">
      <div class="col-12 convo-messages">
        <div
          v-for="message in currentMessages"
          :key="message.text"
          class="text"
          :class="message.senderId === user._id ? 'sender' : ''"
        >
          <p>
            {{ message.text }}
          </p>
        </div>
      </div>
    </div>
    <div class="row chat-input">
      <div class="col-12">
        <form @submit.prevent="onChat">
          <div class="form-group">
            <input
              type="text"
              placeholder="Write something here"
              class="form-control chat-typing"
              v-model="chatText"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import io from "socket.io-client";

  import { mapState } from "vuex";
  import axios from "axios";
  export default {
    data() {
      return {
        chatText: "",
        socket: null,
        newMessage: "",
      };
    },
    async created() {
      this.getCurrentChat();
      this.socket = io("http://localhost:5000");
    },
    mounted() {
      this.socket.on("getText", ({ senderId, text }) => {
        const msg = {
          text,
          senderId,
          conversationId: this.$route.params.conversationId,
        };

        this.newMessage = msg;
      });
    },
    methods: {
      async getCurrentChat() {
        // Check is this is new
        if (this.$route.params.conversationId === "new") return;
        const res = await axios.get(
          `api/conversation/${this.$route.params.conversationId}`
        );
        this.currentConvo = res.data.conversation;
        const messages = await (
          await axios.get(`/api/message/${this.$route.params.conversationId}`)
        ).data.messages;
        const members = res.data.conversation.members;
        const currentChatUser = members.find((member) => {
          return member._id !== this.user._id;
        });
        await this.$store.commit("setCurrentChatUser", currentChatUser);

        this.$store.commit("setCurrentMessages", messages);
        this.$store.commit("setConversationLoading", false);
      },
      async onSubmitNewChat() {
        try {
          const res = await axios.post("/api/conversation", {
            receiverId: this.newChatUser._id,
          });
          const convo = await await axios.get(
            `api/conversation/${res.data.newConversation._id}`
          );
          const newConvo = convo.data.conversation;
          this.$store.commit("addConversation", newConvo);
          const message = await axios.post(
            `/api/message/${res.data.newConversation._id}`,
            {
              text: this.chatText,
            }
          );
          const newMessage = message.data.newMessage;
          console.log(newMessage);
          this.$store.commit("setCurrentMessages", newMessage);
          this.chatText = "";
          this.$router.push(`/chat/${res.data.newConversation._id}`);
        } catch (error) {
          console.log(error);
        }
      },

      async onChat() {
        const msg = {
          conversationId: this.$route.params.conversationId,
          senderId: this.user._id,
          text: this.chatText,
        };
        this.$store.commit("addMessage", msg);

        this.socket.emit("sendText", {
          text: this.chatText,
          senderId: this.user._id,
          receiverId: this.currentChatUser._id,
        });

        this.chatText = "";
      },
    },
    computed: {
      ...mapState([
        "conversations",
        "user",
        "newChatUser",
        "currentMessages",
        "currentChatUser",
      ]),
    },
    watch: {
      $route() {
        this.getCurrentChat();
      },
      socket: {
        handler() {
          this.socket.emit("addUser", this.user._id);
        },
      },
      newMessage: {
        async handler() {
          this.$store.commit("addMessage", this.newMessage);

          await axios.post(
            `/api/message/${this.$route.params.conversationId}`,
            {
              text: this.newMessage.text,
            }
          );
          console.log(this.currentMessages);
        },
      },
    },
  };
</script>

<style scoped>
  .convo-wrapper {
    height: 100%;
    overflow: auto;
  }
  .convo-header {
    border-radius: 5px 5px 0 0;
    background: var(--surface-l2);
  }
  .convo-body {
    height: 100%;
  }
  .convo-messages {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  /* .convo-messages .text {
    width: max-content;
    padding: 0.5em;
   
    background: var(--surface-l3);
  } */
  .text p {
    width: max-content;
    padding: 0.5em;
    border-radius: 10px;
    margin: 0.5em 0;
    background: var(--surface-l3);
  }
  .user-image {
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
    margin-right: 1em;
  }

  .chat-typing {
    background: var(--surface-l4);
    color: #fff;
    border: 0;
  }
  .text.sender {
    text-align: right;
  }
  .text.sender p {
    display: inline-block;
    background: var(--one-school-secondary);
    justify-self: flex-end;
  }
</style>
