import className from 'classnames/bind';
import style from './MenuMobilePopper.module.scss';
const cx = className.bind(style);

function MenuMobilePopper() {
    return (  
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                <h1>Product Category</h1>
                <button>Sách trong nước</button>
                <button>Sách ngoại văn</button>
                <button>Văn phòng phẩm</button>
            </aside>
            <span/>
            <div className={cx('content')}>nextflie</div>
        </div>
    );
}

export default MenuMobilePopper;