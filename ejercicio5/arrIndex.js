function maxIndex(arr){
    let max = 0;
    let index;
    for(let i=0; i < arr.length; i++){
        let indexArr = arr[i];
        if(indexArr > max){
            max = indexArr;
            index = i;
        }
    }
    if(index === undefined){
        return -1
    }else{
        return index
    }
}
console.log(maxIndex([1,3,2]))
console.log(maxIndex([10,9,8,7,6,5,4]))
console.log(maxIndex([]))