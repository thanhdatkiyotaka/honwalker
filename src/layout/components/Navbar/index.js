import { Link } from 'react-router-dom';
import {useState} from 'react'
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from './Navbar.module.scss'
import NavPopper from '~/component/popper/NavPopper';
var cx = className.bind(style)

function Navbar() {
    return (  
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('menu-logo')}>
                <Tippy
                    interactive={true}
                   
                    render={attrs => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <NavPopper/>
                        </div>
                    )}
                    >
                        <button className={cx('menu')}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </Tippy>
                    <Link to='/' className={cx('logo')}>
                        <img src={require('~/assets/images/logo.png')} alt='logo'/>
                    </Link>
                </div>
                <ul className={cx('nav')}>
                    <li><Link to='/admin-home' className={cx('link')}>Trang chủ</Link></li>
                    <li><Link to='/admin-listorder' className={cx('link')}>Đơn hàng</Link></li>
                    <li><Link to='/admin-finance' className={cx('link')}>Báo cáo tài chính</Link></li>
                </ul>
                
                <div className={cx('user-info')}>
                    <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                    <span>Majo Elaina</span>
                </div>
                
            </div>
        
        </div>
    );
}

export default Navbar;