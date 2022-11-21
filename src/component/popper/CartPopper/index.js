import className from 'classnames/bind';
import style from './CartPopper.module.scss';
const cx = className.bind(style);

function CartPopper() {
    return (  
        <div className={cx('wrapper')}></div>
    );
}

export default CartPopper;