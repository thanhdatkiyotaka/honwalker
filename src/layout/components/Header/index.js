import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCircleXmark, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from './Header.module.scss'
var cx = className.bind(style)

function Header() {
    var isLogin = false
    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-logo')}>
                    <button className={cx('menu')}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <Link to='/' className={cx('logo')}>
                        <img src={require('~/assets/images/logo.png')} alt='logo'/>
                    </Link>
                </div> 
                <div className={cx('search')}>
                    <input placeholder='Enter book name'></input>
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                    <span/>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
                <div className={cx('option')}>
                    <button className={cx('cart-btn')}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <span>0</span>
                    </button>
                    {isLogin?
                    <button className={cx('user-btn')}>
                        <FontAwesomeIcon icon={faUser}/>
                    </button>:
                    <div className={cx('user-info')}>
                        <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                        <span>Name</span>
                    </div>}
                </div>
            </div>
        </header>
    );
}

export default Header;