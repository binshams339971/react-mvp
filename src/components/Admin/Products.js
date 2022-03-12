import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/Products.css';
import CustomPaginationActionsTable from 'components/Admin/ProductsTable.js';
import productService from '../../services/ProductService.js';
import brandService from '../../services/BrandService.js';
import categoryService from '../../services/CategoryService.js';
import subCategoryService from '../../services/SubCategoryService.js';
import referralService from '../../services/ReferralService.js';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getCurrentUser } from '../../helpers/authHelper';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
let brand = '';
let category = '';
let subcategory = '';
function Products() {
    const [prods, setProds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [brands, setBrands] = useState();
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState();
    const [subCategories, setSubCategories] = useState([]);
    const [radio, setRadio] = useState("radioA");
    useEffect(() => {
        productService.getProducts().then((products) => {
            if (products.status === 'success') {
                setProds(products?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        brandService.getBrands().then((brands) => {
            if (brands.status === 'success') {
                setBrands(brands?.data);
                setLoading2(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        categoryService.getCategories().then((cats) => {
            if (cats.status === 'success') {
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

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const handleFileSelect1 = (event) => {
        setSelectedFile1(event.target.files[0])
    }
    const handleFileSelect2 = (event) => {
        setSelectedFile2(event.target.files[0])
    }

    const addProduct = (e) => {
        e.preventDefault();
        //setInputField({ name: '', description: '' });
        //console.log(inputField.name);
        //console.log(inputField.description);
        //console.log(brand);
        //console.log(category);
        //console.log(subcategory);
        //console.log(selectedFile1);
        //console.log(selectedFile2);
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE2NDYxNTAzMDQsImV4cCI6MTY0ODc0MjMwNH0.qqgZmIJU6rjjQJfJ0nMScDhlFLnssC35ozSpLzIMMvo';

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }


        const formData = new FormData();
        formData.append('name', inputField.name);
        formData.append('sub_info', inputField.description);
        formData.append('description', inputField.description);
        formData.append('brand_id', brand);
        formData.append('category_id', category);
        formData.append('sub_category_id', subcategory);
        formData.append('video', selectedFile1);
        //formData.append('video_thumbnail', selectedFile2);
        //console.log(formData.get('video_thumbnail'));

        productService.insertProduct(formData).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })


        // axios.post('https://apimvp.deepchainlabs.com/api/v1/products', formData, { headers })
        //     .then(response => { console.log(response) })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //     });
    }

    // {
    //     name: inputField.name,
    //     sub_info: inputField.description,
    //     description: inputField.description,
    //     brand_id: brand,
    //     category_id: category,
    //     sub_category_id: subcategory,
    //     video: selectedFile1,
    //     video_thumbnail: selectedFile2
    // }


    //Add Barnd, Category and Sub Category
    let [brandName, setBrandName] = useState('');
    let [categoryName, setCategoryName] = useState('');
    let [categoryIcon, setCategoryIcon] = useState(null);
    let [subCategoryName, setSubCategoryName] = useState('');
    let [done, setDone] = useState(false);

    const brandHandler = (e) => {
        brand = e.target.value;

    }

    const handleCategoryFileSelect = (event) => {
        setCategoryIcon(event.target.files[0]);
    }

    const categoryHandler = (e) => {
        subCategoryService.getSubCategories({ category_id: catId }).then((subcats) => {
            if (subcats.status === 'success') {
                // subcats?.data.map((b) => {
                //     if (catId == b.category_id) {
                //         setSubCategories(subCategories => [...subCategories, subcats?.data]);
                //     }
                // })
                setSubCategories(subcats?.data);
                category = e.target.value;
                setLoading2(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const subCategoryHandler = (e) => {
        subcategory = e.target.value;
    };


    let [cat2, setCat2] = useState('');
    const categoryHandler2 = (e) => {
        setCat2(e.target.value);
    }

    const addInfo = () => {
        if (radio === 'radioA') {
            brandService.insertBrand({ name: brandName }).then((res) => {
                if (res.status === 'success') {
                    console.log(res);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        if (radio === 'radioB') {
            const formData = new FormData();
            formData.append('name', categoryName);
            formData.append('icon', categoryIcon);
            categoryService.insertCategory(formData).then((res) => {
                if (res.status === 'success') {
                    setDone(true);
                    document.getElementById("addInfoModal").classList.remove("show", "d-block");
                    document.querySelectorAll(".modal-backdrop")
                        .forEach(el => el.classList.remove("modal-backdrop"));
                    toast.success('Category added successfuly!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        if (radio === 'radioC') {
            subCategoryService.insertSubCategory({ name: subCategoryName, category_id: cat2 }).then((res) => {
                if (res.status === 'success') {
                    console.log(res);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        if (done) {
            setCategoryName('');
            setCategoryIcon(null);
        }
    }, [done])

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
                                <div className='d-flex justify-content-between mx-5'>
                                    <button className="addProducts" data-toggle="modal" data-target="#addInfoModal">ADD INFO +</button>
                                    <button className="addProducts" data-toggle="modal" data-target="#addProductsModal">ADD PRODUCTS +</button>
                                </div>
                                <div className='productInfo'>
                                    <CustomPaginationActionsTable data={prods} />
                                </div>
                            </div>
                        </div>

                        {/* Product Modal */}
                        <div className="modal fade" id="addProductsModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <form onSubmit={addProduct}>
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
                                                </select>
                                                <br />
                                                <label className='videoLabel'>Video<sup className='text-danger'>*</sup></label>
                                                <label className="custom-file-upload1 text-white">
                                                    <input type="file" onChange={handleFileSelect1} />
                                                    Upload <i className="fa-solid fa-arrow-up"></i>
                                                </label><br />
                                                <label className='thumbLabel'>Thumbnail</label>
                                                <label className="custom-file-upload2 text-white">
                                                    <input type="file" name='thumb' onChange={handleFileSelect2} />
                                                    Upload <i className="fa-solid fa-arrow-up"></i>
                                                </label><br />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type='submit' className="addProducts">ADD PRODUCTS +</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        {/* Info Modal */}
                        <div className="modal fade" id="addInfoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <h2 className='text-center'>Add Info</h2>
                                        <div className=''>
                                            <div className="options">
                                                <input type="radio" id="radioA" value="radioA" checked={radio === "radioA"} onChange={(e) => { setRadio(e.target.value) }} />
                                                <input type="radio" id="radioB" value="radioB" checked={radio === "radioB"} onChange={(e) => { setRadio(e.target.value) }} />
                                                <input type="radio" id="radioC" value="radioC" checked={radio === "radioC"} onChange={(e) => { setRadio(e.target.value) }} />
                                                <label htmlFor="radioA" className={radio === "radioA" ? "activeRadio" : ''}>
                                                    <span>Brand</span>
                                                </label>
                                                <label htmlFor="radioB" className={radio === "radioB" ? "activeRadio" : ''}>
                                                    <span>Category</span>
                                                </label>
                                                <label htmlFor="radioC" className={radio === "radioC" ? "activeRadio" : ''}>
                                                    <span>Sub Category</span>
                                                </label>
                                            </div>
                                        </div>
                                        <hr />
                                        {radio === 'radioA' &&
                                            <>
                                                <label className='nameLabel'>Brand Name<sup className='text-danger'>*</sup></label><input type="text" className="brandName" name="brandName" onChange={event => setBrandName(event.target.value)} />
                                                <br />
                                            </>
                                        }
                                        {radio === 'radioB' &&
                                            <>
                                                <label className='nameLabel'>Category Name<sup className='text-danger'>*</sup></label><input type="text" className="categoryName" name="categoryname" onChange={event => setCategoryName(event.target.value)} />
                                                <br />
                                                <label className='thumbLabel'>Category Icon<sup className='text-danger'>*</sup></label>
                                                <label className="custom-file-upload3 text-white">
                                                    <input type="file" name='thumb' onChange={handleCategoryFileSelect} />
                                                    Upload <i className="fa-solid fa-arrow-up"></i>
                                                </label><br />
                                            </>
                                        }
                                        {radio === 'radioC' &&
                                            <>
                                                <label className='nameLabel'>Category<sup className='text-danger'>*</sup></label>
                                                <select name="brands" id="barnds" className='category text-white' onChange={categoryHandler2}>
                                                    <option value="0">Select a category</option>
                                                    {categories?.map((b) => (
                                                        <option key={b.id} value={b.id}>{b.name}</option>
                                                    ))}
                                                </select><br />
                                                <label className='nameLabelSub'>Sub Category<sup className='text-danger'>*</sup></label><input type="text" className="subcategoryName" name="subcategoryName" onChange={event => setSubCategoryName(event.target.value)} />
                                                <br />
                                            </>
                                        }
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={addInfo} className="addProducts">ADD INFO +</button>
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