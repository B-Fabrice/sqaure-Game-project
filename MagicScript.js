document.getElementById("mySpan").addEventListener("click", function(){
	document.getElementById("mainMe").style.display = "none";
});

function allowdrop(ev){
	var d = ev.target;
	if(d.innerHTML == 0){
		ev.preventDefault();
	}
}

function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

var arr = [];
var numSq = [];

function createSq(){
	var i, j, count=1;
	var arr = [];
	for(i=0; i<3; i++){
		for(j=0; j<3; j++){
			arr[i] = [];
			arr[i][j] = 0;
		}
	}
	i = 1;
	j = 2;
	arr[i][j] = 1;
	numSq[count-1] = arr[i][j];

	while(count < 9){
		count++;
		if((i-1) == -1 && (j+1) == 3){
			i = 0;
			j = 2;
		}
		else if((i-1) == -1){
			i = 2;
			j++;
		}
		else if((j+1) == 3){
			j = 0;
			i--;
		}
		else{
			i--;
			j++;
		}
		if(arr[i][j] != 0){
			i++;
			j = j-2;
			arr[i][j] = count;
		}
		else{
			arr[i][j] = count;
		}
		numSq[count-1] = arr[i][j];
	}

	function randomN(max){
		return Math.floor(Math.random()*max);
	}

	var Arrlength = 9;
	var newNumArray = [];
	while(Arrlength>0){
		var y = randomN(Arrlength);
		var number = numSq[y];
		newNumArray.push(number);
		numSq.splice(y,1);
		Arrlength--;
	}

	var x = document.getElementsByTagName("h1");
	for(i=0; i<9; i++){
		x[i].innerText =newNumArray[i];
	}

}

document.getElementById("check").addEventListener("click", Decision);

function Decision(){

	var truth = [];
    var result = document.getElementsByTagName("h1");
    var i;

    for(i=0; i<3; i++){
    	truth.push((Number(result[0+3*i].innerText) + Number(result[1+3*i].innerText) + Number(result[2+3*i].innerText)) == 15);
    	truth.push((Number(result[0+i].innerText) + Number(result[3+i].innerText) + Number(result[6+i].innerText)) == 15);
    }
    truth.push((Number(result[0].innerText) + Number(result[4].innerText) + Number(result[8].innerText)) == 15);
    truth.push((Number(result[2].innerText) + Number(result[4].innerText) + Number(result[6].innerText)) == 15);

    var truthV;
    for(i=0; i<truth.length; i++){
    	if(truth[i] == false){
    		truthV = false;
    		break;
    	}
    	else{
    		truthV = true;
    	}
    } 
    
	var i;
	var c = document.getElementById("check");
	var element = document.createElement("p");
	element.setAttribute("class", "result");
    document.body.appendChild(element);

	if(truthV == 1){
		document.getElementById("decMe").remove();
	    element.innerText = "you won";

	    element.style.background = "#00f3ff";
	    element.style.margin = "40px auto";

	    var div = document.createElement("div");
	    div.setAttribute("id", "decMe");
	    document.body.appendChild(div);

	    var next = document.createElement("button");
	    next.innerText = "next level";
	    div.appendChild(next);
	    next.addEventListener("click", function(){document.location = "GameWebLev2.html"});

	}
	else{
		var tryIt = document.createElement("button");
		tryIt.innerText = "try again";
	    element.innerText = "you loose";
	    element.style.background = "rgb(249 137 137)";
		c.style.display = "none";
		document.getElementById("decMe").appendChild(tryIt);
		tryIt.addEventListener("click", Refresh);
	}
}

function Refresh(){
	document.getElementsByClassName("result")[0].remove();
	document.getElementById("check").innerText = "check";
	
	var Numh = document.getElementsByTagName("h1");
	var numD = document.getElementById("num").getElementsByTagName("div");

	for(i=0; i<9; i++){
		Numh[i].innerText = "";
		numD[i].appendChild(Numh[i]);
	}
	createSq();
	this.remove();
	document.getElementById("check").style.display = "block";
}

function mySize(){
	var i,
	wid = window.innerWidth,
	mainD = document.getElementById("main-square"),
	dropD = document.getElementsByClassName("drop-square"),
	numD = document.getElementById("num"),
	Dc = numD.getElementsByTagName("div");

	if(wid < 450){
		mainD.style.width = wid*0.8 + "px";
		mainD.style.height = wid*0.8 + "px";
		numD.style.width = wid*0.9 + "px";

		for(i=0; i<9; i++){
			dropD[i].style.width = (mainD.offsetWidth)/3 - 5 + "px";
			dropD[i].style.height = (mainD.offsetWidth)/3 - 5 + "px";
			Dc[i].style.width = (numD.offsetWidth)/9 - 2.6 + "px";
		}
	}
	else{
		mainD.style.width = "192px";
		mainD.style.height = "192px";
		numD.style.width = "423px";

		for(i=0; i<9; i++){
			dropD[i].style.width = "65px";
			dropD[i].style.height = "62px";
			Dc[i].style.width = "45px";
		}
	}
	setTimeout(mySize, 10);
}

mySize();