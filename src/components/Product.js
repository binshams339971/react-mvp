import '../assets/css/Product.css'
import acer1 from '../assets/images/acer-1.png'
import acer2 from '../assets/images/acer-2.png'
import acer3 from '../assets/images/acer-3.png'
import acer4 from '../assets/images/acer-4.png'
import acer5 from '../assets/images/acer-5.png'
import playIcon from '../assets/images/play.svg'
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import productService from '../services/ProductService.js';
import subCategoryService from '../services/SubCategoryService.js';
import { useEffect, useState } from 'react';
function Product(props) {
    let [product, setProduct] = useState();
    let [subCategory, setSubCategory] = useState([]);
    let [loading, setLoading] = useState(true);
    let [loading2, setLoading2] = useState(true);
    useEffect(() => {
        let mounted = true;
        productService.getProducts({ include: 'SubCategory' }).then((products) => {
            if (products.status == 'success') {
                if (mounted) {
                    setProduct(products.data);
                    setLoading(false);
                }
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        // subCategoryService.getSubCategories().then((subCat) => {
        //     if (subCat.status == 'success') {
        //         setSubCategory(subCat.data);
        //         setLoading2(false);
        //     } else {
        //         console.log("Failed");
        //     }
        // })
    }, []);

    useEffect(() => {
        console.log(product);
    }, [product]);

    const products = [
        {
            id: 1,
            img: acer1,
        },
        {
            id: 2,
            img: acer2,
        },
        {
            id: 3,
            img: acer3,
        },
        {
            id: 4,
            img: acer4,
        },
        {
            id: 5,
            img: acer5,
        },
        {
            id: 6,
            img: acer1,
        },
        {
            id: 7,
            img: acer5,
        },
        {
            id: 8,
            img: acer1,
        },
    ];
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 760, itemsToShow: 3 },
        { width: 900, itemsToShow: 5 },
    ];
    return (
        <>
            <div className='mt-5'>
                <h3 style={{ marginLeft: "5%" }}>Sub Category Name</h3>
                <Carousel breakPoints={breakPoints} >
                    {products.map((product) =>
                        <div className="cards" key={product.id}>
                            <img className="card-img" src={product.img} />
                            <div className="info">
                                <span>ACER<br />ASPIRE 4</span><br />
                                <Link to={`/details/${product.id}`} className="view_now-btn">View Now
                                    <img src={playIcon} className="play-icon" />
                                </Link>

                            </div>
                        </div>
                    )
                    }
                </Carousel >
            </div >
            {/* {!loading ?
                product?.map((sub) => {
                    <div className='mt-5'>
                        <h3 style={{ marginLeft: "5%" }}>S</h3>
                        <Carousel breakPoints={breakPoints} >
                            {products.map((product) =>
                                <div className="cards" key={product.id}>
                                    <img className="card-img" src={product.img} />
                                    <div className="info">
                                        <span>ACER<br />ASPIRE 4</span><br />
                                        <Link to={`/details/${product.id}`} className="view_now-btn">View Now
                                            <img src={playIcon} className="play-icon" />
                                        </Link>

                                    </div>
                                </div>
                            )
                            }
                        </Carousel >
                    </div >
                })
                :
                <div className='row'>
                    <Box sx={{ display: 'flex', margin: "auto", height: "500px" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            } */}
        </>
    )
}
export default Product;