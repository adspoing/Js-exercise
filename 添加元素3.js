// 题目描述

// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组 
// 输入例子:
// insert([1, 2, 3, 4], 'z', 2)

// 输出例子:
// [1, 2, 'z', 3, 4]
function insert(arr, item, index) {
	return arr.slice(0,index).concat([item],arr.slice(index));
}