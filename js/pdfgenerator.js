
var GENERATE_SCALE_FACTOR = 0.25;
var STEPS_SCALE_FACTOR = 0.8; /// DO NOT TOUCH
var GENERATE_TOP = 30;
var GENERATE_LEFT = 70;
var DOC_NAME = "Stairs Document.pdf";

function generatePdf(){
	GENERATE_LEFT = 70 - (40 * (NUM-2) / 6.0);

	var pdf = new jsPDF('p', 'mm', [297, 210]);

	addLogo(pdf);
}

function addLogo(pdf){

	var logo = new Image();
	logo.crossOrigin="anonymous";
	logo.src = RES + `/logoBlack.png`;
	logo.onload = function(){
		pdf.addImage(logo, 'png', 200, 200, 100, 455.73);
		loadBalusters(pdf);
	};


	
}

function loadBalusters(pdf){
	var balusterImg = new Image();
	balusterImg.crossOrigin="anonymous";
	balusterImg.src = RES + `/balusters/${balusters[SELECTED_BALUSTER_ID]}.png`;
	balusterImg.onload = function(){
		generateBalusters(balusterImg, pdf);
	};
}

function generateBalusters(img, pdf){

	var xNUM = (NUM-1) * 3 + 1;
	
	var balusterSizeX = 16 * GENERATE_SCALE_FACTOR;
	var balusterSizeY = 200 * GENERATE_SCALE_FACTOR;

	var balusterOffsetX = 17.9 * GENERATE_SCALE_FACTOR;
	var balusterOffsetY = 15 * GENERATE_SCALE_FACTOR;

	var initTop = GENERATE_TOP + xNUM * balusterOffsetY;
	var initLeft = GENERATE_LEFT + (40 * GENERATE_SCALE_FACTOR);
	
	for(var i=0;i<xNUM;i++)
	{
		var top = initTop - i * balusterOffsetY;
		var left = initLeft + i * balusterOffsetX;
		pdf.addImage(img, 'png', left, top, balusterSizeX, balusterSizeY);///Crop at i%3==1
	}	

	var topBaluster = GENERATE_TOP - ((STATE == 0)? 0 : (1.5 * balusterOffsetY));
	var leftBaluster = initLeft + (xNUM+2) * balusterOffsetX;

	for(var i=0;i<8;i++)
	{
		var left = leftBaluster + i * balusterOffsetX;
		pdf.addImage(img, 'png', left, topBaluster, balusterSizeX, balusterSizeY);
	}

	loadHandrails(pdf);	
}

function loadSteps(pdf){

	var loaded = 0;

	var stepMid = new Image();
	var stepBottom = new Image();
	var stepTop = new Image();

	stepMid.crossOrigin="anonymous";
	stepMid.src = RES + `/stepMid.png`;
	stepMid.onload = function(){
		loaded++;
		if(loaded == 3){
			generateSteps(pdf, stepBottom, stepMid, stepTop);
		}
	};

	
	stepBottom.crossOrigin="anonymous";
	stepBottom.src = RES + `/stepBottom.png`;
	stepBottom.onload = function(){
		loaded++;
		if(loaded == 3){
			generateSteps(pdf, stepBottom, stepMid, stepTop);
		}
	};

	
	stepTop.crossOrigin="anonymous";
	stepTop.src = RES + `/stepTop.png`;
	stepTop.onload = function(){
		loaded++;
		if(loaded == 3){
			generateSteps(pdf, stepBottom, stepMid, stepTop);
		}
	};

}


function generateSteps(pdf, bottom, mid, top){

	var stepSizeX = 95 * GENERATE_SCALE_FACTOR * 0.75;
	var stepSizeY = 124 * GENERATE_SCALE_FACTOR * 0.75;

	var stepOffsetX = 53.5 * GENERATE_SCALE_FACTOR;
	var stepOffsetY = 45 * GENERATE_SCALE_FACTOR;

	var initTop = GENERATE_TOP + (168 * GENERATE_SCALE_FACTOR) + (NUM * stepOffsetY);
	var initLeft = GENERATE_LEFT;

	pdf.addImage(bottom, 'png', initLeft, initTop, stepSizeX, stepSizeY);	
	pdf.addImage(top, 'png', initLeft + NUM * stepOffsetX, initTop - NUM * stepOffsetY, 245 * GENERATE_SCALE_FACTOR * 0.75, stepSizeY);	
	
	for(var i=1;i<NUM;i++)
	{
		var top = initTop - i * stepOffsetY;
		var left = initLeft + i * stepOffsetX;
		pdf.addImage(mid, 'png', left, top, stepSizeX, stepSizeY);	
	}

	if(KNEEWALL == 1){
		loadKneewall(pdf);
	}
	else pdf.save(DOC_NAME);
}

