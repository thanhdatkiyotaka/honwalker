/* Trang hiển thị thông tin người dùng */
import { useState } from "react";
import className from "classnames/bind";
import style from "./Profile.module.scss";
import { TRUE } from "sass";
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
                value={inputs.userName || ""}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Số điện thoại</label>
              <input
                type="number"
                name="userPhone"
                value={inputs.userPhone || ""}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Email </label>
              <input
                type="email"
                name="userMail"
                value={inputs.userMail || ""}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")}>
              <label>Giới tính</label>
              <input
                type="radio"
                name="userGender"
                value={inputs.userGender || ""}
                onChange={handleChange}
              />{" "}
              Male
              <input
                type="radio"
                name="userGender"
                value={inputs.userGender || ""}
                onChange={handleChange}
              />{" "}
              Female
            </div>
            <div className={cx("row")} id = {cx('pwC')}>
              <label>Thay đổi mật khẩu?</label>
              <input
                type="checkbox"
                value={false}
                onChange={() => setShow(!show)}
              />
            </div>  
          
             <div className={cx("row")} id={cx("pw")}>
              <label>Nhập mật khẩu mới</label>
              <input
                type="password"
                name="userPassword"
                value={inputs.userPassword || ""}
                onChange={handleChange}
              />
            </div>
            <div className={cx("row")} id = {cx('submit')}>
              <button type = "submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
