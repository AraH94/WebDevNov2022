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

students.forEach(function(student){
     let getSumOfScoresofStudent = student.scores.reduce(function(acc,val){
		return acc+val
	 })
	 console.log(getSumOfScoresofStudent/3)
	 // console.log(`studentname ${student.name} and score is ${getSumOfScoresofStudent/3}`) => shows studentname and score
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
