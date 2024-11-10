import React from "react";
import './user.css';

const UserPage = ({ keycloakInstance }) => {
  console.log(keycloakInstance);
  const handleLogout = async () => {
    try {
      await keycloakInstance.logout();
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  
  return (
    <div className="container">
      <div className="form">
        <p>Имя: {keycloakInstance.tokenParsed.given_name}</p>
        <p>Фамилия: {keycloakInstance.tokenParsed.family_name}</p>
        <p>Почта: {keycloakInstance.tokenParsed.email}</p>
        <div className="buttons">  
          <button onClick={() => handleLogout()}>Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;