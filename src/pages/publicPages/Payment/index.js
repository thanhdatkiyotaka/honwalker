
import className from 'classnames/bind';
import Product from '../Product';
import style from './Payment.module.scss';
import axios from 'axios';
import React from "react";

var cx = className.bind(style)

class Payment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/server.php').then(res => {
            this.setState({ data: res.data });
        });
    }
    render() {
        return (
            <div div className={cx('wrapper')} >
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <div className={cx('paymenttxt')}>
                            ĐỊA CHỈ GIAO HÀNG
                        </div>
                        <div className={cx('groupinfo')}>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Họ và tên</label>
                                <input type="text" placeholder='Nhập họ và tên người nhận' name='name' />
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Nhập email' />
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text" placeholder='Ví dụ: "0964643xxx" (10 số)' />
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Quốc gia</label>
                                <select name="" id="">
                                    <option value="">Việt Nam</option>
                                </select>
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Tỉnh/Thành Phố</label>
                                <input type="text" placeholder='Nhập tỉnh/thành phố' />
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Quận/Huyện</label>
                                <input type="text" placeholder='Nhập quận/huyện' />
                            </div>
                            <div className={cx('input-item')}>
                                <label htmlFor="">Địa chỉ nhận hàng</label>
                                <input type="text" placeholder='Nhập địa chỉ nhận hàng' />
                            </div>
                        </div>
                    </div>
                    <div className={cx('ship')}>
                        <div className={cx('shiptxt')}>
                            PHƯƠNG THỨC VẬN CHUYỂN
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label htmlFor="">Giao hàng tiêu chuẩn: 30000 VNĐ
                                        <input type="radio" name="radship" id="" />
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="">Giao hàng nhanh: 48000 VNĐ
                                        <input type="radio" name="radship" id="" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('payment')}>
                        <div className={cx('paymenttxt')}>
                            PHƯƠNG THỨC THANH TOÁN
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <label htmlFor="">
                                        
                                        Ví ZaloPay
                                        <input type="radio" name="radpay" id="" />
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="">
                                       
                                        Ví MoMo
                                        <input type="radio" name="radpay" id="" />
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="">
                                      
                                        Thanh toán trực tiếp khi nhận hàng
                                        <input type="radio" name="radpay" id="" />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('re-check')}>
                        <div className={cx('re-checktxt')}>
                            KIỂM TRA LẠI ĐƠN HÀNG
                        </div>
                        <div className={cx('wrap')}>
                            <table className={cx("table table-hover")}>
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th></th>
                                        <th>Tên</th>
                                        <th>Số Lượng</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((result) => {
                                        return (
                                            <tr>
                                                <td>{result.MA_SP}</td>
                                                <td>
                                                    <img src={require("~/assets/images/product.jpg")} alt="" />
                                                </td>
                                                <td>{result.TEN_SP}</td>
                                                <td>{result.GIA_SP}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={cx('pay')}>
                        <div className={cx('paytxt')}>
                            THANH TOÁN
                        </div>
                        <div>
                            <div>
                                Thành tiền:
                            </div>
                            <div>
                                Phí vận chuyển:
                            </div>
                            <div className={cx('anothertxt')}>
                                Tổng Số Tiền (gồm VAT):
                            </div>
                            <hr />
                            <button type='submit'>
                                XÁC NHẬN THANH TOÁN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Payment;