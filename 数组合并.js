// 题目描述

// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组 
// 输入例子:
// concat([1, 2, 3, 4], ['a', 'b', 'c', 1])

// 输出例子:
// [1, 2, 3, 4, 'a', 'b', 'c', 1]
function concat(arr1, arr2) {
	 var result=arr1.slice(0);
     for(x in arr2)
     {
         result.push(arr2[x]);
     }
    return result;
}