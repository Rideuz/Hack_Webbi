import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
// const Keycloak = require("keycloak-js");
const keycloak = new Keycloak({
  url: "http://localhost:8080", // URL Keycloak сервера
  realm: "myrealm", // Название твоего Realm
  clientId: "myclient", // ID клиента
});

const useAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState();
  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    // keycloak?.init({ onLoad: "login-required" }).then(() => setLogin(true));
    keycloak
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then((authenticated) => {
        setKeycloakInstance(keycloak);
        setLogin(authenticated);
      });
  }, []);
  console.log(keycloakInstance);
  return isLogin;
};

export default useAuth;
