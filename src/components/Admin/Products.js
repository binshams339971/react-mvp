import AdminSidebar from './AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';
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
    let navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [prods, setProds] = useState([]);

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
    }, []);


    // *****
    //     Add Product Information
    // *****

    const [loading2, setLoading2] = useState(true);
    const [brands, setBrands] = useState();
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState();
    const [subCategories, setSubCategories] = useState([]);
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    useEffect(() => {
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
    }, [])
    useEffect(() => {
        //console.log(brands);
    }, [prods, brands, categories, subCategories]);


    const brandHandler = (e) => {
        brand = e.target.value;
    }

    const categoryHandler = (e) => {
        subCategoryService.getSubCategories({ category_id: e.target.value }).then((subcats) => {
            if (subcats.status === 'success') {
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

    const videoFileSelect = (event) => {
        setVideoFile(event.target.files[0])
    }
    const thumbnailFileSelect = (event) => {
        setThumbnailFile(event.target.files[0])
    }

    const [inputField, setInputField] = useState({
        name: '',
        description: '',
    })

    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    let [nameError, setNameError] = useState('');
    let [descriptionError, setDescriptionError] = useState('');
    let [brandError, setBrandError] = useState('');
    let [categoryError, setCategoryError] = useState('');
    let [subcategoryError, setSubcategoryError] = useState('');
    let [videoFileError, setVideoFileError] = useState('');
    const validation = () => {
        var a = 0;
        if (inputField.name === '') {
            setNameError('Please enter product name');
        } else {
            setNameError('');
            ++a;
        }
        if (inputField.description === '') {
            setDescriptionError('Please enter product description');
        } else {
            setDescriptionError('');
            ++a;
        }
        if (brand === '') {
            setBrandError('Please select brand');
        } else {
            setBrandError('');
            ++a;
        }
        if (category === '') {
            setCategoryError('Please select category');
        } else {
            setCategoryError('');
            ++a;
        }
        if (subcategory === '') {
            setSubcategoryError('Please select sub-category');
        } else {
            setSubcategoryError('');
            ++a;
        }
        if (videoFile === null) {
            setVideoFileError('Please insert video');
        } else {
            if (videoFile.size < 4000000) {
                var fields = videoFile.type.split('/');
                if (fields[0] == 'video') {
                    setVideoFileError('');
                    ++a;
                } else {
                    setVideoFileError('Please insert video file only');
                }
            } else {
                setVideoFileError('Video size must be less than 4 MB');
            }
        }
        return a;
    }

    const addProduct = (e) => {
        e.preventDefault();
        validation();
        // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJUeXBlIjoiYWRtaW4iLCJpYXQiOjE2NDYxNTAzMDQsImV4cCI6MTY0ODc0MjMwNH0.qqgZmIJU6rjjQJfJ0nMScDhlFLnssC35ozSpLzIMMvo';
        // const headers = {
        //     Authorization: `Bearer ${token}`,
        //     'Content-Type': 'multipart/form-data'
        // }

        if (1) {
            const formData = new FormData();
            formData.append('name', inputField.name);
            formData.append('sub_info', inputField.description);
            formData.append('description', inputField.description);
            formData.append('brand_id', brand);
            formData.append('category_id', category);
            formData.append('sub_category_id', subcategory);
            formData.append('video', videoFile);
            //formData.append('video_thumbnail', thumbnailFile);
            console.log(formData.get('video'));

            // productService.insertProduct(formData).then((res) => {
            //     console.log(res);
            // }).catch((err) => {
            //     console.log(err);
            // })
        }


        // axios.post('https://apimvp.deepchainlabs.com/api/v1/products', formData, { headers })
        //     .then(response => { console.log(response) })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //     });
    }



    // *****
    // Add Barnd, Category and Sub Category
    // *****
    const [radio, setRadio] = useState("radioA");
    let [brandName, setBrandName] = useState('');
    let [categoryName, setCategoryName] = useState('');
    let [categoryIcon, setCategoryIcon] = useState(null);
    let [subCategoryName, setSubCategoryName] = useState('');
    let [cat2, setCat2] = useState('');


    const handleCategoryFileSelect = (event) => {
        setCategoryIcon(event.target.files[0]);
    }

    const categoryHandler2 = (e) => {
        setCat2(e.target.value);
    }

    const addInfo = () => {
        if (radio === 'radioA') {
            if (brandName !== '') {
                const formData1 = new FormData();
                formData1.append('name', brandName);
                console.log(formData1.get('name'));
                brandService.insertBrand(formData1).then((res) => {
                    if (res.status === 'success') {
                        console.log(res);
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
                        navigate('/admins/dashboard');
                    }
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                toast.error('Please enter brand name!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        if (radio === 'radioB') {
            if (categoryName !== '' && categoryIcon !== null) {
                const formData2 = new FormData();
                formData2.append('name', categoryName);
                formData2.append('icon', categoryIcon);
                categoryService.insertCategory(formData2).then((res) => {
                    if (res.status === 'success') {
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
                        navigate('/admins/dashboard');
                    }
                }).catch((err) => {
                    console.log(err);
                });
            } else if (categoryName == '') {
                toast.error('Please enter category name!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (categoryIcon == null) {
                toast.error('Please add category icon!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        }
        if (radio === 'radioC') {
            if (subCategoryName !== '' && cat2 !== '') {
                const formData3 = new FormData();
                formData3.append('name', subCategoryName);
                formData3.append('category_id', cat2);
                subCategoryService.insertSubCategory(formData3).then((res) => {
                    if (res.status === 'success') {
                        console.log(res);
                        document.getElementById("addInfoModal").classList.remove("show", "d-block");
                        document.querySelectorAll(".modal-backdrop")
                            .forEach(el => el.classList.remove("modal-backdrop"));
                        toast.success('Sub-category added successfuly!', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        navigate('/admins/dashboard');
                    }
                }).catch((err) => {
                    console.log(err);
                })
            } else if (cat2 === '') {
                toast.error('Please select a category!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (subCategoryName === '') {
                toast.error('Please enter sub-category name!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
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
                                                <p className="errorMssg">{brandError}</p>

                                                <label className='nameLabel'>Product Name<sup className='text-danger'>*</sup></label><input type="text" className="itemName" name="name" onChange={inputsHandler} value={inputField.name} /><br />
                                                <p className="errorMssg">{nameError}</p>

                                                <label className='desLabel'>Description<sup className='text-danger'>*</sup></label><input type="text" className="description" name="description" onChange={inputsHandler} value={inputField.description} /><br />
                                                <p className="errorMssg">{descriptionError}</p>

                                                <label className='nameLabel'>Category<sup className='text-danger'>*</sup></label>
                                                <select name="brands" id="barnds" className='category text-white' onChange={categoryHandler}>
                                                    <option value="0">Select a category</option>
                                                    {categories?.map((b) => (
                                                        <option key={b.id} value={b.id}>{b.name}</option>
                                                    ))}
                                                </select><br />
                                                <p className="errorMssg">{categoryError}</p>

                                                <label className='nameLabel'>Sub Category<sup className='text-danger'>*</sup></label>
                                                <select name="brands" id="barnds" className='subcategory text-white' onChange={subCategoryHandler}>
                                                    <option value="0">Select a subcategory</option>
                                                    {subCategories?.map((b) => (
                                                        <option key={b.id} value={b.id}>{b.name}</option>
                                                    ))}
                                                </select>
                                                <br />
                                                <p className="errorMssg">{subcategoryError}</p>

                                                <label className='videoLabel'>Video<sup className='text-danger'>*</sup></label>
                                                <label className="custom-file-upload1 text-white">
                                                    <input type="file" onChange={videoFileSelect} />
                                                    Upload <i className="fa-solid fa-arrow-up"></i>
                                                </label><br />
                                                <p className="errorMssg">{videoFileError}</p>

                                                <label className='thumbLabel'>Thumbnail</label>
                                                <label className="custom-file-upload2 text-white">
                                                    <input type="file" name='thumb' onChange={thumbnailFileSelect} />
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