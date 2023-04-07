<style>
   body {
      font-family: Times, sans-serif;
      background-color: #86c5da;
    }
  .profile-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  
  .profile-image {
    position: relative;
    width: 200px;
    height: 200px;
    margin-right: 50px;
    overflow: hidden;
    border-radius: 50%;
  }
  
  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .profile-image .edit-image {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0077b5;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .profile-image .edit-image:hover {
    background-color: #006699;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .profile-info h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .profile-info .edit-username {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #0077b5;
    cursor: pointer;
  }
  
  .profile-info .edit-username:hover {
    text-decoration: underline;
  }
  
  .profile-info .bio {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .profile-info .edit-bio {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #0077b5;
    cursor: pointer;
  }
  
  .profile-info .edit-bio:hover {
    text-decoration: underline;
  }
</style>

<div class="profile-page">
  <div class="profile-header">
    <div class="profile-image">
      <img src="profile-image.jpg" alt="Profile Image">
      <button type="button" class="edit-image">Change Image</button>
    </div>
    <div class="profile-info">
      <h1>Username</h1>
      <button type="button" class="edit-username">Edit Username</button>
      <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus dolor ut metus ultricies, ac volutpat nulla faucibus. Nulla eget turpis sed nulla mollis dictum quis in ipsum.</p>
      <button type="button" class="edit-bio">Edit Bio</button>
    </div>
  </div>
</div>
