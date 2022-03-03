import { ApiCore } from "./utilities/core";
import apiProvider from './utilities/provider';

const url = 'referrals';
const plural = 'referrals';
const single = 'referral';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiReferrals = new ApiCore({
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
apiReferrals.getCount = (query) => {
    return apiProvider.get(`/${url}/count`, query);
};

apiReferrals.newView = (body) => {
    return apiProvider.post(`/${url}/click`, body);
};

export default apiReferrals;