
import Tippy from '@tippyjs/react/headless';
import {UserPopper} from '~/component/popper';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function UserPopup() {
    return (  
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
        </Tippy>
    );
}

export default UserPopup;