# Bài tập Ma trận vuông nxn

## Đề bài
Nhập vào một ma trận vuông kiểu nguyên cấp nxn, xây dựng các hàm thực hiện các công việc sau. Viết hàm main để thực hiện các yêu cầu trên.

---

## Kiến thức cần nhớ

```
Ma trận 4x4:
         cột 0  cột 1  cột 2  cột 3
hàng 0:  [a00]   a01    a02   [a03]
hàng 1:   a10   [a11]  [a12]   a13
hàng 2:   a20   [a21]  [a22]   a23
hàng 3:  [a30]   a31    a32   [a33]
```

| Khái niệm | Công thức | Ví dụ (n=4) |
|---|---|---|
| Đường chéo chính `\` | `i === j` | a00, a11, a22, a33 |
| Đường chéo phụ `/` | `i + j === n - 1` | a03, a12, a21, a30 |
| Trên đường chéo chính | `i < j` | a01, a02, a03, a12, a13, a23 |
| Dưới đường chéo chính | `i > j` | a10, a20, a21, a30, a31, a32 |
| Trên đường chéo phụ | `i + j < n - 1` | a00, a01, a02, a10, a11, a20 |
| Dưới đường chéo phụ | `i + j > n - 1` | a13, a22, a23, a31, a32, a33 |
| Số chẵn | `x % 2 === 0` | 2, 4, 6, 8... |
| Số lẻ | `x % 2 !== 0` | 1, 3, 5, 7... |
| Tam giác trên | Dưới chéo chính đều = 0 | |
| Tam giác dưới | Trên chéo chính đều = 0 | |
| Đối xứng | `mat[i][j] === mat[j][i]` | |

---

## Danh sách yêu cầu

### 1. In ra màn hình dưới dạng bảng

### 2. Tìm min của ma trận

### 3. Tìm min các phần tử âm của ma trận

### 4. Tính tổng từng cột, cho biết các cột có tổng lớn nhất

### 5. Tìm max từng hàng

### 6. Đếm các phần tử dương lớn hơn 10 có trong ma trận

### 7. Kiểm tra xem ma trận có phải ma trận tam giác dưới hay không. Tính tích các phần tử âm thuộc đường chéo phụ

### 8. Tính trung bình cộng các phần tử lớn hơn 10 có trong ma trận

### 9. Đếm xem trong ma trận có bao nhiêu phần tử nằm trong đoạn [5, 30]

### 10. Tính tổng từng hàng, cho biết các hàng có tổng lớn nhất

### 11. Tính trung bình cộng các phần tử dương thuộc cột lẻ trong dãy

### 12. Nhập số hàng và cột bằng nhau, kiểm tra ma trận có phải tam giác trên hay không

### 13. Tính trung bình cộng các phần tử trên đường chéo phụ

### 14. Kiểm tra xem ma trận có phải ma trận đối xứng hay không

### 15. Tìm max các phần tử nằm phía dưới đường chéo chính

### 16. Kiểm tra xem ma trận có các tổng hàng nào có giá trị bằng nhau hay không

### 17. Tìm max của từng cột

### 18. Tính tích các phần tử chẵn nằm phía dưới đường chéo phụ

### 19. Tìm max từng cột, cột nào có max lớn nhất

### 20. Tính trung bình cộng các phần tử lẻ nằm phía dưới đường chéo phụ

### 21. Hãy cho biết có bao nhiêu phần tử chẵn trong ma trận có giá trị nằm trong đoạn [5, 20] và có bao nhiều phần tử lẻ trong ma trận có giá trị nhỏ hơn 100

### 22. Tìm phần tử chẵn lớn nhất nằm phía trên đường chéo chính

### 23. Tìm ma trận nghịch đảo của ma trận A

### 24. Nhập vào ma trận B, in ra ma trận A+B

