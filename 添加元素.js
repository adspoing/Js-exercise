// 题目描述

// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 输入例子:
// append([1, 2, 3, 4],  10)

// 输出例子:
// [1, 2, 3, 4, 10]
function append(arr, item) {
       return arr.concat(item);//concat不改变原数组，返回连接后的数组
}