import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { useSpring, motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginPopper} from '~/component/popper';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style)

function NonUser() {
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
            trigger='mouseenter'
            placement='bottom'
            onMount={onMount}
            onHide={onHide}
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <LoginPopper />
                </motion.div>
            )}>
            <Link to='/login'>
                <button className={cx('user-btn')}>
                    <FontAwesomeIcon icon={faUser}/>
                </button>
            </Link>
        </Tippy>
        
    );
}

export default NonUser;