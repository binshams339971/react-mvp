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
import brandService from '../services/BrandService.js';
import subCategoryService from '../services/SubCategoryService.js';
import fileService from '../services/FileService.js';
import { useEffect, useState } from 'react';

function Product(props) {
    let [product, setProduct] = useState([]);
    let [subCategory, setSubCategory] = useState([]);
    let [brand, setBrand] = useState([]);
    let [loading, setLoading] = useState(true);
    let [loading2, setLoading2] = useState(true);
    let [thumb, setThumb] = useState();

    useEffect(() => {
        productService.getProducts({ include: 'SubCategory' }).then((products) => {
            if (products.status === 'success') {
                // products.data?.map((p) => {
                //     fileService.getFileURL(p.video_thumbnail_src).then((res) => {
                //         if (res.status == 'success') {
                //             p.video_thumbnail_src = res.url;
                //             setLoading(false);
                //         }
                //     });
                // })
                setProduct(products.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        brandService.getBrands().then((brands) => {
            if (brands.status === 'success') {
                setBrand(brands?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 760, itemsToShow: 3 },
        { width: 900, itemsToShow: 5 },
    ];
    return (
        <>
            {!loading ?
                brand.map((b) =>
                    <div className='mt-5' key={b.id}>
                        <h3 style={{ marginLeft: "5%" }}>{b.name}</h3>
                        <Carousel breakPoints={breakPoints} >
                            {product?.map((p) =>
                                b.id === p.brand_id &&
                                <div className="cards" key={p.id}>
                                    <img className="card-img" src={`https://apimvp.deepchainlabs.com/${p.video_thumbnail_src}`} alt="abc" />
                                    <div className="info">
                                        <span>{p.name}<br />{p.sub_info}</span><br />
                                        <Link to={`/details/${p.id}`} className="view_now-btn">View Now
                                            <img src={playIcon} className="play-icon" />
                                        </Link>

                                    </div>
                                </div>
                            )
                            }
                        </Carousel >
                    </div >
                )
                :
                <div className='row'>
                    <Box sx={{ display: 'flex', margin: "auto", height: "500px" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}
export default Product;

// src={`https://apimvp.deepchainlabs.com/${p.video_thumbnail_src}`}