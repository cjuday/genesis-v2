import React,{useState} from "react";
import SEO from "../components/SEO";
import Topbar from "../components/AdminTop/Topbar";
import AdminFooter from "../components/Footer/AdminFooter";
import UploadModal from "../components/Modal/UploadModal";
import DeleteModal from "../components/Modal/DeleteModal";
import { usePage } from "@inertiajs/react";

const Dashboard = ({products, appUrl}) => {
    const { flash } = usePage().props;
    const [isModalOpen, setModalOpen] = useState(false);
    const [isUploadModalOpen, setUploadModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const openModal = (id) => {
        setSelectedProductId(id);
        setModalOpen(true);
    };
      
    const closeModal = () => {
        setModalOpen(false);
        setSelectedProductId(null);
    };

    const openUploadModal = (id) => {
        setUploadModalOpen(true);
    };
      
    const closeUploadModal = () => {
        setModalOpen(false);
        setUploadModalOpen(false);
    };
      

    const getCategory = (catId) => {
        if(catId===1) {
            return "Men";
        }else if(catId===2){
            return "Women";
        }else if(catId==3){
            return "Kids";
        }
    }

    const getSubCategory = (catId, subCatId) => {
        if(catId===1){
            if(subCatId===1) {
                return "T-Shirts";
            }else if(subCatId===2) {
                return "Polo";
            }else if(subCatId===3) {
                return "Bottom";
            }else if(subCatId===4) {
                return "Shirts";
            }else if(subCatId===5) {
                return "Sweat Shirts";
            }else if(subCatId===6) {
                return "Trousers";
            }else if(subCatId===7) {
                return "Sweaters";
            }else if(subCatId===8) {
                return "Jacket";
            }
        }else if(catId===2){
            if(subCatId===1){
                return "Tops";
            }else if(subCatId===2){
                return "Bottoms";
            }
        }else if(catId===3){
            if(subCatId===1){
                return "T-Shirts & Tops";
            }else if(subCatId===2){
                return "Sweaters & Sweat Shirt";
            }else if(subCatId===3){
                return "Trousers";
            }else if(subCatId===4){
                return "Jeans";
            }else if(subCatId===5){
                return "Shorts";
            }
        }
    }
    return (
        <React.Fragment>
            <SEO title="Genesis - Admin Dashboard" />
            <Topbar/>
            <div className="content mb-3">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-6">
                                   <h2>Products</h2>
                                </div>
                                <div className="col-6 text-end">
                                <button className="btn btn-success" onClick={openUploadModal}><i className="fa fa-upload"/> Upload Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            {flash.success && (
                                <div className="alert alert-success">
                                    {flash.success}
                                </div>
                            )}
                            {flash.errors && (
                                <div className="alert alert-danger">
                                    {flash.errors.file[0]}
                                </div>
                            )}
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-striped table-bordered text-center">
                                        <thead>
                                            <th>Product ID</th>
                                            <th>Image</th>
                                            <th>Category</th>
                                            <th>Sub-Category</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {products.data.map((product) => (
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td><img src={appUrl + product.image_url} height="120px"/></td>
                                                    <td>{getCategory(product.group_id)}</td>
                                                    <td>{getSubCategory(product.group_id, product.subgroup_id)}</td>
                                                    <td> <button onClick={() => openModal(product.id)}><i className="fa fa-trash text-danger"/></button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                        {products.links.length > 3 ? (
                            <div className="row">
                                <div className="col">
                                    <ul className="pagination center">
                                        {products.prev_page_url && (
                                            <li>
                                                <a href={products.prev_page_url}>
                                                    <i className="fa fa-angle-left"/>
                                                </a>
                                            </li>
                                        )}
                                        {products.links
                                        .filter((link) => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;')
                                        .map((link, index) => (
                                            <li>
                                                <a
                                                    key={index}
                                                    className={link.active ? 'active' : ''}
                                                    href={link.url}
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                        {products.next_page_url && (
                                            <li>
                                                <a href={products.next_page_url}>
                                                    <i className="fa fa-angle-right"/>
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            ) : ''
                        }
                        </div>
                    </div>
                </div>
            </div>
            <UploadModal isOpen={isUploadModalOpen} closeModal={closeUploadModal}/>
            <DeleteModal isOpen={isModalOpen} closeModal={closeModal} productId={selectedProductId} />
            <AdminFooter/>
        </React.Fragment>
    )
}

export default Dashboard;