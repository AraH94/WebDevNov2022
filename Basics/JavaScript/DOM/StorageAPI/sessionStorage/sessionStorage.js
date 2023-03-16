// sessionStorage
// localStorage
console.log(sessionStorage);
console.log(typeof sessionStorage);

// methods

// set (create new storage data)
sessionStorage.setItem('secret_key', 'Hello world');
sessionStorage.setItem('secret_key', 123456);
sessionStorage.setItem('secret_key', true);
sessionStorage.setItem('secret_key', undefined);
sessionStorage.setItem('coffee', 'Hello world');
sessionStorage.setItem('coffee', [1, 2, 3, 4, 5]); // will be saved
sessionStorage.setItem('coffee1', '[1, 2, 3, 4, 5]');
sessionStorage.setItem('user1', { id: 1 });

let myJSONData = [{"id": 1, "username": "admin"}]
sessionStorage.setItem('user1', JSON.stringify(myJSONData));
// sessionStorage.setItem('user1', '[{ "id": 1 }]');

// getItem (read sessionStorage data)
let result;
result = sessionStorage.getItem('secret_key');
result = sessionStorage.getItem('coffee');
result = sessionStorage.getItem('user1')

// removeItem()
result = sessionStorage.removeItem('user1')

// Cookies
document.cookie = `expires=${new Date().toUTCString()}`;
document.cookie = `isLoggedIn=true`
document.cookie = "isAdmin="+true
var myname = "Jack"
document.cookie = `username=${myname}`
// end of cookies


console.log(result, typeof result, JSON.parse(result)) 
// JSON.parse is to convert from string to JSON 
// JSON.stringify is converting JSON to string
