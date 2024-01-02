function showNotification() {
    // Hiển thị thông báo
    var notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Ẩn thông báo sau 5 giây
    setTimeout(function() {
        notification.style.display = 'none';
    }, 5000);
}

// Lắng nghe sự kiện submit form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form (gửi request)

    // Lấy giá trị từ các input
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Xử lý đăng nhập tại đây, ví dụ kiểm tra thông tin và gửi request đăng nhập
    // Nếu thành công, chuyển hướng tới trang chính
    // Nếu không thành công, hiển thị thông báo lỗi
});

// Lắng nghe sự kiện submit form đăng ký
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form (gửi request)

    // Lấy giá trị từ các input
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Xử lý đăng ký tại đây, ví dụ kiểm tra thông tin và gửi request đăng ký
    // Nếu thành công, chuyển hướng tới trang chính
    // Nếu không thành công, hiển thị thông báo lỗi
});