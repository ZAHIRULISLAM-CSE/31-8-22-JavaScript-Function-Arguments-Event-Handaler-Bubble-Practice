function add(number1,number2){
    var sum=0;
    for(i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
var result=add(8,3,12,14);
console.log(result);

