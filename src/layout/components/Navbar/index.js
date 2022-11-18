import className from 'classnames/bind';
import style from './Navbar.module.scss'
var cx = className.bind(style)

function Navbar() {
    return (  
        <div className={cx('wrapper')}>Navbar</div>
    );
}

export default Navbar;