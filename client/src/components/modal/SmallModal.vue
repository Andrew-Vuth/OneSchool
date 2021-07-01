<template>
  <div class="small-modal">
    <img src="../../assets/loading_gif.gif" alt="loading" />Posting...
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .small-modal {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 10px;
    right: 5px;
    display: flex;
    background: var(--surface-l3);
    padding: 1em;
    font-size: 11px;
    border-radius: 5px;
  }
  .small-modal img {
    width: 16px;
    margin-right: 10px;
  }
</style>
