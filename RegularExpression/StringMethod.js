//---------String 메소드 실행-----------
	alert('abcdef'.match(pattern));
//---------------옵션-----------------
//i => 대소문자 구분하지 않는다.
	var xi =/a/;
	alert("Abcde".match(xi));
	
	var oi =/a/i;
	alert("Abcde".match(oi));
//g = 검색된 모든 결과를 리턴한다
	var xg =/a/;
	alert("abcdea".match(xg));
	
	var og =/a/g;
	alert("abcdea".match(og));
//ig
	var ig = /a/ig;
	alert("AbcaA".match(ig));