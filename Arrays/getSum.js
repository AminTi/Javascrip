
function getSum(arr){
    
    let summa = 0
 

    for (let i = 0; i < arr.length; i++)
    {

     summa += arr[i]
 
    }
    return summa
}

console.log(getSum([3,3,3])) 