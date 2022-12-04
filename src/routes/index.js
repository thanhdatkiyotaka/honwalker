import { Cart, Home, Order, Product, Profile, Login, Payment, ListProduct, HistoryOrder } from '~/pages/publicPages';
import { AdminHome, Finance, AdminListOrder, AdminOrderDetail, AdminProfile, AdminProduct, AdminAddProduct } from '~/pages/privatePages';



var publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/product', component: Product },
    { path: 'profile', component: Profile },
    { path: 'order', component: Order },
    { path: '/payment', component: Payment },
    { path: '/list-product', component: ListProduct },
    { path: 'history-order', component: HistoryOrder },
    { path: 'login', component: Login, layout: 'no' }
]

var privateRoutes = [
    { path: '/admin-home', component: AdminHome },
    { path: '/admin-order-detail', component: AdminOrderDetail },
    { path: '/admin-profile', component: AdminProfile },
    { path: '/admin-finance', component: Finance },
    { path: '/admin-order', component: AdminListOrder },
    { path: '/admin-product', component: AdminProduct },
    { path: '/admin-add-product', component: AdminAddProduct },
]

export { publicRoutes, privateRoutes };