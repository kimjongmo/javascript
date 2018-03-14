//-------------사례---------------
	var pattern = /(\w+)\s(\w+)/;
	// '\w' 는 문자를 의미함
	// '\w+'는 문자열을 의미함
	// '\s' 는 공백을 의미한다.
	
	var str = "coding everybody";
	var result = str.replace(pattern,"$2, $1");
	alert(result);
	//http://www.regexper.com/ <- 정규표현을 시각화 시켜주는 사이트
	//http://www.regexr.com/   <- 정규표현식 빌더
	
//-------------사례2--------------
	var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
	var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
	var result = content.replace(urlPattern, function(url){
	    return '<a href="'+url+'">'+url+'</a>';
	});
	alert(result);