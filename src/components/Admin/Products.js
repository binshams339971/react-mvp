import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
function Products() {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <AdminSidebar />
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-between'>
                            <Link to="/">
                                <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                    keyboard_backspace
                                </span>
                            </Link>
                            <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Overview</h3>
                            <h3 className=''></h3>
                        </div>
                        <div className=''>
                            <h3>Hello</h3>
                        </div>
                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;