import '../assets/css/Sidebar.css';
import { motion } from "framer-motion"
import { useState } from 'react';
import { Link } from "react-router-dom";
function Sidebar(props) {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <motion.div className="side-menu" id="sideMenu" animate={{ x: props.x }} transition={{ ease: "easeOut", duration: 1 }}>
            <h2 className="cat-header">Categories</h2>
            <ul className="cat-list">
                <a onClick={toggleClass}><li><i className="fa-solid fa-headset"></i>Electronics</li></a>
                <hr />
                <motion.ul className={isActive ? 'sub-cat-list' : 'sub-cat-list1'} animate={{ y: [-50, 0] }} transition={{ ease: "easeOut", duration: 4 }}>
                    <a href="#"><li><span>-</span> Smart TV</li></a>
                    <a href="#"><li><span>-</span> Laptop</li></a>
                </motion.ul>
                <a href="#"><li><i className="fa-solid fa-shirt"></i>Clothings</li></a>
                <hr />
                <li><i className="fa-solid fa-headset"></i>Shows</li>
                <hr />
                <li><i className="fa-solid fa-headset"></i>Households</li>
                <hr />
                <li><i className="fa-solid fa-headset"></i>Electronics</li>
                <hr />
                <li><i className="fa-solid fa-headset"></i>Electronics</li>
                <hr />
            </ul>
            <div className='text-center' style={{ marginTop: "450px" }}>
                <Link to='/' className="sign-in-btn">Sign in</Link>
            </div>
        </motion.div >
    )
}

export default Sidebar;