
let v1 = await p1; 

let v2 = await p2; 

console.log(v1 + v2); 

/*
p1.then(v1 => { 

  p2.then(v2 => { 

    console.log(v1 + v2); 

  }); 

}); 


var v1, v2; 

p1.then(r => { v1 = r; }); 

p2.then(r => { v2 = r; }); 

console.log(v1 + v2); 


let [v1, v2] = await Promise.all([p1, p2]); 

console.log(v1 + v2); */