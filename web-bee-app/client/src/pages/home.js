import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
import { useNavigate } from "react-router-dom";
// const Keycloak = require("keycloak-js");
const keycloak = new Keycloak({
  url: "http://localhost:8080", // URL Keycloak сервера
  realm: "myrealm", // Название твоего Realm
  clientId: "myclient", // ID клиента
});

const Home = ({ setLogin, setKeycloakInstance, keycloakInstance, setToken, setAdmin, isAdmin }) => {
  const navigate = useNavigate();
  const isRun = useRef(false);
  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({ onLoad: "check-sso", checkLoginIframe: false })
      .then((authenticated) => {
        setKeycloakInstance(keycloak);
        setLogin(authenticated);
        if (authenticated) {
          setToken(keycloak.token);
          const roles = keycloak.realmAccess.roles;
          const clientRoles = keycloak.resourceAccess['myclient']?.roles || [];
          setAdmin(clientRoles.includes('secret-admin'));
          if (clientRoles.includes('secret-admin')) navigate("/adminPage");
          else navigate("/userPage");
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
