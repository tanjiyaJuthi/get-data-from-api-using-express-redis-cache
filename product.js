import axios from 'axios';

export const getProduct = async (redisClient, productId) => {
    try {
        // check radis cache
        const cachedData = await redisClient.get(`product:${productId}`);

        console.log(cachedData);

        if (cachedData) {
            console.log('Cached!');

            return JSON.parse(cachedData);
        }

        console.log('Not Cached!');

        // fetch data from external api
        const response = await axios.get(
            `https://fakestoreapi.com/products/${productId}`
        );

        const product = response.data;

        // store data in redis for 60secnds
        await redisClient.set(
            `product:${productId}`,
            JSON.stringify(product),
            { EX:60 }
        );

        return product;
    } catch (error) {
        console.error(error);

        throw new Error('Can not fetch Data!');
    }
};

export const getAllProducts = async (redisClient) => {
    const cacheKey = 'all_products';
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const response = await axios.get('https://fakestoreapi.com/products');
    
    await redisClient.set(
        cacheKey,
        JSON.stringify(response.data),
        { EX:60 }
    );

    return response.data;
};