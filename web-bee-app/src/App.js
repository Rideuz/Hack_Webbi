import React, { useEffect } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak from "./Keycloak";  // Импортируем один экземпляр Keycloak
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./mycomponents/Nav";
import Home from "./pages/Homepage";
import Secured from "./pages/Securedpage";
import Keycloak from "keycloak-js";

const App = () => {

  const keycloak = new Keycloak({
    url: "http://localhost:3000/auth",  // Убедитесь, что сервер Keycloak доступен
    realm: "myrealm",  // Укажите свой Realm
    clientId: "myclient",  // Укажите свой Client ID
  });

  return (
    <ReactKeycloakProvider authClient={keycloak}> {/* Передаем keycloak сюда */}
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secured" element={<Secured />} />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
};

export default App;
