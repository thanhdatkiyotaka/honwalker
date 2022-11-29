/* Trang hiển thị danh sách các sản phẩm tìm kiếm */


import className from 'classnames/bind';
import style from './ListProduct.module.scss';
var cx = className.bind(style)

function ListProduct() {
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
    const href = window.location.href
    return (  
        


        <div>{href}</div>
  
    );
}

export default ListProduct;