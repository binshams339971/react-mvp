import apiProducts from './api/ProductAPI';
import productMapper from '../mapper/ProductMapper';

const productService = {
    getProducts: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return apiProducts.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProducts(data)
                };

            }).catch((error) => {
                if (error?.data) {
                    throw { ...error.data, statusCode: error.status };
                } else {
                    throw {
                        status: 'failed',
                        errors: [error]
                    };
                }
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    },
    getProductById: async (id) => {
        try {
            return apiProducts.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProduct(data)
                };
            }).catch((error) => {
                if (error?.data) {
                    throw { ...error.data, statusCode: error.status };
                } else {
                    throw {
                        status: 'failed',
                        errors: [error]
                    };
                }
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    },
    insertProduct: async (body) => {
        console.log(body.get('video'));
        const requestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            return apiProducts.post(body, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProduct(data)
                };
            }).catch((error) => {
                if (error?.data) {
                    throw { ...error.data, statusCode: error.status };
                } else {
                    throw {
                        status: 'failed',
                        errors: [error]
                    };
                }
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    },
    updateProduct: async (id, body) => {
        const requestConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        try {
            return apiProducts.put(id, body, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProduct(data)
                };
            }).catch((error) => {
                if (error?.data) {
                    throw { ...error.data, statusCode: error.status };
                } else {
                    throw {
                        status: 'failed',
                        errors: [error]
                    };
                }
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    }
}

export default productService;