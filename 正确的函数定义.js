// 题目描述

// 请修复给定的 js 代码中，函数定义存在的问题 
// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }

//     return getValue();
// }
// 输入例子:
// functions(true)

// 输出例子:
// a


function functions(flag) {
    return flag==true?'a':'b';
}