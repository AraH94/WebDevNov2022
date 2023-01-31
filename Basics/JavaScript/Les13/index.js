// 1. Sum of these numbers
// var number = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// DO NOT USE REDUCE METHOD

// var sum = 0;

// for (let x = 0; x < number.length; x++) {
// 		console.log(number[x])
// 		sum = sum += number[x]
// }
// console.log(sum)

// 2. Loop 5 to 55
// Specified console 10 - 20
// for (let x = 5; x <= 55; x++) {
// 	if (x >= 10 && x <= 20) {
// 		console.log(x)
// 	}
// }

// 3. Count how many male and female are in the data using for loop
let people = [{
	"first_name": "Nichole",
	"gender": "Female"
}, {
	"first_name": "Leelah",
	"gender": "Female"
}, {
	"first_name": "Gunar",
	"gender": "Male"
}, {
	"first_name": "Aylmer",
	"gender": "Male"
}, {
	"first_name": "Corabelle",
	"gender": "Female"
}, {
	"first_name": "Margot",
	"gender": "Female"
}, {
	"first_name": "Annamarie",
	"gender": "Female"
}, {
	"first_name": "Agata",
	"gender": "Female"
}, {
	"first_name": "Curran",
	"gender": "Male"
}, {
	"first_name": "Rhonda",
	"gender": "Female"
}, {
	"first_name": "Hilda",
	"gender": "Polygender"
}, {
	"first_name": "Ignacius",
	"gender": "Polygender"
}, {
	"first_name": "Fredrick",
	"gender": "Male"
}, {
	"first_name": "Kain",
	"gender": "Male"
}, {
	"first_name": "Ibrahim",
	"gender": "Male"
}, {
	"first_name": "Chelsie",
	"gender": "Genderqueer"
}, {
	"first_name": "Hannah",
	"gender": "Female"
}, {
	"first_name": "Evy",
	"gender": "Female"
}, {
	"first_name": "Janenna",
	"gender": "Female"
}, {
	"first_name": "Loise",
	"gender": "Female"
}]
// Option 1
// let female = 0;
// let male = 0;

// for (let i = 0; i < people.length; i++) {
// console.log(people[i].gender);
// if (people[i].gender === 'Female') {
// 	female++
// } if (people[i].gender === 'Male') {
// 	male++
// }
// 	people[i].gender === 'Male' ? male++ : male; // ternary operator | ? = true scope (if) : = false scope (else)
// 	people[i].gender === 'Female' ? female++ : female; // ternary operator
// }
// console.log(`Female: ${female}\nMale: ${male}`)

// Option 2
// let female = 0;
// let male = 0;

// for (let i = 0; i < people.length; i++) {
// 	if (people[i].gender === 'Female') {
// 		female++
// 	} else {
// 		male++
// 	}
// }
// console.log(`Female: ${female}\nMale: ${male}`)

// Niet volledig, zelf geprobeerd
// let gender = []
// for (let i = 0; i < people.length; i++) {
// 			console.log(people[i].gender)
// 	if (people[i].gender === 'Male') {
// 		gender.push(i)
// 	}
// 	{
// 		if (people[i].gender === 'Female') {
// 			console.log(people[i].gender)
// 			gender.push(i)
// 		}
// 	}
// }
// console.log(gender);

// 4. How many true for JimCarrey, NoMoneyNoHoney, Geek's party

const VoteMachine = [{
	party_name: "JimCarrey's FAncy Party",
	vote: true
}, {
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}, {
	party_name: "Geeks' party",
	vote: true
}, {
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}, {
	party_name: "JimCarrey's FAncy Party",
	vote: true
},
{
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}, {
	party_name: "Geeks' party",
	vote: true
}, {
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}, {
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}, {
	party_name: "Geeks' party",
	vote: true
},
{
	party_name: "JimCarrey's FAncy Party",
	vote: true
},
{
	party_name: "Geeks' party",
	vote: true
}, {
	party_name: 'NoMoneyNoHoneyParty',
	vote: false
}]

let result={
    NoMoneyNoHoneyParty:0,
    JimCarreysFancyParty:0,
    GeeksParty:0
}

let partyNames = VoteMachine.map(function(party){
    return party.party_name
}) // collect all party_names 

partyNames = new Set([...partyNames]) // unique data

partyNames = Array.from(partyNames) // convert object data to array list

console.log(partyNames);

for(let party=0;party<VoteMachine.length;party++){
    // console.log(VoteMachine[party])
    if(VoteMachine[party].party_name ===partyNames[0]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.JimCarreysFancyParty++
        }
    }

    if(VoteMachine[party].party_name ===partyNames[1]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.NoMoneyNoHoneyParty++
        }
    }

    if(VoteMachine[party].party_name ===partyNames[2]){
        if(VoteMachine[party].vote){
            // increase number for jimcarrey's party
            result.GeeksParty++
        }
    }
}

console.log(result)

// Option 2
// let vote1 = 0;
// let vote2 = 0;
// let vote3 = 0;

// for (let i = 0; i < VoteMachine.length; i++) {
// 	console.log(VoteMachine[i].vote);
// 	if (VoteMachine[i].party_name === "JimCarrey's FAncy Party") {
// 		if (VoteMachine[i].vote === true) {
// 			vote1++;
// 		}
// 	}
// 	if (VoteMachine[i].party_name === "NoMoneyNoHoneyParty") {
// 		if (VoteMachine[i].vote === true) {
// 			vote2++;
// 		}
// 	} if (VoteMachine[i].party_name === "Geeks' party") {
// 		if (VoteMachine[i].vote === true) {
// 			vote3++;
// 		}
// 	}
// }
// console.log(`JimCarrey's FAncy Party: ${vote1}\nNoMoneyNoHoneyParty: ${vote2}\nGeeks' party: ${vote3}`)