import CategoryModel from "./CategoryModel";
class SubCategoryModel
{
    constructor({ id, name, icon, category_id, createdAt, updatedAt, Category }){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.category_id = category_id;
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
    }
}

export default SubCategoryModel;