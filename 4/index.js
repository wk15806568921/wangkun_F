/*----------菜单下拉---------*/

window.onload = function(){
	
	/*----------banner左右按钮---------*/
	var naver1 = $("#naver").find(".naver1");








	/*var ul1 = document.getElementById("ul1");
	var li1 = ul1.getElementsByTagName("li");
	var pull = document.createElement("div");
	var bodywidth = document.body.clientWidth;
	pull.style.height = "0px";
	pull.style.width = bodywidth + "px";
	pull.style.opacity = "0.99";
	pull.style.position = "absolute";
	pull.style.left = "0px";
	pull.style.backgroundColor = "#fffefd";
	pull.style.zIndex = "3";
	pull.id = "pulldown00";
	pull.style.overflow = "hidden";
	li1[0].appendChild(pull);
	for(var i = 0; i < li1.length; i++){
		li1[i].onmouseover = function(){
		startMove(pull,{height:200});


		}
		li1[i].onmouseout = function(){
		startMove(pull,{height:0});
		}
	}*/
		

	/*----------banner左右按钮---------*/
	/*var leftbgbut = document.getElementsByClassName("leftbgbut")[0];
	var rightbgbut = document.getElementsByClassName("rightbgbut")[0];
	var banner = document.getElementById("banner");
	banner.onmouseover = function(){
		leftbgbut.style.backgroundColor = "#7b7b7c";
		rightbgbut.style.backgroundColor = "#7b7b7c";
	}
	banner.onmouseout = function(){
		leftbgbut.style.backgroundColor = "";
		rightbgbut.style.backgroundColor = "";
	}*/

	/*---------------classify---------------*/



	ajax("get","index.json","",function(data){
		
		var classify = JSON.parse(data).menu0;
		var classify1 = JSON.parse(data).menu1;
		var classify2 = JSON.parse(data).menu2;
		var classify3 = JSON.parse(data).menu3;
		var classify4 = JSON.parse(data).menu4;
		var classify5 = JSON.parse(data).menu5;
		var classify6 = JSON.parse(data).menu6;
		for(var i = 0;i < classify.length;i++){
			var qwe0 = $(".qwe0");
			var qwe0_0 = $('<a href = ""><img src = "' + classify[i].images + '"><span>' + classify[i].title + '</span></a>');
			qwe0.append(qwe0_0);
		}
		for(var i = 0;i < classify1.length;i++){
			var qwe1 = $(".qwe1");
			var qwe0_1 = $('<a href = ""><img src = "' + classify1[i].images + '"><span>' + classify1[i].title + '</span></a>');
			qwe1.append(qwe0_1);
		}
		for(var i = 0;i < classify2.length;i++){
			var qwe2 = $(".qwe2");
			var qwe0_2 = $('<a href = ""><img src = "' + classify2[i].images + '"><span>' + classify2[i].title + '</span></a>');
			qwe2.append(qwe0_2);
		}
		for(var i = 0;i < classify3.length;i++){
			var qwe3 = $(".qwe3");
			var qwe0_3 = $('<a href = ""><img src = "' + classify3[i].images + '"><span>' + classify3[i].title + '</span></a>');
			qwe3.append(qwe0_3);
		}
		for(var i = 0;i < classify4.length;i++){
			var qwe4 = $(".qwe4");
			var qwe0_4 = $('<a href = ""><img src = "' + classify4[i].images + '"><span>' + classify4[i].title + '</span></a>');
			qwe4.append(qwe0_4);
		}
		for(var i = 0;i < classify5.length;i++){
			var qwe5 = $(".qwe5");
			var qwe0_5 = $('<a href = ""><img src = "' + classify5[i].images + '"><span>' + classify5[i].title + '</span></a>');
			qwe5.append(qwe0_5);
		}
		for(var i = 0;i < classify6.length;i++){
			var qwe6 = $(".qwe6");
			var qwe0_6 = $('<a href = ""><img src = "' + classify6[i].images + '"><span>' + classify6[i].title + '</span></a>');
			qwe6.append(qwe0_6);
		}
		var showerdiv0 = JSON.parse(data).recommend0;
		var showerdiv_0 = $(".showerdiv_0");
		var showerdivproduce0 = $('<a href = ""><dl><dt><img src = "'+ showerdiv0[0].images +'"></dt><dd class="dd1">'+ showerdiv0[0].title +'</dd><dd class="dd2">'+ showerdiv0[0].introduce +'</dd><dd class="dd3">'+ showerdiv0[0].price +'</dd></dl></a>')
		showerdiv_0.append(showerdivproduce0);
		var showerdiv1 = JSON.parse(data).recommend1;
		var showerdiv_1 = $(".showerdiv_1");
		var showerdivproduce1 = $('<a href = ""><dl><dt><img src = "'+ showerdiv1[0].images +'"></dt><dd class="dd1">'+ showerdiv1[0].title +'</dd><dd class="dd2">'+ showerdiv1[0].introduce +'</dd><dd class="dd3">'+ showerdiv1[0].price +'</dd></dl></a>')
		showerdiv_1.append(showerdivproduce1);
		var showerdiv2 = JSON.parse(data).recommend2;
		var showerdiv_2 = $(".showerdiv_2");
		var showerdivproduce2 = $('<dl><dt><img src = "'+ showerdiv2[0].images +'"></dt><dd class="dd1">'+ showerdiv2[0].title +'</dd><dd class="dd2">'+ showerdiv2[0].introduce +'</dd><dd class="dd3">'+ showerdiv2[0].price +'</dd></dl>')
		showerdiv_2.append(showerdivproduce2);
		var showerdiv3 = JSON.parse(data).recommend3;
		var showerdiv_3 = $(".showerdiv_3");
		var showerdivproduce3 = $('<a href = ""><dl><dt><img src = "'+ showerdiv3[0].images +'"></dt><dd class="dd1">'+ showerdiv3[0].title +'</dd><dd class="dd2">'+ showerdiv3[0].introduce +'</dd><dd class="dd3">'+ showerdiv3[0].price +'</dd></dl></a>')
		showerdiv_3.append(showerdivproduce3);
		showerdiv_2.append(showerdivproduce2);
		var showerdiv4 = JSON.parse(data).recommend4;
		var showerdiv_4 = $(".showerdiv_4");
		var showerdivproduce4 = $('<a href = ""><dl><dt><img src = "'+ showerdiv4[0].images +'"></dt><dd class="dd1">'+ showerdiv4[0].title +'</dd><dd class="dd2">'+ showerdiv4[0].introduce +'</dd><dd class="dd3">'+ showerdiv4[0].price +'</dd></dl></a>')
		showerdiv_4.append(showerdivproduce4);
		//main json----------- 
		var main0 = JSON.parse(data).main0;
		var main_00 = $(".main1");
		var main_10 = $(".wer");
		var main_0 = $('<a href = "" ><dl id = "wert"><dt><img src = "'+ main0[0].images +'"></dt></dl></a>');
		main_00.append(main_0);
		for(var i = 1;i < main0.length;i++){
					var main_0 = $('<a href = ""><dl><dt><img src = "'+ main0[i].images +'"></dt><dd class="dd1">'+ main0[i].title +'</dd><dd class="dd2">'+ main0[i].introduce +'</dd><dd class="dd3">'+ main0[i].price +'</dd></dl></a>')
					main_00.append(main_0);
		}
		var main1 = JSON.parse(data).main1;
		var main_11 = $(".main2");
		var main_1 = $('<a href = "" ><dl id = "wert1"><dt><img src = "'+ main1[0].images +'"></dt></dl></a>');
		main_11.append(main_1);
		for(var i = 1;i < main1.length;i++){
					var main_1 = $('<a href = ""><dl><dt><img src = "'+ main1[i].images +'"></dt><dd class="dd1">'+ main1[i].title +'</dd><dd class="dd2">'+ main1[i].introduce +'</dd><dd class="dd3">'+ main1[i].price +'</dd></dl></a>')
					main_11.append(main_1);
		}
		var main2 = JSON.parse(data).main2;
		var main_22 = $(".main3");
		var main_2 = $('<a href = "" ><dl id = "wert2"><dt><img src = "'+ main2[0].images +'"></dt></dl></a>');
		main_22.append(main_2);
		for(var i = 1;i < main2.length;i++){
					var main_2 = $('<a href = ""><dl><dt><img src = "'+ main2[i].images +'"></dt><dd class="dd1">'+ main2[i].title +'</dd><dd class="dd2">'+ main2[i].introduce +'</dd><dd class="dd3">'+ main2[i].price +'</dd></dl></a>')
					main_22.append(main_2);
		}
		var main3 = JSON.parse(data).main3;
		var main_33 = $(".main4");
		var main_3 = $('<a href = "" ><dl id = "wert2"><dt><img src = "'+ main3[0].images +'"></dt></dl></a>');
		main_33.append(main_3);
		for(var i = 1;i < main3.length;i++){
					var main_3 = $('<a href = ""><dl><dt><img src = "'+ main3[i].images +'"></dt><dd class="dd1">'+ main3[i].title +'</dd><dd class="dd2">'+ main3[i].introduce +'</dd><dd class="dd3">'+ main3[i].price +'</dd></dl></a>')
					main_33.append(main_3);
		}

		var sda = main_10.find("a").find("dl");
		for(var i = 0; i < sda.length; i++){
			if((i % 5) == 4){
				sda[i].style.marginRight = "0";
			}
			

		}

		var maindl =  $(".wer").find("dl");
		maindl.hover(function(){
			$(this).animate({top:-4},200);
			$(this).attr("class","shadow");
		},function(){
			$(this).animate({top:0},200);
			$(this).attr("class","");
		});

		//---------------------导航下拉 JOSO ----------------
		var pulldown0 = JSON.parse(data).pulldown0;
		var naver1 = $(".naver1")
		for(var i = 0;i < pulldown0.length;i++){
				var nav1 = $('<a href = "#"><dl><dt><img src = " ' + pulldown0[i].images + '"></dt><dd class = "dd1">' + pulldown0[i].title  + '</dd><dd class = "dd2">'+ pulldown0[i].price + '</dd></dl></a>');
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

	var ul2 = document.getElementById("ul2");
	var li2 = ul2.getElementsByTagName("li");
	var classify_0 = document.getElementById("classify_0");
	var qwe0 = $(".qwe0");
	for(i = 0; i < li2.length; i++){
		li2[1].onmouseover = function(){
			classify_0.style.display = "block";

		}
		li2[1].onmouseout = function(){
			classify_0.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[2].onmouseover = function(){
			classify_1.style.display = "block";

		}
		li2[2].onmouseout = function(){
			classify_1.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[3].onmouseover = function(){
			classify_2.style.display = "block";

		}
		li2[3].onmouseout = function(){
			classify_2.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[4].onmouseover = function(){
			classify_3.style.display = "block";

		}
		li2[4].onmouseout = function(){
			classify_3.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[5].onmouseover = function(){
			classify_4.style.display = "block";

		}
		li2[5].onmouseout = function(){
			classify_4.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[6].onmouseover = function(){
			classify_5.style.display = "block";

		}
		li2[6].onmouseout = function(){
			classify_5.style.display = "none";
		}
	}
	for(i = 0; i < li2.length; i++){
		li2[7].onmouseover = function(){
			classify_6.style.display = "block";

		}
		li2[7].onmouseout = function(){
			classify_6.style.display = "none";
		}
	}

	//banner 滚动-------------------
	var aBtn = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");

			//记录当前被选中的按钮
			var iNow = 0;
			var timer = null;


			aBtn.click(function(){
				iNow = $(this).index() - 1;
				tab();
			});

			timer = setInterval(timerInner, 2000);
			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			});


			function tab(){
				//当点击的时候,将所有的按钮class都清空
				aBtn.attr("class", "");
				aBtn.eq(iNow).attr("class", "active");

				if(iNow == aLi.size() - 1){
					aBtn.eq(0).attr("class", "active");
				}
				oUl.animate({left: -2140 * iNow}, function(){
					if(iNow == aLi.size() - 1){
						iNow = 0;
						oUl.css("left", 0);
					}
				});
			}

			function timerInner(){ 
				iNow++;
				tab();
			}
	var shower = $(".shower_0").find("div");
	for(var i = 0; i < shower.length; i++){
		shower[i].onmouseover = function(){
			this.style.border = "1px solid gray";
		}
		shower[i].onmouseout = function(){
			this.style.border = "1px solid #efefef";
		}
	}

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






}




	

