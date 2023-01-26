// Random Numbers Random()
// New Math()

let app = Math.PI;
app = Math.max(44, 55, 66, 77, 88, 99);
app = [1,2,3,...[4,5,6,...[7,8,9,...[10,11,12]]]]; // spread operator

app = Math.min(33, 44, 55, 66, 77, 88, 99);
app = Math.min(-1, -10, 10, 20, -20);
console.log(app);

app = Math.floor(1000.4);
app = Math.round(1000.8); //1001
app = Math.abs(-20); // always positive

app = Math.random() // 0 - 0.9 
app = Math.round(Math.random()*9 +1) // 1-10
app = Math.round(Math.random()*3) // 0-3

const students = ['mohammed','bilal','arhisa','nina','zana']; // 0-4
const RandomName = Math.round(Math.random()*4)
console.log(students[RandomName])

const diceRoll={
    dice1:[1,2,3,4,5,6],
    dice2:[1,2,3,4,5,6]
}

const dice1Random = Math.round(Math.random()*5) // 0-5
const dice2Random = Math.round(Math.random()*5) // 0-5
console.log(`Dice1: ${diceRoll.dice1[dice1Random]}\nDice2: ${diceRoll.dice2[dice2Random]}`)
// console.log(app)