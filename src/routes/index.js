import {Cart, Home, Order, Product, Profile, Login, Payment, ListProduct, HistoryOrder} from '~/pages/publicPages';
import {AdminHome, Finance, AdminListOrder, AdminOrder, AdminProfile} from '~/pages/privatePages';
import {Sale, NewBook, BestSeller} from '~/pages/publicPages/ListProduct';
import Category from '../rawData/Category';


var publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/product', component: Product},
    {path: 'profile', component: Profile},
    {path: 'order', component: Order},
    {path: '/payment', component: Payment},
    {path: '/list-product', component: ListProduct},
    {path: '/history-order', component: HistoryOrder},
    {path: '/login', component: Login},
    {path: '/sale', component: Sale},
    {path: '/best-seller', component: BestSeller},
    {path: '/new-book', component: NewBook}
]

Category.forEach((item) => {
    publicRoutes.push({path: item.href, component: ListProduct})
    item.children.forEach((item1) => {
        publicRoutes.push({path: item1.href, component: ListProduct})
        item1.children.forEach((item2) => {
            publicRoutes.push({path: item2.href, component: ListProduct})
        })
    })
})

var privateRoutes = [
    {path: '/admin-home', component: AdminHome},
    {path: '/admin-order', component: AdminOrder},
    {path: '/admin-profile', component: AdminProfile},
    {path: '/admin-finance', component: Finance},
    {path: '/admin-listorder', component: AdminListOrder}
]

export {publicRoutes, privateRoutes};