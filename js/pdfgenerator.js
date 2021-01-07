
var GENERATE_SCALE_FACTOR = 0.25;
var STEPS_SCALE_FACTOR = 0.8; /// DO NOT TOUCH
var GENERATE_TOP = 40;
var GENERATE_LEFT = 70;
var DOC_NAME = "Stairs Document.pdf";

function generatePdf(){
	GENERATE_LEFT = 70 - (40 * (NUM-2) / 6.0);

	var pdf = new jsPDF('p', 'mm', [297, 210]);
	pdf.setProperties({
		title: 'Stair Service Design',
		subject: 'Stair Service Design',		
		author: 'Stair Service',
		keywords: 'generated, javascript, web 2.0, ajax, Stair Service,',
	});

	addLogo(pdf);
}

function addLogo(pdf){

	var logo = new Image();
	logo.crossOrigin="anonymous";
	logo.src = RES + `/logoBlack.png`;
	logo.onload = function(){
		pdf.addImage(logo, 'png', 12, 12, 68.59, 15);
		if(DESIGN == 0){
			loadProducts(pdf);
		}else{
			loadDesignedProducts(pdf);
		}
	};
}

function loadDesignedProducts(pdf){
	var loaded = 0;

	var newelImg = new Image();
	newelImg.crossOrigin="anonymous";
	newelImg.src = RES + `/newels/${newels[SELECTED_NEWEL_ID]}.png`;
	newelImg.onload = function(){
		loaded++;
		if(loaded == 2){
			loadDesignedBalusters(pdf, newelImg, handrailImg);
		}
	};

	var handrailImg = new Image();
	handrailImg.crossOrigin="anonymous";
	handrailImg.src = RES + `/handrails/${handrails[SELECTED_HANDRAIL_ID]}.png`;
	handrailImg.onload = function(){
		loaded++;
		if(loaded == 2){
			var images = [];
			//console.log(BALUSTER_ARRAY);
			loadDesignedBalusters(pdf, images, newelImg, handrailImg);
		}
	};
}

function loadDesignedBalusters(pdf, images, newelImg, handrailImg){
	var img = new Image();
	img.crossOrigin="anonymous";
	var name = balusters[BALUSTER_ARRAY[images.length]];
	//console.log(name);
	img.src = RES + `/balusters/${name}.png`;
	img.onload = function(){
		images.push(img);
		if(images.length == BALUSTER_ARRAY.length){
			generateDesignedProducts(pdf, images, newelImg, handrailImg);
		}
		else{
			 loadDesignedBalusters(pdf, images, newelImg, handrailImg);
		}
	};
}

function generateDesignedProducts(pdf, images, newelImg, handrailImg){
	var TEXT_TOP = 280;
	var IMG_BOTTOM = 270;
	var IMG_FACTOR = 0.3;

	var MARGINS = 20;
	var CANVAS = 297 - (2 * MARGINS);
	var OFFSET = (CANVAS / parseFloat(images.length + 4));

	var newelX = OFFSET * (images.length + 1);
	var handrailX = OFFSET * (images.length + 2);

	var balusterSizeX = 16 * IMG_FACTOR;
	var balusterSizeY = 200 * IMG_FACTOR;
	for(var i=0;i<images.length;i++){
		var posX = OFFSET * (i + 1);
		pdf.addImage(images[i], 'png', posX - (balusterSizeX / 2), IMG_BOTTOM - balusterSizeY, balusterSizeX, balusterSizeY);
		pdf.text(posX - 10, TEXT_TOP, getName(balusters[BALUSTER_ARRAY[i]]));
	}

	var newelSizeX = 45 * IMG_FACTOR;
	var newelSizeY = 250 * IMG_FACTOR;
	pdf.addImage(newelImg, 'png', newelX - (newelSizeX / 2), IMG_BOTTOM - newelSizeY, newelSizeX, newelSizeY);
	pdf.text(newelX - 10, TEXT_TOP, getName(newels[SELECTED_NEWEL_ID]));

	var handrailSizeX = 170 * IMG_FACTOR * 0.5;
	var handrailSizeY = 130 * IMG_FACTOR * 0.5;
	pdf.addImage(handrailImg, 'png', handrailX - (handrailSizeX / 2), IMG_BOTTOM - handrailSizeY, handrailSizeX, handrailSizeY);
	pdf.text(handrailX - 10, TEXT_TOP, getName(handrails[SELECTED_HANDRAIL_ID]));

	generateDesignedBalusters(images, pdf);
}

