
window.onload = function(){
	

	ajax("get","index.json","",function(data){


		//---------------------导航下拉 JOSO ----------------
		var pulldown0 = JSON.parse(data).pulldown0;
		var naver1 = $(".naver1")
		for(var i = 0;i < pulldown0.length;i++){
				var nav1 = $('<a href = ""><dl><dt><img src = " ' + pulldown0[i].images + '"></dt><dd class = "dd1">' + pulldown0[i].title  + '</dd><dd class = "dd2">'+ pulldown0[i].price + '</dd></dl></a>');
				naver1.append(nav1);
		}
		var pulldown1 = JSON.parse(data).pulldown1;
		var naver2 = $(".naver2")
		for(var i = 0;i < pulldown1.length;i++){
				var nav2 = $('<a href = "#"><dl><dt><img src = " ' + pulldown1[i].images + '"></dt><dd class = "dd1">' + pulldown1[i].title  + '</dd><dd class = "dd2">'+ pulldown1[i].price + '</dd></dl></a>');
				naver2.append(nav2);
		}
		var pulldown2 = JSON.parse(data).pulldown2;
		var naver3 = $(".naver3")
		for(var i = 0;i < pulldown2.length;i++){
				var nav3 = $('<a href = "#"><dl><dt><img src = " ' + pulldown2[i].images + '"></dt><dd class = "dd1">' + pulldown2[i].title  + '</dd><dd class = "dd2">'+ pulldown2[i].price + '</dd></dl></a>');
				naver3.append(nav3);
		}
		var pulldown3 = JSON.parse(data).pulldown3;
		var naver4 = $(".naver4")
		for(var i = 0;i < pulldown3.length;i++){
				var nav4 = $('<a href = "#"><dl><dt><img src = " ' + pulldown3[i].images + '"></dt><dd class = "dd1">' + pulldown3[i].title  + '</dd><dd class = "dd2">'+ pulldown3[i].price + '</dd></dl></a>');
				naver4.append(nav4);
		}
		var pulldown4 = JSON.parse(data).pulldown4;
		var naver5 = $(".naver5")
		for(var i = 0;i < pulldown4.length;i++){
				var nav5 = $('<a href = "#"><dl><dt><img src = " ' + pulldown4[i].images + '"></dt><dd class = "dd1">' + pulldown4[i].title  + '</dd><dd class = "dd2">'+ pulldown4[i].price + '</dd></dl></a>');
				naver5.append(nav5);
		}


	});


	//菜单下拉---------------
		var li1 = $("#ul1").find("li");
		var nav = $(".nav")
		li1.eq(0).mouseover("on",function(){
			startMove(nav[0],{height:220,opacity:100})
		});

		li1.eq(0).mouseout("on",function(){
			startMove(nav[0],{height:0,opacity:0})
		});
		var li1 = $("#ul1").find("li");
		var nav = $(".nav")
		li1.eq(1).mouseover("on",function(){
			startMove(nav[1],{height:220,opacity:100})
		});

		li1.eq(1).mouseout("on",function(){
			startMove(nav[1],{height:0,opacity:0})
		});
		var li1 = $("#ul1").find("li");
		var nav = $(".nav")
		li1.eq(2).mouseover("on",function(){
			startMove(nav[2],{height:220,opacity:100})
		});

		li1.eq(2).mouseout("on",function(){
			startMove(nav[2],{height:0,opacity:0})
		});

		var li1 = $("#ul1").find("li");
		var nav = $(".nav")
		li1.eq(3).mouseover("on",function(){
			startMove(nav[3],{height:220,opacity:100})
		});

		li1.eq(3).mouseout("on",function(){
			startMove(nav[3],{height:0,opacity:0})
		});
		var li1 = $("#ul1").find("li");
		var nav = $(".nav")
		li1.eq(4).mouseover("on",function(){
			startMove(nav[4],{height:220,opacity:100})
		});

		li1.eq(4).mouseout("on",function(){
			startMove(nav[4],{height:0,opacity:0})
		});

//-------点击小图 换大图
		
	var bigimages = $(".bigimages").find("img");
	var smallimages = $(".smallimages").find("div");
	smallimages[0].style.border = "1px solid #e7e7e7";
		smallimages.eq(0).on("click",function(){
			bigimages.attr("src","images/v0.jpg");
			smallimages.css("border","");
			smallimages.eq(0).css("border","1px solid #e7e7e7");
		});
		smallimages.eq(1).on("click",function(){
			bigimages.attr("src","images/v1.jpg");
			smallimages.css("border","");
			smallimages.eq(1).css("border","1px solid #e7e7e7");
		});
		smallimages.eq(2).on("click",function(){
			bigimages.attr("src","images/v2.jpg");
			smallimages.css("border","");
			smallimages.eq(2).css("border","1px solid #e7e7e7");
		});
		smallimages.eq(3).on("click",function(){
			bigimages.attr("src","images/v3.jpg");
			smallimages.css("border","");
			smallimages.eq(3).css("border","1px solid #e7e7e7");
		});
	//选择框边框----------

	var option = $(".div_00").find("span");
	var k = false;
	option.eq(0).on("click",function(){
			if(k == false){
				$(this).css("border","1px solid #e5e5e5");
				//border","1px solid #e5e5e5
				k = true;
			}else{
				$(this).css("border","1px solid #00c3f5");
				k = false;
			}
		});

		/*var option1 = $(".div_01").find("span");
		for(var i = 0 ; i<option1.size())
	var count = 0;
	option1.eq(i).on("click",function(){
		$(this).attr("count",count++);
		if($(this).attr("count") %2 ==0){
		alert($(this).attr("count"))
			option1.attr("class","");
			$(this).attr("class","asd")
		}else{
		option1.attr("class","");
	}
		//}
	});*/
	var l = false;
	var option1 = $(".div_01").find("span");
	option1.eq(1).css("border","1px solid #00c3f5")
	option1.click(function(){
		option1.css("border","");
		$(this).css("border","1px solid #00c3f5");
	});

	/*var l = false;
	var option1 = $(".div_01").find("span");
	option1.eq(0).css("border","1px solid #00c3f5")
	option1.click(function(){
		option1.css("border","");
		$(this).css("border","1px solid #00c3f5");
		if(l == false){
			$(this).css("border","1px solid #00c3f5");
			l = true;
		}else{
			$(this).css("border","1px solid #e5e5e5");
			l = false;
		}

	});*/
	var l = false;
	var option2 = $(".div_02").find("span");
	option2.eq(0).css("border","1px solid #00c3f5")
	option2.click(function(){
		option2.css("border","");
		$(this).css("border","1px solid #00c3f5");
	});
	
	var option = $(".div_03").find("span");
	var k = false;
	option.eq(0).css("border","1px solid #00c3f5")
	option.eq(0).on("click",function(){
			if(k == false){
				$(this).css("border","1px solid #e5e5e5");
				//border","1px solid #e5e5e5
				k = true;
			}else{
				$(this).css("border","1px solid #00c3f5");
				k = false;
			}
		});
	var button = $("#bottom").find("a");
	var iop = $("#iop").find("div");

	button.click(function(){
		button.attr("class","");
		button.css("color","");
		$(this).attr("class","but0");
		$(this).css("color","#3ae1fd");
		iop.css("display","none");
		iop.eq($(this).index()).css("display","block");
	});
	var buy = $("#buy_id");
buy.click(function(){
	var all = $.cookie("myphone");
	$.cookie("myphone","魅族PRO 6");
	$.cookie("myphoneimg","images/ppp1.png");
	var c = '<div id = "sss"><a id = "aa"><img id = "bb" src = "'+ $.cookie("myphoneimg")+'"><span>'+ $.cookie("myphone") +'</span></a><button id = "button_id">x</button><div>'
	var div = $(".rightbottom");
	div.append(c);
	alert("加入购物车成功！");
	open("http://localhost/4/shop.html","k");
});
	



}

	



	

