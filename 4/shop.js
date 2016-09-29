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























		
	}

