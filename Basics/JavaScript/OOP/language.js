// Human communication  - English
// Machine communication - Python

class Language{
    // parent-father class template
    constructor(name){
        this.name=name
    }

    display(){
        console.log(`Language is ${this.name}`)
    }
}

class HumanLanguage extends Language{
    // Child class template
}

class MachineLanguage extends Language{
    // Child class template
    constructor(name,roadmap){
        super(name)
        this.roadmap = roadmap
    }

    display(){
        console.log(`Language is ${this.name} - Roadmap is ${this.roadmap}`)
    }
}

let javascript = new MachineLanguage('Javascript','Frontend');
javascript.display();

let english = new HumanLanguage('English');
english.display();

let python = new MachineLanguage('Python','Backend');
python.display();