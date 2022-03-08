import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/Products.css';
import CustomPaginationActionsTable from 'components/Admin/ProductsTable.js';
import productService from '../../services/ProductService.js';
import brandService from '../../services/BrandService.js';
import categoryService from '../../services/CategoryService.js';
import subCategoryService from '../../services/SubCategoryService.js';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
let brand = '';
let category = '';
let subcategory = '';
function Products() {
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [brands, setBrands] = useState();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        productService.getProducts().then((products) => {
            if (products.status == 'success') {
                setProds(products?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        brandService.getBrands().then((brands) => {
            if (brands.status == 'success') {
                setBrands(brands?.data);
                setLoading2(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        categoryService.getCategories().then((cats) => {
            if (cats.status == 'success') {
                setCategories(cats?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });

    }, []);
    useEffect(() => {
        //console.log(brands);

    }, [prods, brands, categories, subCategories]);

    const [inputField, setInputField] = useState({
        name: '',
        description: '',
        video: '',
        thumbnail: '',
        brand0: '',
        cat0: '',
        subcat0: ''
    })

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const addProduct = () => {
        //setInputField({ name: '', description: '' });
        console.log(inputField.name);
        console.log(inputField.description);
        console.log(brand);
        console.log(category);
        console.log(subcategory);
    }

    const brandHandler = (e) => {
        brand = e.target.value;

    }

    const categoryHandler = (e) => {
        let cat = e.target.value
        subCategoryService.getSubCategories({ category_id: cat }).then((subcats) => {
            if (subcats.status == 'success') {
                //console.log(subcats.data);
                setSubCategories(subcats.data);
                category = e.target.value;
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const subCategoryHandler = (e) => {
        subcategory = e.target.value;
    }

    return (
        <>
            {!loading ?
                <div className='container-fluid'>
                    <div className='row'>
                        <AdminSidebar />
                        <div className='col-md-8'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/">
                                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                        keyboard_backspace
                                    </span>
                                </Link>
                                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>All Products</h3>
                                <h3 className=''></h3>
                            </div>
                            <div className='mt-4'>
                                <div className='d-flex justify-content-between'>
                                    <input type="text" placeholder="Search" className='searchBox' />
                                    <button className="addProducts" data-toggle="modal" data-target="#addProductsModal">ADD PRODUCTS +</button>
                                </div>
                                <div className='productInfo'>
                                    <CustomPaginationActionsTable data={prods} />
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="addProductsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h2 className='text-center'>Add Item</h2>
                                        <div className='inputs'>
                                            <label className='nameLabel'>Brand<sup className='text-danger'>*</sup></label>
                                            <select name="brands" id="barnds" className='brand text-white' onChange={brandHandler}>
                                                <option value="0">Select brand</option>
                                                {brands?.map((b) => (
                                                    <option key={b.id} value={b.id}>{b.name}</option>
                                                ))}
                                            </select><br />
                                            <label className='nameLabel'>Product Name<sup className='text-danger'>*</sup></label><input type="text" className="itemName" name="name" onChange={inputsHandler} value={inputField.name} /><br />
                                            <label className='desLabel'>Description<sup className='text-danger'>*</sup></label><input type="text" className="description" name="description" onChange={inputsHandler} value={inputField.description} /><br />
                                            <label className='nameLabel'>Category<sup className='text-danger'>*</sup></label>
                                            <select name="brands" id="barnds" className='category text-white' onChange={categoryHandler}>
                                                <option value="0">Select a category</option>
                                                {categories?.map((b) => (
                                                    <option key={b.id} value={b.id}>{b.name}</option>
                                                ))}
                                            </select><br />
                                            <label className='nameLabel'>Sub Category<sup className='text-danger'>*</sup></label>
                                            <select name="brands" id="barnds" className='subcategory text-white' onChange={subCategoryHandler}>
                                                <option value="0">Select a subcategory</option>
                                                {subCategories?.map((b) => (
                                                    <option key={b.id} value={b.id}>{b.name}</option>
                                                ))}
                                            </select><br />
                                            <label className='videoLabel'>Video<sup className='text-danger'>*</sup></label>
                                            <label className="custom-file-upload1 text-white">
                                                <input type="file" />
                                                Upload <i className="fa-solid fa-arrow-up"></i>
                                            </label><br />
                                            <label className='thumbLabel'>Thumbnail</label>
                                            <label className="custom-file-upload2 text-white">
                                                <input type="file" />
                                                Upload <i className="fa-solid fa-arrow-up"></i>
                                            </label><br />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={addProduct} className="addProducts">ADD PRODUCTS +</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-1'></div>
                    </div>
                </div> :
                <div className='row'>
                    <AdminSidebar />
                    <Box sx={{ display: 'flex', margin: "auto" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}

export default Products;