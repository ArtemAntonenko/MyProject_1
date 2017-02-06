

var container = document.getElementById("container");
var counter = document.getElementById("counter");

container.addEventListener("wheel", onwheel);

function onwheel(event){
	counter.innerHTML = +counter.innerHTML + event.deltaY;
}

document.body.appendChild(function(){
 
});


function secondNewFunction(){
    
}

function fourthCommit(){
    
}

function newCommit(){
    //someCode
}