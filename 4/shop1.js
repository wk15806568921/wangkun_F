window.onload = function(){

var all = $.cookie("myphone");
if(all == null || all == ""){
	$.cookie("myphone","");
	$.cookie("myphoneimg","");
}else{
	var c = '<div id = "sss"><a href = "http://localhost/%E6%95%B4%E7%AB%99/Detailspage.html#"><img src = "images/ppp1.png"><span>魅族PRO 6</span></a><button id = "button_id">x</button></div>'
	var div = $(".rightbottom");
	div.append(c);
}


var button = $("#button_id");                                                                                                                                                                                                                                                                                                                              
button.click(function(){
	$.cookie("myphone",null);
	$.cookie("myphoneimg",null);
	div.html("")
});

}


