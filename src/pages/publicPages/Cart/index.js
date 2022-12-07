/* Trang hiển thị giỏ hàng */
import className from 'classnames/bind';
import style from './Cart.module.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React from "react";

var cx = className.bind(style)
var sum;

function Summary() {
    axios.get('http://localhost:8000/sum.php').then(response => {
        sum = Number(response.data.total);
    });
    return sum;
};
function SummaryVAT() {
    axios.get('http://localhost:8000/sum.php').then(response => {
        sum = Number(response.data.total);
    });
    return sum + sum * 10 / 100;
};
class Cart extends React.Component {

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
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('cart')}>
                        <div className={cx('carttxt')}>
                            CART
                        </div>
                        <span className={cx('cartselect')}>
                            <input type="checkbox" className={cx('actioncheck')} value="1" />
                            <div className={cx('anothertxt')}>
                                Chọn tất cả
                            </div>
                            <div className={cx('anothertxt1')}>
                                Số lượng
                            </div>
                            <div className={cx('anothertxt2')}>
                                Thành tiền
                            </div>
                        </span>
                        <span className={cx('cartproduct')}>
                            <div className={cx('wrap')}>
                                <table className={cx("table table-hover")}>
                                    <tbody>
                                        {this.state.data.map((result) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={require("~/assets/images/product.jpg")} alt="" />
                                                    </td>
                                                    <td>{result.TEN_SP}</td>
                                                    <td className={cx('toSetSL')}>{result.SOLUONG}</td>
                                                    <td className={cx('toSetP')}>{result.GIA_SP}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </span>
                    </div>
                    <div className={cx('payment')}>
                        <div className={cx('anothertxt3')}>
                            Thành tiền: <Summary />  VNĐ
                        </div>
                        <hr />
                        <div className={cx('anothertxt4')}>
                            Tổng Số Tiền (gồm VAT):  <SummaryVAT /> VNĐ
                        </div>
                        <Link to='/payment' className={cx('btPay')} >
                            <button type="button">
                                THANH TOÁN
                            </button>
                        </Link>

                    </div>
                </div>
            </div >
        )
    }
}

export default Cart;
