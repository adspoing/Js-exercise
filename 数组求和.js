// 题目描述

// 计算给定数组 arr 中所有元素的总和 
// 输入描述:
// 数组中的元素均为 Number 类型


// 输入例子:
// sum([ 1, 2, 3, 4 ])

// 输出例子:
// 10
function sum(arr) {
	var result=0;
    for(x in arr)
        {
            result+=arr[x];
        }
    return result;
}