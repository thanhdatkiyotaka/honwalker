import className from 'classnames/bind';
import style from './Cart.module.scss';
var cx = className.bind(style)

function Cart() {
    return (  
        <div className={cx('wrapper')}>Cart</div>
    );
}

export default Cart;