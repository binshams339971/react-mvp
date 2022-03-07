import apiBrands from './api/BrandAPI';
import brandMapper from '../mapper/BrandMapper';

const brandService = {
    getBrands: async (query) => { 
        const requestConfig = {
            params: query
        }
        try {
            return apiBrands.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: brandMapper.mapBrands(data)
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
    getBrandById: async (id) => { 
        try {
            return apiBrands.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: brandMapper.mapbrand(data)
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
    insertBrand: async (body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiBrands.post(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: brandMapper.mapbrand(data)
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
    updateBrand: async (id, body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiBrands.put(id, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: brandMapper.mapbrand(data)
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

export default brandService;

