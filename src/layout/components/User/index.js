import Tippy from '@tippyjs/react/headless';
import {UserPopper} from '~/component/popper';
import { useSpring, motion} from 'framer-motion';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function User() {
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
            placement='bottom-end'
            onMount={onMount}
            onHide={onHide}
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <UserPopper/>
                </motion.div>
            )}>
            <div className={cx('user-info')}>
                <img alt='' src={require('~/assets/images/Elaina_04.jpg')}/>
                <span>Majo Elaina</span>
            </div>
        </Tippy>
    );
}

export default User;