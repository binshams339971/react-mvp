import apiCategories from './api/CategoryAPI';
import categoryMapper from '../mapper/CategoryMapper';

const categoryService = {
    getCategories: async (query) => { 
        const requestConfig = {
            params: query
        }
        try {
            return apiCategories.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: categoryMapper.mapCategories(data)
                };

            }).catch((error) => {
                if(error?.data){
                    throw { ...error.data, statusCode: error.status };
                }else{
                    throw {
                        status: 'failed',
                        errors: [ error ]
                    };
                }
            }); 
        } catch (error) {
            throw {
                status: 'failed',
                errors: [ error ]
            };
        }
    },
    getCategoryById: async (id) => { 
        try {
            return apiCategories.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: categoryMapper.mapCategory(data)
                };
            }).catch((error) => {
                if(error?.data){
                    throw { ...error.data, statusCode: error.status };
                }else{
                    throw {
                        status: 'failed',
                        errors: [ error ]
                    };
                }
            }); 
        } catch (error) {
            throw {
                status: 'failed',
                errors: [ error ]
            };
        }
    },
    insertCategory: async (body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiCategories.post(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: categoryMapper.mapCategory(data)
                };
            }).catch((error) => {
                if(error?.data){
                    throw { ...error.data, statusCode: error.status };
                }else{
                    throw {
                        status: 'failed',
                        errors: [ error ]
                    };
                }
            }); 
        } catch (error) {
            throw {
                status: 'failed',
                errors: [ error ]
            };
        }
    },
    updateCategory: async (id, body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiCategories.put(id, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: categoryMapper.mapCategory(data)
                };
            }).catch((error) => {
                if(error?.data){
                    throw { ...error.data, statusCode: error.status };
                }else{
                    throw {
                        status: 'failed',
                        errors: [ error ]
                    };
                }
            }); 
        } catch (error) {
            throw {
                status: 'failed',
                errors: [ error ]
            };
        }
    }
}

export default categoryService;

