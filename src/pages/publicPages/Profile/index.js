/* Trang hiển thị thông tin người dùng */
import { useState } from "react";
import className from "classnames/bind";
import style from "./Profile.module.scss";
var cx = className.bind(style);

function Profile() {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Done");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("avt")}>
         <img src={require('~/assets/images/Elaina_04.jpg')} alt=''></img> 
        </div>
        <div className={cx("info")}>
          <div className={cx("pHead")}>
            <h2>Thông tin tài khoản</h2>
          </div>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <label> Họ và tên </label>
              <input
                type="text"
                name="userName"
                value={inputs.userName || "Majo Elaina"}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Số điện thoại</label>
              <input
                type="number"
                name="userPhone"
                value={inputs.userPhone || "0123456789"}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Email </label>
              <input
                type="email"
                name="userMail"
                value={inputs.userMail || "elaina@hcmut.edu.vn"}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Giới tính</label>
              <select value = {inputs.userGender || "Female"}>
                  <option value="Female">Nữ</option>
                  <option value="Male">Nam</option>
              </select>
            </div>
            <div className={cx("row")}>
                <label>Địa chỉ</label>
                <input type = "text" value ={inputs.Address || "269 Lý Thường Kiệt, Quận 10, TPHCM"}></input>
            </div>
            <div className={cx("row")} id = {cx('pwC')}>
              <label>Thay đổi mật khẩu?</label>
              <div className={cx('wrapInput')}>
              <input
                type="checkbox"
                value={false}
                onChange={() => setShow(!show)}
              />
               </div>
            </div>  
            {show && <div className={cx("row")} id={cx("pw")}>
              <label>Nhập mật khẩu mới</label>
          
              <input
                type="password"
                name="userPassword"
                value={inputs.userPassword || ""}
                onChange={handleChange}
              />
              </div>
            }
            <div className={cx("row")} id = {cx('submit')}>
              <button type = "submit" onClick = {handleSubmit}>SUBMIT</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
