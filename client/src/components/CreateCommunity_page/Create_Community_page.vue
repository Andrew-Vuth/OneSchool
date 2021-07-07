<template>
    <div class="row justify-content-center"> 
        <div class="col-md-6">
            <h2 class="text-center"> Create your community page </h2>
                <div class="row justify-content-center">
                <form @submit.prevent="handleSubmitform">
                    <div class="form-group">
                        <label>Community name </label>
                        <input type="text" class="form-control" v-model="community.name" required>
                    </div>
                    <div class="form-group">
                        <label>Major </label>
                        <input type="text" class="form-control" v-model="community.major">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-outline-success">Create</button>
                    </div>
                </form>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            community: {
                name: '',
                major: ''
                }
            }
        },
        methods: {
            handleSubmitForm() { }
        }
    }

</script>
<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
.form-control {
    width: 100%;
    text-align:center;
}
h2 {
    color: white;
}
label {
    color: white;
}
</style>
