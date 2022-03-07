import SubCategoryModel from "models/SubCategoryModel";

const subCategoryMapper = {
    mapSubCategories : (subCategories) =>{
        let list = []
        subCategories.forEach(subCategory => {
            list.push( new SubCategoryModel(subCategory) )
        });
        return list;
    },
    mapSubCategory : (subCategory) =>{
        if(subCategory) {
            return new SubCategoryModel(subCategory);
        }

        return null;
    }
}

export default subCategoryMapper;