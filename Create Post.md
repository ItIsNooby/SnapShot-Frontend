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
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Media Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="post-container">
        <form id="post-form">
            <label for="image-upload">Choose from files:</label>
            <input type="file" id="image-upload" accept="image/*" required>
            <br>
            <label for="camera-input">Take a photo:</label>
            <input type="file" id="camera-input" accept="image/*" capture="environment">
            <br>
            <textarea id="caption" placeholder="Write a caption..." required></textarea>
            <button type="submit">Post</button>
        </form>
        <div id="posts"></div>
    </div>
    <div id="checkmark" style="display: none;">✔️ Posted!</div>
    <script src="script.js"></script>
</body>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Social Media Post Feature</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <section class="post-form">
    <h2>Create a new post</h2>
    <form id="create-post-form">
        <form id="post-form">
            <label for="image-upload">Choose photo(s) from files:</label>
            <input type="file" id="image-upload" accept="image/*" required>
            <br>
      <label for="Caption">Caption:</label>
      <textarea id="Caption" placeholder="Write a caption..." required></textarea>
      <button type="submit">Post</button>
    </form>
  </section>
</body>
