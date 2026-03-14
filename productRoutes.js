import express from 'express';
import {fetchProduct, fetchAllProducts} from './productController.js';

const router = express.Router();

// export a function tha accepts redisClient
export default (redisClient) => {
    // get product data
    router.get('/product/:id', fetchProduct(redisClient));

    // get all product data
    router.get('/products', fetchAllProducts(redisClient));

    return router;
};