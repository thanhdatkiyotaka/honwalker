import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MenuPopper} from '~/component/popper';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style);

function MenuPopup() {
    return (  
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
    );
}

export default MenuPopup;