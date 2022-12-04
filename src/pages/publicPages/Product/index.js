/* Trang hiển thị cụ thể một sản phẩm */
import { useState} from 'react';
import CustomSwiper from '~/component/CustomSwiper';
import { SwiperSlide} from 'swiper/react';
import '~/assets/css/grid.css'
import className from 'classnames/bind';
import style from './Product.module.scss';
const cx = className.bind(style);


function Product() {
    const [image_dex, setImage] = useState(0);
    const [quality, setQuality] = useState(1);   
    
    const product = {
        title: 'Hành trình của Elaina',
        price: '100.000',
        sale: '20',
        total_sale: '120',
        image: [require('~/assets/images/Elaina_04.jpg'),
        require('~/assets/images/Elaina_05.jpg'),
        require('~/assets/images/Elaina_06.jpg'),
        require('~/assets/images/Elaina_08.jpg')]
    }

    const handleMinius = () => {
        if (quality < 1) return
        else setQuality(quality - 1)
    }

    const handlePlus = () => {
        setQuality(quality + 1)
    }

    return (  
        <div className='grid wide'>
            <div className={cx('head')}>
                <div className={cx('product-image')}>
                    <div className={cx('main-image')}>
                        <img src={product.image[image_dex]} alt=''/>
                    </div>
                    <div className={cx('image-slide')}>
                        {product.image.map((image, index) => {
                            return (
                                <img src={image} alt='' key={index} onClick={()=>setImage(index)}/>
                            )
                        })}
                    </div>
                    <div className={cx('image-mobile')}>
                        <CustomSwiper slidesPerView={1}>
                            {product.image.map((image, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className={cx('image-mobile-item')}><img src={image} alt=''/></div>
                                    </SwiperSlide>
                                )
                            })}
                        </CustomSwiper>
                    </div>
                    
                </div>
                <div className={cx('product-info')}>
                    <div className={cx('product-name')}>{product.title}</div>
                    <div className={cx('sold')}>Đã bán: {product.total_sale}</div>
                    <div className={cx('product-price')}>
                        {product.sale ? 
                        <>
                            <span className={cx('current-price')}>{String((product.price * (100 - product.sale) / 100).toFixed(3))}</span>
                            <span className={cx('raw-price')}>{product.price} Đ</span>
                            <span className={cx('sale')}>{product.sale}%</span>
                        </>:
                        <span className={cx('current-price')}>{product.price} Đ</span>}
                        
                    </div>
                    <div className={cx('order-form')}>
                        <p>Số lượng</p>
                        <div className={cx('quanlity')}>
                            <button onClick={handleMinius}>-</button>
                            <input type='text' value={quality} onChange={(e) => setQuality(e.target.value)}/>
                            <button onClick={handlePlus}>+</button>
                        </div>
                        <div className={cx('order')}>
                            <button className={cx('add-cart')}>
                                <span>Thêm vào giỏ hàng</span>
                            </button>
                            <button className={cx('buy-now')}>
                                <span>Mua ngay</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('product-description')}>
                Chi tiết sản phẩm
            </div>

            <div className={cx('order-mobile')}>
                <button className={cx('add-cart-mobile')}>
                    <span>Thêm vào giỏ hàng</span>
                </button>
                <button className={cx('buy-now-mobile')}>
                    <span>Mua ngay</span>
                </button>
            </div>
        </div>
    );
}

export default Product;