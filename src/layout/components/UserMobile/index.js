import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';
import {UserPopper} from '~/component/popper';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function UserMobile() {
    const [show, setShow] = useState(false)
    const springConfig = { damping: 30, stiffness: 300 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);

    function onMount() {
        scale.set(1);
        opacity.set(1);
    }

    function onHide({ unmount }) {
        const cleanup = scale.onChange(value => {
            if (value <= initialScale) {
                cleanup();
                unmount();
            }
        });

        scale.set(initialScale);
        opacity.set(0);
    }
    return (
        <Tippy
            interactive={true}
            visible={show}
            onMount={onMount}
            onHide={onHide}
            placement='bottom-end'
            onClickOutside={()=>setShow(false)}
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <UserPopper onClick={()=>setShow(false)}/>
                </motion.div>
            )}>
            <div className={cx('user-info-mobile')} onClick={()=>setShow(!show)}>
                <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                <span>Majo Elaina</span>
            </div>
        </Tippy>
    );
}

export default UserMobile;