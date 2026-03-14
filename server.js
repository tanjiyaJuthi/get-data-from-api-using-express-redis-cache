import express from 'express';
import { createClient } from 'redis';
import productRoutes from './productRoutes.js';

const app = express();
const redisClient = createClient();

redisClient.on('error', (error) => {
    console.log('Redis Client Error', error);
});

await redisClient.connect();

// use product routes
app.use('/', productRoutes(redisClient));

app.listen(3000, () => {
    console.log('Server Connected!');
});