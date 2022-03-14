import '../assets/css/Sidebar.css';
import { motion } from "framer-motion"
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { isLoggedIn } from '../helpers/authHelper';
import categoryService from '../services/CategoryService.js';
import subCategoryService from '../services/SubCategoryService.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Sidebar(props) {
    const [isActive, setActive] = useState();
    const [bodyHeight, setBodyHeight] = useState(0);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
    };
    useEffect(() => {
        let x = window.document.body.offsetHeight - 420;
        //let x = window.innerHeight - 100;
        setBodyHeight(x);
    });

    useEffect(() => {
        categoryService.getCategories().then((cats) => {
            if (cats.status == 'success') {
                setCategories(cats?.data);
                setLoading(false)
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            {!loading ?
                <>
                    <motion.div className="row side-menu" id="sideMenu" animate={{ x: props.x }} transition={{ ease: "easeOut", duration: 1 }} style={{ height: bodyHeight }}>
                        <h2 className="cat-header">Categories</h2>
                        <ul className="cat-list">
                            {categories?.map((c) => (
                                <>
                                    <Link to={`/category/${c.name}/${c.id}`} key={c.id}><li><i className="fa-solid fa-shirt"></i>{c.name}</li></Link>
                                    <hr />
                                </>
                            ))}
                        </ul>
                        <div className='text-center' style={{ marginTop: "450px", marginBottom: "30px" }}>
                            {isLoggedIn() ? <Link to='/admins/dashboard' className='sign-in-btn'>Dashboard</Link> : <Link to='/signin' className='sign-in-btn'>Sign in</Link>}
                        </div>
                        {/* <div className='text-center d-md-none d-block' style={{ marginBottom: "30px" }}>
                            {isLoggedIn() && <Link to='/' className='sign-in-btn'>Sign Out</Link>}
                        </div> */}
                    </motion.div >
                </> : <div className='row'>
                    <Box sx={{ display: 'flex', marginTop: "300px", marginLeft: "100px", height: "500px" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}

export default Sidebar;

// {`/category/${c.name}/${c.id}`}

{/* <>
<Link to='#' key={c.id} onMouseEnter={toggleClass} onMouseLeave={toggleClass}><li><i className="fa-solid fa-shirt"></i>{c.name}</li></Link>
<hr />
<ul className={isActive ? 'sub-cat-list' : 'sub-cat-list1'}>
    <a href="#"><li><span>-</span> Smart TV</li></a>
    <a href="#"><li><span>-</span> Laptop</li></a>
</ul>
</> */}