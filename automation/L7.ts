/* Bài tập if-else: Phân quyền người dùng
Yêu cầu: Viết hàm checkAccess(user: User) nhận vào một object:
Sử dụng TypeScript Documentation để định nghĩa interface User có thuộc tính role (Admin, Editor, Viewer)
Dùng if-else để in ra:
"Full Access" nếu là Admin
"Edit Content" nếu là Editor
"Read Only" cho các trường hợp còn lại. */

interface UserL7 {
    nameUser: string;
    roleUser: "Admin" | "Editor" | "Viewer";
}

function checkAccess(user: UserL7) : void {
    if(user.roleUser ==="Admin"){
        console.log(`${user.nameUser}: Full access`);
    }else if (user.roleUser === "Editor"){
        console.log(`${user.nameUser}: Edit content`);
    }else {
        console.log(`${user.nameUser}: Read Only`);
    }
}
console.log("Bai tap 1 if-else: Phan quyen nguoi dung");
const user1: UserL7 = {nameUser: "Hiennhien", roleUser: "Admin"};
checkAccess(user1);
const user2: UserL7 = {nameUser: "Quyenquyen", roleUser: "Editor"};
checkAccess(user2);


/* Bài tập switch-case: Xử lý trạng thái đơn hàng
Yêu cầu: Kết hợp với Type bạn đã định nghĩa ở bài tập trước:
Tạo một type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled"
Viết hàm getShippingMessage(status: OrderStatus)
Sử dụng switch-case để trả về thông báo tương ứng cho từng trạng thái
Nâng cao: Thêm trường hợp default để xử lý các lỗi dữ liệu không xác định.*/
console.log("Bai tap 2 switch-case: Xu ly trang thai don hang");
type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

function getShippingMessage(status: OrderStatus){
    switch (status) {
        case "Pending":
            return console.log("Don hang dang cho xu ly");
        case "Shipped":
            return console.log("Don hang da duoc van chuyen");
        case "Delivered":
            return console.log("Don hang da duoc giao");
        case "Cancelled":
            return console.log("Don hang da bi huy");
        default:
            return console.log("Trang thai don hang khong xac dinh");
    }
}

const order1: OrderStatus = "Pending";
getShippingMessage(order1);

/* Bài tập Tổng hợp: Tính phí vận chuyển (Refactoring)
Yêu cầu:
Cho một interface Order gồm amount: number và express: boolean
Viết logic:
Nếu đơn hàng trên 500k và không chuyển phát nhanh -> Miễn phí vận chuyển
Nếu đơn hàng trên 500k nhưng chọn chuyển phát nhanh -> Phí 30k
Các trường hợp còn lại -> Phí 50k.*/

console.log("Bai tap 3 Tong hop: Tinh phi van chuyen (Refactoring)");
interface OrderL7 {
    amount: number;
    express: boolean;
}

function calculateShippingFee(order: OrderL7): number {
    if(order.amount > 500000 && !order.express){
        return 0;
    }else if (order.amount > 500000 && order.express){
        return 30000;
    }else {
        return 50000;
    }
}

const order2: OrderL7 = {amount: 600000, express: false};
console.log(`Phi van chuyen: ${calculateShippingFee(order2)} VND`);
const order3: OrderL7 = {amount: 600000, express: true};
console.log(`Phi van chuyen: ${calculateShippingFee(order3)} VND`);
const order4: OrderL7 = {amount: 400000, express: false};
console.log(`Phi van chuyen: ${calculateShippingFee(order4)} VND`);