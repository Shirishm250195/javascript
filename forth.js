

var person ={name:"abhi"}//refrence type
console.log("name",person.name)
 
var a=10;
obj1={name:"ravi"}
function callByValOrRef(no,obj){
 no=30;
 obj.name="kavi"
 
}
 
console.log("before calling",a)
console.log("before calling",obj1)
callByValOrRef(a,obj1)
console.log("after calling a",a)
console.log("after calling obj1",obj1)