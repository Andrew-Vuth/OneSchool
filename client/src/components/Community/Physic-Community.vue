<template>
<TemplateLayout>
    <div class="col-12 cover-wrapper mt-md-4">
                <div class="cover-container">
                    <div class="cover-box">
						<div class="cover-item">
							<h5 class="card-title">Physic Community</h5>
									<a class="list-item" Style= "font-size: 20px;"><i class="fa fa-lock"></i>Private Group</a>
								<div class="button">
									<a href="/Join" class="btn btn-sm">Join Group</a>
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
                    <ItemForPhysicCommunity />
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
    import ItemForPhysicCommunity from "../Community/ItemForPhysicCommunity.vue";

    import { mapState } from "vuex";
    
    export default {
    components: {
        TemplateLayout,
        HomepageProfile,
        Communities,
        ItemForPhysicCommunity
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
    height: 75vh;
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
i {
    display: inline-block;
    margin: 10px;
}
a.btn {
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
