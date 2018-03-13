<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="EUC-KR">
	<script src="jquery-3.3.1.js"></script>
	<title>JSP</title>
</head>
<body>
	<ul id="list">
		<li>empty</li>
		<li>empty</li>
		<li>empty</li>
		<li>empty</li>
	</ul>
	<input type="button" value="execute" id="execute_btn">
	<script>
		$('#execute_btn').click(function(){
			$('#list li').text('coding everybody');
		})
	</script>
</body>
</html>



<!-- 
	라이브러리는 모듈과 비슷한 개념이다. 모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면 라이브러리는 자주
	사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미한다고 할 수 있다.
	
	자바스크립트의 유명한 라이브러리 jQuery
 -->