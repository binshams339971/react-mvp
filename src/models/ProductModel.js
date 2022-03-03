import CategoryModel from "./CategoryModel";
import SubCategoryModel from "./SubCategoryModel";
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
        SubCategory
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
            this.Category = [];
            Category.forEach((element)=>{
                this.Category.push(new CategoryModel(element));
            });
        }else if(Category && typeof Category == 'object'){
            this.Category = new CategoryModel(Category);
        }
        if(SubCategory && Array.isArray(SubCategory)){
            this.SubCategory = [];
            SubCategory.forEach((element)=>{
                this.SubCategory.push(new SubCategoryModel(element));
            });
        }else if(SubCategory && typeof SubCategory == 'object'){
            this.SubCategory = new SubCategoryModel(SubCategory);
        }
     }
}

export default ProductModel;