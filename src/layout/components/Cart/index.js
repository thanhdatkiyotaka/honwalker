/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CartPopper} from '~/component/popper';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function Cart() {
    const springConfig = { damping: 30, stiffness:300 };
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
            flipOnUpdate={true}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            placement='bottom-end'
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <CartPopper/>
                </motion.div>
        )}>
            <Link to='/cart'>
                <button className={cx('cart-btn')}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                    <span>0</span>
                </button>
            </Link>
        </Tippy>
    );
}

export default Cart;