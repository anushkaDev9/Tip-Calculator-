alert("hello")
let amount  //total amount
 let cal
function myFunction() { //onload function 
    cal=document.getElementById('calculate').innerText
    display=parseInt(cal.substring(1,cal.length))
    

  }
function  myFunctions(){
  amount=parseFloat(document.getElementById('amount').value)
  display+=amount
  }
function addPercentage(n){
    let p=n/100
     display*=p
    
}
function cals(){
    num=parseInt(document.getElementById('num').value)

let n = Math.trunc(display/num)
console.log(n)
 document.getElementById('calculate').innerText='$'+n
}