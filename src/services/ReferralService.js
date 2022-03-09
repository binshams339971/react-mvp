import apiReferrals from './api/ReferralAPI';
import referralMapper from '../mapper/ReferralMapper';

const referralService = {
    getReferrals: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return apiReferrals.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: referralMapper.mapReferrals(data)
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
    getReferralById: async (id) => {
        try {
            return apiReferrals.getById(id).then((data) => {
                return {
                    status: 'success',
                    data: referralMapper.mapReferral(data)
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
    insertReferral: async (body) => {
        const requestConfig = {}
        try {
            return apiReferrals.post(body, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: referralMapper.mapReferral(data)
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
            return apiReferrals.getCount(requestConfig).then((data) => {
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
    },
    registerClick: async ({ referral_token }) => {
        const requestConfig = {}
        try {
            return apiReferrals.newClick({ referral_token }, requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: referralMapper.mapReferral(data)
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
    getTotalShareCountByProductId: async (id) => {
        const requestConfig = {
            params: {
                product_id: id,
            }
        }
        try {
            return apiReferrals.getCount(requestConfig).then((data) => {
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
    },
    getTotalDistinctShareCountByProductId: async (id) => {
        const requestConfig = {
            params: {
                product_id: id,
                distinct: 'user_id'
            }
        }
        try {
            return apiReferrals.getCount(requestConfig).then((data) => {
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
    },
    getTotalShareCountByUserId: async (id) => {
        const requestConfig = {
            params: {
                user_id: id,
            }
        }
        try {
            return apiReferrals.getCount(requestConfig).then((data) => {
                return {
                    status: 'success',
                    count: data

                };

            }).catch((error) => {
                throw {
                    status: 'failed',
                    error: error
                };
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    },
    getTotalDistinctShareCountByUserId: async (id) => {
        const requestConfig = {
            params: {
                user_id: id,
                distinct: 'product_id'
            }
        }
        try {
            return apiReferrals.getCount(requestConfig).then((data) => {
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

export default referralService;

