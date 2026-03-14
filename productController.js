import { getAllProducts, getProduct } from './product.js';

export const fetchProduct = (redisClient) => {
    return async (req, res) => {
        const productId = req.params.id;

        try {
            const product = await getProduct(redisClient, productId);

            res.json(product);
        } catch (error) {
            res.status(500).json({
                error : error.message
            });
        }
    };
};

export const fetchAllProducts = (redisClient) => {
    return async (req, res) => {
        try {
            const products = await getAllProducts(redisClient);

            res.json(products);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};