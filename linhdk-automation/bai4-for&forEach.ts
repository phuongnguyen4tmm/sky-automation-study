/* Cho một mảng số nguyên đại diện cho điểm của học sinh: [8, 9, 5, 7, 10, 4]
Dùng vòng lặp for để in ra các điểm số từ vị trí cuối cùng về vị trí đầu tiên (ngược mảng)
Dùng vòng lặp forEach để in ra thông báo: "Học sinh thứ [index + 1] đạt [element] điểm"*/
let score: number[]=[8,9,5,7,10,4];
let reversed: number[]=[]
for (let i = score.length - 1; i >= 0; i--) {
  reversed.push(score[i]);
}


console.log(reversed);
score.forEach((score,index) => {console.log(`Học sinh thứ ${index+1} đạt ${score} điểm`);});

/*Cho mảng số: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Hãy dùng vòng lặp for để in các số. Nhưng nếu gặp số 6, hãy dùng lệnh break để dừng vòng lặp ngay lập tức
Câu hỏi: Bạn có thể dùng break trong forEach được không?*/
let number: number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i<=10; i++){
    if (i===6){
        break;
    }
    console.log(i);
