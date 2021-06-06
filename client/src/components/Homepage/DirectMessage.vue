<template>
  <div>
    <div class="container-label">
      <p>
        Direct Message
      </p>
      <button>
        <img src="../../assets/laugh.png" />
      </button>
    </div>
    <div class="friends"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .container-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 1.5em 0.8em 1.5em;
    border-radius: 10px 10px 0 0;
    background: var(--surface-l3);
  }
  .container-label p {
    margin: 0;
  }
  .container-label button {
    border: 0;
    background: transparent;
  }
</style>
