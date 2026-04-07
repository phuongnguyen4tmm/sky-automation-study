/*Xây dựng cấu trúc Object (Sử dụng Interface)
Yêu cầu: Bạn đang xây dựng hệ thống quản lý nhân viên:
Tạo một interface User gồm: id (string), name (string), và email (string)
Sử dụng tính chất Declaration Merging (khai báo chồng) để thêm thuộc tính role (string) vào interface User mà không được sửa code đã viết ở bước 1
Tạo một interface Admin kế thừa (extends) từ interface User và có thêm thuộc tính permissions (mảng string)
*/
interface User {
    id: string;
    name: string;
    email: string;
}
interface User {
    role: string;
}
interface Admin extends User {
    permissions: string[];
}


/*Định nghĩa tập hợp dữ liệu (Sử dụng Type)
Yêu cầu: Bạn cần quản lý trạng thái của một đơn hàng:
Tạo một type Status nhận một trong các giá trị: "Pending", "Shipped", hoặc "Delivered"
Tạo một type TrackingID có thể là string hoặc number
Tạo một type Order là sự kết hợp (Intersection - dùng dấu &) của hai thông tin:
Một object chứa orderId: string
Một object chứa status: Status và tracking: TrackingID */


type Status = "Pending"|"Shipped"|"Delivered"
type TrackingID = string|number
type Order = {oderId: string;
} & {
    status: Status;
    tracking: TrackingID;
};


/* Thử thách "Chọn vũ khí" (Tổng hợp)
Yêu cầu: Hãy viết code TypeScript để giải quyết các tình huống sau (chọn Interface hoặc Type sao cho tối ưu nhất):
Tình huống A: Bạn muốn tạo một kiểu dữ liệu Point có tọa độ x và y. Sau đó, bạn muốn đảm bảo không ai có thể "vẽ thêm" (mở rộng) thuộc tính nào khác vào Point này nữa để bảo mật cấu trúc
Tình huống B: Bạn đang viết một thư viện (Library). Bạn muốn người dùng khi cài thư viện của bạn về có thể tự định nghĩa thêm các cấu hình (Config) mới vào bộ cấu hình mặc định của bạn
Tình huống C: Bạn có một biến Response mà kết quả trả về chỉ có thể là SuccessResponse (chứa data) HOẶC ErrorResponse (chứa message)
*/
type Point =
{x: number;
    y: number;
}
interface Config {
  apiUrl: string;
  timeout: number;
}
interface Config {
  retry: number;
}
type SuccessResponse = {
  data: string;
};


type ErrorResponse = {
  message: string;
};


type Response = SuccessResponse | ErrorResponse;


