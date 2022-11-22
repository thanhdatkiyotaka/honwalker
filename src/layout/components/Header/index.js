/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '~/App';
import Search from '../Search';
import MenuPopup from '../MenuPopup';
import CartPopup from '../CartPopup';
import NonUserPopup from '../NonUserPopup';
import UserPopup from '../UserPopup';
import className from 'classnames/bind';
import style from './Header.module.scss';

var cx = className.bind(style)

function Header() {
    const userStatus = useContext(UserContext);
    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-logo')}>
                    <MenuPopup/>
                    <Link to='/' className={cx('logo')}>
                        <img src={require('~/assets/images/logo.png')} alt='logo'/>
                    </Link>
                </div> 
                <Search/>
                <div className={cx('option')}>
                    <CartPopup/>
                    {!userStatus.isLogin?
                    <NonUserPopup/>:
                    <UserPopup/>}
                </div>
            </div>
        </header>
    );
}

export default Header;