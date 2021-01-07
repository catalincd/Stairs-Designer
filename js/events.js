$(document).on("click", ".balusterItem", function(e){
	if(DESIGN == 0){
		selectBaluster($(this));
		checkBuy();
		reset();
	}
});

$(document).on("click", ".newelItem", function(){
	selectNewel($(this));
	checkBuy();
	reset(DESIGN == 0);
});

$(document).on("click", ".handrailItem", function(){
	selectHandrail($(this));
	checkBuy();
});

$(document).on("click", "#clearButton", function(){
	reset();
	//resetBuy();
	resetClear();
});

$(document).on("click", "#autoCompleteButton", function(){
	autoComplete();
});


function selectBaluster(e){
	
	deselectCurrentBaluster();

	SELECTED_BALUSTER_ITEM = e;
	SELECTED_BALUSTER_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_BALUSTER_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_BALUSTER_ITEM.find("p").addClass("selected");
	SELECTED_BALUSTER_ITEM.addClass("selected");
	SELECTED_BALUSTER_ID = SELECTED_BALUSTER_ITEM.data("id");
	BALUSTER = balusters[SELECTED_BALUSTER_ID];

	//parseType(SELECTED_BALUSTER_ID);

	$("#balusterProduct").append(`<div class="balusterProductItem"><img src="${RES}/balusters/${balusters[SELECTED_BALUSTER_ID]}.png"><p>${getName(balusters[SELECTED_BALUSTER_ID])}</p></div>`);
}

function deselectCurrentBaluster(q = ""){
	$("#balusterProduct").html(q);
	if(SELECTED_BALUSTER_ITEM !== undefined)
	{
		SELECTED_BALUSTER_ITEM.css("background", "transparent");
		SELECTED_BALUSTER_ITEM.css("border", "none");
		SELECTED_BALUSTER_ITEM.find("p").removeClass("selected");
		SELECTED_BALUSTER_ITEM.removeClass("selected");
	}
}

function selectNewel(e){
	deselectCurrentNewel();

	SELECTED_NEWEL_ITEM = e;
	SELECTED_NEWEL_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_NEWEL_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_NEWEL_ITEM.find("p").addClass("selected");
	SELECTED_NEWEL_ITEM.addClass("selected");
	SELECTED_NEWEL_ID = SELECTED_NEWEL_ITEM.data("id");
	NEWEL = newels[SELECTED_NEWEL_ID];

	$("#newelProduct").append(`<div class="newelProductItem"><img src="${RES}/newels/${newels[SELECTED_NEWEL_ID]}.png"><p>${getName(newels[SELECTED_NEWEL_ID])}</p></div>`);
}

function deselectCurrentNewel(q = ""){
	$("#newelProduct").html(q);
	if(SELECTED_NEWEL_ITEM !== undefined)
	{
		SELECTED_NEWEL_ITEM.css("background", "transparent");
		SELECTED_NEWEL_ITEM.css("border", "none");
		SELECTED_NEWEL_ITEM.find("p").removeClass("selected");
		SELECTED_NEWEL_ITEM.removeClass("selected");
	}
}


function selectHandrail(e){
	deselectCurrentHandrail();

	SELECTED_HANDRAIL_ITEM = e;
	SELECTED_HANDRAIL_ITEM.css("background", SELECTOR_BACKGROUND);
	SELECTED_HANDRAIL_ITEM.css("border", SELECTOR_STROKE);
	SELECTED_HANDRAIL_ITEM.find("p").addClass("selected");
	SELECTED_HANDRAIL_ITEM.addClass("selected");
	SELECTED_HANDRAIL_ID = SELECTED_HANDRAIL_ITEM.data("id");
	HANDRAIL = handrails[SELECTED_HANDRAIL_ID];

	$("#handrailProduct").append(`<div class="handrailProductItem"><img src="${RES}/handrails/${handrails[SELECTED_HANDRAIL_ID]}.png"><p>${getName(handrails[SELECTED_HANDRAIL_ID])}</p></div>`);
}

