// keyword "this" is for access property and method from inside the method (object)

function Person(firstName, lastName){
    // property
    this.firstName = firstName;
    this.lastName = lastName;

    // method
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.showName = function(){
        console.log(this.fullName());
    }
}

var person1 = new Person("Eun", "Woo");
var person2 = new Person("Song", "Kang");

person1.showName();
person2.showName();