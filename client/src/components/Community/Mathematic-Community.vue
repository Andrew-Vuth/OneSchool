<template>
<TemplateLayout>
    <div class="col-12 cover-wrapper mt-md-4">
                <div class="cover-container">
                    <div class="cover-box">
						<div class="cover-item">
							<h5 class="card-title">Mathematic Community</h5>
								<p class="card-text">This is Mathematic group created for sharing all mathematic problems or solution to everyone. 
                                    This group accept all of mathematical student around the world. Feel free to join us and become friend. :D 

                                </p>
								<div class="button">
									<a href="/edit" class="btn btn-sm">Edit bio</a>
								</div>
						</div>
					</div>
                </div>
    </div>
    <div class="container-fluid homepage-wrapper mt-md-4">
        <div class="row">
            <div class="col-md-3 d-none d-md-block" style="padding: 0;">
            <HomepageProfile />
            </div>
            <div class="col-md-6 posts-wrapper">
                <div class="posts-container">
                    <PostForm />
                    <div v-if="!$store.state.postLoading">
                    <postItem />
                    </div>
                </div>
            </div>
            <div class="col-md-3 d-none d-md-block p-0">
                <Communities class="right-container" />
            </div>
        </div>
    </div>
</TemplateLayout>
</template>

<script>
    import TemplateLayout from "../layouts/Template.vue";
    import HomepageProfile from "../Homepage/HomepageProfile";
    import Communities from "../Homepage/Communities";
    import PostForm from "../Post/PostForm";
    import PostItem from "../Community/PostItem.vue"
    import { mapState } from "vuex";
    
    export default {
    components: {
        TemplateLayout,
        HomepageProfile,
        Communities,
        PostForm,
        PostItem
    },
    created() {
      this.$store.dispatch("getUser");
    },
    computed: {
      ...mapState(["allPosts"]),
    },
    watch: {
      allPosts: {
        handler() {
          this.$store.commit("setPosting", false);
          this.$store.commit("setCommenting", false);
        },
        deep: true,
      },
    },
  };
</script>

<style scoped>
    .cover-wrapper {
    padding: 0 2em;
    position: relative;
    height: 100%;
    }
    .homepage-wrapper {
    padding: 0 4em;
    position: relative;
    height: 100%;
    }
    .right-container {
    background: var(--surface-l1);
    height: 280px;
    max-height: 100%;
    border-radius: 10px;
    margin-bottom: 1em;
    }

    @media screen and (max-width: 786px) {
    .homepage-wrapper {
    padding: 15px;
    }
}
@media screen and (max-width: 599px) {
    .posts-wrapper {
    padding: 0;
    }
}.posts-container {
    background: var(--surface-l1);
    height: 85vh;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
}

h5.card-title {
	margin: 15px;
	font-size: 40px;
	color: white;
}
p.card-text {
    display: inline-block;
    width: 950px;
	font-size: 17px;
	margin: 10px;
	color: white;
}
a {
	color: white;
	display: inline-block;
	background-color: #03dac5;
	margin: 10px;
}

.cover-container {
    background: var(--surface-l1);
    height: 30vh;
    overflow-x: hidden;
    padding: 1em;
    margin: 0 1em;
    border-radius: 10px;
    text-align: center;
}
</style>
