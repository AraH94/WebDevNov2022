class Person{
    constructor(fullname){
        this.fullname = fullname
    }

    display(){
        console.log(`Name: ${this.fullname}`)
    }
}

// Begin of Student class
class Student extends Person{
    constructor(fullname,classname){
        super(fullname)
        this.classname = classname
    }

    display(){
        
    }
}
// End of Student class

// class Teacher{
//     constructor(language){
//         this.language = language
//     }
// }
