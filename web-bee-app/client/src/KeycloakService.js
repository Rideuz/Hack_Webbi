import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080", // URL Keycloak сервера
    realm: "myrealm", // Название твоего Realm
    clientId: "myclient", // ID клиента
  });

export default keycloak;