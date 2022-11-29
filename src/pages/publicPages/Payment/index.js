/* Trang để tiến hành đặt hàng khi chọn sản phẩm từ giỏ hàng */

import className from 'classnames/bind';
import style from './Payment.module.scss';
var cx = className.bind(style)

function Payment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <div className={cx('paymenttxt')}>
                        ĐỊA CHỈ GIAO HÀNG
                    </div>
                    <div className={cx('groupinfo')}>
                        <div className={cx('input-item')}>
                            <label htmlFor="">Họ và tên</label>
                            <input type="text" placeholder='Nhập họ và tên người nhận' />
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
                                    <img src={require("~/assets/images/zalopay.png")} alt="" />
                                    Ví ZaloPay
                                    <input type="radio" name="radpay" id="" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <img src={require("~/assets/images/momo.jpg")} alt="" />
                                    Ví MoMo
                                    <input type="radio" name="radpay" id="" />
                                </label>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <img src={require("~/assets/images/money.jpg")} alt="" />
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
                        <button type='button'>
                            XÁC NHẬN THANH TOÁN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
