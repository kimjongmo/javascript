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
	���̺귯���� ���� ����� �����̴�. ����� ���α׷��� �����ϴ� ���� ��ǰ���μ��� ������ �ǹ��Ѵٸ� ���̺귯���� ����
	���Ǵ� ������ �����ϱ� ���ϵ��� �� ������ �Ϸ��� �ڵ���� ������ �ǹ��Ѵٰ� �� �� �ִ�.
	
	�ڹٽ�ũ��Ʈ�� ������ ���̺귯�� jQuery
 -->