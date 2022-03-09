import React from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import playIcon from '../assets/images/play.svg'
import productService from '../services/ProductService.js';
import subCategoryService from '../services/SubCategoryService.js';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Carousel from 'react-elastic-carousel';
export default function Category() {
    let [loading, setLoading] = useState(true);
    var { cId, cName } = useParams();
    let [product, setProduct] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        setLoading(true);
        productService.getProducts({ category_id: cId }).then((products) => {
            if (products.status === 'success') {
                setProduct(products.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [cName]);

    useEffect(() => {
        subCategoryService.getSubCategories().then((subcats) => {
            if (subcats.status == 'success') {
                setSubCategories(subcats?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, [])

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
                <div className='container' id="content">
                    <div className='d-flex justify-content-between'>
                        <Link to="/">
                            <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                keyboard_backspace
                            </span>
                        </Link>
                        <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>{cName}</h3>
                        <h3 className=''></h3>
                    </div>
                    <>
                        {subCategories?.map((s) => (
                            s.category_id == cId &&
                            <div className='mt-3'>
                                <h3 style={{ marginLeft: "5%" }}>{s.name}</h3>
                                <Carousel breakPoints={breakPoints} >
                                    {product?.map((p) =>
                                        s.id == p.sub_category_id &&
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
                            </div>
                        ))}

                    </>
                </div> :
                <div className='row'>
                    <Box sx={{ display: 'flex', margin: "auto", height: "500px" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}
