function add(){
    alert("calc worked")
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result=num1+num2
    console.log("result",result)
    document.getElementById('lblName').innerHTML = result;
}
 
function minus(){
    alert("calc worked")
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result =num1-num2;
    console.log("result",result)
    document.getElementById('lblName').innerHTML=result 
}

function multiiply(){
    alert("calc worked")
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result =num1 *num2;
    console.log("result",result)
    document.getElementById('lblName').innerHTML=result 
}

function divide(){
    alert("calc worked")
    var num1=Number(document.getElementById('num1').value)
    var num2=Number(document.getElementById('num2').value)
    var result =num1 / num2;
    console.log("result",result)
    document.getElementById('lblName').innerHTML=result 
}


    function calculate(){
        var num1=Number(document.getElementById('phy').value)
        var num2=Number(document.getElementById('chy').value)
        var num3=Number(document.getElementById('math').value)
        var result =num1+num2+num3/3;
        if(result>80){
            document.getElementById('lblName').innerHTML="Grade A"
 
        }
        else if(result>70 && result<80){
            document.getElementById('lblName').innerHTML="Grade B"
        }
       
        else if(result>60 && result<70){
            document.getElementById('lblName').innerHTML="Grade C"
        }
       
        else if(result>50 && result<60){
            document.getElementById('lblName').innerHTML="Grade D"
        }
 
 
    }
 
 
    const  url ='./person.js'
function myJson(){
 
    fetch('./person.json').then(res=>
    res.json()).then(data=>{
        console.log("data",data)
        data.forEach(element => {
            console.log("elements",element)
            makeList(element)
        });
    })
}
 
myJson()
 
function makeList(item){
    console.log("item",item)
    const  calc =document.querySelector('.calc')
    const div =document.createElement('div')
     div.innerHTML=`${item.gender}`
     calc.append(div)
 
}
 
