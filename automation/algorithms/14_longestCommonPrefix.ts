/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty. */

/* Tom tat: tim prefix chung dai nhat cua tat ca chuoi trong mang 
Loi giai: Lay chuoi dau tien lam mau, duyet tung ky tu so sanh voi cung vi tri cua cac chuoi con lai*/
// cd automation/Algorithms
// tsx 14_longestCommonPrefix.ts

function longestCommonPrefix(strs: string[]): string {
    const firstStr = strs[0]; // lay chuoi o vi tri 0 lam mau
    
    for(let i = 0; i < firstStr.length; i++){
        const char = firstStr[i]; // lay ky tu o vi tri i cua chuoi dau tien
        // so sanh char voi ky tu o cung vi tri cua cac chuoi con lai
        for(let j=1; j < strs.length; j++){ // so sanh voi cac chuoi con lai trong mang. strs[j] la chuoi o vi tri j
            // Dk1: neu do dai cua chuoi j ngan hon i => dung vong lap va tra ve prefix chung
            // Dk2: neu ky tu o vi tri i cua chuoi j khac voi char => dung vong lap va tra ve prefix chung
            if(i >= strs[j].length || strs[j][i] !== char){ 
                return firstStr.substring(0, i);
            }
        }
    }
    return firstStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["abc", "abc", "abc"])); // "abc"
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix(["", "abc"])); // ""
