import '../assets/css/Sidebar.css';
function Sidebar() {
    return (
        <div className="side-menu" id="sideMenu">
            <h1 className="cat-header">Categories</h1>
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
        </div >
    )
}

export default Sidebar;