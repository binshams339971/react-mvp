import { ApiCore } from "./utilities/core";
import apiProvider from './utilities/provider';

const url = 'auth';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAuth = new ApiCore({
    getAll: false,
    getCount: false,
    getById: false,
    post: false,
    put: false,
    patch: false,
    delete: false,
    url: url
});

// Add custom api call logic here
apiAuth.login = (credentials, requestConfig) => {
    return apiProvider.post(`/${url}/login`, credentials, requestConfig);
}

export default apiAuth;