# **Anywhere_Chat**

A real-time chat application that enables seamless communication with topic-based chat rooms, built using **React.js**, **Socket.IO**, and **Express.js**.

---

## **Prerequisites**

To run this project locally or deploy it, you need to configure the following environment variables.

### **1. Backend Environment Variables**

Create a `.env` file in the root directory with the following variables:

- `ATLAS_USER` — MongoDB Atlas Username
- `ATLAS_PASSWORD` — MongoDB Atlas Password
- `ATLAS_CLUSTER` — MongoDB Atlas cluster URL
- `JWT_SECRET` — A simple string used for JWT authentication
- `HOST_ENDPOINT` — Endpoint of your host (local or production) for Swagger
- `SW_SCHEMES` — HTTP/HTTPS for calling APIs from Swagger
- `NODE_ENV` — Set to `dev` for development or `production` for production build

### **2. Client-Side Environment Variables**

- **For Local Build**: Create a `.env` file in the `client` directory with the following:

  - `REACT_APP_BACKEND_BASE_URL` — The backend URL to be used during the build

- **For Production Build**: Create a `.env.production` file in the `client` directory with:

  - `REACT_APP_BACKEND_BASE_URL` — The production backend URL

---

## **Render Deployment Steps**

Follow these steps to deploy Anywhere_Chat on Render:

### **- First, make a production build of your React app using:**

  ```bash
  npm run prod_build
  ```

### **- Push your changes and build folder to prod**

### **- From Render UI add below environment variables**

- `ATLAS_USER`
- `ATLAS_PASSWORD`
- `ATLAS_CLUSTER`
- `JWT_SECRET`
- `HOST_ENDPOINT` -- prodction endpoint
- `SW_SCHEMES` -- prodction protocol
- `NODE_ENV`=production
- `PORT`=5000

### **- Run production deployment from Render UI**
