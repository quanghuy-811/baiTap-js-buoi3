const getElement = (selector) => {
  return document.querySelector(selector);
};

// kiem tra so chan le

getElement("#kiemTraSo").onclick = () => {
  let number = getElement("#number1").value * 1;
  if (number % 2 === 0) {
    getElement("#result1").innerHTML = "Số chẵn";
  } else {
    getElement("#result1").innerHTML = "Số lẻ";
  }
};

// Xét thường nhân viên dạt doanh số

getElement("#nhanVienDatDoanhSo").onclick = () => {
  let number = getElement("#number2").value * 1;
  if (number >= 100) {
    alert("Chức mừng! Bạn được thường 10% doanh số");
  } else {
    alert("Xin lỗi nhé! Bạn không được thường");
  }
};

// Tính chiết khấu

getElement("#tinhChietKhau").onclick = () => {
  let number = getElement("#number3").value * 1;
  let discount = (number * 20) / 100;
  if (number > 500) {
    alert(`Chức mừng! Bạn được giảm thêm ${discount}`);
  } else {
    alert("Xin lỗi nhé!");
  }
};

// Kiểm tra Mật khẩu

getElement("#matKhau").onclick = () => {
  let number = getElement("#number4").value;

  if (number.length >= 8) {
    getElement("#result2").innerHTML = "Mật khẩu mạnh";
  } else {
    getElement("#result2").innerHTML = "Mật khẩu yếu";
  }
};