function deselectCurrentHandrail(q = ""){
	$("#handrailProduct").html(q);
	if(SELECTED_HANDRAIL_ITEM !== undefined)
	{
		SELECTED_HANDRAIL_ITEM.css("background", "transparent");
		SELECTED_HANDRAIL_ITEM.css("border", "none");
		SELECTED_HANDRAIL_ITEM.find("p").removeClass("selected");
		SELECTED_HANDRAIL_ITEM.removeClass("selected");
	}
}


$('input[name="steps"]').change(
	function(){
		if(DESIGN == 1){
			$(".balusterItem").removeClass("selected");
			$(".balusterItem").find("p").removeClass("selected");
		}
		NUM = $(this).val();
		reset();
});

$('input:checkbox[name="material"]').change(
	function(){
	    MATERIAL = $(this).is(':checked')? 1:0;
		resetAssets();
		reset();
});

$('input:checkbox[name="state"]').change(
	function(){
	    STATE = $(this).is(':checked')? 1:0;
		resetAssets();
		reset();
});

$('input:checkbox[name="kneewallInput"]').change(
	function(){
	    KNEEWALL = $(this).is(':checked')? 0:1;
		reset();
});

$('input:checkbox[name="designInput"]').change(
	function(){
	    DESIGN = $(this).is(':checked')? 1:0;
	    resetAssets();
		reset();
});


function checkDesign(){
	if(DESIGN == 0){
		$("#balusterGallery").find(".promoTextRight").html(`<p>Click to select</p>`);
		$("#balusterGallery").find(".balusterItem").attr('draggable', 'false');
		$("#balusterGallery").find(".balusterItem").removeClass('dragItem');
	}else{
		$("#balusterGallery").find(".promoTextRight").html(`<p>Drag and drop</p>`);
		$("#balusterGallery").find(".balusterItem").addClass('dragItem');
		$("#balusterGallery").find(".balusterItem").attr('draggable', 'true');
		$(document).on("dragstart", ".balusterItem", function(e){drag(e)});
	}
}

function appendDropEvents(){
	$(document).on("dragover", ".balusterDrop", function(e){dragOver(e);});
	$(document).on("dragleave", ".balusterDrop", function(e){dragLeave(e);});
	$(document).on("drop", ".balusterDrop", function(e){drop(e);});
}

function autoComplete(){
	var CURRENT_SELECTED = [];

	$(".baluster").each(function(e){
		var childImg = $(this).find("img");
		if(childImg != undefined){
			var currentId = $(childImg).data("id");
			if(currentId != undefined)
				CURRENT_SELECTED.push(currentId);
		}
	});

	if(CURRENT_SELECTED.length > 0){
		$(".baluster").removeClass('balusterBorder');

		var allBalusters = $(".baluster").toArray();

		for(var i=0;i<allBalusters.length;i++){
			var thisId = CURRENT_SELECTED[i % CURRENT_SELECTED.length];
			$(allBalusters[i]).html(`<img data-id="${thisId}" src="${RES}/balusters/${balusters[thisId]}.png">`);
		}

	}
	else alert("Please select at least one baluster to auto-complete.");
}

function parseProducts(){
	var CURRENT_SELECTED = [];
	$("#balusterProduct").empty();

	$(".balusterItem").removeClass("selected");
	$(".balusterItem").find("p").removeClass("selected");

	$(".baluster").each(function(e){
		var childImg = $(this).find("img");
		if(childImg != undefined){
			var currentId = $(childImg).data("id");
			if(currentId != undefined && !CURRENT_SELECTED.includes(currentId))
			{
				$(".balusterItem").each(function(e){
					if($(this).data("id") == currentId){
						$(this).addClass("selected");
						$(this).find("p").addClass("selected");
					}
				});
				

				CURRENT_SELECTED.push(currentId);
				$("#balusterProduct").append(`<div class="balusterProductItem"><img src="${RES}/balusters/${balusters[currentId]}.png"><p>${getName(balusters[currentId])}</p></div>`);
			}
		}
	});
	BALUSTER_ARRAY = CURRENT_SELECTED;
	//console.log(CURRENT_SELECTED);
}

