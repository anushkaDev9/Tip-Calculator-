
let amount  //total amount
 let cal
 let display
 let total
 let p
 let d
 let active=document.getElementsByClassName('div-per')
 var divAmount
function myFunction() { //onload function 
    cal=document.getElementById('calculate').innerText
    display=parseInt(cal.substring(1,cal.length))
    totalDisplay=document.getElementById('total').innerText
    amountField=document.getElementById('amount')
    total=parseInt(totalDisplay.substring(1,totalDisplay.length))
    for(let i of active){
      i.addEventListener('click' , function(){
        this.setAttribute('clicked',true)
        n=parseInt(this.dataset.rating)
        console.log(n)
        p=n/100
      d=1+p
      })
      
    }
    btn=document.getElementById('btn')
    btn.addEventListener('click',function(){
      document.getElementById('calculate').innerText='$0.00'
      document.getElementById('total').innerText='$0.00'
      document.getElementById('amount').value=0
      document.getElementById('num').value=0
      divAmount.removeAttribute("ammount-checked")
      document.getElementById('input').value="Custom"
      for(let i of active){
        i.removeAttribute('clicked')
      }
      
    })

}
function round(value,digits){
    const factor=Math.pow(10,digits)
    value+=Math.sign(value) *Number.EPSILON;
    return Math.round(value *factor)/factor
}
function cals(){
  amount=parseFloat(document.getElementById('amount').value)
  if(amount>0){
   divAmount=document.getElementById('amount')
    divAmount.setAttribute("ammount-checked",true)
  }
  num=parseInt(document.getElementById('num').value)
let n = (amount*p)/num
total=((amount*d)/num).toFixed(2)
n=n-0.01
n=round(n,2)
console.log(n)
 document.getElementById('calculate').innerText='$'+n
 document.getElementById('total').innerText='$'+total
}
function custom(){
  n=parseInt(document.getElementById('input').value)
  p=n/100
  d=1+p
}