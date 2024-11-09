import React, { useState, useEffect, useRef } from "react";
import { useKeycloak } from "@react-keycloak/web";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/home.js";

import Protected from "./components/protected.js";

const App = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home setLogin={setLogin} />} />
          <Route
            path="/protected"
            exact
            element={isLogin ? <Protected /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
