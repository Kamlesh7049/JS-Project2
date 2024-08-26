// let mybtn = document.getElementById("btn");
// mybtn.addEventListener("click", function () {
//   document.getElementById("demo").innerHTML = "Hello";
// });


// document.getElementById("btn").addEventListener("mouseenter",data)
//  function data(){ 
// document.getElementById("demo2").innerHTML=Math.random();

//  };

// mybtn.removeEventListener("click",display);





// // document.getElementById("btn").addEventListener("mouseenter", data);

// // function data() {
// //     document.getElementById("demo2").innerHTML = Math.random();
// // }





// syntax 
// addEventListener("event",function)

// document.getElementById("click").addEventListener('click',
//     function(){
//         document.getElementById("demo").innerHTML="Click Right"
//     }
// )

// function display(){
//     document.getElementById("demo1").innerHTML="Right here"
//     console.log("Succes");
// }
document.getElementById("click").addEventListener('mouseenter',display)
let k=document.getElementById("click");
k.addEventListener('mouseenter',dis)

function dis(){
    document.getElementById("demo2").innerHTML=Math.random();
       
};

// // event remove

k.removeEventListener("mouseenter",dis);

