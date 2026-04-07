/* Thực hành
Tạo "Hồ sơ cá nhân" (Khai báo cơ bản)
Hãy tạo một Object mô tả chính bản thân bạn.
Các thông tin cần có: name(chuỗi), age(số), isWorked(đúng/sai)
Thực hiện: In tên của mình ra màn hình*/
interface Profile {
    name: string;
    age: number;
    isWorked: boolean;
}
const myProfile: Profile = {
    name: "Linh",
    age: 25,
    isWorked: true
} 
console.log (myProfile)


/* Thay đổi thông tin (Truy cập và Ghi đè)
Giả sử hôm nay là sinh nhật bạn, hãy tăng số tuổi thêm 1
Cách làm: Truy cập vào age trong object đã khai báo trong bài 1 
và gán giá trị mới cho biến age > In ra số tuổi mới để kiểm tra
*/
    myProfile.age = myProfile.age + 1;
console.log (myProfile);