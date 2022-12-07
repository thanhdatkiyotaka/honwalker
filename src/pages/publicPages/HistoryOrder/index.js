/* Trang hiển thị lịch sử mua hàng */

import className from 'classnames/bind';
import style from './HistoryOrder.module.scss';
import axios from "axios";
import React from "react";
import { data } from 'dom7';

var cx = className.bind(style)


function getUser(x){
    var user=[];
    axios.get('http://localhost:8000/user.php').then(response => {
        user = response.data.map();
    });
    for (let i = 0; i < user.length; i++ )
        if (user[i].MA_TK === x)
    return user[i];
}
class HistoryOrder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/dtb.php').then(res => {
            this.setState({ data: res.data });
        });
    }
    renderTableData() {
        return this.state.data.map((data, index) => {
            const { MA_DH, THOIGIANDATHANG, PHUONGTHUCTHANHTOAN, TINHTRANG, MA_TK, MA_DC } = data
            return (
                <tr key={MA_DH}>
                    <td className={cx('MA_DH')}>{MA_DH}</td>
                    <td className={cx('time')}>{THOIGIANDATHANG}</td>
                    <td className={cx('pay')}>{PHUONGTHUCTHANHTOAN}</td>
                    <td className={cx('deli')}>{TINHTRANG }</td>
                    <td className={cx('codeAcc')}>{MA_TK}</td>
                    <td className={cx('codeAddr')}>{MA_DC}</td>
                    <td className={cx('detail')}>Chi tiết</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('profileSidebar')}>
                        <h3>TÀI KHOẢN</h3>
                        <div className= {cx('wrapside')}>
                            <div className= {cx('wraprow')}>Họ và tên:</div>
                            <div className= {cx('wraprow')}>Loại tài khoản:</div>
                            <div className= {cx('wraprow')}>Trạng thái tài khoản:</div>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <h3>ĐƠN HÀNG CỦA TÔI</h3>
                        <div className={cx('orderHistory')}>
                            <div className={cx('historyItem')}>Tất cả</div>
                            <div className={cx('historyItem')}>Chờ thanh toán</div>
                            <div className={cx('historyItem')}>Đang xử lý</div>
                            <div className={cx('historyItem')}>Đang vận chuyển</div>
                            <div className={cx('historyItem')}>Đã nhận</div>
                        </div>
                        <div className={cx('orderCart')}>
                            <table className={cx('hisTable')}>
                                <tbody>
                                    <tr id = {cx('ordTitle')}>
                                        <td className={cx('MA_DH')}>INVOICE</td>
                                        <td className={cx('time')}>THỜI GIAN</td>
                                        <td className={cx('pay')}>PHƯƠNG THỨC THANH TOÁN</td>
                                        <td className={cx('deli')}>TÌNH TRẠNG</td>
                                        <td className={cx('codeAcc')}>MÃ TÀI KHOẢN</td>
                                        <td className={cx('codeAddr')}>MÃ ĐỊA CHỈ</td>
                                        <td className={cx('detail')}></td>
                                    </tr>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        );
    };
}

export default HistoryOrder;