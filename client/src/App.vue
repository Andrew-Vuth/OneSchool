<template>
  <router-view />
</template>
<script>
  import setAuthToken from "./utils/setAuthToken";
  export default {
    name: "App",
    created() {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }

      this.$store.dispatch("getUser");
    },
  };
</script>

<style>
  :root {
    --background-color: #17181a;
    --one-school-alt: #bb86fc;
    --one-school-primary: #03dac5;
    --one-school-primary-opacity: #03dac555;
    --one-school-secondary: #627d98;
    --one-school-danger: #e74f6b;
    --surface-l1: #20252a;
    --surface-l2: #252c32;
    --surface-l3: #2a333b;
    --surface-l4: #323d48;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background-color);
  }
  #app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffff;
    height: 100vh;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: none;
    color: #fff;
  }
  p,
  div {
    /* word-break: break-all; */
    font-size: 14px;
  }

  /* Form style */

  .form-group input {
    padding: 0.5em;
    outline: none;
  }

  .form-group input::placeholder {
    opacity: 0.7;
  }
  .form-group select {
    /* padding: 0.5em; */
  }
  .form-group-two {
    display: flex;
    flex-grow: 1;
    gap: 1em;
  }
  .form-group-two .form-group {
    flex-grow: 1;
  }

  /* Btn Global Style */
  .one-school-btn {
    color: #ffff;
    background: var(--one-school-primary);
    transition: 0.2s ease-in;
  }
  .one-school-btn:hover {
    background: #03dac5b5;
  }
  .ghost-btn {
    color: #ffff;
    background: var(--surface-l2);
  }
  .ghost-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .btn.danger {
    color: #ffff;
    background: var(--one-school-danger);
  }
  .btn.danger:hover {
    background: #cf6679;
  }

  /* Upload btn and fake btn */
  .form-group .uploadBtn {
    position: absolute;
    opacity: 0;
    width: 70px;
  }
  .form-group .uploadBtn::-webkit-file-upload-button {
    cursor: pointer;
    border: 0;
    background: #6f6f6f6a;
    position: absolute;
    left: 0;
  }
  .form-group .fakeUpload {
    font-size: 12px;
    padding: 1em;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    border: 0;
    background: #627d98;
    color: #fff;
  }
  .form-group textarea {
    padding: 0.5em 1em;
    resize: none;
    width: 100%;
    height: 100px;
  }
  /* Transistion style */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
  .slide-fade-right-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-right-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-right-enter-from,
  .slide-fade-right-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--one-school-secondary);
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

  /* Stub image */
  .profile_image {
  }
  .loading {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading img {
    width: 50px;
  }
</style>
