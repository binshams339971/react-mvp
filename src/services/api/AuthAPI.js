import { ApiCore } from "./utilities/core";
import apiProvider from './utilities/provider';

const url = 'auth';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAuth = new ApiCore({
    getAll: false,
    getById: false,
    post: false,
    put: false,
    patch: false,
    delete: false,
    url: url
});

// Add custom api call logic here
apiAuth.login = (credentials) => {
    return apiProvider.post('/auth/login', credentials);
}

export default apiAuth;