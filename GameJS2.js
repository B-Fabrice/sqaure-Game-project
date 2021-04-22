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

function createSq(){
  var arr = [];
  var array = [];
  var i, j, count=1;

  for(i=0; i<4; i++){
    for(j=0; j<4; j++){
      arr[i] = [];
      arr[i][j] = 0;
    }
  }

  i=1;
  j=2;
  arr[i][j] = 1;
  array[count-1] = arr[i][j];

  while(count<16){
    count++;
    if((i-1) == -1 && (j+1) == 4){
      i = 0;
      j = 3;
    }
    else if((i-1) == -1){
      i = 3;
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
    array[count-1] = arr[i][j];
  }

  function rand(max){
    return Math.floor(Math.random() * max);
  }
  var newArray = [];
  length = 16;

  while(length>0){
    var index = rand(length);
    var num = array[(index)];
    newArray.push(num);
    array.splice(index, 1);
    length--;
  }
  var Hmnt = document.getElementsByTagName("h1");

  for(i=0; i<16; i++){
    Hmnt[i].innerText = newArray[i];
  }
}


function Decision(){
  var i;
  var truth = [];
  var x = document.getElementsByTagName("h1");

  for(i=0; i<=3; i++){
    truth.push(Number(x[0+4*i].innerText) + Number(x[1+4*i].innerText) + Number(x[2+4*i].innerText) + Number(x[3+4*i].innerText) == 34);
    truth.push(Number(x[0+i].innerText) + Number(x[4+i].innerText) + Number(x[8+i].innerText) + Number(x[12+i].innerText) == 34);
  }
  truth.push(Number(x[0].innerText) + Number(x[5].innerText) + Number(x[10].innerText) + Number(x[15].innerText) == 34);
  truth.push(Number(x[3].innerText) + Number(x[6].innerText) + Number(x[9].innerText) + Number(x[12].innerText) == 34);
  
  var truthV;
  for(i=0; i<16; i++){
    if(truth[i] == false){
      truthV = false;
      break;
    }
    else{
      truthV = true;
    }
  }

  mssg = document.createElement("p");
  document.body.appendChild(mssg);

  if(truthV == 1){
    document.getElementById("decMe").remove();

    mssg.innerText = "you won";
    mssg.style.background = "#00f3ff";
    mssg.style.margin = "40px auto";
  }

  else{
    var d = document.getElementById("check");
    d.removeEventListener("click", Decision);
    d.innerText = "try again";
    d.addEventListener("click", function(){window.location.reload();});

    
    mssg.innerText = "you loose";
    mssg.style.background = "rgb(249 137 137)";
  }
}

document.getElementById("check").addEventListener("click", Decision);



  



