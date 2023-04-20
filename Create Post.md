<html>
<head>
 <style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.new-post-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.new-post-form textarea {
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  resize: none;
}

.new-post-form input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.new-post-form button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.new-post-form button:hover {
  background-color: #0056b3;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.post .content {
  font-size: 18px;
  margin-bottom: 10px;
}

.post .user-id,
.post .created-at {
  font-size: 14px;
  color: #777;
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


