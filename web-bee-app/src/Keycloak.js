import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:3000/auth",  // Убедитесь, что сервер Keycloak доступен
  realm: "myrealm",  // Укажите свой Realm
  clientId: "myclient",  // Укажите свой Client ID
});

export default keycloak;