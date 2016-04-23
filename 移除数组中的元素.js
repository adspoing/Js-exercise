// 题目描述

// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 
// 输入例子:
// remove([1, 2, 3, 4, 2], 2)

// 输出例子:
// [1, 3, 4]
function remove(arr, item) {
     return arr.filter(function(x){
         return x!=item;
     })
}