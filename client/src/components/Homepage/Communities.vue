<template>
  <div>
    <div class="container-label">
      <h6>
        Your Community
      </h6>
      <i href="#" class="fas fa-plus-circle">
      </i>
    </div>
    <div class="communities">
      <div class="post-wrapper">
        <div class="container-fluid post-container">
          <div class="row d-flex flex-column">
            <router-link to="/Mathematic-Community">Mathematic Community</router-link>
          </div>
        </div>
      </div>
      <div class="post-wrapper">
        <div class="container-fluid post-container">
          <div class="row d-flex flex-column">
            <router-link to="/Civil-Engineer-Community">Civil Engineer Community</router-link>
          </div>
        </div>
      </div>
      <div class="post-wrapper">
        <div class="container-fluid post-container">
          <div class="row d-flex flex-column">
            <router-link to="/Physic-Community">Physic Community</router-link>
          </div>
        </div>
      </div>
    </div>
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
  .container-label h6 {
    margin: 0;
  }

  .container-label i {
    cursor: pointer;
    color: var(--one-school-primary);
    font-size: 24px;
  }
  .post-container {
    border-radius: 10px;
    align-items: center;
    margin-top: 1em;
    background: var(--surface-l2);
  }
  
  .post-container .row:not(:nth-child(2)) {
    padding: 1em;
    margin: 2px;
  }
  .post-container .row:nth-child(2) {
    padding: 0 1em 1.25em 1em;
  }
</style>
