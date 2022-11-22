import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CartPopper} from '~/component/popper';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function CartPopup() {
    return (  
        <Tippy
            interactive={true}
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <CartPopper/>
                </div>
        )}>
            <button className={cx('cart-btn')}>
                <FontAwesomeIcon icon={faCartShopping}/>
                <span>0</span>
            </button>
        </Tippy>
    );
}

export default CartPopup;