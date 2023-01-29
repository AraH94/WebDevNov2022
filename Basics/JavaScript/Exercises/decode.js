// Decode flag to get the message
var flag1 = [
	'=', 'E', 'S', 'Z', 'z', 'l', '2', 'Y',
	'y', 'V', 'G', 'e', 'l', 'B', 'S', 'Z',
	'o', 'R', 'H', 'I', 'k', 'V', 'G', 'd',
	'l', 'x', 'G', 'c'
]

var flag2 = ['t', '9', '2', 'Y',
	'g', 'U', 'm', 'd', 'n', 'U', '3', 'b',
	'Z', 'B', 'S', 'I', 'l', '5', '2', 'b',
	'k', 'B', 'C', 'b', 's', 'V', '2', 'V']

// 1. Merge the two arrays into one array
let flags = flag1.concat(flag2)

console.log(flags)

// 2. Reverse the array
flags.reverse();
console.log(flags)

// 3. Convert the array to a string
let string = flags.toString();
let arr = string.split(' ')
console.log(arr)

// 4. Print the decoded message  (Possible algorithms: Base64 Encoded String)
const base64Tool = {
	Encrypt: function (str) {
		let decoded = btoa(str);
		console.log(decoded)
	},
	Decrypt: function (encoded) {
		let decoded = atob(encoded);
		console.log(decoded)
	}
}
base64Tool.Encrypt("Well done! You've completed the exercise!")
base64Tool.Decrypt("V,2,V,s,b,C,B,k,b,2,5,l,I,S,B,Z,b,3,U,n,d,m,U,g,Y,2,9,t,c,G,x,l,d,G,V,k,I,H,R,o,Z,S,B,l,e,G,V,y,Y,2,l,z,Z,S,E,=")
