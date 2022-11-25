import Header from '../components/Header'
import Footer from '../components/Footer'
import '~/assets/css/global.css'
import './style.css'

function DefaultLayout({children}) {
    return (  
        <div className='wrapper'>
            <Header/>
            <div className='body'>{children}</div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;