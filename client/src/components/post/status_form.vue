<template>
<div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="http://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png" alt="">
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">Chanvirakboth RITH</div>
                                    <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                                </div>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-chevron-down"></i></a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item text-primary" href="#">Edit</a>
                                        <a class="dropdown-item text-primary" href="#">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            Hi this is my first post!!
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link1"><i class="fa fa-heart"></i>Like</a>
                        <a href="#" class="card-link2"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link3"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
</div>
</template>
<script>
import { } from ''

export default ({
    name: '',
    props: {
        msg: String
    },
    computed: {
        return : {},
    },
    methods: {
        return: {},
    }

})
</script>
<style scoped>

@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

.card {
  border-radius: 20px;
}
.card-header {
  background-color: transparent;
  border: 0px;
  height: 60px;
}
.card-body{
  background-color: transparent;
  border-radius: 20px;
}
.card-footer {
  background-color: transparent;
}
.card-link1{
  color: black;
  margin: 50px;
}
.card-link2 {
  color: black;
  margin: 50px; 
}
.card-link3 {
  color: black;
  margin: 50px;
}
.text-muted {
  font-size: 13px;
  color: lightslategrey;
}
.h5 {
  font-size: 20px;
}
</style>
