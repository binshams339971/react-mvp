class ReferralModel
{
    constructor(    
        id,
        user_id,
        product_id,
        referral_token,
        platform,
        clicks,
        shares,
        points,
        createdAt,
        updatedAt
    ){
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.referral_token = referral_token;
        this.platform = platform;
        this.clicks = clicks;
        this.shares = shares;
        this.points = points;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default ReferralModel;