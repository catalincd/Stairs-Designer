var LEFT = 12.0;
var TOP = 20.0;
var NUM = 8;
var BALUSTER = "B2915";
var NEWEL = "B3940";
var SELECTED_ID = 0;
var SELECTED_ITEM;


var balusters=["2011","2111","5004","5005","50058","5015","5035","5040","5060","5060V","5067","5070","5090","5141","5200","5300","53008","5360","5360V","5370","B2905","B2915","C5060","C5060V","C5360","F2005","F2015","F2105","F2115","F2905","F5060","F5060V","F5070","F5360","F5370","P2005","P20058","P2015","P20158","P2105","P2115","P2905","P2915","T2005","T2015"];

for(var i=0;i<balusters.length;i++){
	
	$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="res/balusters/${balusters[i]}.png">`);
}


$(".balusterItem").on("click", function(){

	if(SELECTED_ITEM !== undefined)
	{
		SELECTED_ITEM.css("background", "transparent");
		SELECTED_ITEM.css("border", "none");
	}

	SELECTED_ITEM = $(this);
	SELECTED_ITEM.css("background", "#c2c5a9");
	SELECTED_ITEM.css("border", "2px red solid");
	SELECTED_ID = SELECTED_ITEM.data("id");
	BALUSTER = balusters[SELECTED_ID];

	$("#balusterProduct").empty();
	$("#balusterProduct").append(`<div class="balusterProductItem"><img src="res/balusters/${balusters[SELECTED_ID]}.png"><p>${balusters[SELECTED_ID]}</p></div>`);
	reset();
});



$('input[name="steps"]').change(
	function(){
		NUM = $(this).val();
		reset();
});

$('input:radio[name="baluster"]').change(
	function(){
	    if ($(this).is(':checked')) {
	    	BALUSTER = $(this).val();
	        reset();
	}
});

$('input:radio[name="newel"]').change(
	function(){
	    if ($(this).is(':checked')) {
	    	NEWEL = $(this).val();
	        reset();
	}
});

function drawStairs(number){

	var initTop = TOP + 12;
	var initLeft = LEFT;
	var zIndexOffset = 5;

	$( "#stair" ).append(`<img src="res/stepBottom.png" class="step" style="top:${initTop}rem;left:${initLeft}rem;z-index:${zIndexOffset + number}">`);	
	$( "#stair" ).append(`<img src="res/stepTop.png" class="step" style="top:${initTop - number * 2.34}rem;left:${initLeft + number * 2.82}rem;z-index:${zIndexOffset}">`);	
	
	for(var i=1;i<number;i++)
	{
		var top = initTop - i * 2.34;
		var left = initLeft + i * 2.82;
		var z = zIndexOffset + number - i;
		var style = `top:${top}rem;left:${left}rem;z-index:${z}`;
		$( "#stair" ).append(`<img src="res/stepMid.png" class="step" style="${style}">`);	
	}	
}

function drawHandrails(number, over=true){
	var initTop = TOP + 0.75;
	var initLeft = LEFT;

	$( "#handrail" ).append(`<img src="res/handBottom.png" class="rail" style="top:${initTop+0.05}rem;left:${initLeft}rem;z-index:10">`);	
	$( "#handrail" ).append(`<img src="res/handTop.png" class="rail" style="top:${initTop - number * 2.34}rem;left:${initLeft + number * 2.82}rem;z-index:10">`);	
	
	for(var i=1;i<number;i++)
	{
		var top = initTop - i * 2.34;
		var left = initLeft + i * 2.82;
		var style = `top:${top}rem;left:${left}rem;z-index:10`;
		$( "#handrail" ).append(`<img src="res/handMid.png" class="rail" style="${style}">`);	
	}	
}

function drawBalusters(number, baluster, newel){
	var NUM = (number-1) * 3 + 1;
	var initTop = TOP + 12;
	var initLeft = 2 + LEFT;
	var newelLeftOffset = 2.2;

	$( "#newel" ).append(`<img src="res/${newel}.png" class="newel" style="top:${initTop}rem;left:${initLeft - newelLeftOffset}rem;z-index:15">`);	
	$( "#newel" ).append(`<img src="res/${newel}.png" class="newel" style="top:${initTop - number * 2.34}rem;left:${initLeft - newelLeftOffset + number * 2.82}rem;z-index:15">`);	
	
	for(var i=0;i<NUM;i++)
	{
		var top = initTop - i * 0.78;
		var left = initLeft + i * 0.94;
		var style = `top:${top}rem;left:${left}rem;z-index:1`;
		$( "#baluster" ).append(`<img src="res/balusters/${baluster}.png" class="baluster crop${i%3}" style="${style}">`);
	}	

	var topBaluster = initTop - number * 2.34 + 1;
	var leftBaluster = initLeft + number * 2.82;

	for(var i=0;i<8;i++)
	{
		var left = leftBaluster + i * 0.94;
		var style = `top:${topBaluster}rem;left:${left}rem;z-index:1`;
		$( "#baluster" ).append(`<img src="res/balusters/${baluster}.png" class="baluster" style="${style}">`);
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

reset();
