// 题目描述

// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置 
// 输入例子:
// findAllOccurrences('abcdefabc'.split(''), 'a').sort()

// 输出例子:
// [0, 6]

function findAllOccurrences(arr, target) {
	var result=[];
    for(x in arr)
        {
            if(arr[x]==target)
                result.push(x);
        }
    return result;
}