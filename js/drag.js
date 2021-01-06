function dragOver(ev) {
  ev.preventDefault();
  ev.stopPropagation();
  $(ev.currentTarget).addClass('balusterHoverBorder');	
}

function dragLeave(ev){
  $(ev.currentTarget).removeClass('balusterHoverBorder');	
}

function drag(ev) {
	//console.log($(ev.target).data("id"));
	//console.log(ev);
	console.log("drag");
	var item = $(".balusterDrop").first();
	$(item).addClass("sizeFlick");
	ev.originalEvent.dataTransfer.setData("dataId", $(ev.target).data("id"));
}

function drop(ev) {
	PLACED_FIRST = 1;
  ev.preventDefault();
  ev.stopPropagation();
  var id = ev.originalEvent.dataTransfer.getData("dataId");
  $(ev.currentTarget).empty();
  $(ev.currentTarget).removeClass('balusterBorder');
  $(ev.currentTarget).removeClass('balusterHoverBorder');
  $(ev.currentTarget).append(`<img data-id="${id}" src="${RES}/balusters/${balusters[id]}.png">`);
}