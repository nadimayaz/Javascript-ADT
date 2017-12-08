


function call(array,cb){
	array.forEach(function(){
			setTimeout(cb,2000);
	});
}

call([1,2,3,4,5,6],function(i){
		console.log(i);
});
