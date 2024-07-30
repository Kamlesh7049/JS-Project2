// function button_clicked(){
//     alert("event working")
// }
// function fun(){
//     alert("event dubble cclicked working")
// }
// function fun1(){
//     alert("event Right cclicked working")
// }

// function data(){
//     let number1=parseInt(document.getElementById('num1').value) ;
//     let number2=parseInt(document.getElementById('num2').value) ;
// document.write(number1+number2);
// }

// function data() {
//     let number1 = document.getElementById('num1').value;
//     let number2 = document.getElementById('num2').value;
//     document.write(parseInt(number1) + parseInt(number2));
// }

// function fun2(){
//     alert("onmousenter working")
// }
// function fun3(){
//         alert("onmouseleave working")
//     }

// let v = 0;
// let c = document.getElementById("count");

// function click1() {
//   v++;
//   c.innerHTML = v;
// }
// function click2() {
//   if (v !=0) {
//     v--;
//   }
//   c.innerHTML = v;
// }.






// Task

let v = 0;
let p = 500;
let k=0;

let c = document.getElementById("count");
let d = document.getElementById("price");
let e=document.getElementById('cart');

function click1() {
  v++;
  c.innerHTML = v;
  d.innerHTML = p * v;
  e.innerHTML=v;
}

function click2() {
  if (v > 0) {
    v--;
  }
  c.innerHTML = v;
  d.innerHTML = p * v;

  e.innerHTML=v
}
