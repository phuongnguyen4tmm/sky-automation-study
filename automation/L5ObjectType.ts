// Lesson 5: Object Type (Kiểu Dữ Liệu Object)

// Object là một kiểu dữ liệu đại diện cho các giá trị không phải là kiểu nguyên thủy (primitives) như string, number, boolean, symbol, null, hoặc undefined
// Key thường là chuỗi (string), value có thể là bất kỳ kiểu dữ liệu nào: string, number, boolean, array, object khác, v.v.
// Cách khai báo: let obj = { key1: value1, key2: value2 };
// Truy cập: obj.key1 hoặc obj["key1"]
// Ghi đè: obj.key1 = newValue;

// Bài 1: Tạo "Hồ sơ cá nhân" (Khai báo cơ bản)
// Hãy tạo một Object mô tả chính bản thân bạn. Các thông tin cần có: name(chuỗi), age(số), isWorked(đúng/sai)
// Thực hiện: In tên của mình ra màn hình
// Cách 1:  Khai báo trực tiếp (Inline Type)
// let profile = {
//     name: "Hien phung",
//     age: 23,
//     isWorked: true,
// };

// Cách 2: Dùng interface hoặc type
interface Profile {
    name: string,
    age: number,
    isWorked: boolean,
}

let profile1: Profile = {
    name: "Hien phung",
    age: 23,
    isWorked: true,
};

console.log("Tên minu:", profile1.name);

// Bài 2: Thay đổi thông tin (Truy cập và Ghi đè)
// Giả sử hôm nay là sinh nhật bạn, hãy tăng số tuổi thêm 1
// C1: 
profile1.age += 1;
// C2: profile.age = profile.age + 1;

// In ra số tuổi mới để kiểm tra
console.log("Tuổi mới: ", profile1.age);

