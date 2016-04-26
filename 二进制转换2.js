// 题目描述

// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。 
// 输入例子:
// convertToBinary(65)

// 输出例子:
// 01000001



function convertToBinary(num) {
    var result=Number(num).toString(2);
	 while(result.length<8)
         {
             result='0'+result;
         }
    return result;
}