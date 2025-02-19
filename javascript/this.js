let person = {
    name: "Jhn",
    age: 30,
    greet: function() {
      console.log("Hello, " + this.name); 
    },
    birthday: function() {
      this.age += 1; 
      console.log("Happy Birthday! You are now " + this.age + " years old.");
    }
  };
  
  
  person.greet();
  person.birthday();