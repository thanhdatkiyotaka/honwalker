import Home from '~/pages/Home'
import Cart from '~/pages/Cart'
import Product from '~/pages/Product'

var publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/product', component: Product}
]

export default publicRoutes;