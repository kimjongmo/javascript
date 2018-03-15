$.ajax({
	url:'http://api-to-call.com/endpoint',
	type:'POST',
	data:JSON.stringify({id:'200'}),
	dataType:'json',
	success(response){

	},
	error(jqXHR,status,errorThrown){

	}
});