
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Settings</title>
    <style>
body {
  font-family: Times, sans-serif;
  background-color: #86c5da;
  color: #333;
}

.settings-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
}

.settings-sections {
  display: flex;
  flex-wrap: wrap;
}

.settings-section {
  flex: 1;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.settings-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #0077b5;
}

.settings-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.settings-section li {
  margin-bottom: 15px;
}

.settings-section li a {
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
}

.settings-section li a:hover {
  color: #ff9900;
}

.settings-section li p {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}

.settings-section li:last-of-type {
  margin-bottom: 0;
}

.settings-section:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.settings-section:hover h2 {
  color: #ff9900;
}

  </style>
</head>
<body>
<div class="settings-page">
  <h1>Settings</h1>
  <div class="settings-sections">
    <div class="settings-section">
      <h2>General</h2>
      <ul>
        <li>
          <a href="#">Language</a>
          <p>Select your preferred language for the site.</p>
        </li>
        <li>
          <a href="#">Appearance</a>
          <p>Select your preferred theme and font size.</p>
        </li>
        <li>
          <a href="#">Timezone</a>
          <p>Select your timezone so the site can display accurate timestamps.</p>
        </li>
      </ul>
    </div>
    <div class="settings-section">
      <h2>Account</h2>
      <ul>
        <li>
          <a href="#">Change Email</a>
          <p>Update the email address associated with your account.</p>
        </li>
        <li>
          <a href="#">Change Password</a>
          <p>Update your account password.</p>
        </li>
        <li>
          <a href="#">Deactivate Account</a>
          <p>Deactivate your account permanently or temporarily.</p>
        </li>
      </ul>
    </div>
    <div class="settings-section">
      <h2>Privacy</h2>
      <ul>
        <li>
          <a href="#">Profile Privacy</a>
          <p>Select who can see your profile information, including your name, profile picture, and posts.</p>
        </li>
        <li>
          <a href="#">Blocked Users</a>
          <p>View and manage the list of users you have blocked.</p>
        </li>
      </ul>
    </div>
    <div class="settings-section">
      <h2>Security</h2>
      <ul>
        <li>
          <a href="#">Two-Factor Authentication</a>
          <p>Enable two-factor authentication to add an extra layer of security to your account.</p>
        </li>
        <li>
          <a href="#">Login History</a>
          <p>View the list of devices and locations where your account has been accessed.</p>
        </li>
      </ul>
    </div>
    <div class="settings-section">
      <h2>Notifications</h2>
      <ul>
        <li>
          <a href="#">Notification Settings</a>
          <p>Select which types of notifications you want to receive, including email, push, and SMS notifications.</p>
        </li>
      </ul>
    </div>
  </div>
</div>
