import React, { useState, useEffect, useRef } from "react";
import { useKeycloak } from "@react-keycloak/web";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/home.js";
import UserPage from "./pages/userPage.js";

const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState();
  const [token, setToken] = useState();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home setLogin={setLogin} setKeycloakInstance={setKeycloakInstance} keycloakInstance={keycloakInstance} setToken={setToken} />} />
          <Route
            path="/userPage"
            exact
            element={isLogin ? <UserPage setKeycloakInstance={setKeycloakInstance} keycloakInstance={keycloakInstance}/> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
