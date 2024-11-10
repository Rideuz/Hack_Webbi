<html>
<head>
  <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
</head>
<body>
  <div class="login-container">
    <h1 class="text">Войдите в учетную запись</h1>
    <form class="form" id="login-form" action="${url.loginAction}" method="post">
      <p id="error-message" style="color: red; display: none;"></p>
      <input id="username" class="input" type="text" name="username" placeholder="Username">
      <input id="password" class="input" type="password" name="password" placeholder="Password">
      <button class="button" type="submit">Login</button>
      <!-- Элемент для отображения сообщения об ошибке -->
    </form>
  </div>
</body>
</html>
