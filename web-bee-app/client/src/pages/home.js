import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import { useNavigate } from "react-router-dom";
// const Keycloak = require("keycloak-js");
const keycloak = new Keycloak({
  url: "http://localhost:8080", // URL Keycloak сервера
  realm: "myrealm", // Название твоего Realm
  clientId: "myclient", // ID клиента
});

const Home = () => {
  const navigate = useNavigate();
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState();
  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({ onLoad: "check-sso", checkLoginIframe: false })
      .then((authenticated) => {
        setKeycloakInstance(keycloak);
        setLogin(authenticated);
        if (authenticated) {
          navigate("/protected"); // Replace with your desired route
        }
      });
  }, []);
  return (
    <div>
      <h1>Привет, Гость</h1>
      <button onClick={() => keycloakInstance.login()}>Войти</button>
      <button onClick={() => keycloakInstance.register()}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Home;
