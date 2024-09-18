// //export const name="johan";
// //export const age=30;

// //types of export-named export , default export

// const name="johan";
// const age=30;

// export{name,age}
// const data=()=>{
//     let firstName="Kamlesh";
//     let lastName="Shah";

//     return firstName +" " +lastName;
// };

// const massage=()=>{
//     console.log("Hello World");

// };
// export{name,age,massage};
// export default data;



// Named exports
export const name = "Johan";
export const age = 30;

// Default export function
const data = () => {
    let firstName = "Kamlesh";
    let lastName = "Shah";
    return `${firstName} ${lastName}`;
};

export default data;

// Additional named export function
export const message = () => {
    console.log("Hello World");
};
