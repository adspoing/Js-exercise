
function foo(array){
	var obj=[];
	for(var i=0;i<array.length;i++)
	{
		for(var j=0;j<i;j++)
		{
			var key=array[j]-array[i];
			if(key<0)
			 	key=-key;
			if(obj[key])
			{
				obj[key]++;
			}
			else
				obj[key]=1;
		}
	}
	var max=2;
	for(x in obj)
	{
		if(obj[x]>max)
		{
			max=obj[x];
		}
	}
	return max;
}