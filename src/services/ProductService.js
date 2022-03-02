import apiProducts from './api/ProductAPI';
import productMapper from '../mapper/ProductMapper';

const productService = {
    getProducts: async (query) => { 
        try {
            apiProducts.getAll(query).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProducts(data)
                };
            }).catch((error) => {
                return {
                    status: 'failed'
                };
            }); 
        } catch (error) {
            return {
                status: 'failed'
            };
        }
    },
    getProductById: async (id) => { 
        try {
            apiProducts.getById(id).then((data) => {console.log(data);
                return {
                    status: 'success',
                    data: productMapper.mapProducts(data)
                };
            }).catch((error) => {console.log(error);
                return {
                    status: 'failed'
                };
            }); 
        } catch (error) {
            return {
                status: 'failed'
            };
        }
    }
}

export default productService;

