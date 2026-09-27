/*Example 1:
Given an integer x, return true if x is a palindrome, and false otherwise.
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Constraints:
-231 <= x <= 231 - 1
Follow up: Could you solve it without converting the integer to a string? */

function isPalindrome(x: number): boolean {
    //neu x nho hon 0 thi khong phai so doi xung
    if (x < 0){
        return false;
    }

    const soBanDau = x; // so ban dau de so sanh voi so dao nguoc
    let soDaoNguoc = 0; // so dao nguoc de so sanh voi so ban dau
    while (x > 0){
        // lay so cuoi cua x
        const soCuoi = x % 10;
        // tinh so dao nguoc = so dao nguoc * 10 + so cuoi
        soDaoNguoc = soDaoNguoc * 10 + soCuoi;
        // hàm Math.floor - chia cho 10, bỏ phần lẻ, lấy phần nguyên, ví dụ 1/10 = 0.1 => Math.floor(1/10) = 0
        x = Math.floor(x/10);
    }
    return soDaoNguoc === soBanDau;
};
// cd automation/Algorithms
// tsx palindromeNumber.ts
console.log(isPalindrome(121));    // true
console.log(isPalindrome(-121));   // false
console.log(isPalindrome(10));     // false
console.log(isPalindrome(0));      // true
console.log(isPalindrome(12321));  // true
console.log(isPalindrome(12221));  // true



// === Giải thích thuật toán với số 121 ===
// Nhấc từng chữ số từ bên phải, ghép thành số mới, so sánh với số ban đầu

// soBanDau = 121, soDaoNguoc = 0

// Lần 1: x = 121
//   soCuoi = 121 % 10 = 1           → nhấc chữ số cuối, được 1
//   soDaoNguoc = 0 * 10 + 1 = 1     → ghép vào số đảo ngược
//   x = Math.floor(121 / 10) = 12   → bỏ chữ số cuối, còn 12

// Lần 2: x = 12
//   soCuoi = 12 % 10 = 2            → nhấc chữ số cuối, được 2
//   soDaoNguoc = 1 * 10 + 2 = 12    → ghép vào số đảo ngược
//   x = Math.floor(12 / 10) = 1     → bỏ chữ số cuối, còn 1

// Lần 3: x = 1
//   soCuoi = 1 % 10 = 1             → nhấc chữ số cuối, được 1
//   soDaoNguoc = 12 * 10 + 1 = 121  → ghép vào số đảo ngược
//   x = Math.floor(1 / 10) = 0      → hết chữ số, thoát vòng lặp

// Kết quả: soDaoNguoc(121) === soBanDau(121) → true → là palindrome