const Category = [
    {href: '/vietbook', title: 'Sách Tieng Viet',
    children: [{
        href: '/vietbook/van-hoc',
        title: 'Van hoc',
        children:[{href: '/vietbook/van-hoc/tieu-thuyet', title: 'Tieu thuyet'},
        {href: '/vietbook/van-hoc/light-novel', title: 'Light novel'},
        {href: '/vietbook/van-hoc/truyen-ngan', title: 'Truyen ngan'},
        {href: '/vietbook/van-hoc/ngon-tinh', title: 'Ngon tinh'}]
    },
    {
        href: '/vietbook/kinh-te',
        title: 'Kinh te',
        children:[{href: '/vietbook/kinh-te/nhan-vat-bai-hoc-kinh-doanh', title: 'Nhân vật - Bài học kinh doanh'},
        {href: '/vietbook/kinh-te/quan-tri-lanh-dao', title: 'Quan tri - lanh dao'},
        {href: '/vietbook/kinh-te/marketing', title: 'Marketing'},
        {href: '/vietbook/kinh-te/phan-tich-kinh-te', title: 'Phân tích kinh tế'}]
    },
    {
        href: '/vietbook/tam-ly-ky-nang-song',
        title: 'Tâm lý - Kỹ năng sống',
        children:[{href: '/vietbook/tam-ly-ky-nang-song/ky-nang-song', title: 'Kỹ năng sống'},
        {href: '/vietbook/tam-ly-ky-nang-song/nhan-cach', title: 'Rèn luyện nhân cách'},
        {href: '/vietbook/tam-ly-ky-nang-song/tam-ly', title: 'Tâm lý'},
        {href: '/vietbook/tam-ly-ky-nang-song/tuoi-moi-lon', title: 'Tuổi mới lớn'}]
    },
    {
        href: '/vietbook/sach-thieu-nhi',
        title: 'Sach thieu nhi',
        children:[{href: '/vietbook/sach-thieu-nhi/comic', title: 'Comic'},
        {href: '/vietbook/sach-thieu-nhi/manga', title: 'Manga'}, {href: '/vietbook/sach-thieu-nhi/bach-khoa-toan-thu', title: 'Bách khoa toàn thư'},
        {href: '/vietbook/sach-thieu-nhi/sach-anh', title: 'Sách ảnh'}]
    },
    {
        href: '/vietbook/tieu-su-hoi-ky',
        title: 'Tiểu sử - Hồi ký',
        children:[{href: '/vietbook/tieu-su-hoi-ky/cau-chuyen-cuoc-doi', title: 'Câu chuyện cuộc đời'},
        {href: '/vietbook/tieu-su-hoi-ky/chinh-tri', title: 'Chính trị'},
        {href: '/vietbook/tieu-su-hoi-ky/chien-tranh', title: 'Chiến tranh'},
        {href: '/vietbook/tieu-su-hoi-ky/nghe-thuat', title: 'Nghệ thuật'}]
    },
    {
        href: '/vietbook/hoc-ngoai-ngu',
        title: 'Sách học ngoại ngữ',
        children:[{href: '/vietbook/hoc-ngoai-ngu/tieng-anh', title: 'Tiếng Anh'},
        {href: '/vietbook/hoc-ngoai-ngu/tieng-nhat', title: 'Tiếng Nhật'},
        {href: '/vietbook/hoc-ngoai-ngu/tieng-phap', title: 'Tiếng Pháp'},
        {href: '/vietbook/hoc-ngoai-ngu/tieng-trung-quoc', title: 'Tiếng Trung Quốc'}]
    }]},
    {
        href: '/foreignbook',
        title: 'Foreign Book',
        children: [{
            href: '/foreignbook/fiction',
            title: 'Fiction',
            children:[{href: '/foreignbook/fiction/romance', title: 'Romance'},
            {href: '/foreignbook/fiction/fantasy', title: 'Fantasy'},
            {href: '/foreignbook/fiction/classics', title: 'Classics'}]
        },
        {
            href: '/foreignbook/business-management',
            title: 'Business & Management',
            children:[{href: '/foreignbook/business-management/business', title: 'Business'},
            {href: '/foreignbook/business-management/economics', title: 'Economics'},
            {href: '/foreignbook/business-management/finance', title: 'Finance'}]
        },
        {
            href: '/foreignbook/personal',
            title: 'Personal',
            children:[{href: '/foreignbook/personal/poular-psychology', title: 'Popular Psychology'},
            {href: '/foreignbook/personal/achieving-sucess', title: 'Achieving Sucess'},
            {href: '/foreignbook/personal/personal-finance', title: 'Personal Finance'}]
    }]},
    {
        href: '/dung-cu',
        title: 'Dụng cụ - Văn phòng',
        children: [{
            href: '/dung-cu/but-viet',
            title: 'Bút - Viết',
            children:[{href: '/dung-cu/but-viet/but-muc', title: 'Bút mực'},
            {href: '/dung-cu/but-viet/but-bi', title: 'Bút bi'},
            {href: '/dung-cu/but-viet/but-chi', title: 'Bút chì'},
            {href: '/dung-cu/but-viet/but-mau', title: 'Bút màu'}]
        },
        {
            href: '/dung-cu/dung-cu-hoc-sinh',
            title: 'Dụng cụ học sinh',
            children:[{href: '/dung-cu/dung-cu-hoc-sinh/thuoc', title: 'Thước'},
            {href: '/dung-cu/dung-cu-hoc-sinh/gom-tay', title: 'Gôm - Tẩy'},
            {href: '/dung-cu/dung-cu-hoc-sinh/hop-but', title: 'Hộp bút'},
            {href: '/dung-cu/dung-cu-hoc-sinh/khac', title: 'Các dụng cụ khác'}]
        },
        {
            href: '/dung-cu/van-phong-pham',
            title: 'Dụng cụ văn phòng',
            children:[{href: '/dung-cu/van-phong-pham/file-ho-so', title: 'File hồ sơ'},
            {href: '/dung-cu/van-phong-pham/kep-giay', title: 'Kẹp giấy'},
            {href: '/dung-cu/van-phong-pham/bam-giay', title: 'Bấm giấy'},
            {href: '/dung-cu/van-phong-pham/keo', title: 'Kéo'}]
        },
        {
            href: '/dung-cu/ve',
            title: 'Dụng cụ vẽ',
            children:[{href: '/dung-cu/ve/mau-ve', title: 'Màu vẽ'},
            {href: '/dung-cu/ve/but-ve', title: 'Bút vẽ'},
            {href: '/dung-cu/ve/giay-ve', title: 'Giấy vẽ'}]
        },
        {
            href: '/dung-cu/san-pham-khac',
            title: 'Các sản phẩm khác',
            children:[{href: '/dung-cu/san-pham-khac/bang-keo', title: 'Băng keo'},
            {href: '/dung-cu/san-pham-khac/may-tinh', title: 'Máy tính bỏ túi'},
            {href: '/dung-cu/san-pham-khac/dao', title: 'Dao'}]
    }]},
    {
        href: '/school',
        title: 'Hành trang đến trường',
        children: [{
            href: '/school/sach-giao-khoa',
            title: 'Sách giáo khoa',
            children:[{href: '/school/sach-giao-khoa/cap-1', title: 'Cấp 1'},
            {href: '/school/sach-giao-khoa/cap-2', title: 'Cấp 2'},
            {href: '/school/sach-giao-khoa/cap-3', title: 'Cấp 3'}]
        },
        {
            href: '/school/sach-tham-khao',
            title: 'Sách tham khảo',
            children:[{href: '/school/sach-tham-khao/cap-1', title: 'Cấp 1'},
            {href: '/school/sach-tham-khao/cap-2', title: 'Cấp 2'},
            {href: '/school/sach-tham-khao/cap-3', title: 'Cấp 3'}]
        },
        {
            href: '/school/sach-luyen-thi',
            title: 'Sách luyện thi',
            children:[{href: '/school/sach-luyen-thi/lop-10', title: 'Lớp 10'},
            {href: '/school/sach-luyen-thi/thi-thpt', title: 'THPT'}]
    }]}
]



export default Category;