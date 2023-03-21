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
	let response = await fetch('https://dummyjson.com/products')
	let data = response.json()
	return data
};

// const fetchProducts = async () => {
// 	try {
// 		let response = await fetch('https://dummyjson.com/products')
// 	let data = response.json()
// 	return data
// 	} catch (error) {
// 		console.error('sorry');
// 	}	
// 	return data
// };

// 3. Create a function to display products in the DOM
const displayProducts = (products) => {
	products.forEach(product => {
		console.log(product);
		let parser = new DOMParser();
		let showProducts = parser.parseFromString(`
		<div class="col">
				<div class="card h-100 bg-secondary text-light">
					<img src="${product.thumbnail}" class="product-image"
						alt="Product Image">
					<div class="card-body">
						<h5 class="card-title">"${product.title} - € ${product.price}"</h5> 
						<p class="card-text">"${product.description}"</p>
						<a href="#" class="btn btn-primary buynow" data-id ="${product.id}">Buy now</a>
					</div>
				</div>
			</div>`, 'text/html')

		ListOfProducts.appendChild(showProducts.body.firstChild); // appendChild will show your product in html
	})

	// OR option 2

	// const displayProducts = (products) => {
	// 	products.forEach(product => {
	// 		console.log(product);
	// 		let showProducts = document.createRange().createContextualFragment
	// 			(` <div class="col">
	// 				<div class="card h-100 bg-secondary text-light">
	// 					<img src="${product.thumbnail}" class="product-image"
	// 						alt="Product Image">
	// 					<div class="card-body">
	// 						<h5 class="card-title">"${product.title}"</h5>
	// 						<p class="card-text">"${product.description}"</p>
	// 						<a href="#" class="btn btn-primary buynow">Buy now</a>
	// 					</div>
	// 				</div>
	// 			</div>`, 'text/html')

	// 		ListOfProducts.appendChild(showProducts); // appendChild will show your product in html
	// 	})
};

// 4. Create DOMContentLoaded event listener to display products on home page
document.addEventListener("DOMContentLoaded", async () => { // DOMContentLoaded = event we create to verify that the content is loaded and then run it
	let allProducts = await fetchProducts(); // await = stand by for the data, works only with async function
	console.log(allProducts);
	displayProducts(allProducts.products);
});

// 5. Create a function to fetch products from the API and display them in the DOM for search page
const fetchSearchProducts = async (searchTerm) => {
	let response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
	let data = response.json()
	return data
}

// 6. Create keyup event listener to search products
searchinput.addEventListener("keydown", async (e) => {
	while (ListOfProducts.firstChild) {
		ListOfProducts.removeChild(ListOfProducts.firstChild)
	}
	// when search input is not empty
	console.log('Search product');
	console.log(e.key);
	console.log(e.target.value)

	// when search input is not empty
	let allProducts = await fetchSearchProducts(e.target.value);
	console.log(allProducts);
	displayProducts(allProducts.products);
	console.log(e.target.value == "");

	// When search is empty
	if (e.target.value == "") {
		let previousAllProducts = await fetchProducts()
		displayProducts(previousAllProducts)
	}
});


// 7. Create a function to fetch single product information 
const fetchSingleProduct = async (id) => {
	let res = await fetch(`https://dummyjson.com/products/${id}`)
	let data = res.json();
	return data;
}

// 8. Create a function to add products to the cart (innerHTML allowed)
const addToCart = (product) => {
	// {title: 'product1'}

	/* 	<!-- <tr>
		  <td>Product 1</td>
		  <td>$20.00</td>
	   </tr> -->
	   */

	let tr = document.createElement('tr')
	let td_productTitle = document.createElement('td')
	let td_productPrice = document.createElement('td')
	td_productTitle.appendChild(document.createTextNode(product.title));
	td_productPrice.appendChild(document.createTextNode(product.price));
	tr.appendChild(td_productTitle);
	tr.appendChild(td_productPrice);

	CartSummary.appendChild(tr);
};

// 9. Create click event listener to add products to the cart
ListOfProducts.addEventListener("click", async (e) => {
	console.log(e.target.classList.contains('buynow'));

	if (e.target.classList.contains('buynow')) {
		let productId = e.target.getAttribute('data-id')
		console.log("Hello world", productId);
		let single_product = await fetchSingleProduct(productId);
		console.log(single_product);
		// Total price of product you are going to buy
		Total += single_product.price;
		addToCart(single_product);
		TotalPrice.innerText = `EUR ${Total}`
		console.log(Total);
	}
});