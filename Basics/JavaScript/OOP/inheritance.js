// class Parent{

//     getMessage(){
//         console.log('This is method from Parent class')
//     }
// }

// class Child extends Parent{

//     ChildMethod(){
//         super.getMessage()
//     }
// }

// let app = new Child()
// app.ChildMethod()



class Father{
    constructor(money_amount){
        this.heritage = money_amount
    }

    GetMessage(){
        console.log(`To ${this.childName} I bequeath this $${this.heritage}`)
    }
}


class Child extends Father{
    constructor(heritage,childName){
        super(heritage)
        this.childName = childName
    }
}

let getInherits = new Child('1000','John')
getInherits.GetMessage()