import apiUsers from './api/UserAPI';
import userMapper from '../mapper/UserMapper';

const userService = {
    getUsers: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return apiUsers.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: userMapper.mapUsers(data)
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
    getUserById: async (id) => {
        try {
            return apiUsers.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: userMapper.mapUser(data)
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
    insertUser: async (body) => {
        const requestConfig = {}
        try {
            return apiUsers.post(body, requestConfig).then((data) => {

                return {
                    status: 'success',
                    data: userMapper.mapUser(data)
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
    getCount: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return apiUsers.getCount(requestConfig).then((data) => {
                return {
                    status: 'success',
                    count: data
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

export default userService;

