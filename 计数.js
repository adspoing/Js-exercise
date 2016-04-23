// 题目描述

// 统计数组 arr 中值等于 item 的元素出现的次数 
// 输入例子:
// count([1, 2, 4, 4, 3, 4, 3], 4)

// 输出例子:
// 3

function count(arr, item) {
   var obj=[];
    for(x in arr)
        {
           var key=arr[x];
            if(!obj[key]){
                obj[key]=1;
            }
            else
                {
                    obj[key]++;
                }
        }
    return obj[item];
}