# [🌱 Sprouts | An Online Plant Store](https://ecommerce-sprouts.herokuapp.com/)

## Overview
Sprouts is a full-stack, responsive MERN e-commerce application. 

### Screenshots
![](sprouts.gif)


## Features & Functionality
Sprouts aims to replicate a full e-commerce experience for both a shopper and site admin users.

### Shopper
- Search product inventory
- Paypal API integration
- Add product reviews
- Local storage used to maintain cart (products added, address, payment type)
- Edit personal profile (email, password)
- Product recommendation quiz

### Admin
*Admins have a separate UI that allows them to access both their features and shopper views*
- Add, delete, create, and update products
- View all orders
- View and update order status (mark as shipped)
- User and admin views

## Tech Stack
This application was built with create-react-app with the UI scaffolded with react-bootstrap.

### Front-End 
- React
- Custom and standard API React hooks 
- Redux
- React-Router-DOM
- Local Storage
- React Bootstrap
- Custom CSS
- Mongoose
- PayPal API

### Back-End
- Express
- NodeJS
- MongoDB
- Heroku

...and many, many Google searches.


## Limitations & Suggested Improvements
As noted above, the focus of this project was functionality, especially building out Redux state management and MongoDB integration. I wanted to build as complex an experience as I could, given my limited development experience. For that reason, the design took a backseat. 

### Design
This project would have greatly benefitted from a style guide at the start. I didn't anticipate the feature list growing, which left the design sort of limping along. I'm on the fence about whether I'd use react-bootstap again. Candidly, the biggest (and possibly only) benefit was the responsive layout based in rows and columns. That said, a solid style guide and more upfront work on my part could have eliminated this clunky library altogether.


### Engineering
Custom error messaging and additional validation on the front-end would be an improvement. Because this is a portfolio project, I decided to skip this in several components because I felt I understood its implementation elsewhere. 

Having vastly improved as a developer over the course of this project, I'd also go back and clean up some functions just for formatting sake. However, they get the job done!
