import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import './admin.css';

const AdminPage = ({ keycloakInstance, setToken}) => {
  const handleLogout = async () => {
    try {
      await keycloakInstance.logout();
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  useEffect(() => {
          // Set up the periodic account check every minute
          const checkInterval = setInterval(() => {
            keycloakInstance.updateToken(60) // Refresh token if it will expire within the next 60 seconds
              .then((refreshed) => {
                if (!refreshed) {
                  // If token is not refreshed, check if user is still logged in
                  keycloakInstance.loadUserInfo()
                    .then(userInfo => {
                      // If userInfo is not returned, consider user is logged out
                      if (!userInfo) handleLogout();
                    })
                    .catch(() => handleLogout()); // If loadUserInfo fails, log out
                } else {
                  setToken(keycloakInstance.token); // Update token in the state if refreshed
                }
              })
              .catch(() => handleLogout()); // Log out if updateToken fails
          }, 10000); // Run every 60 seconds

          return () => clearInterval(checkInterval); // Clear interval on component unmount
        }, []);
  
  return (
    <div className="container">
    <div className="form">
        <h1>Привет, Админ!</h1>
        <div className="buttons">  
            <button className="but" onClick={() => handleLogout()}>Выйти</button>
            <Link to="/userPage" className="but" >Личный кабинет!</Link>
        </div>
    </div>
</div>
  );
};

export default AdminPage;