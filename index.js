var SELECTOR_BACKGROUND = "#7F7F7F";
var SELECTOR_STROKE = "2px solid red";


var LEFT = 12.0;
var TOP = 20.0;
var NUM = 8;
var BALUSTER = "B2915";
var NEWEL = "2011";

var SELECTED_BALUSTER_ID = 0;
var SELECTED_BALUSTER_ITEM;

var SELECTED_NEWEL_ID = 0;
var SELECTED_NEWEL_ITEM;

var newels=["4075_50","4091","4092","4093","4094","4095","4096","4097","4175_50","4391","4392","4393","4394","4395","4396","4397","F3040","F4091","P3040","P30408","RA4091","RC4091","T3040","P3010","T3010","NWL14048sb","NWLbask48sb","NWLRIB48sb","NWLTW48sb","B3940","F3940","P3940","F3340","F3340BT","F3240","F3240BT","P3340","P3340BT","P3240","P3240BT","45008","4500","4500COL","4600","4004","4004RT","4004COL","4004SCR","4104BT","4180","4150","4900","4040","4040BT","4000","F4000","C4000","4110","F4110","c4110","3513PT","4013pt","B3910","F3910","P3910","F3310","F3210","P3310","P3210","P30108","F3010","P3010","42708","4270","3270","4010","4050","4060","NWL14048sb"];
var balusters=["B2915","F2915","P2915","2111","P2115","T2015","F2015","P2015","53008","5300","5370","F5370","2011","5015","5035","5040","5200","5070","F5070","B2905","F2905","P2905","F2105","P2105","P20058","T2005","F2005","P2005","50058","5005","5004","5067","5141","5360","F5360","C5360","5060","F5060","C5060","5060V","C5060V","5360V","5090","F2115","F5060V","F5360V","P20158","5360V","13144sb","9044sb","HOLPLA44sb","WAVE44sb","10044sb","13044sb","11044sb","30544sb","30844sb","31044sb","HOL14044","HOL14344sb","33044sb","13244sb","14044sb","14344sb","15044sb","16044sb","61144sv","2bask44sb","1RIB44sb","40144sb","1bask44sb","2tw44sb","60044sb","40244sb","1knuc44sb","2rib44sb","2knuc44sb","8044sb","2knuc1bask44sb","8544sb","61244sv","HOL16044sb","HOL65044sb","HOL65144sb","HOL65244sb","HOL65344","HOL15044sb","1tw44sb","HOL1bask44sb","HOL2bask44","HOL1knuc44sb","HOL2knuc44","HOLPLA44sb","HOL1tw44sb","HOL2tw44sb","KW1bask44sb","KW2bask44sb","KW1tw44sb","KW1knuc44sb","KW2knuc44sb","KW2tw44sb","MG1bask44sb","MG1knuc44sb","MG1tw44sb","MG2bask44sb","MG2knuc44sb","MG2tw44sb","MGPLA44sb","Dbltw44sb","Dbltw44sb","B2915","F2915","P2915","2111","P2115","T2015","F2015","P2015","53008","5300","2011","5015","5035","5040","5200","B2905","F2905","P2905","F2105","P2105","P20058","T2005","F2005","P2005","50058","5005","5004","5067","5141","F2115","P20158","13144sb","9044sb","HOLPLA44sb","WAVE44sb","10044sb","13044sb","11044sb","30544sb","30844sb","31044sb","HOL14044","HOL14344sb","33044sb","13244sb","14044sb","14344sb","15044sb","16044sb","61144sv","2bask44sb","1RIB44sb","40144sb","1bask44sb","2tw44sb","60044sb","40244sb","1knuc44sb","2rib44sb","2knuc44sb","8044sb","2knuc1bask44sb","8544sb","61244sv","HOL16044sb","HOL65044sb","HOL65144sb","HOL65244sb","HOL65344","HOL15044sb","1tw44sb","HOL1bask44sb","HOL2bask44","HOL1knuc44sb","HOL2knuc44","HOLPLA44sb","HOL1tw44sb","HOL2tw44sb","KW1bask44sb","KW2bask44sb","KW1tw44sb","KW1knuc44sb","KW2knuc44sb","KW2tw44sb","MG1bask44sb","MG1knuc44sb","MG1tw44sb","MG2bask44sb","MG2knuc44sb","MG2tw44sb","MGPLA44sb","Dbltw44sb","Dbltw44sb"];

