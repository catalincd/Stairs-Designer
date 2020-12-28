//////////////////     BALUSTERS

function insertBalustersTopWood(){
	$("#balusterGalleryItems").empty();
	balusters = balustersTopWood;
	for(var i=0;i<balusters.length;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersTopIron(){
	$("#balusterGalleryItems").empty();
	balusters = balustersTopIron;
	for(var i=0;i<balusters.length;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersOverWood(){
	$("#balusterGalleryItems").empty();
	balusters = balustersOverWood;
	for(var i=0;i<balusters.length;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}

function insertBalustersOverIron(){
	$("#balusterGalleryItems").empty();
	balusters = balustersOverIron;
	for(var i=0;i<balusters.length;i++){
		$("#balusterGalleryItems").append(`<img data-id="${i}" class="balusterItem" src="${RES}/balusters/${balusters[i]}.png">`);
	}
}


//////////////////     NEWELS

function insertNewelsTopWood(){
	$("#newelGalleryItems").empty();
	newels = newelsTopWood;
	for(var i=0;i<newels.length;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsOverWood(){
	$("#newelGalleryItems").empty();
	newels = newelsOverWood;
	for(var i=0;i<newels.length;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsTopIron(){
	$("#newelGalleryItems").empty();
	newels = newelsTopIron;
	for(var i=0;i<newels.length;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}

function insertNewelsOverIron(){
	$("#newelGalleryItems").empty();
	newels = newelsOverIron;
	for(var i=0;i<newels.length;i++){
		$("#newelGalleryItems").append(`<img data-id="${i}" class="newelItem" src="${RES}/newels/${newels[i]}.png">`);
	}
}