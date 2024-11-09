import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import Protected from "./components/protected.js";
import Public from "./components/public.js";
import useAuth from "./hooks/useAuth.js";

// const WelcomePage = () => {
//   const { keycloak } = useKeycloak();
//   return (
//     <div>
//       <h1>Привет, Гость</h1>
//       <button onClick={() => keycloak.login()}>Войти</button>
//       <button onClick={() => keycloak.register()}>Зарегистрироваться</button>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const { keycloak } = useKeycloak();
//   return (
//     <div>
//       <h1>Личный кабинет</h1>
//       <p>Имя: {keycloak.tokenParsed?.given_name}</p>
//       <p>Фамилия: {keycloak.tokenParsed?.family_name}</p>
//       <p>Почта: {keycloak.tokenParsed?.email}</p>
//       <button onClick={() => keycloak.logout()}>Выйти</button>
//     </div>
//   );
// };

// const AdminPage = () => {
//   const { keycloak } = useKeycloak();
//   return (
//     <div>
//       <h1>Привет, Админ</h1>
//       <a href="/dashboard">Личный кабинет</a>
//       <button onClick={() => keycloak.logout()}>Выйти</button>
//     </div>
//   );
// };

const App = () => {
  const isLogin = useAuth();

  return isLogin ? <Protected /> : <Public />;
  // const { keycloak, initialized } = useKeycloak();
  // console.log("Keycloak instance:", keycloak);
  // console.log("Initialized:", initialized);

  // if (!initialized) return <div>Загрузка...</div>;
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" exact component={WelcomePage} />
  //       <Route
  //         path="/dashboard"
  //         element={keycloak.authenticated ? <Dashboard /> : <Navigate to="/" />}
  //       />
  //       <Route
  //         path="/admin"
  //         element={
  //           keycloak.authenticated && keycloak.hasRealmRole("secret-admin") ? (
  //             <AdminPage />
  //           ) : (
  //             <Navigate to="/" />
  //           )
  //         }
  //       />
  //     </Routes>
  //   </Router>
  // );
};

export default App;
