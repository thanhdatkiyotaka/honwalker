/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Trang home của phần admin */
import React from 'react';
export class AdminHome extends React.Component {
    static defaultProps = { activeClass: { 'home': 'active' } };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-transparent card-block card-stretch card-height border-none">
                            <div className="card-body p-0 mt-lg-2 mt-0">
                                <h3 className="mb-3">Chào</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-info-light">
                                                <img src={require("src/assets/admin/images/product/1.png")} className="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Total Sales</p>
                                                <h4>31.50</h4>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-info iq-progress progress-1" data-percent="85">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-danger-light">
                                                <img src={require("src/assets/admin/images/product/2.png")} className="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Total Cost</p>
                                                <h4>$ 4598</h4>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-danger iq-progress progress-1" data-percent="70">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="card card-block card-stretch card-height">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-4 card-total-sale">
                                            <div className="icon iq-icon-box-2 bg-success-light">
                                                <img src={require("src/assets/admin/images/product/2.png")} className="img-fluid" alt="image" />
                                            </div>
                                            <div>
                                                <p className="mb-2">Product Sold</p>
                                                <h4>4589 M</h4>
                                            </div>
                                        </div>
                                        <div className="iq-progress-bar mt-2">
                                            <span className="bg-success iq-progress progress-1" data-percent="75">
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;