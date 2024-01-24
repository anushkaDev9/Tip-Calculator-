
let amount  //total amount
 let cal
 let display
 let total
 let p
 let d
function myFunction() { //onload function 
    cal=document.getElementById('calculate').innerText
    display=parseInt(cal.substring(1,cal.length))
    totalDisplay=document.getElementById('total').innerText
  
    total=parseInt(totalDisplay.substring(1,totalDisplay.length))
  }
  function addPercentage(n){
    p=n/100
    d=1+p
  console.log(d)
  
  }
function cals(){
  amount=parseFloat(document.getElementById('amount').value)
  num=parseInt(document.getElementById('num').value)
let n = (amount*p)/num
n=n.toFixed(2)
total=((amount*d)/num).toFixed(2)
console.log(n)
 document.getElementById('calculate').innerText='$'+n
 document.getElementById('total').innerText='$'+total
}
function reset(){
  document.getElementById('calculate').innerText='$0.00'
 document.getElementById('total').innerText='$0.00'
}