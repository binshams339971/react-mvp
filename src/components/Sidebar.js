import '../assets/css/Sidebar.css';
import { motion } from "framer-motion"
function Sidebar(props) {
    return (
        <motion.div className="side-menu" id="sideMenu" animate={{ x: props.x }} transition={{ ease: "easeOut", duration: 1 }}>
            <h2 className="cat-header">Categories</h2>
            <ul className="cat-list">
                <li><i className="fa-solid fa-headset"></i>Electronics</li>
                <hr />
                <li><i className="fa-solid fa-shirt"></i>Clothings</li>
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
        </motion.div >
    )
}

export default Sidebar;