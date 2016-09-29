/*--------------注册方式----------*/
window.onload = function(){

	var  Manner = $(".top").find("a");
	Manner.click(function(){
		Manner.attr("class","");
		$(this).attr("class","a1");
	});	


  $("#input0").on("blur",function(){
  	$(".bottom_0").css("borderColor","red");
  	var z = /^(13[0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/;
  	if(!z.test($("#input0").val())){
  		$(".hint0").html("请输入正确的电话号码！");

  	}else{
  		$(".bottom_0").css("borderColor","green");
  		$(".hint0").html("");


  	}

  });
  $("#input1").on("blur",function(){
  	$(".bottom_1").css("borderColor","red");
  	if($("#input1").val().length != 6){
  		$(".hint1").html("请输入六位验证码！");
  	}else{
  		$(".bottom_1").css("borderColor","green");
  		$(".hint1").html("");
  	}

  });

  $("#input2").on("blur",function(){
  	$(".bottom_2").css("borderColor","red");
  	var z = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{8,16}$/;
  	if(!z.test($("#input2").val())){
  		$(".hint2").html("密码长度为8~16区分大小写,至少包含两种类型");
  	}else{
  		$(".bottom_2").css("borderColor","green");
  		$(".hint2").html("");
  	}

  });

  $(".bottom_4").click(function(){
  		alert("恭喜你   注册成功！");


  });





}


