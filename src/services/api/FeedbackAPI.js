import { ApiCore } from "./utilities/core";

const url = 'feedbacks';
const plural = 'feedbacks';
const single = 'feedback';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiFeedbacks = new ApiCore({
    getAll: false,
    getCount: false,
    getById: false,
    post: true,
    put: false,
    patch: false,
    delete: false,
    url: url,
    plural: plural,
    single: single
});

// Add custom api call logic here

export default apiFeedbacks;