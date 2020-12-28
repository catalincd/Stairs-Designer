
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

	$( "#handrail" ).append(`<img src="${RES}/handBottom${(STATE==0)?"":"Over"}.png" class="rail" style="top:${initTop+0.05}rem;left:${initLeft}rem;z-index:10">`);	
	$( "#handrail" ).append(`<img src="${RES}/handTop${(STATE==0)?"":"Over"}.png" class="rail" style="top:${initTop - number * 2.34}rem;left:${initLeft + number * 2.82}rem;z-index:10">`);	
	
	for(var i=1;i<number;i++)
	{
		var top = initTop - i * 2.34;
		var left = initLeft + i * 2.82;
		var style = `top:${top}rem;left:${left}rem;z-index:10`;
		$( "#handrail" ).append(`<img src="${RES}/handMid.png" class="rail" style="${style}">`);	
	}	

	$( "#handrail" ).css("z-index", (STATE == 0)? "10" : "20");
}

function drawBalusters(number, baluster, newel){
	var NUM = (number-1) * 3 + 1;
	var initTop = TOP + 12;
	var initLeft = 2 + LEFT;
	var newelLeftOffset = 2.2;
	var topLeftOffset = (STATE == 0)? 0.1 : 0.5;

	$( "#newel" ).append(`<img src="${RES}/newels/${newel}.png" class="newel" style="top:${initTop}rem;left:${initLeft - newelLeftOffset}rem;z-index:15">`);	
	$( "#newel" ).append(`<img src="${RES}/newels/${newel}.png" class="newel" style="top:${initTop - number * 2.34}rem;left:${initLeft - newelLeftOffset + number * 2.82 + topLeftOffset}rem;z-index:15">`);	
	
	for(var i=0;i<NUM;i++)
	{
		var top = initTop - i * 0.78;
		var left = initLeft + i * 0.94;
		var style = `top:${top}rem;left:${left}rem;z-index:1`;
		$( "#baluster" ).append(`<img src="${RES}/balusters/${baluster}.png" class="baluster crop${i%3}" style="${style}">`);
	}	


	var topBalusterOffset = (STATE == 0)? 1 : 0;
	var topBaluster = initTop - number * 2.34 + topBalusterOffset;
	var leftBaluster = initLeft + (topLeftOffset / 2.0) + number * 2.82;

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