var x = [[ '6109P1', '6210P', '6400P', '6900P', '6A10P1', '6B10P1' ],[
  '6701', '6900',
  '6A10', '6B10',
  '6109', '6210',
  '6519', '6400'
]


  


];


var names = [];

for(var q = 0;q<x.length;q++){
  for(var i=0;i<x[q].length;i++){
    if(!names.includes(x[q][i]))
     names.push(x[q][i]);
  }
}

console.log(names);