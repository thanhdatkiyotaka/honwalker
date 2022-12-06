/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import 'src/assets/admin/css/backend-plugin.min.css';
import 'src/assets/admin/css/backend.css';
import 'src/assets/admin/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import 'src/assets/admin/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'src/assets/admin/vendor/remixicon/fonts/remixicon.css';

export class AdminPage extends React.Component {
    state = {};
    render() {
        const { body } = this.props;
        const { activeClass } = body.props;
        return (
            <>
                <div className="wrapper">
                    <div className="iq-sidebar  sidebar-default ">
                        <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                            <a href="./admin-home" className="header-logo">
                                <img src={require('src/assets/images/logo.png')} className="img-fluid rounded-normal light-logo" alt="logo" />
                            </a>
                            <div className="iq-menu-bt-sidebar ml-0">
                                <i className="las la-bars wrapper-menu"></i>
                            </div>
                        </div>
                        <div className="data-scrollbar" data-scroll="1">
                            <nav className="iq-sidebar-menu">
                                <ul id="iq-sidebar-toggle" className="iq-menu">
                                    <li className={activeClass?.home}>
                                        <a href="./admin-home" className="svg-icon">
                                            <svg className="svg-icon" id="p-dash1" width="20" height="20"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path
                                                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                                </path>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                            </svg>
                                            <span className="ml-4">Dashboards</span>
                                        </a>
                                    </li>
                                    <li className={activeClass.product}>
                                        <a href="#product" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                            <svg className="svg-icon" id="p-dash7" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            <span className="ml-4">Sản phẩm</span>
                                            <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                            </svg>
                                        </a>
                                        <ul id="product" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                            <li className={activeClass.listProduct}>
                                                <a href="/admin-product">
                                                    <i className="las la-minus"></i><span>Danh sách sản phẩm</span>
                                                </a>
                                            </li>
                                            <li className={activeClass.addProduct}>
                                                <a href="/admin-add-product">
                                                    <i className="las la-minus"></i><span>Tạo mới sản phẩm</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={activeClass.order}>
                                        <a href="/admin-order" className={activeClass.order}>
                                            <svg className="svg-icon" id="p-dash2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                            </svg>
                                            <span className="ml-4">Đơn hàng</span>
                                        </a>
                                        <ul id="reports" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                                <div className="card border-none">
                                    <div className="card-body p-0">

                                    </div>
                                </div>
                            </div>
                            <div className="p-3"></div>
                        </div>
                    </div>
                    <div className="iq-top-navbar">
                        <div className="iq-navbar-custom">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                                    <i className="ri-menu-line wrapper-menu"></i>
                                    <a href="./admin-home" className="header-logo">
                                        <img src={require('src/assets/images/logo.png')} className="img-fluid rounded-normal" alt="logo" />
                                    </a>
                                </div>
                                <div className="iq-search-bar device-search">
                                    <form action="#" className="searchbox">
                                        <a className="search-link" href=""><i className="ri-search-line"></i></a>
                                        <input type="text" className="text search-input" placeholder="Search here..." />
                                    </form>
                                </div>
                                <div className="d-flex align-items-center">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-label="Toggle navigation">
                                        <i className="ri-menu-3-line"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                            <li className="nav-item nav-icon search-content">
                                                <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">
                                                    <i className="ri-search-line"></i>
                                                </a>
                                                <div className="iq-search-bar iq-sub-dropdown dropdown-menu"
                                                    aria-labelledby="dropdownSearch">
                                                    <form action="#" className="searchbox p-2">
                                                        <div className="form-group mb-0 position-relative">
                                                            <input type="text" className="text search-input font-size-12"
                                                                placeholder="type here to search..." />
                                                            <a href="#" className="search-link"><i className="las la-search"></i></a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                            
                                            <li className="nav-item nav-icon dropdown caption-content">
                                                <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton4"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <img src={require('src/assets/admin/images/user/1.png')} className="img-fluid rounded" alt="user" />
                                                </a>
                                                <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <div className="card shadow-none m-0">
                                                        <div className="card-body p-0 text-center">

                                                            <div className="p-3">
                                                                <h5 className="mb-1">JoanDuo@property.com</h5>
                                                                <p className="mb-0">Since 10 march, 2020</p>
                                                                <div className="d-flex align-items-center justify-content-center mt-3">
                                                                    <a href="../app/user-profile.html"
                                                                        className="btn border mr-2">Hồ sơ</a>
                                                                    <a href="auth-sign-in.html" className="btn border">Đăng xuất</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                
                    <div className="content-page">        
                        {body}
                    </div>
                </div>

                <footer className="iq-footer">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item"><a href="#">Privacy Policy</a>
                                            </li>
                                            <li className="list-inline-item"><a href="#">Terms of Use</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <span className="mr-1">
                                            <script>document.write(new Date().getFullYear())</script>©
                                        </span> <a href="#" className="">Honwalker</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}