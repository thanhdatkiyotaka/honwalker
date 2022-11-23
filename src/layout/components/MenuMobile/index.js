import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MenuMobilePopper} from '~/component/popper';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style);

function MenuMobile() {
    return (  
        <Tippy
            interactive={true}
            placement='bottom-start'
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <MenuMobilePopper/>
                </div>
            )}>
            <button className={cx('menu-mobile')}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </Tippy>
    );
}

export default MenuMobile