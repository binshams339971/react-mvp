import { ApiCore } from "./utilities/core";

const url = 'categories';
const plural = 'categories';
const single = 'category';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiCategories = new ApiCore({
    getAll: true,
    getCount: false,
    getById: true,
    post: true,
    put: true,
    patch: false,
    delete: false,
    url: url,
    plural: plural,
    single: single
});

// Add custom api call logic here

export default apiCategories;