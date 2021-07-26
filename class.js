class student {
    constructor (sId, sName){
        this.Id = sId;
        this.Name = sName;
        this.School = "noakhali govt college";
    }
}
const student1 = new student(33,"Shamim");
const student2 = new student (23, "sayma");
console.log(student1, student2);