import '../assets/css/Product.css'
import acer1 from '../assets/images/acer-1.png'
import acer2 from '../assets/images/acer-2.png'
import acer3 from '../assets/images/acer-3.png'
import acer4 from '../assets/images/acer-4.png'
import acer5 from '../assets/images/acer-5.png'
import playIcon from '../assets/images/play.svg'
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";
// import ProductService from '../services/ProductService.js';
import { useEffect } from 'react'
function Product(props) {
    // useEffect(() => {
    //     let a = ProductService.getProducts();
    //     console.log(a);
    // })
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
        <div className='mt-5'>
            <h3 style={{ marginLeft: "5%" }}>{props.name}</h3>
            <Carousel breakPoints={breakPoints} >
                {products.map((product) =>
                    <div class="cards">
                        <img class="card-img" src={product.img} />
                        <div class="info">
                            <span>ACER<br />ASPIRE 4</span><br />
                            <Link to={`/details/${product.id}`} class="view_now-btn">View Now
                                <img src={playIcon} class="play-icon" />
                            </Link>

                        </div>
                    </div>
                )
                }
            </Carousel >
        </div >
    )
}
export default Product;