import React from "react";

const UserPage = ({ setKeycloakInstance, keycloakInstance }) => {
  console.log(keycloakInstance);
  const handleLogout = async () => {
    try {
      await keycloakInstance.logout();
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };
  
  return (
    <>
      <p>Имя: {keycloakInstance.tokenParsed.given_name}</p>
      <p>Фамилия: {keycloakInstance.tokenParsed.family_name}</p>
      <p>Почта: {keycloakInstance.tokenParsed.email}</p>
      <button onClick={() => handleLogout()}>Выйти</button>
    </>
  );
};

export default UserPage;
