/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Pagenate from '~/component/Paginate';
import Select from 'react-select';
import '~/assets/css/grid.css';
import className from 'classnames/bind';
import style from '../ListProduct.module.scss';
var cx = className.bind(style);

function NewBook() {
    const product = [
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '89.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '79.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '23.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '76.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '15.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '91.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '94.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '77.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '207.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '83.000', sale: '20'},
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
        price: '103.000', sale: '20'},
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
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '89.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '79.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '23.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '76.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '15.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '89.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '79.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '23.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '76.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '15.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '91.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '94.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '77.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '207.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '83.000', sale: '20'},
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
        price: '103.000', sale: '20'},
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
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '89.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '79.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '23.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '109.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '76.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '99.000', sale: '20'},
        {url: require('~/assets/images/product.jpg'),
        title: 'Phù thủy lang thang, phiêu lưu ký,', href: '',
        price: '15.000', sale: '20'}
    ]

    const options1 = [
        { value: 'money', label: 'Giá tiền' },
        { value: 'sale', label: 'Khuyến mãi' },
        { value: 'sold', label: 'Số lượng bán' }
    ];
    const options2 = [
        { value: 'increase', label: 'Tăng dần' },
        { value: 'decrease', label: 'Giảm dần' }
    ];
    const [sort1, setSort1] = useState(options1[2]);
    const [sort2, setSort2] = useState(options2[1]);

    return (  
        <div className='grid wide'>
            <div className={cx('content')} style={{ marginTop: '7px'}}>
                <div className={cx('filter')}>
                    <span>Sort by</span>
                    <Select defaultValue={sort1} onChange={setSort1} options={options1} className={cx('select')}/>
                    <Select defaultValue={sort2} onChange={setSort2} options={options2} className={cx('select')}/>
                </div>
                {product.length === 1 ?
                <p>Kết quả tìm kiếm không có</p>:
                <p>
                    <div className={cx('list-laptop')}><Pagenate products={product} itemPerPage={24}/></div>
                    <div className={cx('list-tablet')}><Pagenate products={product} itemPerPage={16}/></div>
                    <div className={cx('list-mobile')}><Pagenate products={product} itemPerPage={12}/></div>
                </p>
                }
            </div>
        </div>
    );
}

export default NewBook;