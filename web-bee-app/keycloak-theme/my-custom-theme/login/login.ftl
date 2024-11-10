<html>
<head>
  <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
</head>
<body>
  <div class="login-container">
    <h1>Welcome to My App</h1>
    <form action="${url.loginAction}" method="post">
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>