var MATERIAL = 0;
var STATE = 0;

var RES = "https://raw.githubusercontent.com/Tokarev420/Stairs-Designer/main/res";

function insertBalustersTopWood(){
	$("#balusterGalleryItems").empty();
	for(var i=0;i<47;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersTopIron(){
	$("#balusterGalleryItems").empty();
	for(var i=47;i<107;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersOverWood(){
	$("#balusterGalleryItems").empty();
	for(var i=107;i<138;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersOverIron(){
	$("#balusterGalleryItems").empty();
	for(var i=138;i<200;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertNewelsTopWood(){
	$("#newelGalleryItems").empty();
	for(var i=0;i<23;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsOverWood(){
	$("#newelGalleryItems").empty();
	for(var i=23;i<29;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsTopIron(){
	$("#newelGalleryItems").empty();
	for(var i=60;i<79;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsOverIron(){
	$("#newelGalleryItems").empty();
	for(var i=29;i<60;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

$(document).on("click", ".balusterItem", function(e){
	selectBaluster($(this));
	reset();
});

$(document).on("click", ".newelItem", function(){
	selectNewel($(this));
	reset();
});

function selectBaluster(e){
	if(SELECTED_BALUSTER_ITEM !== undefined)
	{
		SELECTED_BALUSTER_ITEM.css("background", "transparent");
		SELECTED_BALUSTER_ITEM.css("border", "none");
	}

	SELECTED_BALUSTER_ITEM = e;
	SELECTED_BALUSTER_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_BALUSTER_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_BALUSTER_ID = SELECTED_BALUSTER_ITEM.data("id");
	BALUSTER = balusters[SELECTED_BALUSTER_ID];

	$("#balusterProduct").empty();
	$("#balusterProduct").append(`<div class="balusterProductItem"><img src="${RES}/balusters/${balusters[SELECTED_BALUSTER_ID]}.png"><p>${balusters[SELECTED_BALUSTER_ID]}</p></div>`);
}

function selectNewel(e){
	if(SELECTED_NEWEL_ITEM !== undefined)
	{
		SELECTED_NEWEL_ITEM.css("background", "transparent");
		SELECTED_NEWEL_ITEM.css("border", "none");
	}

	SELECTED_NEWEL_ITEM = e;
	SELECTED_NEWEL_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_NEWEL_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_NEWEL_ID = SELECTED_NEWEL_ITEM.data("id");
	NEWEL = newels[SELECTED_NEWEL_ID];

	$("#newelProduct").empty();
	$("#newelProduct").append(`<div class="newelProductItem"><img src="${RES}/newels/${newels[SELECTED_NEWEL_ID]}.png"><p>${newels[SELECTED_NEWEL_ID]}</p></div>`);
}



$('input[name="steps"]').change(
	function(){
		NUM = $(this).val();
		reset();
});

$('input:checkbox[name="material"]').change(
	function(){
	    MATERIAL = $(this).is(':checked')? 1:0;
		resetAssets();
});

$('input:checkbox[name="state"]').change(
	function(){
	    STATE = $(this).is(':checked')? 1:0;
		resetAssets();
});



function drawStairs(number){

	var initTop = TOP + 12;
	var initLeft = LEFT;
	var zIndexOffset = 5;

	$( "#stair" ).append(`<img src="${RES}/stepBottom.png" class="step" style="top:${initTop}rem;left:${initLeft}rem;z-index:${zIndexOffset + number}">`);	
	$( "#stair" ).append(`<img src="${RES}/stepTop.png" class="step" style="top:${initTop - number * 2.34}rem;left:${initLeft + number * 2.82}rem;z-index:${zIndexOffset}">`);	
	
	for(var i=1;i<number;i++)
	{
		var top = initTop - i * 2.34;
		var left = initLeft + i * 2.82;
		var z = zIndexOffset + number - i;
		var style = `top:${top}rem;left:${left}rem;z-index:${z}`;
		$( "#stair" ).append(`<img src="${RES}/stepMid.png" class="step" style="${style}">`);	
	}	
}

function drawHandrails(number, over=true){
	var initTop = TOP + 0.75;
	var initLeft = LEFT;

	$( "#handrail" ).append(`<img src="${RES}/handBottom.png" class="rail" style="top:${initTop+0.05}rem;left:${initLeft}rem;z-index:10">`);	
	$( "#handrail" ).append(`<img src="${RES}/handTop.png" class="rail" style="top:${initTop - number * 2.34}rem;left:${initLeft + number * 2.82}rem;z-index:10">`);	
	
	for(var i=1;i<number;i++)
	{
		var top = initTop - i * 2.34;
		var left = initLeft + i * 2.82;
		var style = `top:${top}rem;left:${left}rem;z-index:10`;
		$( "#handrail" ).append(`<img src="${RES}/handMid.png" class="rail" style="${style}">`);	
	}	
}

function drawBalusters(number, baluster, newel){
	var NUM = (number-1) * 3 + 1;
	var initTop = TOP + 12;
	var initLeft = 2 + LEFT;
	var newelLeftOffset = 2.2;

	$( "#newel" ).append(`<img src="${RES}/newels/${newel}.png" class="newel" style="top:${initTop}rem;left:${initLeft - newelLeftOffset}rem;z-index:15">`);	
	$( "#newel" ).append(`<img src="${RES}/newels/${newel}.png" class="newel" style="top:${initTop - number * 2.34}rem;left:${initLeft - newelLeftOffset + number * 2.82}rem;z-index:15">`);	
	
	for(var i=0;i<NUM;i++)
	{
		var top = initTop - i * 0.78;
		var left = initLeft + i * 0.94;
		var style = `top:${top}rem;left:${left}rem;z-index:1`;
		$( "#baluster" ).append(`<img src="${RES}/balusters/${baluster}.png" class="baluster crop${i%3}" style="${style}">`);
	}	

	var topBaluster = initTop - number * 2.34 + 1;
	var leftBaluster = initLeft + number * 2.82;

	for(var i=0;i<8;i++)
	{
		var left = leftBaluster + i * 0.94;
		var style = `top:${topBaluster}rem;left:${left}rem;z-index:1`;
		$( "#baluster" ).append(`<img src="${RES}/balusters/${baluster}.png" class="baluster" style="${style}">`);
	}
}


function draw(number, baluster, newel, over=true){
	drawHandrails(number);
	drawStairs(number);
	drawBalusters(number, baluster, newel);
}

function reset(){
	$("#baluster").empty();
	$("#handrail").empty();
	$("#newel").empty();
	$("#stair").empty();

	var x = (NUM-1) * 2.82;
	var y = (NUM-1) * 2.34;
	LEFT = (36.0 - 12.5 - x) / 2.0;
	TOP = (36.0 - 15 + y) / 2.0;

	draw(NUM, BALUSTER, NEWEL);
}


function resetAssets(){
	if(STATE == 0){
		if(MATERIAL == 0){
			insertBalustersTopWood();
			insertNewelsTopWood();
		}
		else{
			insertBalustersTopIron();
			insertNewelsTopIron();
		}
	}
	else{
		if(MATERIAL == 0){
			insertBalustersOverWood();
			insertNewelsOverWood();
		}
		else{
			insertBalustersOverIron();
			insertNewelsOverIron();
		}

	}
}

resetAssets();
selectBaluster($(".balusterItem").first());
selectNewel($(".newelItem").first());
reset();


//$("#balusterProduct").empty();
//$("#newelProduct").empty();



$("#buyButton").on("click", function(){
	generatePdf();
});


