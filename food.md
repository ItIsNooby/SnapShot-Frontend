<html>
<head>
  <title>User Registration</title>
</head>
<body>
  <h1>User Registration</h1>
  <form id="registration-form">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>
    <button type="submit">Register</button>
  </form>

  <script>
    var registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var formData = new FormData(registrationForm);
      fetch('/user', {
        method: 'POST',
        body: formData
      }).then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            alert(data.message);
          });
        } else {
          alert('Error creating user');
        }
      }).catch(function(error) {
        alert('Error creating user');
      });
    });
  </script>
</body>
</html>

