# Express + Redis + Axios Mini Project

This is a **Node.js backend project** that demonstrates how to use **Express**, **Redis**, and **Axios** together.  
It fetches product data from an external API (`https://fakestoreapi.com`) and caches it in Redis to improve performance.

---

## Features

- Fetch a **single product** by ID: `/product/:id`  
- Fetch **all products**: `/products`  
- Uses **Redis caching** to store API responses for 60 seconds  
- Modular code structure:
  - `server.js` → server and route setup
  - `product.js` → Redis + Axios logic
  - `productController.js` → route handlers
  - `productRoutes.js` → route definitions

---

## Prerequisites

**Redis**  

   - Download Redis MSI installer: [https://github.com/tporadowski/redis/releases](https://github.com/tporadowski/redis/releases)
   
**Installation**

1. Clone the repository
```bash
git clone https://github.com/your-username/express-redis-axios.git
cd express-redis-axios

2. Install node dependencies

npm install

3. Start the server

npm start