function loadKneewall(pdf){
	var loaded = 0;

	var top = new Image();
	top.crossOrigin="anonymous";
	top.src = RES + `/kneeTop.png`;
	top.onload = function(){
		loaded++;
		if(loaded == 5){
			generateKneewall(pdf, top, mid, bottom, fillTop, fill);
		}
	};

	var mid = new Image();
	mid.crossOrigin="anonymous";
	mid.src = RES + `/kneeMid.png`;
	mid.onload = function(){
		loaded++;
		if(loaded == 5){
			generateKneewall(pdf, top, mid, bottom, fillTop, fill);
		}
	};

	var bottom = new Image();
	bottom.crossOrigin="anonymous";
	bottom.src = RES + `/kneeBottom.png`;
	bottom.onload = function(){
		loaded++;
		if(loaded == 5){
			generateKneewall(pdf, top, mid, bottom, fillTop, fill);
		}
	};

	var fillTop = new Image();
	fillTop.crossOrigin="anonymous";
	fillTop.src = RES + `/kneeFillTop.png`;
	fillTop.onload = function(){
		loaded++;
		if(loaded == 5){
			generateKneewall(pdf, top, mid, bottom, fillTop, fill);
		}
	};

	var fill = new Image();
	fill.crossOrigin="anonymous";
	fill.src = RES + `/kneeFill.png`;
	fill.onload = function(){
		loaded++;
		if(loaded == 5){
			generateKneewall(pdf, top, mid, bottom, fillTop, fill);
		}
	};
}

function generateKneewall(pdf, top, mid, bottom, fillTop, fill){

	var stepSizeX = 95 * GENERATE_SCALE_FACTOR * 0.75;
	var stepSizeY = 124 * GENERATE_SCALE_FACTOR * 0.75;

	var stepOffsetX = 53.5 * GENERATE_SCALE_FACTOR;
	var stepOffsetY = 45 * GENERATE_SCALE_FACTOR;

	var initTop = GENERATE_TOP + (117 * GENERATE_SCALE_FACTOR) + (NUM * stepOffsetY);
	var initLeft = GENERATE_LEFT;

	pdf.addImage(bottom, 'png', initLeft, initTop, stepSizeX, stepSizeY * 1.07);	
	pdf.addImage(top, 'png', initLeft + NUM * stepOffsetX + (10 * GENERATE_SCALE_FACTOR), initTop - NUM * stepOffsetY + (32 * GENERATE_SCALE_FACTOR), 245 * GENERATE_SCALE_FACTOR * 0.75, stepSizeY);	
	
	for(var i=1;i<NUM;i++)
	{
		var top = initTop - i * stepOffsetY;
		var left = initLeft + i * stepOffsetX;
		pdf.addImage(mid, 'png', left, top, stepSizeX, stepSizeY);	
	}

	var fillSizeX = (NUM-0.5) * stepOffsetX;
	var fillSizeY = fillSizeX / 1.17;

	var topOffset = 70 * GENERATE_SCALE_FACTOR;
	var topSizeY = stepOffsetY * (NUM) + stepOffsetY;

	var fill2SizeY = stepSizeY * 0.58;
	var fill2SizeX = (NUM-0.5) * (stepOffsetX + 0.02) + (255 * GENERATE_SCALE_FACTOR * 0.75);


	pdf.addImage(fill, 'png', initLeft + (stepSizeX * 0.5), initTop - fillSizeY + (stepOffsetY * 1), fillSizeX, fillSizeY);
	pdf.addImage(fillTop, 'png', initLeft + (10 * GENERATE_SCALE_FACTOR) + NUM * stepOffsetX, initTop - NUM * stepOffsetY + topOffset, 245 * GENERATE_SCALE_FACTOR * 0.75, topSizeY - topOffset);
	pdf.addImage(fillTop, 'png', initLeft + (stepSizeX * 0.5), initTop + (stepSizeY * 0.48), fill2SizeX, fill2SizeY);


	pdf.save(DOC_NAME);
}

