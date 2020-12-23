const fs = require('fs');
const fetch = require('node-fetch');
const url = `https://stair.ljsmith.com/assets/files/products/md/`;



var dom = fs.readFileSync("./web.html").toString();
var names = [];


var currentIdx = dom.indexOf("sm/");

while(currentIdx != -1){
	var nextIdx = dom.indexOf(".png");
	names.push(dom.substring(currentIdx+3, nextIdx));
	dom = dom.substring(nextIdx+5);
	currentIdx = dom.indexOf("sm/");
}

var balusters=["2011","2111","5004","5005","50058","5015","5035","5040","5060","5060V","5067","5070","5090","5141","5200","5300","53008","5360","5360V","5370","B2905","B2915","C5060","C5060V","C5360","F2005","F2015","F2105","F2115","F2905","F5060","F5060V","F5070","F5360","F5370","P2005","P20058","P2015","P20158","P2105","P2115","P2905","P2915","T2005","T2015"];
var newNames = [];


async function download(name) {
  const response = await fetch(url + name + ".png");
  const buffer = await response.buffer();
  fs.writeFile(`./${name}.png`, buffer, () => 
    console.log('downloaded ' + name));
}



for(var i=0;i<names.length;i++)
{
	if(!newNames.includes(names[i])){
		newNames.push(names[i]);
		download(names[i]);
		console.log(names[i]);
	}
}

console.log(newNames);
