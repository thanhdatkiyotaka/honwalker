/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '~/App';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {UserPopper, LoginPopper, MenuPopper} from '~/component/popper';
import { faBars, faSearch, faCircleXmark, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from './Header.module.scss';

var cx = className.bind(style)

function Header() {
    const userStatus = useContext(UserContext);
    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-logo')}>
                    <Tippy
                    interactive={true}
                    render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <MenuPopper/>
                        </div>
                    )}>
                        <button className={cx('menu')}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </Tippy>
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
                    {userStatus.isLogin?
                    <Tippy
                    interactive={true}
                    render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <LoginPopper/>
                        </div>
                    )}>
                        <button className={cx('user-btn')}>
                            <FontAwesomeIcon icon={faUser}/>
                        </button>
                    </Tippy>:
                    <Tippy
                    interactive={true}
                    render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <UserPopper/>
                        </div>
                    )}>
                        <div className={cx('user-info')}>
                            <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                            <span>Majo Elaina</span>
                        </div>
                    </Tippy>}
                </div>
            </div>
        </header>
    );
}

export default Header;