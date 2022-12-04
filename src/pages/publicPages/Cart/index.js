/* Trang hiển thị giỏ hàng */

import className from 'classnames/bind';
import style from './Cart.module.scss';
import { Link } from 'react-router-dom';
var cx = className.bind(style)


function Cart() {
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

                    </span>
                </div>
                <div className={cx('payment')}>
                    <div className={cx('anothertxt3')}>
                        Thành tiền
                    </div>
                    <hr />
                    <div className={cx('anothertxt4')}>
                        Tổng Số Tiền (gồm VAT)
                    </div>
                    <Link to='/payment' className={cx('btPay')} >
                        <button type="button">
                            THANH TOÁN
                        </button>
                    </Link>

                </div>
            </div>
        </div >
    );
}

export default Cart;
