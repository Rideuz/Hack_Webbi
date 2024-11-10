import React, { useState, useEffect, useRef } from "react";
// import Keycloak from "keycloak-js";
import keycloak from "../KeycloakService";
import { useNavigate } from "react-router-dom";
import './home.css';
// const keycloak = new Keycloak({
//   url: "http://localhost:8080", // URL Keycloak сервера
//   realm: "myrealm", // Название твоего Realm
//   clientId: "myclient", // ID клиента
// });

const Home = ({ setLogin, setKeycloakInstance, keycloakInstance, setToken, setAdmin, isAdmin }) => {
  const navigate = useNavigate();
  const isRun = useRef(false);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    // Initialize Keycloak on component mount
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

          // Set up the periodic account check every minute
          const checkInterval = setInterval(() => {
            keycloak.updateToken(60) // Refresh token if it will expire within the next 60 seconds
              .then((refreshed) => {
                if (!refreshed) {
                  // If token is not refreshed, check if user is still logged in
                  keycloak.loadUserInfo()
                    .then(userInfo => {
                      // If userInfo is not returned, consider user is logged out
                      if (!userInfo) handleLogout();
                    })
                    .catch(() => handleLogout()); // If loadUserInfo fails, log out
                } else {
                  setToken(keycloak.token); // Update token in the state if refreshed
                }
              })
              .catch(() => handleLogout()); // Log out if updateToken fails
          }, 10000); // Run every 60 seconds

          return () => clearInterval(checkInterval); // Clear interval on component unmount
        }
      });
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    keycloak.logout();
  };
  return (
    <div className="container">
      <div className="form">
        <h1>Привет, Гость!</h1>
        <div className="buttons">
          <button onClick={() => keycloakInstance.login()}>Войти</button>
          <button onClick={() => keycloakInstance.register()}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;