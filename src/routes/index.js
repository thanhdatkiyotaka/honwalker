import {Cart, Home, Order, Product, Profile} from '~/pages/publicPages';
import {AdminHome, Finance, AdminListOrder, AdminOrder, AdminProfile} from '~/pages/privatePages';

var publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/product', component: Product},
    {path: 'profile', component: Profile},
    {path: 'order', component: Order}
]

var privateRoutes = [
    {path: '/admin-home', component: AdminHome},
    {path: '/admin-order', component: AdminOrder},
    {path: '/admin-profile', component: AdminProfile},
    {path: '/admin-finance', component: Finance},
    {path: '/admin-listorder', component: AdminListOrder}
]

export {publicRoutes, privateRoutes};