function join(arr){
    let result = "";
    for(let i=0; i < arr.length; i++){
        let arrIndex = arr[i];
        if(arrIndex !== (i-1)){
            result = result.concat(arrIndex + " ");
        }else{
            result = result.concat(arrIndex);
        }
        
    }
    return result
}
console.log(join(["Hola","Mundo"]))
console.log(join(["Make","It","Real"]))
console.log(join([]))
