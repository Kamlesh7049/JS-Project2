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
// let c = document.getElementById("count");p

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

// let v = 0;
// let p = 500;
// let k=0;

// let c = document.getElementById("count");
// let d = document.getElementById("price");
// let e=document.getElementById('cart');

// function click1() {
//   v++;
//   c.innerHTML = v;
//   d.innerHTML = p * v;

//   k++;
//   e.innerHTML=k;
// }

// function click2() {
//   if (v > 0) {
//     v--;
//     k--;
//   }
//   c.innerHTML = v;
//   d.innerHTML = p * v;

//   e.innerHTML=k;
// }

// function fun(){
//   let img=document.getElementById('change_imge')
//   img.src="img2.jpg"
// }

// function fun1(){
//   let im=document.getElementById('change_imge')
//   im.src="Randomimg.jpg"
// }

// function fun1(){
//   let para =document.getElementById('show')
//   para.style.display = "block";
// }

// function fun2(){
//   let para=document.getElementById('show')
//   para.style.display = "none";
// }




// js-form validation   html- requred
function savedata() {
  // let name = document.getElementById("nm").value;
  let name = document.getElementById("nm").value;
  let age = document.getElementById("ag").value;
  let phone = document.getElementById("phn").value;
  let email = document.getElementById("em").value;
  let pass = document.getElementById("pss").value;
  let cpass = document.getElementById("cpss").value;
  // console.log(name ,age,phone,email,pass,cpass )
  if (name == "") {
    alert("plese fill name !");
    document.getElementById("nm").focus();
    return false;
  } else if (isNaN(age)) {
    alert("only Digit");
    document.getElementById("ag").focus();
  } else if (isNaN(phone)) {
    // alert("plese fill phone no only numeric !");
    alert("only didgit phone section");
    document.getElementById("phn").focus();
    return false;
  } else if (phone.length < 10 || phone.length > 10) {
    // alert("plese fill phone no only numeric !");
    alert("only 10 digits");
    document.getElementById("phn").focus();
    return false;
  } else if (email == "") {
    alert("plese fill email !");
    document.getElementById("em").focus();
    return false;
  } else if (!email.includes("@")) {
    alert("plese fill email with @!");
    document.getElementById("em").focus();
    return false;
  }

  else if (pass == "") {
    alert("plese fill pass !");
    document.getElementById("pass").focus();
    return false;
  }
  else if (!pass.match(/[@#%&]/)) {
    alert("plese fill pass with Symbol !");
    document.getElementById("pass").focus();
    return false;
  }    
  
  else if (cpass == "") {
    alert("plese fill cpass !");
    document.getElementById("cpass").focus();
    return false;
  }
  
  else if (pass!==cpass) {
    alert("your pass not matched !");
    document.getElementById("cpass").focus();
    //when mismatched the pass then input box empty!
    document.getElementById('pss').value='';
    document.getElementById('cpss').value='';
    return false;
  }
  else{
    alert("data is ready ro submit");
    window.open("Eeventshow.html");

  }
} 

// function data() {
//   let a = document.getElementById("num1").value;
//   let b = document.getElementById("num2").value;
//   let c = parseInt(a) + parseInt(b);
//   document.getElementById("answer").innerHTML = c;
//   return false;
// }




// function fun1(){
//   // let a=document.getElementById('a')
//   // a.style.backgroundColor="orange"
//   document.body.style.backgroundColor="orange"

// }
// function fun2(){
//   // let b=document.getElementById('b')
//   // b.style.backgroundColor="blue"
//   document.body.style.backgroundColor="blue"

// }
// function fun3(){
//   // let c=document.getElementById('c')
//   // c.style.backgroundColor="green"
//   document.body.style.backgroundColor="green"

// }
// function fun4(){
//   // let d=document.getElementById('d')
//   // d.style.backgroundColor="red"
//   document.body.style.backgroundColor="red"
// }
