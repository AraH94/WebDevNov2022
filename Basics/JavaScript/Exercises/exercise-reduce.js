const students = [
	{
		"_id": "63c993feb6f5dc691c2c0ac3",
		"name": "Fannie Buckley",
		"scores": [
			44,
			72,
			37
		]
	},
	{
		"_id": "63c993fe0b604587275fbfdf",
		"name": "Sherry Petty",
		"scores": [
			50,
			85,
			61
		]
	},
	{
		"_id": "63c993fef0a0425682c58b2c",
		"name": "Bray Lancaster",
		"scores": [
			37,
			74,
			56
		]
	},
	{
		"_id": "63c993fe0115dd572cb63892",
		"name": "Hubbard Munoz",
		"scores": [
			99,
			40,
			57
		]
	},
	{
		"_id": "63c993fe9f8ad8038fc76416",
		"name": "Copeland Ford",
		"scores": [
			66,
			77,
			53
		]
	},
	{
		"_id": "63c993fef4067267e74d8231",
		"name": "Padilla Bolton",
		"scores": [
			65,
			98,
			39
		]
	},
	{
		"_id": "63c993fe187dd671983e006d",
		"name": "Mcknight Odonnell",
		"scores": [
			97,
			92,
			40
		]
	},
	{
		"_id": "63c993fe2ecf8e3dc2bd5393",
		"name": "Bradley Delacruz",
		"scores": [
			57,
			81,
			87
		]
	},
	{
		"_id": "63c993fefa0735736af48d92",
		"name": "Velazquez Hensley",
		"scores": [
			67,
			45,
			52
		]
	}
]

// let sum = 0;
// students.forEach(students.scores)
// function averagescore(scores) {
// 	sum = sum + scores;
// }

// console.log(sum)

// let averagescore = students.reduce(function(scores){
// 	console.log(scores, "scores")
// 	return scores
// })
// console.log(averagescore)

// vql+val+val/3

// 1. Calculate the average score of sum of all scores for each student [reduce ]

students.forEach(function (student) {
	let getSumOfScoresofStudent = student.scores.reduce(function (acc, val) {
		return acc + val
	})
	console.log(getSumOfScoresofStudent / 3)
	// console.log(`studentname ${student.name} and score is ${getSumOfScoresofStudent/3}`) => shows studentname and score
})

// optie 2
students.forEach(function (item) {
	console.log(item.scores)
})

// const obj = {
// 	"_id": "63c993fef0a0425682c58b2c",
// 	"name": "Bray Lancaster",
// 	"scores": [
// 		37,
// 		74,
// 		56
// 	]
// }

// 2. Hoeveel true en false heeft elke partij?

const election = [
	{
		person_name: "John",
		politic_party1: true,
		politic_party2: false,
		politic_party3: false
	},
	{
		person_name: "Michael",
		politic_party1: false,
		politic_party2: false,
		politic_party3: true
	},
	{
		person_name: "Jimmy",
		politic_party1: false,
		politic_party2: true,
		politic_party3: false
	},
	{
		person_name: "Michel",
		politic_party1: true,
		politic_party2: false,
		politic_party3: false
	},
	{
		person_name: "Gabriel",
		politic_party1: false,
		politic_party2: false,
		politic_party3: true
	},
	{
		person_name: "Alberto",
		politic_party1: false,
		politic_party2: true,
		politic_party3: false
	}
]

/*
Politic_party1:
Politic_party2:
Politic_party3:  
*/

election.forEach(function (item) {
	// console.log(item.politic_party1, "Politic Party 1")
	// console.log(item.politic_party2, "Politic Party 2")
	// console.log(item.politic_party3, "Politic Party 3")
	if (item.politic_party1) {
		// de code wordt hier geëxecuteerd als de value true is
		console.log(`${item.person_name} voted for politic party 1`)
	}
	if (item.politic_party2) {
		// de code wordt hier geëxecuteerd als de value true is
		console.log(`${item.person_name} voted for politic party 2`)
	}
	if (item.politic_party3) {
		// de code wordt hier geëxecuteerd als de value true is
		console.log(`${item.person_name} voted for politic party 3`)
	}
})

let party1=0, party2=0, party3 = 0;

election.forEach(function (item) {
    // console.log(item.politic_party1,"politic_party1")
    // console.log(item.politic_party2,"politic_party2")
    // console.log(item.politic_party3,"politic_party3")
    if (item.politic_party1) {
        // wordt de code executed hier > als value true is
       // console.log(`${item.person_name} voted for politic_part1`)
        party1++
    }

    if (item.politic_party2) {
        // wordt de code executed hier > als value true is
      //  console.log(`${item.person_name} voted for politic_part1`)
        party2++
    }

    if (item.politic_party3) {
        // wordt de code executed hier > als value true is
      //  console.log(`${item.person_name} voted for politic_part1`)
        party3++
    }
})

const Result = [{
    name: "Party1",
    total_votes: party1
},
{
    name: "Party2",
    total_votes: party2
},
{
    name: "Party3",
    total_votes: party3
}]


// let result = Math.max(4,2,1)
// console.log(result
let win = Math.max(...Result.map(function(party){
    return party.total_votes
}))

let getPartyName = Result.filter(function(party){
    return party.total_votes == win
})

// console.log(getPartyName);
// console.log(`The Winner is ${getPartyName[0].name} and total votes are: ${getPartyName[0].total_votes}`)


const names = [{name:"jack"},{name:"michael"},{name:"gabriel"}]
const SearchName = "michael"
const findNameByProperty = names.filter(function(obj){
    return obj.name == SearchName
})

console.log(findNameByProperty);