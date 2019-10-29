const arrayMaster = {
  
    getFirst : function(arr){
      return arr[0]
      },
    
    getlast : function(arr){
      return arr[arr.length -1]
    },
    
    getMax : function(arr) {
    
     return Math.max(...arr)
    
    },
    
    getSum : function(arr){  //	x = x + y
     
     
    let sum = 0
    for (let i = 0; i < arr.length; i++ ){
    
      sum += arr[i]
    
    }
    return sum
    
    },
    
    getNot : function(arr, ar){
    
      if (arr[ar] === arr[ar]){
     
    }
    return -1
    
    },
    
    }
    console.log(arrayMaster.getNot([1,2,3,4,5,6,7]))