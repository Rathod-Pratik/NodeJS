function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

//export only one function
exports.multi=(a,b)=>a*b;

//export function using object 
//we can use only one time to export all function using object
// module.exports={add,sub};