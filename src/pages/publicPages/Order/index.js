import className from 'classnames/bind';
import style from './Order.module.scss';
var cx = className.bind(style)

function Order() {
    return (  
        <div className={cx('wrapper')}>Order</div>
    );
}

export default Order;