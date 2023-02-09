// Brick Calculator - How Many Bricks Do You Need?
// Hoeveel bakstenen heeft u nodig?
// VERSION 1
const BrickTypes = {
	standardhousebrick: [0.265, 0.065], // meter
	standardblock: [0.44, 0.215], // meter
}

// function WallArea(width, height) {
//     return width * height // return area of a wall
// }

// function BrickSize(width, height) {
//     return width * height
// }

// console.log(WallArea(10, 10));
// console.log(BrickSize(BrickTypes.standardblock[0], BrickTypes.standardblock[1]))
// console.log(WallArea(10, 10) / BrickSize(BrickTypes.standardhousebrick[0], BrickTypes.standardhousebrick[1]))

/*
wallarrea = width * height
bricksize = width * height
WallArea / Bricksize = Bricksrequired
*/

// 1. Create a function that takes the width, height returns the area of a wall.
// 1. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een muur.
// TRY
// function WallArea(width, height) { // return area of a wall
// 	return width * height
// }
// console.log(WallArea(BrickTypes.standardhousebrick[0], BrickTypes.standardhousebrick[1]))


// 2. Create a function that takes the width, height returns the area of a single brick.
// 2. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een enkele baksteen.
// TRY
// function BrickSize(width, height) {
// 	return width * height

// }
// console.log(BrickSize(BrickTypes.standardblock[0], BrickTypes.standardblock[1]))


// 3. Create a function that takes wall area and brick area depending on the brick type and returns the number of bricks required.
// 3. Maak een functie die de oppervlakte van de muur en de oppervlakte van de baksteen afhankelijk van het baksteen type teruggeeft en het aantal benodigde bakstenen.
// ANSWER
// function CalculateNumberOfBricks(WallArea, BrickType) {
//     let result=""
//     switch (BrickType) {
//         case 'standardhousebrick': // NumberofBricks = 100 / 0.096
//             result = `The number of bricks you need is ${WallArea/BrickSize(BrickTypes.standardhousebrick[0],BrickTypes.standardhousebrick[1])}`
//             console.log(result)
//             break;
//         case 'standardblock':
//             result = `The number of bricks you need is ${WallArea/BrickSize(BrickTypes.standardblock[0],BrickTypes.standardblock[1])}`
//             console.log(result)
//             break;
//         default:
//             console.log('Please enter brick type');
//     }
// }
// let getAreaofWall  = WallArea(10,10)
// CalculateNumberOfBricks(WallArea(10,10),'standardhousebrick')

// VERSION 2
// const obj = {
// 	property_name1: '11',
// 	property_name2: 23232,
// 	property_name3: true,
// 	property_name4: [1, 3, 4, 5],
// 	property_name5: undefined,
// 	property_name6: { id: 1, name: 'john' },
// 	property_name7: [{ id: 1, name: 'michael' }],
// 	property_name8: null,
// 	property_name9: function () { console.log('this is anonymous function') }
// }

// let getAreaofWall  = WallArea(10,10)

//CalculateNumberOfBricks(WallArea(10,10),'standardhousebrick')
// console.log(obj)

// obj.property_name9()

/*
wallarea = width * height
bricksize = width * height
WallArea / BrickSize = BricksRequired
*/
// const BrickCalculator = {
// 	WallArea: function (width, height) {
// 		return width * height
// 	},
// 	NumberOfBricks: function (wallArea, brickType) {
// 		if (brickType === 'standardhousebrick') {
// 			let brickArea = BrickTypes.standardhousebrick[0] * BrickTypes.standardhousebrick[1]
// 			console.log(`The Number of bricks are ${wallArea / brickArea}`)
// 		}
// 		if (brickType === 'standardblock') {
// 			let brickArea = BrickTypes.standardblock[0] * BrickTypes.standardblock[1]
// 			console.log(`The Number of bricks are ${wallArea / brickArea}`)
// 		}

// 		if (brickType !== 'standardblock' && brickType !== 'standardhousebrick') {
// 			console.log('Brick type is incorrect or you havent give any type')
// 		}
// 	}
// }
// let getWallArea = BrickCalculator.WallArea(10, 10);
// BrickCalculator.NumberOfBricks(getWallArea, 'standardhousebrick')

// VERSION 3
function BrickCalculator(wallWidth, wallHeight, brickWidth, brickHeight) {
	let getWallArea = wallWidth * wallHeight; // vraag 1 
	let brickSize = brickWidth * brickHeight; // vraag 2
	let numberOfBricks = getWallArea / brickSize; // vraag 3
	console.log(`The number of bricks are ${Math.round(numberOfBricks)}`);
}
BrickCalculator(40, 10, BrickTypes.standardhousebrick[0], BrickTypes.standardhousebrick[1])

