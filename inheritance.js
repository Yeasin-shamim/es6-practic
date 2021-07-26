class Parent {
    constructor (){
        this.fatherName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor (name){
        super();
        this.name = name;
    }
    getFullName (){
        return this.name + " " + this.fatherName;
    }
}
const result = new Child ("Arnold");
const result2 = new Child ("Tom");
console.log(result.getFullName());
console.log(result2.getFullName());