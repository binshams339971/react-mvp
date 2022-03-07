import categoryMapper from '../mapper/CategoryMapper';
import subCategoryMapper from '../mapper/SubCategoryMapper';
import referralMapper from '../mapper/ReferralMapper';
class ProductModel
{
    constructor({
        id,     
        identifier,
        name,
        sub_info,
        description,
        brand_id,
        category_id,
        sub_category_id,
        video_src,
        video_thumbnail_src,
        createdAt,
        updatedAt,
        Category,
        SubCategory,
        Referrals,
        CategoryCount,
        SubCategoryCount,
        ReferralsCount,
        ReferralsDistinctCount
    }){ 
        this.id = id;
        this.identifier = identifier;
        this.name = name;
        this.sub_info = sub_info;
        this.description = description;
        this.brand_id = brand_id;
        this.category_id = category_id;
        this.sub_category_id = sub_category_id;
        this.video_src = video_src;
        this.video_thumbnail_src = video_thumbnail_src;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        if(Category && Array.isArray(Category)){
            this.Category = categoryMapper.mapCategories(Category);
        }else if(Category && typeof Category == 'object'){
            this.Category = categoryMapper.mapCategory(Category);
        }
        if(SubCategory && Array.isArray(SubCategory)){
            this.SubCategory = subCategoryMapper.mapSubCategories(SubCategory);
        }else if(SubCategory && typeof SubCategory == 'object'){
            this.SubCategory = subCategoryMapper.mapSubCategory(SubCategory);
        }
        if(Referrals && Array.isArray(Referrals)){
            this.Referrals = referralMapper.mapReferrals(Referrals);
        }else if(Referrals && typeof Referrals == 'object'){
            this.Referrals = referralMapper.mapReferral(Referrals);
        }
        if(CategoryCount >=0 || SubCategoryCount >=0 || ReferralsCount >=0 || ReferralsDistinctCount >= 0){
            this.includedCount = {};
        }
        if(CategoryCount >=0){
            this.includedCount.Category = CategoryCount;
        }
        if(SubCategoryCount >=0){
            this.includedCount.SubCategory = SubCategoryCount;
        }
        if(ReferralsCount >=0){
            this.includedCount.Referrals = ReferralsCount;
        }
        if(ReferralsDistinctCount >= 0){
            this.includedCount.ReferralsDistinctCount = ReferralsDistinctCount;
        }
     }
}

export default ProductModel;