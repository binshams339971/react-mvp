class BrandModel
{
    constructor({ id, name, icon, description, video_src, video_thumbnail_src, createdAt, updatedAt}){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.video_src = video_src;
        this.video_thumbnail_src = video_thumbnail_src;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default BrandModel;