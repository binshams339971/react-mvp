import { login } from 'helpers/authHelper';
import apiAuth from './api/AuthAPI';

const authService = {
    login : async ({ username, password }) => {
        try {
            apiAuth.login({ username, password }).then((data) => {
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
                return {
                    status: 'failed'
                }
            }); 
        } catch (error) {
            return {
                status: 'failed'
            }
        }
    }
}

export default authService;