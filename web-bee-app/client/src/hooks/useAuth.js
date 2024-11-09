import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080", // URL Keycloak сервера
  realm: "myrealm", // Название твоего Realm
  clientId: "myclient", // ID клиента
});

const useAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    keycloak
      .init({ onLoad: "login-required" })
      .then((res) => setLogin(res))
      .catch((error) => {
        console.error("Keycloak initialization failed:", error);
      });
  }, []);

  return isLogin;
};

export default useAuth;
