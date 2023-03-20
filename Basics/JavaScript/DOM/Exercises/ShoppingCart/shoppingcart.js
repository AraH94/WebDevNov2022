// API documentation: https://dummyjson.com/docs/products

// 1. Find elements
const searchinput = document.querySelector(".searchinput");
const searchbutton = document.querySelector(".searchbutton");
const ListOfProducts = document.querySelector(".products");
const CartSummary = document.querySelector(".cart-summary");
const TotalPrice = document.querySelector(".total_price");
let Total = 0;

// 2. Create a function to fetch products from the API and display them in the DOM for home page 
const fetchProducts = async () => {
	let resposnse = await fetch('https://dummyjson.com/products')
	let data = resposnse.json()
	return data
};

// 3. Create a function to display products in the DOM
const displayProducts = (products) => {


};

// 4. Create DOMContentLoaded event listener to display products on home page
document.addEventListener("DOMContentLoaded", async () => { // DOMContentLoaded = event we create to verify that the content is loaded and then run it
	let allProducts = await fetchProducts(); // await = stand by for the data, works only with async function
});

// 5. Create a function to fetch products from the API and display them in the DOM for search page
const fetchSearchProducts = async (searchTerm) => {

}

// 6. Create keyup event listener to search products
searchinput.addEventListener("keydown", async (e) => {


});

// 7. Create a function to fetch single product information 
const fetchSingleProduct = async (id) => {

};

// 8. Create a function to add products to the cart (innerHTML allowed)
const addToCart = (product) => {

};

// 9. Create click event listener to add products to the cart
ListOfProducts.addEventListener("click", async (e) => {

});