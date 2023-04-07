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
    fetch('/login', {
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
    fetch('/signup', {
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
