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
      <button onClick={() => handleLogout()}>Выйти</button>
    </>
  );
};

export default UserPage;
