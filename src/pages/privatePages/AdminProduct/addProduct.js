/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* Trang home của phần admin */
import React from 'react';
import axios from 'axios';

class AdminAddProduct extends React.Component {
    static defaultProps = { activeClass: { 'product': 'active', 'addProduct': 'active' } };
    state = { product: null };
    componentDidMount() {
    }

    createProduct = () => {
        const data = new FormData();
        
        for (let i = 0; i < this.state.selectedFile.length; i++) {
            data.append("file[]", this.state.selectedFile[i]);
        }

        ["TYPEONE", "TYPETWO", "TYPETHERE", "TEN_SP", "NHACUNGCAP_SP", "GIA_SP", "SOLD", "MOTA"].forEach(i => {
            data.append(i,  document.getElementById(i).value);
        })
        axios({
            method: 'post',
            url: 'http://localhost:8000/admin/createProduct.php',
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(res => {
            if (res.status == 200) {
                document.getElementById('success').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('success').style.display = 'none';
                }, 2000)
            }
        })
    }

    uploadImage = (event) => {
        this.setState({
            selectedFile: event.target.files,
        });
    }

    render() {
        return (
            <div className="container-fluid add-form-list">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Tạo mới sản phẩm</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form action="page-list-product.html" data-toggle="validator">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Loại 1 *</label>
                                                <select id='TYPEONE' name="TYPEONE" className="selectpicker form-control" data-style="py-0">
                                                    <option value="Sach Tieng Viet">Sách tiếng Việt</option>
                                                    <option value="Dung cu - Van phong">Dụng cụ văn phòng</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Loại 2 *</label>
                                                <select id='TYPETWO' name="TYPETWO" className="selectpicker form-control" data-style="py-0">
                                                    <option value="But - Viet">Bút - Viết</option>
                                                    <option value="Van - hoc">Văn học</option>
                                                    <option value="kinh te">Kinh tế</option>
                                                    <option value="sach thieu nhi">Sách thiếu nhi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Loại 3 *</label>
                                                <select id='TYPETHERE' name="TYPETHERE" className="selectpicker form-control" data-style="py-0">
                                                    <option value="ngon tinh">Ngôn tình</option>
                                                    <option value="quan tri - lanh dao">Quản trị lãnh đạo</option>
                                                    <option value="Light novel">Light Novel</option>
                                                    <option value="manga">Manga</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Tên *</label>
                                                <input type="text" id='TEN_SP' name='TEN_SP' className="form-control" placeholder="Tên sản phẩm" data-errors="Please Enter Name." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Nhà cung cấp *</label>
                                                <input type="text" id='NHACUNGCAP_SP' name='NHACUNGCAP_SP' className="form-control" placeholder="Nhà cung cấp" data-errors="Please Enter Code." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                      
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Giá *</label>
                                                <input type="number" id='GIA_SP' name='GIA_SP' className="form-control" placeholder="Giá" data-errors="Please Enter Cost." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Số lượng *</label>
                                                <input type="number" id='SOLD' name='SOLD' className="form-control" placeholder="Giá" data-errors="Please Enter Cost." required />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Mô tả</label>
                                                <textarea name='MOTA' id='MOTA' className="form-control" rows="4"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Hình ảnh</label>
                                                <input type="file" id='image' onChange={this.uploadImage} className="form-control image-file" name="pic" accept="image/*" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" onClick={this.createProduct} className="btn btn-primary mr-2">Tạo mới</button>
                                    <button type="reset" className="btn btn-danger">Reset</button>
                                </form>
                                <div className="alert text-white bg-success" role="alert" id='success' style={{display: 'none'}}>
                                    <div className="iq-alert-text">Tạo sản phẩm <b>thành công</b>!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminAddProduct;