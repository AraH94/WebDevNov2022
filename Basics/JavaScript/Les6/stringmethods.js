// List of String Methods

/*

1. charAt()
2. charCodeAt()
3. concat()
4. endsWith()
5. fromCharCode()
6. includes()
7. indexOf()
8. lastIndexOf()
9. localeCompare()
10. match()
11. repeat()
12. replace()
13. search()
14. slice()
15. split()
16. startsWith()
17. substr()
18. substring()
19. toLocaleLowerCase()
20. toLocaleUpperCase()
21. toLowerCase()
22. toString()
23. toUpperCase()
24. trim()
25. valueOf()

*/

var FullText = "Veniam et nulla veniam microsoft 001 002 excepteur aute duis in consequat quis microsoft fugiat eu pariatur est enim."
var result;

// 1. charAt(position<number>) extract char from a string
result = FullText.charAt(0);
result = FullText.charAt(6);
result = FullText.charAt(10);


// 2. charCodeAt(position<number>) (ascii tabel)

result = FullText.charCodeAt(16);
result = FullText.charCodeAt(5);


// 3. concat(Word<string>)
var txt1 = "Hello ";
result = txt1.concat("World").concat(" new word").concat(" an other word");


// 4. endsWith(<string>) (returns true or false)
result = FullText.endsWith("enim."); // true
result = FullText.endsWith("hello."); // false

// 5. startsWith(searchString<string>) (returns true or false)
result = FullText.startsWith("hello"); // false
result = FullText.startsWith("Veniam"); // true

// 6. fromCharCode(utf16<number>)
result = String.fromCharCode(86);
result = String.fromCharCode(101);
result = FullText.charCodeAt(5); // extracted char as utf16
result = String.fromCharCode(109); // converted utf16 char to utf8

// 7. includes(SearchWord<string>) (returns true or false)
result = FullText.includes("nulla"); // true
result = FullText.includes("microsoft"); // false

// 8. indexOf(Word<string>) (position of the word or letter)
result = FullText.indexOf("microsoft"); // first match
result = FullText.indexOf("intec"); // first match
result = FullText.lastIndexOf("microsoft"); // last match


// 9. substr/substring(startPosition<number>, endPosition<number>)
result = FullText.substr(0, 10);
result = FullText.substring(10, 13);

// 10. toLowerCase() // A => a
result = "HELLO WORLD".toLowerCase();

// 11. toUpperCase() // a => A
result = "javascript".toUpperCase();

// 12. match()
result = FullText.match("microsoft");
result = FullText.match("intec");
result = FullText.match(/[A-Z]+/g);
result = FullText.match(/[a-zA-Z]+/g);
result = FullText.match(/[a-zA-Z0-9]+/g);
result = FullText.match(/microsoft/g);

console.log(result, typeof result)

// 13. text.repeat(<number>)
result = FullText.repeat(3).repeat(5);
result = "#".repeat(100);

// 14. replace()
result = result.replace("#", "$");

// 15. replaceAll()
result = result.replaceAll("#", "$");
result = "wwwwwwwwmicrosoftwwwww".replace(/[a-z]/g, "lol");

var user_email = "jimmy@microsoft.com johnnt@gmail.com admin@yandex.com";
var myEmailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;

result = [...user_email.matchAll(myEmailRegex)];

function FindAllEmails(stringData) {
	return stringData.match(myEmailRegex)
}

var myStringData = "abc@intec.com admin@gmail.com"

result = FindAllEmails(user_email);

var FindEmails = "bilal@microsoft.com mohammed@gmail.com ara@abc.com prince@brussel.be"

result = FindEmails.match(myEmailRegex); // add [0] returns first email

result = FindEmails.match(/[a-zA-Z]+@(gmail.com)/g); //only gmail.com emails

// 16. split()
result = "bilal,ahmed,ara,mohammed,nina,zana,prince,axel"
result = result.split(' ')

// 17. trim()
result = "          hello world         "
result = result.trim();


// 18. search()
result = "Microsoft Products".search(/Products/g); // position of the word I search for
result = "Microsoft Products Products".search("Products"); // position index

// 19. toString()
result = ['a', 'b', 'c', 'd', 'e'].toString()

console.log(result, typeof result)


// string methods exercise 

var binaryTree = `
01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100 01101010 01100001 01110110 01100001 01110011 01100011 01110010 01101001 01110000 01110100 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100
`

// find length of ones and zeros
var zeros = binaryTree.match(/0/g).length;
var ones = binaryTree.match(/1/g).length;

console.log(`ones: ${ones} zeros: ${zeros}`)
var sum = ones + zeros;
console.log(sum);
