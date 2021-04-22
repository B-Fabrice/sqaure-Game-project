function mySq(){
    var  i, j, count=1; 
    var obj = {};

    for(i=0; i<3; i++){
        obj[i] = {};
        for(j=0; j<3; j++){
            obj[i][j] = 0;
        }
    }

    i=1;
    j=2;
    obj[i][j] = count;

    while(count < 9){
        count++;
        if(((i-1) == -1) && ((j+1) == 3)){
            i=0;
            j=1;
        }
        else if((i-1) == -1){
            i=2;
            j++;
        }
        else if((j+1) == 3){
            j=0;
            i--;
        }
        else{
            i--;
            j++;
        }

        if(obj[i][j] != 0){
            i++;
            j = j-2;
            obj[i][j] = count;
        }
        else{
            obj[i][j] = count;
        }                   
    }
}