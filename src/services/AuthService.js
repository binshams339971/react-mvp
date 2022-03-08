import { login } from 'helpers/authHelper';
import apiAuth from './api/AuthAPI';

const authService = {
    login : async ({ username, password }) => {
        try {
            return apiAuth.login({ username, password }, null).then((data) => {
                if(data.status === 'success'){
                    login(data.data);
                    return {
                        status: 'success',
                        data: data.data
                    }
                }else{
                    return {
                        status: 'failed'
                    }
                }
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

export default authService;