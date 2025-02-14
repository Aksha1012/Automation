var person = [{
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  },
  { name:"aksha",
    age:24,
    i: function(){
      console.log("hello,"+this.name);
    }  
    
}];
person[0].greet();
person[1].i();
 var person=new Object();
  person.name="yuva";
  person.age=28;
  person.h=function(){
    console.log("Hello, " + this.name);
  }
   person.h();
var person=new Object();
person.name="yuva";
person.age=28;
console.log(person["name"])
console.log(person["age"])
console.log(" after modifying")
person["name"]="ganesh";
person["age"]=29;
console.log(person["name"])
console.log(person["age"])
var person = new Object();

person.createPeople = function() {

  let people = [
    { name: "Yuva", age: 28, greet: function() { console.log("Hello, " + this.name); } },
    { name: "John", age: 30, greet: function() { console.log("Hello, " + this.name); } },
    { name: "Aksha", age: 24, greet: function() { console.log("Hello, " + this.name); } }
  ];

  
  people.forEach(function(person) {
    person.greet(); 
  });
};

person.createPeople(); 

