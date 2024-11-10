<html>
<head>
  <link rel="stylesheet" href="${url.resourcesPath}/css/styles.css">
</head>
<body>
    <div class="registration-form">
      <h1>Регистрация</h1>
      <form action="${url.registrationAction}" method="POST">
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" name="username" value="${username}" required>

          <label for="email">Электронная почта:</label>
          <input type="email" id="email" name="email" value="${email}" required>

          <label for="password">Пароль:</label>
          <input type="password" id="password" name="password" value="${password}" required>

          <label for="confirmPassword">Подтвердите пароль:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value="${confirmPassword}" required>

          <button type="submit">Зарегистрироваться</button>
      </form>
  </div>
</body>
</html>