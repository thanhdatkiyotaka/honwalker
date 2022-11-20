/* Trang để tiến hành đặt hàng khi chọn sản phẩm từ giỏ hàng */

import className from 'classnames/bind';
import style from './Payment.module.scss';
var cx = className.bind(style)

function Payment() {
    return (  
        <div className={cx('wrapper')}>Payment</div>
    );
}

export default Payment;