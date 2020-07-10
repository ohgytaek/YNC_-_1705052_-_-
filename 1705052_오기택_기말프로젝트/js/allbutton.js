$(document).ready(function(){
// 주요부품 내비바와 상품화면 출력함수
		function MainPartView(){
			$("#mainpart").show();
			$("#subpart").hide();
			$("#nearproduct").hide();
			$("#mainpartpage").show();
			$("#subpartpage").hide();
			$("#nearproductpage").hide();
		}
// 보조부품 내비바와 상품화면 출력함수
		function SubPartView(){
			$("#mainpart").hide();
			$("#subpart").show();
			$("#nearproduct").hide();
			$("#mainpartpage").hide();
			$("#subpartpage").show();
			$("#nearproductpage").hide();
		}
// 주변물품 내비바와 상품화면 출력함수
		function NearProductView(){
			$("#mainpart").hide();
			$("#subpart").hide();
			$("#nearproduct").show();
			$("#mainpartpage").hide();
			$("#subpartpage").hide();
			$("#nearproductpage").show();
		}
// CPU상품만 화면에 출력하는 함수
		function CpuProductView(){
			$(".cpuproduct").show();
			$(".gcardproduct").hide();
			$(".ramproduct").hide();
			$(".mboardproduct").hide();
			$(".powerproduct").hide();
			$(".saveproduct").hide();
			$(".caseproduct").hide();
		}
// 그래픽카드상품만 화면에 출력하는 함수
		function GcardProductView(){
			$(".cpuproduct").hide();
			$(".gcardproduct").show();
			$(".ramproduct").hide();
			$(".mboardproduct").hide();
			$(".powerproduct").hide();
			$(".saveproduct").hide();
			$(".caseproduct").hide();
		}
// 램카드상품만 화면에 출력하는 함수
function RamProductView(){
	$(".cpuproduct").hide();
	$(".gcardproduct").hide();
	$(".ramproduct").show();
	$(".mboardproduct").hide();
	$(".powerproduct").hide();
	$(".saveproduct").hide();
	$(".caseproduct").hide();
}
// 메인보드상품만 화면에 출력하는 함수
function MboardProductView(){
	$(".cpuproduct").hide();
	$(".gcardproduct").hide();
	$(".ramproduct").hide();
	$(".mboardproduct").show();
	$(".powerproduct").hide();
	$(".saveproduct").hide();
	$(".caseproduct").hide();
}
// 파워상품만 화면에 출력하는 함수
function PowerProductView(){
	$(".cpuproduct").hide();
	$(".gcardproduct").hide();
	$(".ramproduct").hide();
	$(".mboardproduct").hide();
	$(".powerproduct").show();
	$(".saveproduct").hide();
	$(".caseproduct").hide();
}
// 저장장치만 화면에 출력하는 함수
function SaveProductView(){
	$(".cpuproduct").hide();
	$(".gcardproduct").hide();
	$(".ramproduct").hide();
	$(".mboardproduct").hide();
	$(".powerproduct").hide();
	$(".saveproduct").show();
	$(".caseproduct").hide();
}
// 케이스상품만 화면에 출력하는 함수
function CaseProductView(){
	$(".cpuproduct").hide();
	$(".gcardproduct").hide();
	$(".ramproduct").hide();
	$(".mboardproduct").hide();
	$(".powerproduct").hide();
	$(".saveproduct").hide();
	$(".caseproduct").show();
}

// 냉각장치상품만 화면에 출력하는 함수
function CoolProductView(){
	$(".coolproduct").show();
	$(".cableproduct").hide();
	$(".soundproduct").hide();
	$(".ODDproduct").hide();
}
// 케이블상품만 화면에 출력하는 함수
function CableProductView(){
	$(".coolproduct").hide();
	$(".cableproduct").show();
	$(".soundproduct").hide();
	$(".ODDproduct").hide();
}
// 음향장치상품만 화면에 출력하는 함수
function SoundProductView(){
	$(".coolproduct").hide();
	$(".cableproduct").hide();
	$(".soundproduct").show();
	$(".ODDproduct").hide();
}
// ODD상품만 화면에 출력하는 함수
function ODDProductView(){
	$(".coolproduct").hide();
	$(".cableproduct").hide();
	$(".soundproduct").hide();
	$(".ODDproduct").show();
}

// 상품만 화면에 출력하는 함수
function MouseProductView(){
	$(".mouseproduct").show();
	$(".keyboardproduct").hide();
	$(".monitorproduct").hide();
	$(".broadcastproduct").hide();
}
// 상품만 화면에 출력하는 함수
function KeyboardProductView(){
	$(".mouseproduct").hide();
	$(".keyboardproduct").show();
	$(".monitorproduct").hide();
	$(".broadcastproduct").hide();
}
// 상품만 화면에 출력하는 함수
function MonitorProductview(){
	$(".mouseproduct").hide();
	$(".keyboardproduct").hide();
	$(".monitorproduct").show();
	$(".broadcastproduct").hide();
}
// 상품만 화면에 출력하는 함수
function BroadcastProductView(){
	$(".mouseproduct").hide();
	$(".keyboardproduct").hide();
	$(".monitorproduct").hide();
	$(".broadcastproduct").show();
}
function ResetView(){
	$('#mainpartBt > a').replaceWith('<a class="ui-link ui-btn">주요부품</a>');
	$('#nearproductBt > a').replaceWith('<a class="ui-link ui-btn">주변물품</a>');
	$('#cpuproductBt > a').replaceWith('<a class="ui-link ui-btn">CPU</a>');
	$('#gcardproductBt > a').replaceWith('<a class="ui-link ui-btn">그래픽카드</a>');
	$('#ramproductBt > a').replaceWith('<a class="ui-link ui-btn">RAM카드</a>');
	$('#mboardproductBt > a').replaceWith('<a class="ui-link ui-btn">메인보드</a>');
	$('#saveproductBt > a').replaceWith('<a class="ui-link ui-btn">저장장치</a>');
	$('#caseproductBt > a').replaceWith('<a class="ui-link ui-btn">케이스</a>');
	$('#mouseproductBt > a').replaceWith('<a class="ui-link ui-btn">마우스</a>');
	$('#keyboardproductBt > a').replaceWith('<a class="ui-link ui-btn">키보드</a>');

}

$("#bestB").click(function(){
	$("#bestview").show();
	$("#hotdealview").hide();
	$("#todayview").hide();
	$("#eventview").hide();
});

$("#hotdealB").click(function(){
	$("#bestview").hide();
	$("#hotdealview").show();
	$("#todayview").hide();
	$("#eventview").hide();
});

$("#todayB").click(function(){
	$("#bestview").hide();
	$("#hotdealview").hide();
	$("#todayview").show();
	$("#eventview").hide();
});

$("#eventB").click(function(){
	$("#bestview").hide();
	$("#hotdealview").hide();
	$("#todayview").hide();
	$("#eventview").show();
});

// 상품 카탈로그

// 주요부품 출력
$("#mainpartBt").click(function(){
	MainPartView();
});
//보조부품 출력
$("#subpartlBt").click(function(){
	SubPartView();
});
//주변물품 출력
$("#nearproductBt").click(function(){
	NearProductView();
});

// 주요부품
$("#cpuproductBt").click(function(){
	CpuProductView();
});

$("#gcardproductBt").click(function(){
	GcardProductView();
});

$("#ramproductBt").click(function(){
	RamProductView();
});

$("#mboardproductBt").click(function(){
MboardProductView();
});

$("#powerproductBt").click(function(){
PowerProductView();
});

$("#saveproductBt").click(function(){
SaveProductView();
});

$("#caseproductBt").click(function(){
CaseProductView();
});

// 보조부품
$("#coolproductBt").click(function(){
	CoolProductView();
});

$("#cableproductBt").click(function(){
	CableProductView();
});

$("#soundproductBt").click(function(){
	SoundProductView();
});

$("#ODDproductBt").click(function(){
	ODDProductView();
});
// 주변장비
$("#mouseproductBt").click(function(){
MouseProductView();
});
$("#keyboardproductBt").click(function(){
KeyboardProductView();
});
$("#monitorproductBt").click(function(){
MonitorProductview();
});
$("#broadcastproductBt").click(function(){
BroadcastProductView();
});


 $("#cpuBt").click(function(){
	 ResetView();
	  $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	  $('#cpuproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">CPU</a>');
	 MainPartView();
	 CpuProductView();
 });
 $("#gcardBt").click(function(){
	 ResetView();
	  $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	 $('#gcardproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">그래픽카드</a>');
	 MainPartView();
	 GcardProductView();
 });
 $("#ramBt").click(function(){
	 ResetView();
	 $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	 $('#ramproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">RAM카드</a>');
	 MainPartView();
	 RamProductView();
 });
 $("#mboardBt").click(function(){
	 ResetView();
	 $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	 $('#mboardproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">메인보드</a>');
	 MainPartView();
	 MboardProductView();
 });
 $("#saveBt").click(function(){
	 ResetView();
	 $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	 $('#saveproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">저장장치</a>');
	 MainPartView();
	 SaveProductView();
 });
 $("#caseBt").click(function(){
	 ResetView();
	 $('#mainpartBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주요부품</a>');
	 $('#caseproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">케이스</a>');
	 MainPartView();
	 CaseProductView();
 });
 $("#mouseBt").click(function(){
	 ResetView();
	 $('#nearproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주변물품</a>');
	 $('#mouseproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">마우스</a>');
	 NearProductView();
	 MouseProductView();
 });
 $("#keyboardBt").click(function(){
	 ResetView();
	$('#nearproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">주변물품</a>');
	$('#keyboardproductBt > a').replaceWith('<a class="ui-btn-active ui-link ui-btn">키보드</a>');
	NearProductView();
	KeyboardProductView();
 });

$('#productpage').ready( function(){
ResetView();
});

$("#addinfoBt").click(function(){
	$('#addinfolist').slideToggle();
});

$("#infobox > button:last ").click(function(){
			$('#infobox > h5').empty();
	 var index = $("#eventproductpage > ul > li").index(this);
	$('#bayinfo > h4').text($('#infobox > h4').text());//상품명
	$('#bayinfo > span').html($('#infobox > #imgbox').html());//상품이미지
	$('#bayinfo > h3').html($('#infobox >#pricebox').html());//기격
	});

	$('#mjoinBt').click( function(){
	alert("회원가입 완료");
	});

});
