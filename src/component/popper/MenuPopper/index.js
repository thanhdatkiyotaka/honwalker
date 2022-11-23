import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import style from './MenuPopper.module.scss';
const cx = className.bind(style);

function MenuPopper() {
    return (  
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                <h1>Product Category</h1>
                <Link><button>Văn học</button></Link>
                <Link><button>Kinh tế</button></Link>
                <Link><button>Sức khỏe</button></Link>
                <Link><button>Sách thiếu nhi</button></Link>
                <Link><button>Tiểu sử - Hồi ký</button></Link>
                <Link><button>Sách giáo khoa</button></Link>
                <Link><button>Sách học ngoại ngữ</button></Link>
                <Link><button>Văn phòng phẩm</button></Link>
            </aside>
            <span/>
            <div className={cx('content')}>nextflie</div>
        </div>
    );
}

export default MenuPopper;