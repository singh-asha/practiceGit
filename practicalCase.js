function buildName(stringOne){
    var concatString = stringOne
  //  console.log("frsittttttttttt")
 const sayName = function(stringTwo){
     concatString +=stringTwo
    //console.log("concT", concatString)
    return saySecondName;
     };
     const saySecondName = function(stringThree){
        concatString+=stringThree
     //   console.log("stringThree",concatString)
     }
    return sayName ; 

}
 buildName("Mandeep")("Singh")("Asha");



function multiply3Numbers(a) {
    var product = a
  //  console.log("first",a)
    
    function multiplyBySecond(b) {
      product *= b
    //  console.log("second",product);
      return multiplyByThird
    }
    function multiplyByThird(c) {
      product *= c
     // console.log("third",product);
      return product
    }
    return multiplyBySecond
  } 
  multiply3Numbers(2);// global 
  multiply3Numbers(2)(3);
  multiply3Numbers(3)(4)(5)