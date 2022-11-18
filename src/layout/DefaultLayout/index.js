import Header from '../components/Header'
import Footer from '../components/Footer'
import '~/assets/css/global.css'

function DefaultLayout({children}) {
    return (  
        <div className='wrapper'>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;