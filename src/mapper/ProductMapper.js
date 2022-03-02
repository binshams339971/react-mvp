import ProductModel from 'models/ProductModel'

const productMapper = {
    mapProducts : (products) =>{
        let list = []
        products.forEach(product => {
            list.push( new ProductModel(product) )
        });
        return list;
    },
    mapProduct : (product) =>{
        if(product) {
            return new ProductModel(product);
        }

        return null;
    }
}

export default productMapper;