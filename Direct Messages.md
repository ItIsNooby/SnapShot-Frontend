<html>
<head>
 <style>
   body {
      font-family: Times, sans-serif;
      background-color: #86c5da;
    }
    
    form {
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0,0,0,.1);
      border-radius: 5px;
      padding: 20px;
      margin: 20px auto;
      max-width: 400px;
    }
    
    h2 {
      margin-top: 0;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      display: block;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
      margin-bottom: 20px;
      font-size: 16px;
      box-sizing: border-box;
    }
    
    input[type="submit"] {
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.2s;
    }
    
    input[type="submit"]:hover {
      background-color: #0069d9;
    }
    
    .error {
      color: red;
      font-size: 14px;
      margin-top: 5px;
    }
  </style>
</head>
<body>
	<header>
		<h1>Direct Messaging</h1>
	</header>
	<main>
		<section id="user-profile">
			<img src="profile-image.jpg" alt="User Profile Picture">
			<h2>User Name</h2>
			<p>User Bio</p>
		</section>
		<section id="recent-conversations">
			<h2>Recent Conversations</h2>
			<ul>
				<li class="conversation">
					<img src="profile-image.jpg" alt="Profile Picture">
					<h3>Conversation Name</h3>
					<p>Last Message Sent</p>
				</li>
				<li class="conversation">
					<img src="profile-image.jpg" alt="Profile Picture">
					<h3>Conversation Name</h3>
					<p>Last Message Sent</p>
				</li>
				<li class="conversation">
					<img src="profile-image.jpg" alt="Profile Picture">
					<h3>Conversation Name</h3>
					<p>Last Message Sent</p>
				</li>
			</ul>
		</section>
		<section id="chat">
			<header>
				<img src="profile-image.jpg" alt="Profile Picture">
				<h2>Conversation Name</h2>
			</header>
			<ul id="message-list">
				<li class="message received">
					<img src="profile-image.jpg" alt="Profile Picture">
					<p>Received Message</p>
					<span class="time-stamp">Time Stamp</span>
				</li>
				<li class="message sent">
					<img src="profile-image.jpg" alt="Profile Picture">
					<p>Sent Message</p>
					<span class="time-stamp">Time Stamp</span>
				</li>
			</ul>
			<form>
				<input type="text" name="message-input" placeholder="Type a message...">
				<button type="submit">Send</button>
			</form>
		</section> 
	</main>
</body>
</html> 