function reset(clearBalusters = true){
	if(clearBalusters)$("#baluster").empty();
	$("#handrail").empty();
	$("#newel").empty();
	$("#stair").empty();
	$("#kneewall").empty();	

	if(DESIGN == 0){
		$("#roomButtons").hide(300);
	}else{
		$("#roomButtons").show(300);
	}


	var ROOM_WIDTH = $("#room").width() / rem();
	var x = (NUM-1) * 2.82;
	var y = (NUM-1) * 2.34;
	LEFT = (ROOM_WIDTH - 12.5 - x) / 2.0;
	TOP = (36.0 - 15 + y) / 2.0;

	draw(NUM, BALUSTER, NEWEL, clearBalusters);
}

function resetClear(){
	BALUSTER_ARRAY = [];
	$(".balusterItem").removeClass("selected");
	$(".balusterItem").find("p").removeClass("selected");
	deselectCurrentBaluster(`<div class="selectProduct"><h1 class="selectA">SELECT A BALUSTER</h1></div>`);
	$("#buyButton").hide();
}

function resetBuy(){
	BALUSTER_ARRAY = [];

	BALUSTER = "";
	NEWEL = "";
	HANDRAIL = "";

	SELECTED_BALUSTER_ID = -1;
	SELECTED_NEWEL_ID = -1;
	SELECTED_HANDRAIL_ID = -1;

	deselectCurrentBaluster(`<div class="selectProduct"><h1 class="selectA">SELECT A BALUSTER</h1></div>`);
	deselectCurrentNewel(`<div class="selectProduct"><h1 class="selectA">SELECT A NEWEL</h1></div>`);
	deselectCurrentHandrail(`<div class="selectProduct"><h1 class="selectA">SELECT A HANDRAIL</h1></div>`);

	$(".balusterItem").removeClass("selected");
	$(".balusterItem").find("p").removeClass("selected");

	$("#buyButton").hide();
}

function checkBuy(){
	if(DESIGN == 0)
	{
		if(SELECTED_BALUSTER_ID > -1 && SELECTED_NEWEL_ID > -1 && SELECTED_HANDRAIL_ID > -1)
			$("#buyButton").show();
	}else{
		if(BALUSTER_ARRAY.length > 0 && SELECTED_NEWEL_ID > -1 && SELECTED_HANDRAIL_ID > -1)
			$("#buyButton").show();
	}
}

function resetAssets(){
	if(STATE == 0){
		if(MATERIAL == 0){
			insertBalustersTopWood();
			insertNewelsTopWood();
			insertHandrailsTopWood();
		}
		else{
			insertBalustersTopIron();
			insertNewelsTopIron();
			insertHandrailsTopIron();
		}
	}
	else{
		if(MATERIAL == 0){
			insertBalustersOverWood();
			insertNewelsOverWood();
			insertHandrailsOverWood();
		}
		else{
			insertBalustersOverIron();
			insertNewelsOverIron();
			insertHandrailsOverIron();
		}
	}

	resetBuy();
	checkDesign();
	/*selectBaluster($(".balusterItem").first());
	selectNewel($(".newelItem").first());
	selectHandrail($(".handrailItem").first());*/
}


$(document).on("click", "#buyButton", function(){
	//reset();
	generatePdf();
});


var rem = function rem() {
        var html = document.getElementsByTagName('html')[0];

        return function () {
            return parseInt(window.getComputedStyle(html)['fontSize']);
        }
    }();





var roomTop = 0;
var roomHeight = 0;
var footerTop = 0;
var marginOffset = 0;
var floatEnabled = false;

$(document).ready(function(){
	marginOffset = (rem() * 1.5);
	roomTop = $('#room').position().top;
	roomHeight = $('#room').height();
	footerTop = $('.footer').position().top - (rem() * 0.5);

	checkPosition();

	$(window).bind("resize", checkPosition);
});


$(window).scroll(function() {
	if(floatEnabled){
		var q = $(this).scrollTop() - roomTop + marginOffset;
		if(q < 0) q = 0;
   		$('#room').css('top', q + "px");

   		if($('#room').position().top + roomHeight > footerTop){
   			$('#room').css('top', (footerTop - roomTop - roomHeight)+"px");
   		}
	}
});




function checkPosition()
{
	if (window.matchMedia('(max-width: 1280px)').matches) {
        floatEnabled = false;
        //$("#designDiv").html("<h2>PERSONALIZED DESIGN IS NOT SUPPORTED ON THIS DEVICE</h2>");
    } else {
        floatEnabled = true;
    }
}