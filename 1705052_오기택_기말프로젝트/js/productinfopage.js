$(document).ready(function(){

$("#mainpartpage > ul > li ").click(function(){
  $('#infobox >div> h2:last').hide();
  $('#infobox > h5').empty();
   var index = $("#mainpartpage > ul > li").index(this);
	$('#infobox > h4').text($('#mainpartpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
	$('#infobox > h5').append($('#mainpartpage > ul > li:eq(' + index + ') > a > h5').text());//제조사
	$('#infobox > #imgbox').html($('#mainpartpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
	$('#infobox >#pricebox').html($('#mainpartpage > ul > li:eq(' + index + ') > a > h3').html());//기격
	});

  $("#subpartpage > ul > li ").click(function(){
    $('#infobox >div> h2:last').hide();
    $('#infobox > h5').empty();
     var index = $("#subpartpage > ul > li").index(this);
  	$('#infobox > h4').text($('#subpartpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
  	$('#infobox > h5').append($('#subpartpage > ul > li:eq(' + index + ') > a > h5').text());//제조사
  	$('#infobox > #imgbox').html($('#subpartpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
  	$('#infobox >#pricebox').html($('#subpartpage > ul > li:eq(' + index + ') > a > h3').html());//기격
  	});

    $("#nearproductpage > ul > li ").click(function(){
      $('#infobox >div> h2:last').hide();
      $('#infobox > h5').empty();
       var index = $("#nearproductpage > ul > li").index(this);
    	$('#infobox > h4').text($('#nearproductpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
    	$('#infobox > h5').append($('#nearproductpage > ul > li:eq(' + index + ') > a > h5').text());//제조사
    	$('#infobox > #imgbox').html($('#nearproductpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
    	$('#infobox >#pricebox').html($('#nearproductpage > ul > li:eq(' + index + ') > a > h3').html());//기격
    	});

	$('#PIBBT').click( function(){
		$('#productinfobox').show();
		$('#reviewbox').hide();
		$('#companyinfobox').hide();
	});

	$('#RVBBT').click( function(){
		$('#productinfobox').hide();
		$('#reviewbox').show();
		$('#companyinfobox').hide();
	});
	$('#CPBBT').click( function(){
		$('#productinfobox').hide();
		$('#reviewbox').hide();
		$('#companyinfobox').show();
	});

  $("#bestview > ul > li ").click(function(){
    $('#infobox >div> h2:last').hide();
    $('#infobox > h5').empty();
     var index = $("#bestview > ul > li").index(this);
  	$('#infobox > h4').text($('#bestview > ul > li:eq(' + index + ') > a > h4').text());//상품명
  	$('#infobox > h5').text($('#bestview > ul > li:eq(' + index + ') > a > h5').text());//제조사
  	$('#infobox > #imgbox').html($('#bestview > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
  	$('#infobox >#pricebox').html($('#bestview > ul > li:eq(' + index + ') > a > h3').html());//기격
  	});

    $("#hotdealview > ul > li ").click(function(){
      $('#infobox >div> h2:last').show();
          $('#infobox > h5').empty();
       var index = $("#hotdealview > ul > li").index(this);
      $('#infobox > h4').text($('#hotdealview > ul > li:eq(' + index + ') > a > h4').text());//상품명
      $('#infobox > h5').text($('#hotdealview > ul > li:eq(' + index + ') > a > h5').text());//제조사
      $('#infobox > #imgbox').html($('#hotdealview > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
      $('#infobox >#pricebox').html($('#hotdealview > ul > li:eq(' + index + ') > a > div:last').html());//본기격
      });

      $("#todayview > ul > li ").click(function(){
        $('#infobox >div> h2:last').hide();
            $('#infobox > h5').empty();
         var index = $("#todayview > ul > li").index(this);
      	$('#infobox > h4').text($('#todayview > ul > li:eq(' + index + ') > a > h4').text());//상품명
      	$('#infobox > h5').text($('#todayview > ul > li:eq(' + index + ') > a > h5').text());//제조사
      	$('#infobox > #imgbox').html($('#todayview > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
      	$('#infobox >#pricebox').html($('#todayview > ul > li:eq(' + index + ') > a > div > h3').html());//기격
      	});

        $("#eventview > ul > li ").click(function(){
          $('#infobox >div> h2:last').hide();
              $('#infobox > h5').empty();
           var index = $("#eventview > ul > li").index(this);
        	$('#infobox > h4').text($('#eventview > ul > li:eq(' + index + ') > a > h4').text());//상품명
        	$('#infobox > h5').text($('#eventview > ul > li:eq(' + index + ') > a > h5').text());//제조사
        	$('#infobox > #imgbox').html($('#eventview > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
        	$('#infobox >#pricebox').html($('#eventview > ul > li:eq(' + index + ') > a > h3').html());//기격
        	});

          $("#bestviewpage > ul > li ").click(function(){
            $('#infobox >div> h2:last').hide();
                $('#infobox > h5').empty();
             var index = $("#bestviewpage > ul > li").index(this);
          	$('#infobox > h4').text($('#bestviewpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
          	$('#infobox > h5').text($('#bestviewpage> ul > li:eq(' + index + ') > a > h5').text());//제조사
          	$('#infobox > #imgbox').html($('#bestviewpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
          	$('#infobox >#pricebox').html($('#bestviewpage > ul > li:eq(' + index + ') > a > h3').html());//기격
          	});

            $("#hotdealpage > ul > li ").click(function(){
                $('#infobox >div> h2:last').show();
                  $('#infobox > h5').empty();
               var index = $("#hotdealpage > ul > li").index(this);
            	$('#infobox > h4').text($('#hotdealpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
            	$('#infobox > h5').text($('#hotdealpage > ul > li:eq(' + index + ') > a > h5').text());//제조사
            	$('#infobox > #imgbox').html($('#hotdealpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
            	$('#infobox >#pricebox').text($('#hotdealpage > ul > li:eq(' + index + ') > a > h3 > div:last').text());//본기격
            	});

              $("#todaypage > ul > li ").click(function(){
                $('#infobox >div> h2:last').hide();
                    $('#infobox > h5').empty();
                 var index = $("#todaypage > ul > li").index(this);
              	$('#infobox > h4').text($('#todaypage > ul > li:eq(' + index + ') > a > h4').text());//상품명
              	$('#infobox > h5').text($('#todaypage > ul > li:eq(' + index + ') > a > h5').text());//제조사
              	$('#infobox > #imgbox').html($('#todaypage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
              	$('#infobox >#pricebox').html($('#todaypage > ul > li:eq(' + index + ') > a > h3').html());//기격
              	});


                $("#eventproductpage > ul > li ").click(function(){
                  $('#infobox >div> h2:last').hide();
                      $('#infobox > h5').empty();
                   var index = $("#eventproductpage > ul > li").index(this);
                	$('#infobox > h4').text($('#eventproductpage > ul > li:eq(' + index + ') > a > h4').text());//상품명
                	$('#infobox > h5').text($('#eventproductpage > ul > li:eq(' + index + ') > a > h5').text());//제조사
                	$('#infobox > #imgbox').html($('#eventproductpage > ul > li:eq(' + index + ') > a > div:first').html());//상품이미지
                	$('#infobox >#pricebox').html($('#eventproductpage > ul > li:eq(' + index + ') > a > h3').html());//기격
                	});

});
