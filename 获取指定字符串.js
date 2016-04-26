// 题目描述

// 给定字符串 str，检查其是否包含 3 个连续的数字
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false 
// 输入例子:
// captureThreeNumbers('9876543')

// 输出例子:
// 987

function captureThreeNumbers(str) {
    var result=str.match(/\d{3}/);
    return (result)?result[0]:false;
}