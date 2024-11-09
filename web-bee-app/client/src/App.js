import React from "react";
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
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/protected" exact element={<Protected />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
