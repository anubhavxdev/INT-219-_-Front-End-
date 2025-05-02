// Create an object
let person = {
    name: "John",
    age: 31,
    city: "New York"
};

// Update a property
person.age = 32;
console.log(person);

// Add a new property
person.country = "USA";
console.log(person);

// Delete a property
delete person.city;
console.log(person);



const per = {
    name: "Akriti",
    greet : function(){
        console.log("Hello");
        return "Hello" + this.name;
    }
}