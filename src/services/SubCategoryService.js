import apiSubCategories from './api/SubCategoryAPI';
import subCategoryMapper from '../mapper/SubCategoryMapper';

const subCategoryService = {
    getSubCategories: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return apiSubCategories.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: subCategoryMapper.mapSubCategories(data)
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
    getSubCategoryById: async (id) => {
        try {
            return apiSubCategories.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: subCategoryMapper.mapSubCategory(data)
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
    insertSubCategory: async (body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiSubCategories.post(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: subCategoryMapper.mapSubCategory(data)
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
    updateSubCategory: async (id, body) => {
        const requestConfig = {
            data: body
        }
        try {
            return apiSubCategories.put(id, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: subCategoryMapper.mapSubCategory(data)
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

export default subCategoryService;