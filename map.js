// let arr=[1,2,3,4,5]
// for(let i=0;i<5;i++){
// console.log(arr[i]*arr[i])
  
// }

// let p=arr.map((t)=>{return t*t})
// console.log(p)



// filter fn
// ----------------------

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let data=arr.filter((e)=>{return e>3})
// console.log(data)


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let data=arr.filter((e)=>{return e%2==0})
// console.log(data)

//  sprad oprator(...)denoted by
// ---------------------------------------

// let arr1=[1,2,3]
// let arr2=[4,5,6]
// // let data=[arr1,arr2]
// let data=[...arr1,...arr2]

// console.log(data)



// let arr1=[1,2,3]
// let arr2=[4,5,6,...arr1]
// // let data=[arr1,arr2]
// // let data=[...arr1,...arr2]

// console.log(arr2)
// Destructuring of array

// let[nam,ag,place]=["kamlesh",20,"Bhopal"]
// console.log(nam)




// let obj1={
//     emp_nam:"Kammlesh",
//     emp_desg:"HR",
// }


// let obj2={
//     emp_salary:"25000",
    
// }
// let data={...obj1,...obj2}
// console.log(data)


// let{emp_name,emp_degn}={
//     emp_name:"kamlesh",
//     emp_degn:"HR"
// }
// console.log(emp_name)




// array  of obj multiple emply ka data store kar sakte hai
// ------------------------------------------------------------------

let emp=[
    {
    emp_name:"Kamlesh",
    emp_age:25
    },
    {
    emp_name:"Shani",
    emp_age:29
    },
    {
    emp_name:"Vikash",
    emp_age:28
    },
    {
        emp_name:"Anshul",
        emp_age:29
    },
    {
        emp_name:"anurag",
        emp_age:27
    }
]
let d=emp.filter((t)=>{return t.emp_age>25})
let obj={emp_name:"jhfdjfo",emp_age:24}
 emp.push(obj)
 console.log(emp)

console.log(d)



