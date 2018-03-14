//정규표현식 = 문자열에서 특정한 문자를 찾아내는 도구 
//정규표현식의 2가지 표현 방법

//1.컴파일 : 검출하고자 하는 패턴을 만드는 일
	var str = 'a';
	var pattern =/a/;
//var pettern = new RegExp('a'); 와 같음.

//--------정규표현식 메소드 실행----------
	alert(pattern.exec('abcdef'));
	pattern = /a./;
	alert(pattern.exec('abcdef'));
	alert(pattern.test('bcdef'));