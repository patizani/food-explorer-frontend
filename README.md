
# ![Logo](https://github.com/patizani/food-explorer-frontend/blob/main/src/assets/logoHeader.svg) Food Explorer

## 💻 About
The application that we will develop is a digital menu for a fictitious restaurant, known as foodExplorer.


## 🛠 Tech Stack
- [React](https://reactjs.org/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Styled components](https://styled-components.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 🚀 How to run the project
This project is divided into two parts:

1) Backend (food-explorer-backend folder)
2) Frontend (food-explorer-frontend folder)

### Pre-requisites
Before starting, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). Also, it's nice to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

## 🎲 Running the BackEnd (Server)

```bash
  # Clone this repository
$ git clone git@github.com:patizani/food-explorer-backend.git

# Access the project folder in your terminal
$ cd food-explorer-backend

# Install the dependencies
$ npm install

# Execute as migration e seed
$ npm migrate
$ npm seed

# Run the application in development mode
$ npm run dev

# Login do admin
$ email: admin@email.com
$ password: 123456

# he Server will start at port: 3333 - go to <http://localhost:3333>
```

## 🧭 Running the Frontend (Application)
```bash
# Clone this repository
$ git clone git@github.com:patizani/food-explorer-frontend.git

# Access the project folder in your terminal
$ cd food-explorer-frontend

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run dev
```

## 
- This BackEnd was hosted directly on [Render](https://render.com/). 
- The Frontend was hosted directly on [Netlify](https://www.netlify.com/).

 **Note:** As it is hosted on a free service, the BackEnd "hibernates" after 15 minutes of inactivity.
If you are trying to access the website and the BackEnd is unresponsive, just wait as it will be "initializing" the services.
This step may take up to 1 minute, depending on the load on the Render servers.

## ⚙️ Features
- A structured project, with a good organization of folders, division of components in the front-end, etc.
- A README.md file with specifications on how to run the project in a dev environment.
- Users must authenticate themselves to enter the application through the login screen, you can apply what you learned in JWT authentication classes. Authentication must be validated with a password.
- The admin will upload images to register the dishes.
- Finally, deploy your application.
- Give your functions and variables meaningful names: work with Clean Code concepts a bit.
- The admin, restaurant and users data will be stored in a database.
- Possibility to search by dish name, ingredients or favorite dish
- It is essential that your interface consumes its own API.
- Interesting to make the application responsive: use the concept of Mobile First that was learned in class.
- It's up to you where to apply animations, transitions, and transformations.
- It meets the model proposed in Figma and contains elements indicative of action and state. opcionais
- The user can add items to the cart by clicking the add button. The amount is controlled by the “-” and “+” buttons;
- By clicking on the my order button, the user will be redirected to a screen where he will see his order, the sum and the payment methods;
- The user will be able to delete a dish from the cart and the total amount of the order should be updated automatically;
- The user can mark a dish as a favorite, just click on the heart that appears next to each one;
- The admin will view and control the status of each order, through a select field. Orders will appear in a table when you click Orders;

## 🎨 Layout
![App Screenshot](https://github.com/patizani/food-explorer-frontend/blob/main/github/Food_Explorer_-_Google_Chrome_2023-01-05_01-11-39_AdobeExpress.gif)
### Deploy

[Food Explorer](https://foodexplorerpz.netlify.app/)


## 📝 License
This project is under the license
[MIT](https://github.com/patizani/food-explorer-frontend/new/main)

Made with ❤️ by Patrícia Garcia Zanirati 👋🏽 [Get in Touch!](https://www.linkedin.com/in/patricia-zanirati/)
