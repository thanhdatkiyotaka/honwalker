import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import {UserPopper} from '~/component/popper';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function UserMobile() {
    const [show, setShow] = useState(false)
    return (
        <Tippy
            interactive={true}
            visible={show}
            placement='bottom-end'
            onClickOutside={()=>setShow(false)}
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <UserPopper onClick={()=>setShow(false)}/>
                </div>
            )}>
            <div className={cx('user-info-mobile')} onClick={()=>setShow(!show)}>
                <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                <span>Majo Elaina</span>
            </div>
        </Tippy>
    );
}

export default UserMobile;