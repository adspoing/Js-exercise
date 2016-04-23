// 题目描述

// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 
// 输入例子:
// var arr = [1, 2, 3]; var square = function (x) { return x * x; }; var funcs = makeClosures(arr, square); funcs[1]();

// 输出例子:
// 4
function makeClosures(arr, fn) {
	var result=[];
   for(x in arr){
       (function(x)
       {
           result[x]=function(){
               return fn(arr[x]);
           }
       })(x);
   }
    return result;
}