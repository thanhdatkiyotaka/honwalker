import Tippy from '@tippyjs/react/headless';
import { motion, useSpring} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MenuPopper} from '~/component/popper';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style);

function Menu() {
    const springConfig = { damping: 50, stiffness: 300 };
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
            placement='bottom-start'
            onMount={onMount}
            onHide={onHide}
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <MenuPopper/>
                </motion.div>
            )}>
            <button className={cx('menu')}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </Tippy>
    );
}

export default Menu;