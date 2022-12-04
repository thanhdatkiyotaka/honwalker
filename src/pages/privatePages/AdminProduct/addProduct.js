/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Trang home của phần admin */
import React from 'react';

class AdminAddProduct extends React.Component {
    static defaultProps = { activeClass: { 'product': 'active', 'addProduct': 'active' } };
    render() {
        return (
            <div className="container-fluid add-form-list">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Add Product</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form action="page-list-product.html" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Product Type *</label>
                                                <select name="type" className="selectpicker form-control" data-style="py-0">
                                                    <option>Standard</option>
                                                    <option>Combo</option>
                                                    <option>Digital</option>
                                                    <option>Service</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Name *</label>
                                                <input type="text" className="form-control" placeholder="Enter Name" data-errors="Please Enter Name." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Code *</label>
                                                <input type="text" className="form-control" placeholder="Enter Code" data-errors="Please Enter Code." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Barcode Symbology *</label>
                                                <select name="type" className="selectpicker form-control" data-style="py-0">
                                                    <option>CREM01</option>
                                                    <option>UM01</option>
                                                    <option>SEM01</option>
                                                    <option>COF01</option>
                                                    <option>FUN01</option>
                                                    <option>DIS01</option>
                                                    <option>NIS01</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Category *</label>
                                                <select name="type" className="selectpicker form-control" data-style="py-0">
                                                    <option>Beauty</option>
                                                    <option>Grocery</option>
                                                    <option>Food</option>
                                                    <option>Furniture</option>
                                                    <option>Shoes</option>
                                                    <option>Frames</option>
                                                    <option>Jewellery</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Cost *</label>
                                                <input type="text" className="form-control" placeholder="Enter Cost" data-errors="Please Enter Cost." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Price *</label>
                                                <input type="text" className="form-control" placeholder="Enter Price" data-errors="Please Enter Price." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Tax Method *</label>
                                                <select name="type" className="selectpicker form-control" data-style="py-0">
                                                    <option>Exclusive</option>
                                                    <option>Inclusive</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Quantity *</label>
                                                <input type="text" className="form-control" placeholder="Enter Quantity" required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Image</label>
                                                <input type="file" className="form-control image-file" name="pic" accept="image/*" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description / Product Details</label>
                                                <textarea className="form-control" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-2">Add Product</button>
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAddProduct;