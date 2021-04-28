var numero = [], numero, index, Randn, i, j, Obj = [];
        
function CreateObj(){
        var Numbers = [];
        Obj = [];
    for(i=0; i<9; i++){
        numero[i] = i+1;
    }
    for(i=0; i<9; i++){
        Randn = Rand(numero);
        Numbers.push(Randn);
        numero.splice(numero.indexOf(Randn), 1);
    }
    for(i=0; i<3; i++){
        Obj[i] = [];
        for(j=0; j<3; j++){
            Obj[i][j] = Numbers[3*i + j];
        }
    }
    return Obj;
}
function Rand(array){
    index = Math.floor(Math.random() * array.length);
    return array[index];
}
function truth(tar){
    var truth = [];
    for(i=0; i<3; i++){
        truth.push((tar[i][0] + tar[i][1] + tar[i][2] == 15));
        truth.push((tar[0][i] + tar[1][i] + tar[2][i] == 15));
    }
    truth.push((tar[0][0] + tar[1][1] + tar[2][2]) == 15);
    truth.push((tar[0][2] + tar[1][1] + tar[2][0]) == 15);
    for(i=0; i<8; i++){
        if(truth[i] == false){
            truthV = false;
            break;
        }
        else{
            truthV = true;
        }
    }
    return truthV;
}
var myObj = CreateObj();
var truthV = truth(myObj);
function mySq(){
    while (truthV == false){
        myObj = CreateObj();
        truthV = truth(myObj);
        if(truthV == true){
            truthV = false;
            break;
        }
    }
    return myObj;
}
var ObjArr = mySq();
var objContainer = [];
var i = 0;
demo = document.querySelectorAll(".demo");
console.log(demo);

while(i < 8){
    for(j=0; j<=i; j++){
        //demo[i].innerText += j + " ";
    }
    i++;
}