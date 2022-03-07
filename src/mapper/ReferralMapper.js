import ReferralModel from "models/ReferralModel";

const referralMapper = {
    mapReferrals : (referrals) =>{
        let list = []
        referrals.forEach(referral => {
            list.push( new ReferralModel(referral) )
        });
        return list;
    },
    mapReferral : (referral) =>{
        if(referral) {
            return new ReferralModel(referral);
        }

        return null;
    }
}

export default referralMapper;