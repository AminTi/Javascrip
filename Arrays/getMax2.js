
function getMax2(arr){

let max = 0
for (let i = 0; i < arr.length; i++){

    if (arr[i] > max)
    {
       max = arr[i] 
    }
    return max
}
}
console.log(getMax2([6,12,5]))