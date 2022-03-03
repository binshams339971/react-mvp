import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/Users.css';
function Users() {

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <AdminSidebar />
                    <div className='col-md-8'>
                        <div className='d-flex justify-content-between'>
                            <Link to="/">
                                <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                    keyboard_backspace
                                </span>
                            </Link>
                            <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Customer</h3>
                            <h3 className=''></h3>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex justify-content-center'>
                                <input type="text" placeholder="Search" className='searchBox0' />
                            </div>
                            <div className='userInfo'>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">User ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone No</th>
                                            <th scope="col">Share</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-row" data-href="http://tutorialsplane.com">
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </>
    )
}

export default Users;