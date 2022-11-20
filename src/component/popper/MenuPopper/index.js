import className from 'classnames/bind';
import style from './MenuPopper.module.scss';
const cx = className.bind(style);

function MenuPopper({children}) {
    return (  
        <div className={cx('wrapper')}>{children}</div>
    );
}

export default MenuPopper;