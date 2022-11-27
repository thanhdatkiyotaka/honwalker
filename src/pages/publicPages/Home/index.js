/* Trang home của website */
import { Link } from 'react-router-dom';
import '~/assets/css/grid.css';
import className from 'classnames/bind';
import style from './Home.module.scss';
var cx = className.bind(style)

function Home() {
    const topMenu = [
        {url: require('~/assets/images/seller.jpg'),
        title: 'Best seller', href: ''},
        {url: require('~/assets/images/sale.png'),
        title: 'Giảm giá', href: ''},
        {url: require('~/assets/images/new.png'),
        title: 'Sách mới', href: ''},
        {url: require('~/assets/images/kinh_te.jpg'),
        title: 'Kinh tế', href: ''},
        {url: require('~/assets/images/novel.png'),
        title: 'Light Novel', href: ''},
        {url: require('~/assets/images/foreign.png'),
        title: 'Sách ngoại ngữ', href: ''},
        {url: require('~/assets/images/manga.png'),
        title: 'Manga - Comic', href: ''},
        {url: require('~/assets/images/tool.png'),
        title: 'Văn phòng phẩm', href: ''}
    ]

    return (  
        <div className={cx('wrapper')}>
            <div className='grid wide'>
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

            </div>
        </div>
    );
}

export default Home;