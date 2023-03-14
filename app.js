let who = ['My dog','My granma','Her brother','His son'];
let what = [' get sick',' fall',' crash',' lose'];
let when = [' before the class',' one hour ago',' when I was comming','these afternoon',];
function mostrar(par1, par2, par3){
    var i= Math.floor(Math.random()*4);
    var j= Math.floor(Math.random()*4);
    var h= Math.floor(Math.random()*4);
    var excuse = who[i].concat(what[j], ' '.concat(when[h]));
    console.log(excuse);
}
mostrar()