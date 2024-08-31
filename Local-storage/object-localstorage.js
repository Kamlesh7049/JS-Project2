let person={
    name:"Johan Dow",
    age:45,
}
let jsonperson=JSON.stringify(person);
localStorage.setItem("person",jsonperson);
let data=localStorage.getItem("person");
let newdata=JSON.parse(data)
alert(newdata.name + " " + newdata.age);
