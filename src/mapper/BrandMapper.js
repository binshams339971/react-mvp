import BrandModel from "models/BrandModel";

const brandMapper = {
    mapBrands : (brands) =>{
        let list = []
        brands.forEach(brand => {
            list.push( new BrandModel(brand) )
        });
        return list;
    },
    mapBrand : (brand) =>{
        if(brand) {
            return new BrandModel(brand);
        }

        return null;
    }
}

export default brandMapper;