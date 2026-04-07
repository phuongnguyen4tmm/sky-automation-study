/*Bài tập if-else: Phân quyền người dùng
Yêu cầu: Viết hàm checkAccess(user: User) nhận vào một object:
Sử dụng TypeScript Documentation để định nghĩa interface User có thuộc tính role (Admin, Editor, Viewer)
Dùng if-else để in ra:
"Full Access" nếu là Admin
"Edit Content" nếu là Editor
"Read Only" cho các trường hợp còn lại.*/
interface User {
    role : "Admin"|"Editor"|"Viewer";
}
function checkAccess (user: User){
    if (user.role === "Admin"){
        console.log ("Full Access");
    } else if (user.role === "Editor"){
        console.log ("Edit Content");
     } else {
            console.log ("Read Only");
        }
}



/*Bài tập switch-case: Xử lý trạng thái đơn hàng
Yêu cầu: Kết hợp với Type bạn đã định nghĩa ở bài tập trước:
Tạo một type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled"
Viết hàm getShippingMessage(status: OrderStatus)
Sử dụng switch-case để trả về thông báo tương ứng cho từng trạng thái
Nâng cao: Thêm trường hợp default để xử lý các lỗi dữ liệu không xác định.*/
type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled"
function getShippingMessage(status:OrderStatus): string{
switch (status) {
    case "Pending":
    return "This order is pending";
    case "Shipped":
    return "This order is shipped";
    case "Delivered":
    return "This order is delivered";
    case "Cancelled":
    return "This order is cancelled";
    default:
    return "Unknown order status";
}
}



/*Bài tập Tổng hợp: Tính phí vận chuyển (Refactoring)
Yêu cầu:
Cho một interface Order gồm amount: number và express: boolean
Viết logic:
Nếu đơn hàng trên 500k và không chuyển phát nhanh -> Miễn phí vận chuyển
Nếu đơn hàng trên 500k nhưng chọn chuyển phát nhanh -> Phí 30k
Các trường hợp còn lại -> Phí 50k.
*/
interface Order {
    amount: number;
    express: boolean;
}
function Refactoring(shippingFee: Order): number {
    if (shippingFee.amount > 500000 && !shippingFee.express){
        return 0;
    } else if (shippingFee.amount > 500000 && shippingFee.express){
            return 30000;
    } else {
        return 50000;
    }
    }
