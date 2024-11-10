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
import AdminPage from "./pages/adminPage.js";


const App = () => {
  const [isLogin, setLogin] = useState(false);
  const [keycloakInstance, setKeycloakInstance] = useState();
  const [token, setToken] = useState();
  const [isAdmin, setAdmin] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home setLogin={setLogin} setKeycloakInstance={setKeycloakInstance} keycloakInstance={keycloakInstance} setToken={setToken} setAdmin={setAdmin} isAdmin={isAdmin} />} />
          <Route
            path="/userPage"
            exact
            element={isLogin ? <UserPage keycloakInstance={keycloakInstance}/> : <Navigate to="/" />}
          />
          <Route
            path="/adminPage"
            exact
            element={isAdmin ? <AdminPage keycloakInstance={keycloakInstance} setToken={setToken} /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;