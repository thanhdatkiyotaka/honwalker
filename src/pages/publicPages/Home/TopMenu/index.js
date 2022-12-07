import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import style from '../Home.module.scss';
var cx = className.bind(style)

function TopMenu() {
    const topMenu = [
        {url: require('~/assets/images/seller.jpg'),
        title: 'Best seller', href: '/best-seller'},
        {url: require('~/assets/images/sale.png'),
        title: 'Giảm giá', href: '/sale'},
        {url: require('~/assets/images/new.png'),
        title: 'Sách mới', href: '/new-book'},
        {url: require('~/assets/images/kinh_te.jpg'),
        title: 'Kinh tế', href: '/vietbook/kinh-te'},
        {url: require('~/assets/images/novel.png'),
        title: 'Light Novel', href: '/vietbook/van-hoc/light-novel'},
        {url: require('~/assets/images/foreign.png'),
        title: 'Sách ngoại ngữ', href: '/vietbook/hoc-ngoai-ngu'},
        {url: require('~/assets/images/manga.png'),
        title: 'Manga - Comic', href: '/vietbook/sach-thieu-nhi/manga'},
        {url: require('~/assets/images/tool.png'),
        title: 'Văn phòng phẩm', href: '/dung-cu'}
    ]

    return (  
        <div className={cx('top-menu')}>
            {topMenu.map((item, index) => {
                return (
                    <div key={index} className={cx('top-menu-item')}>
                        <Link to={item.href}>
                            <img src={item.url} alt=''/>
                        </Link>
                        <span>{item.title}</span>
                    </div>
                )
            })}
        </div>       
    );
}

export default TopMenu;