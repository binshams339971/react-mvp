import { ApiCore } from "./utilities/core";

const url = 'users';
const plural = 'users';
const single = 'user';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiUsers = new ApiCore({
    getAll: true,
    getCount: true,
    getById: true,
    post: true,
    put: false,
    patch: false,
    delete: false,
    url: url,
    plural: plural,
    single: single
});

// Add custom api call logic here

export default apiUsers;