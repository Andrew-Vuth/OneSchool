<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Sart your community</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="community.name" required>
                </div>

                <div class="form-group">
                    <label>Bio</label>
                    <input type="text" class="form-control" v-model="community.bio">
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data() {
            return {
                community: {
                    name: '',
                    bio: ''
                }
            }
        },
        methods: {
            handleSubmitForm() { 
                let apiURL = 'http://localhost:4000/api/create-community';
                
                axios.post(apiURL, this.community).then(() => {
                    this.$router.push('/view')
                    this.community = {
                    name: '',
                    bio: ''
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
