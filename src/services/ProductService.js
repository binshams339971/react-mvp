import apiProducts from './api/ProductAPI';
import productMapper from '../mapper/ProductMapper';

const productService = {
    getProducts: async (query) => { 
        try {
            return apiProducts.getAll(query).then((data) => {
                console.log(data);
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
            return apiProducts.getById(id).then((data) => {console.log(data);
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

