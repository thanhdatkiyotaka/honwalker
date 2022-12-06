/* Trang hiển thị tình trạng của một đơn hàng*/

import className from "classnames/bind";
import style from "./Order.module.scss";

var cx = className.bind(style);
function deliver(){
    return (
        <div className ={cx('row')}>
            <span className = {cx("labelField")}></span>
                <span className= {cx("infoField")}>
                    <ul>
                        <li>Người gửi đã chuẩn bị hàng</li>
                        <li>Lấy hàng thành công</li>
                        <li>Đang giao</li>
                    </ul>
                </span>
        </div>
    );
}
function Order() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("oHead")}>
          <h2>Thông tin đơn hàng</h2> 
        </div>
        <div className={cx("info")}>
            <h3 className={cx('title')}>Chi tiết đơn hàng</h3>
            <div className={cx("row")}>
                <label>Mã đơn hàng: </label>
            </div>
            <div className ={cx("row") }>
                <label>Ngày mua: </label>
                <span className= {cx("infoField")}>Majo Elaino</span>
            </div>
            <div className ={cx("row") }>
                <label>Tổng tiền: </label>
                <span className= {cx("infoField")}>0123456789</span>
            </div>
            <div className ={cx("row") }>
                <label>Xuất hóa đơn: </label>
            </div>
            <div className ={cx("row") }>
                <label>Ghi chú:</label>
                <span className= {cx("infoField")}></span>
            </div>
        </div>
        <div className={cx("info")}>
            <div className = {cx('row')}>
                <div className={cx('rowBlock')}>
                    <div className= {cx('oHead')}>Thông tin người nhận</div>
                    <div className = {cx('blockInfo')}></div>
                </div>
                <div className={cx('rowBlock')}>
                    <div className= {cx('oHead')}>Phương thức vận chuyển</div>
                    <div className = {cx('blockInfo')}></div>
                </div>
                <div className={cx('rowBlock')}>
                    <div className= {cx('oHead')}>Phương thức thanh toán</div>
                    <div className = {cx('blockInfo')}></div>
                </div>
            </div>
        </div>
        <div className={cx("info")}>
            <div className={cx('row')}>
                <div className={cx('rowBlock')} id = {cx('stateBlock1')}>
                    <label>Mã đơn hàng</label>
                    <label>Tổng tiền</label>
                </div>
                <div className={cx('rowBlock')} id = {cx('stateBlock2')}>
                    <ul>
                        <li>Đã xác nhận đơn hàng</li>
                        <li>Đã sẵn sàng gửi</li>
                        <li>Đang giao</li>
                        <li>Đã nhận</li>
                    </ul>
                </div>
            </div>
            <div className={cx("row")}>
            <span className={cx('productImage')}>
              <label>Hình ảnh</label>
            </span>
            <span className={cx("productName")}>
             <label>Sản phẩm</label>
            </span>
            <span className={cx("productPrice")}>
              <label>Thành tiền</label>
            </span>
          </div>
          <div className={cx("row")}>
            <span className={cx('productImage')}>
              <img src={require("~/assets/images/novel.png")} alt=""></img>
            </span>
            <span className={cx("productName")}>
              <div className={cx("inrow")}>Phù thủy lang thang</div>
            </span>
            <span className={cx("productPrice")}>
              80,000 VND
              <br />
              Số lượng: x1
            </span>
          </div>

          <div className={cx("row")}>
            <span className={cx('productImage')}>
              <img src={require("~/assets/images/novel.png")} alt=""></img>
            </span>
            <span className={cx("productName")}>
              <div className={cx("inrow")}>Phù thủy lang thang - Phần 2</div>
            </span>
            <span className={cx("productPrice")}>
              80,000 VND
              <br />
              Số lượng: x1
            </span>
          </div>

          <div className={cx('row')}>
          <span className={cx('productImage')}>
            </span>
            <span className={cx("productName")}>
            </span>
            <span className={cx("productPrice")}>
              <div className={cx('rowBlock')} id = {cx('stateBlock3')}>
                Thành tiền <br/>
                Phí vận chuyển <br/>
                Tổng phí
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
