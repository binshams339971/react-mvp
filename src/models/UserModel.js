import referralMapper from '../mapper/ReferralMapper';
class UserModel 
{
    constructor({ id, name, phone_number, email, createdAt, updatedAt, Referrals, ReferralsCount, ReferralsDistinctCount }){
        this.id = id;
        this.name = name;
        this.phone_number = phone_number;
        this.email = email;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        if (Referrals && Array.isArray(Referrals)) {
            this.Referrals = referralMapper.mapReferrals(Referrals);
        } else if (Referrals && typeof Referrals == 'object') {
            this.Referrals = referralMapper.mapReferral(Referrals);
        }
        if (ReferralsCount >= 0 || ReferralsDistinctCount >= 0) {
            this.includedCount = {};
        }
        if (ReferralsCount >= 0) {
            this.includedCount.Referrals = ReferralsCount;
        }
        if (ReferralsDistinctCount >= 0) {
            this.includedCount.ReferralsDistinctCount = ReferralsDistinctCount;
        }
    }
}

export default UserModel;