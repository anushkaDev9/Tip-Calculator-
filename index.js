
let amount  //total amount
 let cal
 let display
 let total
function myFunction() { //onload function 
    cal=document.getElementById('calculate').innerText
    display=parseInt(cal.substring(1,cal.length))
    totalDisplay=document.getElementById('total').innerText
    total=parseInt(totalDisplay.substring(1,totalDisplay.length))

  }
function  myFunctions(){
  amount=parseFloat(document.getElementById('amount').value)
  display+=amount
  total+=amount
  }
function addPercentage(n){
    let p=n/100
    let d=1+p
     display*=p
     total*=d
    console.log(d)
}
function cals(){
    num=parseInt(document.getElementById('num').value)

let n = (display/num)
n=n.toFixed(2)

total=(total/num).toFixed(2)
console.log(n)
 document.getElementById('calculate').innerText='$'+n
 document.getElementById('total').innerText='$'+total
}