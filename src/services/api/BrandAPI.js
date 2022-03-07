import { ApiCore } from "./utilities/core";

const url = 'brands';
const plural = 'brands';
const single = 'brand';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiBrands = new ApiCore({
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

export default apiBrands;