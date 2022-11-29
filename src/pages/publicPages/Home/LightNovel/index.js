/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import CustomSwiper from '~/component/CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import className from 'classnames/bind';
import style from '../Home.module.scss';
import '~/assets/css/grid.css';
var cx = className.bind(style)

function LightNovel() {
    const saleProduct = [
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
    ]

    const breakpoints={1: {slidesPerView: 2},576: {slidesPerView: 3},1200: {slidesPerView: 4}}
    

    return (  
        <div className={cx('sale')}>
            <div className={cx('header')}>
                <img src={require('~/assets/images/novel.png')} alt=''></img>
                <span>Light Novel</span>
            </div>
            <div className={cx('product-list')}>
                <CustomSwiper breakpoints={breakpoints}>
                    {saleProduct.map((product, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={cx('product-wrapper')}>
                                    <div className={cx('product')}>
                                        <Link className={cx('link', 'product-info')} to={product.href}>
                                            <img src={product.url} alt=''/>
                                            <span className={cx('product-name')}>{product.title}</span>
                                            {product.sale ?
                                            <p>{product.sale + '%'}</p>:
                                            <></>}
                                        </Link>
                                        <div className={cx('price')}>
                                            <p className={cx('product-current-price')}>{String((product.price * (100 - product.sale) / 100).toFixed(3))}</p>
                                            {product.sale ? 
                                            <p className={cx('product-price')}>{product.price}</p>:
                                            <p className={cx('product-price-fake')}>0</p>}
                                            
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </CustomSwiper>
                <Link className={cx('link')}><button className={cx('extend')}>Xem thêm</button></Link>
            </div>
        </div>
    );
}

export default LightNovel;