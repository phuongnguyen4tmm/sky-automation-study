// Lesson 4: Vòng lặp (Loops)
// - Vòng lặp là cấu trúc điều khiển cho phép thực thi một khối mã nhiều lần dựa trên một điều kiện.
// - Các loại vòng lặp phổ biến: for, while, do...while, forEach (dành cho mảng).

// Ví dụ vòng lặp for
// for (let i = 0; i < 5; i++) {
//     console.log(`Số: ${i}`);
// }

// Ví dụ vòng lặp forEach
// const numbers = [10, 20, 30, 40];
// numbers.forEach((element, index) => {
//     console.log(`Phần tử: ${element}, Chỉ số: ${index}`);
// });

// Bài 1: Cho một mảng số nguyên đại diện cho điểm của học sinh: [8, 9, 5, 7, 10, 4]
// Dùng vòng lặp for để in ra các điểm số từ vị trí cuối cùng về vị trí đầu tiên (ngược mảng)
// Dùng vòng lặp forEach để in ra thông báo: "Học sinh thứ [index + 1] đạt [element] điểm"
let scores = [8, 9, 5, 7, 10, 4];

for (let i = scores.length - 1; i >= 0; i--) {
    console.log(scores[i]);
}

scores.forEach((Element, index) => {
    console.log('Hoc sinh thu ' + (index + 1) + ' dat ' + Element + ' diem');
}
);

// Bài 2: Cho mảng số: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Hãy dùng vòng lặp for để in các số. Nhưng nếu gặp số 6, hãy dùng lệnh break để dừng vòng lặp ngay lập tức
// Câu hỏi: Bạn có thể dùng break trong forEach được không?
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 6) {
        break;
    }
    console.log(numbers[i]);
}

