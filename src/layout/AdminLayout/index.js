import Navbar from '../components/Navbar';
import '~/assets/css/global.css'

function AdminLayout({children}) {
    return (  
        <div className='wrapper'>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
}

export default AdminLayout;