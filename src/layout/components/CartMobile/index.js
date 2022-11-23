import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function CartMobile() {
    return (    
        <Link to='/cart'>
            <button className={cx('cart-btn-mobile')}>
                <FontAwesomeIcon icon={faCartShopping}/>
                <span>0</span>
            </button>
        </Link>
    );
}

export default CartMobile;