import React from "react";
import { Link } from 'react-router-dom';

const AdminPage = ({ keycloakInstance}) => {
  const handleLogout = async () => {
    try {
      await keycloakInstance.logout();
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  
  return (
    <>
    <h1>Привет, Админ!</h1>
        <Link to="/userPage">Личный кабинет!</Link>
      <button onClick={() => handleLogout()}>Выйти</button>
    </>
  );
};

export default AdminPage;
