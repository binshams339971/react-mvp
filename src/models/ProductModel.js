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
        updatedAt
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
     }
}

export default ProductModel;