function loadHandrails(pdf){
	var loaded = 0;

	var stepMid = new Image();
	var stepBottom = new Image();
	var stepTop = new Image();
	var newel = new Image();


	newel.crossOrigin="anonymous";
	newel.src = RES + `/newels/${newels[SELECTED_NEWEL_ID]}.png`;
	newel.onload = function(){
		loaded++;
		if(loaded == 4){
			generateHandrails(pdf, stepBottom, stepMid, stepTop, newel);
		}
	};

	stepMid.crossOrigin="anonymous";
	stepMid.src = RES + `/handMid.png`;
	stepMid.onload = function(){
		loaded++;
		if(loaded == 4){
			generateHandrails(pdf, stepBottom, stepMid, stepTop, newel);
		}
	};

		
	var stateClass = (STATE == 0)? "" : "Over";

	stepBottom.crossOrigin="anonymous";
	stepBottom.src = RES + `/handBottom${stateClass}.png`;
	stepBottom.onload = function(){
		loaded++;
		if(loaded == 4){
			generateHandrails(pdf, stepBottom, stepMid, stepTop, newel);
		}
	};

	
	stepTop.crossOrigin="anonymous";
	stepTop.src = RES + `/handTop${stateClass}.png`;
	stepTop.onload = function(){
		loaded++;
		if(loaded == 4){
			generateHandrails(pdf, stepBottom, stepMid, stepTop, newel);
		}
	};
}


function generateHandrails(pdf, bottom, mid, top, newel){

	var xNUM = (NUM-1) * 3 + 2;
	var newelSizeX = 45 * GENERATE_SCALE_FACTOR;
	var newelSizeY = 250 * GENERATE_SCALE_FACTOR;
	var balusterOffsetX = 17.9 * GENERATE_SCALE_FACTOR;
	var balusterOffsetY = 15 * GENERATE_SCALE_FACTOR;
	var newelOffsetX = 15 * GENERATE_SCALE_FACTOR;
	var newelOffsetY = 3 * GENERATE_SCALE_FACTOR;
	var initBalusterTop = GENERATE_TOP + xNUM * balusterOffsetY - (68 * GENERATE_SCALE_FACTOR);
	var initBalusterLeft = GENERATE_LEFT - (0 * GENERATE_SCALE_FACTOR);

	var stepSizeX = 71 * GENERATE_SCALE_FACTOR * 0.75;
	var stepSizeY = 79 * GENERATE_SCALE_FACTOR * 0.75;
	var stepOffsetX = 53.5 * GENERATE_SCALE_FACTOR;
	var stepOffsetY = 45 * GENERATE_SCALE_FACTOR;
	var initTop = GENERATE_TOP + (-40 * GENERATE_SCALE_FACTOR) + (NUM * stepOffsetY);
	var initLeft = GENERATE_LEFT;

	
	if(STATE == 1)
	{
		pdf.addImage(newel, 'png', initBalusterLeft, initBalusterTop + balusterOffsetY, newelSizeX, newelSizeY);
		pdf.addImage(newel, 'png', initBalusterLeft + ((xNUM + 0.35) * balusterOffsetX) + newelOffsetX, initBalusterTop + newelOffsetY - ((xNUM) * balusterOffsetY), newelSizeX, newelSizeY);
	}

	pdf.addImage(bottom, 'png', initLeft, initTop, stepSizeX, stepSizeY);	
	pdf.addImage(top, 'png', initLeft + NUM * stepOffsetX, initTop - NUM * stepOffsetY, 245 * GENERATE_SCALE_FACTOR * 0.75, stepSizeY);	
	
	for(var i=1;i<NUM;i++)
	{
		var top = initTop - i * stepOffsetY;
		var left = initLeft + i * stepOffsetX;
		pdf.addImage(mid, 'png', left, top, stepSizeX, stepSizeY);	
	}

	if(STATE == 0)
	{
		pdf.addImage(newel, 'png', initBalusterLeft, initBalusterTop, newelSizeX, newelSizeY);
		pdf.addImage(newel, 'png', initBalusterLeft + (xNUM * balusterOffsetX) + newelOffsetX, initBalusterTop + newelOffsetY - (xNUM * balusterOffsetY), newelSizeX, newelSizeY);
	}

	loadSteps(pdf);	
}