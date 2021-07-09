<template>
  <div class="post-wrapper">
        <div class="container-fluid post-container">
            <div class="row">
                <div class="cover-item">
							<a class="list-item" Style= "font-size: 20px; margin-bottom: 20px"><i class="fa fa-lock mr-2"></i>  Private Group</a>
								<p class="card-text">This is Civil Engineer Community. We love to see all of civil engineer students aroud the world to share your issue here and solution here.
                </p>
              <a class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-eye mr-2"></i> Visible</a> <br>
              <a class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-users mr-2"></i> General</a><br>
              <a href="/history" class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-clock mr-3"></i>History</a>
            
            </div>
            </div>    
        </div>  
  </div>
    <div class="post-wrapper">
        <div class="container-fluid post-container">
            <div class="row">
                <div class="cover-item">
							<a class="list-item" Style= "font-size: 20px; margin-bottom: 20px">Members</a>
              <hr class="hr1">
								<p class="card-text">
                  You don't have any mutual friend here.
                </p>        
            </div>
            </div>    
        </div>  
  </div>
    <div class="post-wrapper">
        <div class="container-fluid post-container">
            <div class="row">
                <div class="cover-item">
							<a class="list-item" Style= "font-size: 20px; margin-bottom: 20px">Activity</a>
              <hr class="hr1">
							<a class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-comment mr-2"></i>Nothing new has updated</a><br>
              <a class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-users mr-2"></i> +34 Members</a> 
              <p>
              <a href="/history" class="list-item" Style= "font-size: 15px; margin-bottom: 20px"><i class="fa fa-clock mr-3"></i>Created 5 weeks ago.</a>
              </p>
            
            </div>
            </div>    
        </div>  
  </div>
</template>

<style scoped>
  p {
    margin: 0;
  }
  .post-container {
    border-radius: 10px;
    margin-top: 1em;
    background: var(--surface-l2);
  }
  .post-container .row:not(:nth-child(2)) {
    padding: 1em;
  }
  .post-container .row:nth-child(2) {
    padding: 0 1em 1.25em 1em;
  }
  .user-details {
    display: flex;
    align-items: center;
    padding: 0;
  }

  .user-info p:nth-child(2),
  .dayPosted {
    opacity: 0.5;
    font-size: 13px;
  }
  .dayPosted {
    font-size: 12px;
  }
.col-8 {
    padding: 0;
}

p.card-text {
    display: inline-block;;
	font-size: 15px;
	margin: 10px;
	color: white;
}
a.list-item {
  margin: 10px;
}
hr {
    border: 1px solid white;
    width: 80vh;
}
</style>
