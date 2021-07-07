	<template>
  <div class="postForm-wrapper">	
							<form @submit.prevent="onPost">
								<div class="form-group">
									<textarea 
									name="post-text"
									cols="110"         
									rows="5"
									class="from-control"
									placeholder="Share your idea here...."
									v-model="post_text"
									@keyup.enter="onPost"
									></textarea>
								</div>
							</form>
						</div>
						<div class="form-group">
							<div class="text-right">
								<button type="submit" class="btn post-btn">Post</button>
               </div>
						</div> 
</template>
<style scoped>

.postForm-wrapper {
    background: var(--surface-l2);
    border-radius: 10px;
    padding: 1em 1.5em 0.5em 1.5em;
}
.form-group {
    margin-bottom: 0.5em;
}
.postForm-wrapper textarea {
    background: transparent;
    border: 0;
    outline: 0;
    color: #ffff;
    font-size: 14px;
    border-bottom: 1px solid;
    padding: 0;
    height: 70px;
}
.postForm-wrapper .form-group:nth-child(2) {
    font-size: 13px;
}
button {
    color: #fff;
    font-size: 15px;
    margin-right: 20px;
	margin-bottom: 5px;
	margin-top: 5px;
    background-color: #03dac5;}

</style>
            
