<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login or Sign Up</title>
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
  <form id="login-form" action="login.php" method="post">
    <h2>Login</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">
    <a href="#">Forgot password?</a>
    <input type="submit" value="Login">
  </form>
  
  <form id="signup-form" action="signup.php" method="post">
    <h2>Sign Up</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">
    <p>Password must be at least 8 characters long.</p>
    <input type="submit" value="Sign Up">
  </form>
</body>
<script>
  // Function to handle login form submission
  function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginData = {
      email: email,
      password: password
    };
    // Send a POST request to the backend to initiate login
    fetch('https://snap-shot.duckdns.org/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Save the JWT token in localStorage or sessionStorage
        localStorage.setItem('token', data.token);
        // Redirect to authenticated page
        window.location.href = '/authenticated';
      } else {
        // Display error message
        document.getElementById('login-error').innerText = data.message;
      }
    })
    .catch(error => console.error('Error:', error));
  }
  // Function to handle signup form submission
  function handleSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const signupData = {
      name: name,
      email: email,
      password: password
    };
    // Send a POST request to the backend to initiate signup
    fetch('https://snap-shot.duckdns.org/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Save the JWT token in localStorage or sessionStorage
        localStorage.setItem('token', data.token);
        // Redirect to authenticated page
        window.location.href = '/authenticated';
      } else {
        // Display error message
        document.getElementById('signup-error').innerText = data.message;
      }
    })
    .catch(error => console.error('Error:', error));
  }
</script>
</html>

<html>
<head>
    <title>User Registration & Login</title>
</head>
<body>
    <h1>User Registration</h1>
    <form id="registration-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <input type="submit" value="Register">
    </form>
    <h1>User Login</h1>
    <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>
        <input type="submit" value="Login">
    </form>
    <h1>User Details</h1>
    <div id="user-details"></div>
    <script>
        // Register form submission
        document.getElementById('registration-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(e.target);
            fetch('https://snap-shot.duckdns.org/register', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                } else {
                    alert(data.error);
                }
            })
            .catch(error => alert('Error: ' + error));
        });
        // Login form submission
        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var formData = new FormData(e.target);
            fetch('https://snap-shot.duckdns.org/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    getUserDetails(data.user_id);
                } else {
                    alert(data.error);
                }
            })
            .catch(error => alert('Error: ' + error));
        });
        // Function to get user details
        function getUserDetails(user_id) {
            fetch('https://snap-shot.duckdns.org/user/' + user_id)
            .then(response => response.json())
            .then(data => {
                if (data.username) {
                    document.getElementById('user-details').innerHTML = 'Username: ' + data.username + '<br>Email: ' + data.email;
                } else {
                    alert(data.error);
                }
            })
            .catch(error => alert('Error: ' + error));
        }
    </script>
</body>
</html> 

<html>
<head>
    <meta charset="UTF-8">
    <title>User Registration and Login Example</title>
</head>
<body>
    <h1>User Registration and Login Example</h1>
    <h2>Register</h2>
    <form id="register-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <button type="submit">Register</button>
    </form>
    <h2>Login</h2>
    <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br><br>
        <button type="submit">Login</button>
    </form>
    <script>
        function registerUser(event) {
            event.preventDefault();
            const username = document.getElementById("register-form").elements.username.value;
            const password = document.getElementById("register-form").elements.password.value;
            fetch('https://snap-shot.duckdns.org/register', {
                method: 'POST',
                body: JSON.stringify({username: username, password: password}),
                headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        }
        function loginUser(event) {
            event.preventDefault();
            const username = document.getElementById("login-form").elements.username.value;
            const password = document.getElementById("login-form").elements.password.value;
            fetch('https://snap-shot.duckdns.org/login', {
                method: 'POST',
                body: JSON.stringify({username: username, password: password}),
                headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        }
        document.getElementById("register-form").addEventListener("submit", registerUser);
        document.getElementById("login-form").addEventListener("submit", loginUser);
    </script>
</body>
</html>