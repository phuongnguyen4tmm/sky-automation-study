//1. Khai báo một hằng số tên là companyName kiểu chuỗi, giá trị là "SKY Corporation".
const companyName: string = "SKY Corporation";

//2. Khai báo một hằng số maxPoint kiểu số, giá trị là 100.
const maxPoint: number = 100;

//3. Khai báo biến employeeName kiểu chuỗi, gán tên của bạn.
let employeeName: string = "Đinh Khánh Linh";

//4. Khai báo biến employeeAge kiểu số, gán tuổi của bạn.
let employeeAge: number = 25;

//5. Khai báo hai biến businessScore và englishScore kiểu số, gán giá trị bất kỳ từ 0 đến 100.
let businessScore: number = 75;
let englishScore: number = 100;

//6. Khai báo một biến averageScore kiểu số nhưng chưa gán giá trị ngay.
let averageScore: Number;

//7. Khai báo một biến isPassed kiểu boolean để kiểm tra xem ứng viến có pass phỏng vấn không?
let isPassed: boolean; 

//8. Khai báo một biến phoneNumber có thể là chuỗi hoặc null, khởi tạo giá trị ban đầu là null.
let phoneNumber: string | null = null 

//9. Tính điểm trung bình: averageScore = (businessScore + englishScore) / 2.
averageScore = (businessScore + englishScore) / 2

//10. Kiểm tra kết quả: Nếu averageScore lớn hơn hoặc bằng 60, hãy gán isPassed = true, ngược lại là false.
if (averageScore >= 60){
    isPassed = true;
} else {
    isPassed = false;
}

//11. Cập nhật biến phoneNumber: Gán cho nó một số điện thoại bất kỳ dạng chuỗi.
phoneNumber = "0493578678"

//12. Sử dụng console.log để in ra một câu giới thiệu đầy đủ thông tin: Tên học sinh, tuổi, trường, điểm trung bình và trạng thái đỗ hay trượt.
let studentName: string = "Đinh Khánh Linh"
let studentAge: number = 20
let school: string = "Đại học Thương Mại"
let averageScore: number = 4.0
if (averageScore >= 3.0){
    isPassed = true;
} else {
    isPassed = false;
}
console.log ( `Tên học sinh: ${studentName}, Tuổi: ${studentAge}, Trường: ${school}, Điểm trung bình: ${averageScore}, Trạng thái: ${isPassed} `)