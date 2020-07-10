$(document).ready(function(){
		var height =  $(".notice").height();//하나의 문구의 높이
		var num = $(".rolling li").length;// li의 개수
		var max = height * num;//최대높이
		var move = 0;//운직임 카운터
		function noticeRolling(){//함수선언
			move += height;//문구 하나의 높이 확인(점차 증가하며 문구 변경)
			$(".rolling").animate({"top":-move},600,function(){//0.6초동안 top을 -move만큼 하여 문구를 하나식 내림
				if( move >= max ){//만약 move가 max를 넘기면
					$(this).css("top",0);//rolling클래스의 top을 0으로 초기화
					move = 0;//move도 초기화 하여 처음부터 다시 시작
				};
			});
		};
		//setInterval을 이용하여 3초마다 함수가 발생하여 공지사항이 바뀜
		noticeRollingOff = setInterval(noticeRolling,3000);
		$(".rolling").append($(".rolling li").first().clone());//rolling 마지막에 첫번째 문구를 추가하여 자연스럽게 순환
});
