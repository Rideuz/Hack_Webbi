# Hack_Webbi
React.js website implementation with keycloak

# Installation
## Necessary
Download **[Docker Desktop](https://docs.docker.com/get-started/get-docker/?_gl=1*gxkq7i*_ga*NTgxMzk2OTAzLjE3MzExNDEwOTE.*_ga_XJWPQMJYHQ*MTczMTI2MjE4Ni40LjEuMTczMTI2MjE4Ny41OS4wLjA.)**.
Install Docker, Launch it, log in/create Docker account.

Install [Node js 22](https://nodejs.org/en/download/package-manager).

## To run the app
open webbee folder in terminal, then run following command
```
docker-compose up --build
```
## Keycloak installation & configuration
Go to [localhost:8080](http://localhost:8080/), you should see keycloak login form (**login: admin, password: admin**).
![image](https://github.com/user-attachments/assets/067f0ae5-afba-4809-8974-6d277dc57187)

You should see keycloak console
![image](https://github.com/user-attachments/assets/de47afcb-3aea-4871-bb67-ab151570761a)

## Configuring keycloak
Create new Realm by clicking on realm dropdown menu on the left corner, then click _create realm_, name it my realm, then click create button.

After that, add new client, follow image:
![image](https://github.com/user-attachments/assets/89221d0d-8048-49ba-b467-0789141fdaf4)

The form should be opened, go through it by passing the following:
![image](https://github.com/user-attachments/assets/4fe67196-25e2-429f-9612-98e29228c9b8)
![image](https://github.com/user-attachments/assets/2f7d5eba-a83d-4061-927f-8add01aaff6d)
![image](https://github.com/user-attachments/assets/51237d82-1402-48ae-a7e9-cd066d0d6c4c)

Now you should create the secret-admin role by Clients -> myclient -> Roles -> Create role -> role name -> secret-admin -> save.

After that, add user with secret-admin role by going to users, then clicking Add user, filling the form with the following data, then clicking Create.
![image](https://github.com/user-attachments/assets/8ababe63-2f2b-4317-aec0-e37810e4c08d)

To add role to user, open desired user settings, proceed to Role mapping, then hit Assign role button. After that, tick our secret-admin role, then click Assign.

### Realm login settings
To configure Realm login settings, go to Realm settings, then Login.
![image](https://github.com/user-attachments/assets/b578fcfa-0356-4540-bfdc-d35d623db2f8)
In Login, tick everything, except _Duplicate emails_ and _Edit username_

## Email verification
First, add email to your admin user to test Email verification.
![image](https://github.com/user-attachments/assets/a32af2ce-25bd-498d-b063-e6353d800e11)

Then go to Email tab in Realm settings. In the from input pass email, that is going to send email verification message to users (for example company_name@cmp.com)

From display name should be no-reply.

To configure the Connection & Authentication you need to pass smtp server data, we're going to take **smtp.google.com**, for example.
For google Port should be 587, Enable startTLS, then tick Authentication.
To authenticate your google account for other apps to use, go to [Google apppasswords settings](https://myaccount.google.com/apppasswords), add any name you want, then click create and copy your password.
Then pass this password to keycloak, username should be your whole email address (email address of sender).
Click Test connection, you should see this message in the right corner.
![image](https://github.com/user-attachments/assets/49881fb8-4cb7-4f6d-bd50-e82c2c941189)

## React app
Go to [localhost:3000](http://localhost:3000/), you should see main page, click "Войти" or "Зарегистрироваться", if you see keycloak form, it's finally working.
