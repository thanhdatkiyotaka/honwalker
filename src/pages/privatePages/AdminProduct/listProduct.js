/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Trang home của phần admin */
import React from 'react';
import axios from 'axios';

class AdminProduct extends React.Component {
    static defaultProps = { activeClass: { 'product': 'active', 'listProduct': 'active' } };
    state = { products: [] };
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://localhost:8000/admin/product.php',
        }).then(res => {
            this.setState({ products: res.data });
            document.getElementById('hide').style.display = 'none'
        })
}

render() {
    const { products } = this.state;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                        <div>
                            <h4 className="mb-3">Danh sách sản phẩm</h4>
                        </div>
                        <a href="/admin-add-product" className="btn btn-primary add-list"><i
                            className="las la-plus mr-3"></i>Add Product</a>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="table-responsive rounded mb-3">
                        <table className="data-tables table mb-0 tbl-server-info">
                            <thead className="bg-white text-uppercase">
                                <tr className="ligth ligth-data">
                                    <th>Sản phẩm</th>
                                    <th>Loại</th>
                                    <th>Nhà cung cấp</th>
                                    <th>Số lượng</th>
                                    <th>Đã bán</th>
                                    <th>Giá</th>
                                    <th>Tình trạng</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="ligth-body">
                                <tr id='hide'>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src={require('src/assets/images/product.jpg')}
                                                className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                            <div>
                                                Organic Cream
                                                <p className="mb-0"><small>This is test Product</small></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>CREM01</td>
                                    <td>Beauty</td>
                                    <td>$25.00</td>
                                    <td>Lakme</td>
                                    <td>$10.00</td>
                                    <td>10.0</td>
                                    <td>
                                        <div className="d-flex align-items-center list-action">
                                            <a className="badge bg-success mr-2" data-toggle="tooltip"
                                                data-placement="top" title="" data-original-title="Edit" href="#"><i
                                                    className="ri-pencil-line mr-0"></i></a>
                                            <a className="badge bg-warning mr-2" data-toggle="tooltip"
                                                data-placement="top" title="" data-original-title="Delete"
                                                href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                {products.map((product, index) => {
                                    return (
                                        <tr key={index + 1}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={require('src/assets/images/product.jpg')}
                                                        className="img-fluid rounded avatar-50 mr-3" alt="image" />
                                                    <div>
                                                        {product.TEN_SP}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{product.TYPETHERE}</td>
                                            <td>{product.NHACUNGCAP_SP}</td>
                                            <td>{product.SOLD}</td>
                                            <td>{product.SALE}</td>
                                            <td>{product.GIA_SP} VND</td>
                                            <td>{product.TINHTRANG_SP ? 'Còn hàng' : 'Hết hàng'}</td>
                                            <td>
                                                <div className="d-flex align-items-center list-action">
                                                    <a className="badge bg-success mr-2" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Edit" href={`/admin-add-product?id=${product.MA_SP}`}><i
                                                            className="ri-pencil-line mr-0"></i></a>
                                                    <a className="badge bg-warning mr-2" data-toggle="tooltip"
                                                        data-placement="top" title="" data-original-title="Delete"
                                                        href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default AdminProduct;