function loadProducts(pdf){
	var loaded = 0;

	var balusterImg = new Image();
	balusterImg.crossOrigin="anonymous";
	balusterImg.src = RES + `/balusters/${balusters[SELECTED_BALUSTER_ID]}.png`;
	balusterImg.onload = function(){
		loaded++;
		if(loaded == 3){
			generateProducts(pdf, balusterImg, newelImg, handrailImg);
		}
	};

	var newelImg = new Image();
	newelImg.crossOrigin="anonymous";
	newelImg.src = RES + `/newels/${newels[SELECTED_NEWEL_ID]}.png`;
	newelImg.onload = function(){
		loaded++;
		if(loaded == 3){
			generateProducts(pdf, balusterImg, newelImg, handrailImg);
		}
	};

	var handrailImg = new Image();
	handrailImg.crossOrigin="anonymous";
	handrailImg.src = RES + `/handrails/${handrails[SELECTED_HANDRAIL_ID]}.png`;
	handrailImg.onload = function(){
		loaded++;
		if(loaded == 3){
			generateProducts(pdf, balusterImg, newelImg, handrailImg);
		}
	};
}


function generateProducts(pdf, balusterImg, newelImg, handrailImg){

	var TEXT_TOP = 280;
	var IMG_BOTTOM = 270;
	var IMG_FACTOR = 0.3;

	var balusterSizeX = 16 * IMG_FACTOR;
	var balusterSizeY = 200 * IMG_FACTOR;
	pdf.addImage(balusterImg, 'png', 50 - (balusterSizeX / 2), IMG_BOTTOM - balusterSizeY, balusterSizeX, balusterSizeY);
	pdf.text(40, TEXT_TOP, getName(balusters[SELECTED_BALUSTER_ID]));

	var newelSizeX = 45 * IMG_FACTOR;
	var newelSizeY = 250 * IMG_FACTOR;
	pdf.addImage(newelImg, 'png', 100 - (newelSizeX / 2), IMG_BOTTOM - newelSizeY, newelSizeX, newelSizeY);
	pdf.text(90, TEXT_TOP, getName(newels[SELECTED_NEWEL_ID]));

	var handrailSizeX = 170 * IMG_FACTOR * 0.5;
	var handrailSizeY = 130 * IMG_FACTOR * 0.5;
	pdf.addImage(handrailImg, 'png', 150 - (handrailSizeX / 2), IMG_BOTTOM - handrailSizeY, handrailSizeX, handrailSizeY);
	pdf.text(140, TEXT_TOP, getName(handrails[SELECTED_HANDRAIL_ID]));

	generateBalusters(balusterImg, pdf);
}


function generateDesignedBalusters(images, pdf){

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
		pdf.addImage(images[i%images.length], 'png', left, top, balusterSizeX, balusterSizeY);///Crop at i%3==1
	}	

	var topBaluster = GENERATE_TOP - ((STATE == 0)? 0 : (1.5 * balusterOffsetY));
	var leftBaluster = initLeft + (xNUM+2) * balusterOffsetX;

	for(var i=0;i<8;i++)
	{
		var left = leftBaluster + i * balusterOffsetX;
		pdf.addImage(images[(i + xNUM)%images.length], 'png', left, topBaluster, balusterSizeX, balusterSizeY);
	}

	loadHandrails(pdf);	
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