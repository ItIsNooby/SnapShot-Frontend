<style>
  body {
      font-family: Times, sans-serif;
      background-color: #86c5da;
    }
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  form {
    display: flex;
    align-items: center;
  }
  
  label {
    margin-right: 10px;
    font-weight: bold;
  }
  
  input[type="text"] {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    width: 300px;
  }
  
  button[type="submit"] {
    background-color: #0077b5;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #006699;
  }
</style>

<div class="search-bar">
  <form>
    <label for="user-search">Search for Users:</label>
    <input type="text" id="user-search" name="user-search" placeholder="Enter a username...">
    <button type="submit"><i class="fas fa-search"></i></button>
  </form>
</div>

<html>
<head>
	<title>Chat App</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
	<script type="text/javascript">
		var socket = io.connect('http://' + document.domain + ':' + location.port);
	</script>
</head>
<body>
	<div class="container">
		<h1>Chat App</h1>
		<hr>
		<div id="message_container"></div>
		<hr>
		<form id="message_form" method="POST">
			<div class="form-group">
				<input type="text" class="form-control" id="message_input" name="message" placeholder="Type your message...">
			</div>
			<button type="submit" class="btn btn-primary">Send</button>
		</form>
	</div>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#message_form').on()'submit', function(event) {
				event.preventDefault();
				var message = $('#message_input').val();
				socket.emit('send_message', {'message': message});
				$('#message_input').val('');
			});
			socket.on('receive_message', function(data) {
				var username = data.username;
				var message = data.message;
				var message_html = '<strong>' + username + '</strong>: ' + message + '<br>';
				$('#message_container').append(message_html);
			});
		});
	</script>
</body>
</html>