class CategoryModel 
{
    constructor({ id, name, icon, createdAt, updatedAt }){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default CategoryModel;