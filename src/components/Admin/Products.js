import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/Products.css';
function Products() {

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
                            <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>All Products</h3>
                            <h3 className=''></h3>
                        </div>
                        <div className='mt-4'>
                            <div className='d-flex justify-content-between'>
                                <input type="text" placeholder="Search" className='searchBox' />
                                <button className="addProducts" data-toggle="modal" data-target="#addProductsModal">ADD PRODUCTS +</button>
                            </div>
                            <div className='productInfo'>
                                <table class="table table-sm">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">In Stock</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Shared</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
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

                    <div class="modal fade" id="addProductsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h2 className='text-center'>Add Item</h2>
                                    <div className='inputs'>
                                        <label className='nameLabel'>Name<sup className='text-danger'>*</sup></label><input type="text" className="itemName" /><br />
                                        <label className='priceLabel'>Price<sup className='text-danger'>*</sup></label><input type="text" className="price" /><br />
                                        <label className='desLabel'>Description<sup className='text-danger'>*</sup></label><input type="text" className="description" /><br />
                                        <label className='videoLabel'>Video<sup className='text-danger'>*</sup></label>
                                        <label className="custom-file-upload1 text-white">
                                            <input type="file" />
                                            Upload <i class="fa-solid fa-arrow-up"></i>
                                        </label><br />
                                        <label className='thumbLabel'>Thumbnail</label>
                                        <label className="custom-file-upload2 text-white">
                                            <input type="file" />
                                            Upload <i class="fa-solid fa-arrow-up"></i>
                                        </label><br />

                                    </div>

                                </div>
                                <div class="modal-footer">
                                    <button className="addProducts">ADD PRODUCTS +</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-1'></div>
                </div>
            </div>
        </>
    )
}

export default Products;