

function hasPro(myObj, str)
{
  for (let i = 0; i < Object.keys(myObj).length; i++ ) {
    
    if (Object.keys(myObj) === str){
      return true
    }
  }
  return false
  
}
  
const myObj = {  id: 1, name: 'Jonas',}
console.log(hasPro(myObj,"name"))   //true
console.log(hasPro(myObj, 'surname')) //false
















