// 题目描述

// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组 
// 输入例子:
// square([1, 2, 3, 4])

// 输出例子:
// [1, 4, 9, 16]

function square(arr) {
	return arr.map(function(item){
        return item*item;
    })
}