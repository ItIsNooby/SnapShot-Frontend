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
