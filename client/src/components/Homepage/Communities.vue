<template>
  <div>
    <div class="container-label">
      <p>
        Your Community
      </p>
      <i class="fas fa-plus-circle"></i>
    </div>
    <div class="communities"></div>
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

  .container-label i {
    cursor: pointer;
    color: var(--one-school-primary);
    font-size: 24px;
  }
</style>
