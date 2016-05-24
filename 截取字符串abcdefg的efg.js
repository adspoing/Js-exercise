截取字符串abcdefg的efg
var str = "abcdefg";
if (/efg/.test(str)) {
     var efg = str.substr(str.indexOf("efg"), 3);
     alert(efg);
}