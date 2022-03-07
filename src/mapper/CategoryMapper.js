import CategoryModel from "models/CategoryModel";

const categoryMapper = {
    mapCategories : (categories) =>{
        let list = []
        categories.forEach(category => {
            list.push( new CategoryModel(category) )
        });
        return list;
    },
    mapCategory : (category) =>{
        if(category) {
            return new CategoryModel(category);
        }

        return null;
    }
}

export default categoryMapper;