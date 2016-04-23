// 题目描述

// 找出数组 arr 中重复出现过的元素 
// 输入例子:
// duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()

// 输出例子:
// [1, 3, 4]

function duplicates(arr) {
	var obj=[];
    for(x in arr)
        {
            key=arr[x];
            if(!obj[key])
                obj[key]=1;
            else
                obj[key]++;
        }
    var result=[];
    for(key in obj)
        {
            if(obj[key]>1)
                result.push(key);
        }
    return result;
}