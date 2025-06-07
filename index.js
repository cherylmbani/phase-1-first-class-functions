function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function namedFunction(){
        console.log("I am named");
    }
    return namedFunction; 
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("i am anonymous");
    };
}
