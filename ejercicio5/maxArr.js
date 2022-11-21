function max(arr){
    let max = 0;
    for(let i=0; i < arr.length; i++){
        let indexArr = arr[i];
        if(indexArr > max){
            max = indexArr;
        }
    }
    if(max === 0){
        return undefined
    }else{
        return max
    }
    
}
console.log(max([1,3,2]))
console.log(max([10,9,8,7,6,5,4]))
console.log(max([]))