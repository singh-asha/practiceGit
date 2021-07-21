

// nested function 
function outside(a){
    // console.log(a)
    function inside(b){
        // console.log(a+b)
return a + b;
 }
    return inside;

}
outside("hello world")(" how are you")


//lexical scope 

function outerFunc(){
    var a = 10 ;
    function innerFunc(){
        var b = 20 ;
        //lexical scope -- u can access outside variable inside here.

        // console.log(a+b)
        return a+ b;
    }
     innerFunc();
}
outerFunc();

function outerFun() {
    let outerVar = 'I am outside!';
  
    function innerFun() {
        //second execution
        outerVar="check the change"
      console.log(outerVar); // => logs "I am outside!"
    }
  console.log("aaaaaaaaaa", outerVar)
  // first execution 
    return innerFun;
  }
  
  const myInnerFun = outerFun();
  
  myInnerFun();
  //closure is function that access its lexical scope even executed outsode of its lexical scope.
