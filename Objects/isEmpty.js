function isEmpty(myObj)
{

  
    for (let i = 0; Object.keys(myObj).length === 0;)

    {
      return true
    }
  return false
  }
const myObj = { id: 1 }
console.log(isEmpty(myObj)) // false
const otherObj = {}
console.log(isEmpty(otherObj)) // true
