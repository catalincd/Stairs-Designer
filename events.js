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
	    console.log(MATERIAL);
		resetAssets();
		reset();
});

$('input:checkbox[name="state"]').change(
	function(){
	    STATE = $(this).is(':checked')? 1:0;
	    console.log(STATE);
		resetAssets();
		reset();
});




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
	selectBaluster($(".balusterItem").first());
	selectNewel($(".newelItem").first());
}


$("#buyButton").on("click", function(){
	generatePdf();
});


