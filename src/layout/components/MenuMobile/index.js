import Tippy from '@tippyjs/react/headless';
import {useState} from 'react';
import { useSpring, motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MenuMobilePopper} from '~/component/popper';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import style from '../Header/Header.module.scss';

var cx = className.bind(style);

function MenuMobile() {
    const [show, setShow] = useState(false)
    const [type, setType] = useState(1);
    const [sub, setSub] = useState(-1);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    
    const handleClicktitle = (index) => {
        if (index === sub) setSub(-1)
        else setSub(index)
    }
    

    const springConfig = { damping: 50, stiffness: 300 };
    const initialScale = 0.5;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);

    function onMount() {
        scale.set(1);
        opacity.set(1);
    }

    const handleHide = ({unmount}) => {
        setType(1); setActive1(true); setActive2(false);
        setSub(-1); setActive3(false); setActive4(false);
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
            visible={show}
            onMount={onMount}
            onHide={handleHide}
            onClickOutside={()=>setShow(!show)}
            render={attrs => (
                <motion.div style={{opacity, scale}} className="box" tabIndex="-1" {...attrs}>
                    <MenuMobilePopper onClickClose={()=>setShow(!show)} type={type} sub={sub}
                    active1={active1} active2={active2} active3={active3} active4={active4}
                    onClickTitle={(index)=>handleClicktitle(index)}
                    onClickBar1={()=>{setType(1); setActive1(true); setActive2(false); setActive3(false); setActive4(false)}}
                    onClickBar2={()=>{setType(2); setActive1(false); setActive2(true); setActive3(false); setActive4(false)}}
                    onClickBar3={()=>{setType(3); setActive1(false); setActive2(false); setActive3(true); setActive4(false)}}
                    onClickBar4={()=>{setType(4); setActive1(false); setActive2(false); setActive3(false); setActive4(true)}}
                    initial={{x: '-50vw'}} animate={{x: 0}}/>
                </motion.div>
            )}>
            <button className={cx('menu-mobile')} onClick={()=>setShow(!show)}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
        </Tippy>
    );
}

export default MenuMobile