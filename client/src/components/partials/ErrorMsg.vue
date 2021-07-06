<template>
  <div class="error">{{ errorMsg }}</div>
</template>

<script>
  export default {
    props: ["errorMsg"],
  };
</script>

<style scoped>
  .error {
    width: max-content;
    font-size: 12px;
    background: var(--one-school-danger);
    border-radius: 5px;
    padding: 0.6em;
  }
</style>
