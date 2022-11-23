/* eslint-disable no-unused-vars */
import {Link, useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '~/App';
import Search from '../Search';
import Menu from '../Menu';
import Cart from '../Cart';
import CartMobile from '../CartMobile';
import NonUser from '../NonUser';
import NonUserMobile from '../NonUserMobile';
import User from '../User';
import UserMobile from '../UserMobile';
import MenuMobile from '../MenuMobile';
import className from 'classnames/bind';
import style from './Header.module.scss';

var cx = className.bind(style)

function Header() {
    const navigate = useNavigate();
    const userStatus = useContext(UserContext);
    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to='/' className={cx('mobile-logo')}>
                    <img src={require('~/assets/images/logo.png')} alt='logo'/>
                </Link>
                <div className={cx('long-header')}>
                    <div className={cx('menu-logo')}>
                        <Menu/>
                        <MenuMobile/>
                        <Link to='/' className={cx('logo')}>
                            <img src={require('~/assets/images/logo.png')} alt='logo'/>
                        </Link>
                    </div> 
                    <Search/>
                    <div className={cx('option')}>
                        <Cart/>
                        <CartMobile/>
                        {!userStatus.isLogin?
                        <>
                            <NonUser/>
                            <NonUserMobile/>
                        </>:
                        <>
                            <User/>
                            <UserMobile/>
                        </>
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;