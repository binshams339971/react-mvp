import { ApiCore } from "./utilities/core";
import apiProvider from './utilities/provider';

const url = 'videos';
const plural = 'videos';
const single = 'video';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiVideos = new ApiCore({
    getAll: false,
    getCount: false,
    getById: false,
    post: false,
    put: false,
    patch: false,
    delete: false,
    url: url,
    plural: plural,
    single: single
});

// Add custom api call logic here
apiVideos.stream = (query) => {
    return apiProvider.get(`/${url}/stream`, query);
};

export default apiVideos;