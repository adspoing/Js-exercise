编写一个方法 求一个字符串的字节长度;
//假设一个中文占两个字节
/*var str = '22两是';

alert(getStrlen(str))

function getStrlen(str){
        var json = {len:0};
        var re = /[\u4e00-\u9fa5]/;
        for (var i = 0; i < str.length; i++) {
                if(re.test(str.charAt(i))){
                        json['len']++;
                }
        };
        return json['len']+str.length;
}*/